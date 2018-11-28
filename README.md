# domtagger

[![Build Status](https://travis-ci.com/WebReflection/domtagger.svg?branch=master)](https://travis-ci.com/WebReflection/domtagger) [![Coverage Status](https://coveralls.io/repos/github/WebReflection/domtagger/badge.svg?branch=master)](https://coveralls.io/github/WebReflection/domtagger?branch=master) ![WebReflection status](https://offline.report/status/webreflection.svg)

The [hyperHTML](https://github.com/WebReflection/hyperHTML#hyperhtml)'s template literal parser, used to handle all repeated updates per each attribute or node.

  * CDN as global utility, via https://unpkg.com/domtagger
  * ESM via `import domtagger from 'domtagger'`
  * CJS via `const domtagger = require('domtagger')`

[Live test](https://WebReflection.github.io/is-array/test/)

### Example

The tagger accepts a configuration object with mandatory methods that should return a function to invoke per each update.

Optionally, the object could have a `type` property, as either `html` or `svg` string, and a `transform` method that must return some string as content, after receiving the markup that is going to be used.

```js
var html = domtagger({

  // can be html or svg
  type: 'html',

  // how to handle attributes
  // Note: this callback is simplified for example purpose.
  attribute: function (node, name, attribute) {
    return function (value) {
      var type = typeof value;
      if (type === 'boolean' || type === 'function')
        node[name] = value;
      else if (value == null)
        node.removeAttribute(name);
      else
        node.setAttribute(name, value);
    }
  },

  // how to handle generic content
  // Note: this callback is simplified for example purpose.
  any: function (node, childNodes) {
    var parentNode = node.parentNode;
    return function (html) {
      parentNode.innerHTML = html;
    };
  },

  // how to handle cases where content
  // can only be some text
  text: function (node) {
    return function (textContent) {
      node.textContent = textContent;
    };
  },

  // OPTIONAL
  // a man in the middle for the output
  transform: function (html) {
    // it must return the eventually transformed html
    return html;
  }

});

document.body.appendChild(
  render({
    onclick: function (e) {
      alert(e.currentTarget.outerHTML);
    },
    html: 'Hello <strong>domtagger</strong>!',
    text: "isn't this cool?"
  })
);

// render example
function render(model) {
  return html`
    <div onclick=${model.onclick}>
      <div>${model.html}</div>
      <textarea>${model.text}</textarea>
    </div>
  `;
}
```