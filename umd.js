(function(A,G){if(typeof define=='function'&&define.amd)define([],G);else if(typeof module=='object'&&module.exports)module.exports=G();else A.domtagger=G()}(typeof self!='undefined'?self:this,function(){
/*! (c) Andrea Giammarchi - ISC */var domtagger=function(m){"use strict";var t={};try{t.WeakMap=WeakMap}catch(e){t.WeakMap=function(t,e){var n=e.defineProperty,r=e.hasOwnProperty,a=i.prototype;return a.delete=function(e){return this.has(e)&&delete e[this._]},a.get=function(e){return this.has(e)?e[this._]:void 0},a.has=function(e){return r.call(e,this._)},a.set=function(e,t){return n(e,this._,{configurable:!0,value:t}),this},i;function i(e){n(this,"_",{value:"_@ungap/weakmap"+t++}),e&&e.forEach(o,this)}function o(e){this.set(e[0],e[1])}}(Math.random(),Object)}var n,i,o,r,e=t.WeakMap,a=(n=m,i="fragment",r="content"in u(o="template")?function(e){var t=u(o);return t.innerHTML=e,t.content}:function(e){var t=u(i),n=u(o),r=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var a=RegExp.$1;n.innerHTML="<table>"+e+"</table>",r=n.querySelectorAll(a)}else n.innerHTML=e,r=n.childNodes;return c(t,r),t},function(e,t){return("svg"===t?function(e){var t=u(i),n=u("div");return n.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",c(t,n.firstChild.childNodes),t}:r)(e)});function c(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function u(e){return e===i?n.createDocumentFragment():n.createElementNS("http://www.w3.org/1999/xhtml",e)}var s,l,h,f,p,d,v,g,w,x,b=(l="appendChild",h="cloneNode",f="createTextNode",d=(p="importNode")in(s=m),(v=s.createDocumentFragment())[l](s[f]("g")),v[l](s[f]("")),(d?s[p](v,!0):v[h](!0)).childNodes.length<2?function e(t,n){for(var r=t[h](),a=t.childNodes||[],i=a.length,o=0;n&&o<i;o++)r[l](e(a[o],n));return r}:d?s[p]:function(e,t){return e[h](!!t)}),y="".trim||function(){return String(this).replace(/^\s+|\s+/g,"")},N="-"+Math.random().toFixed(6)+"%";try{g=m.createElement("template"),x="tabindex",(w="content")in g&&(g.innerHTML="<p "+x+'="'+N+'"></p>',g[w].childNodes[0].getAttribute(x)==N)||(N="_dt: "+N.slice(1,-1)+";")}catch(e){}var M="\x3c!--"+N+"--\x3e",k=8,C=1,E=3,T=/^(?:style|textarea)$/i,_=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;var A=" \\f\\n\\r\\t",$="[^"+A+"\\/>\"'=]+",L="["+A+"]+"+$,S="<([A-Za-z]+[A-Za-z0-9:_-]*)((?:",H="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+$.replace("\\/","")+"))?)",R=new RegExp(S+L+H+"+)(["+A+"]*/?>)","g"),W=new RegExp(S+L+H+"*)(["+A+"]*/>)","g"),j=new RegExp("("+L+"\\s*=\\s*)(['\"]?)"+M+"\\2","gi");function F(e,t,n,r){return"<"+t+n.replace(j,O)+r}function O(e,t,n){return t+(n||'"')+N+(n||'"')}function z(e,t,n){return _.test(t)?e:"<"+t+n+"></"+t+">"}var D={};try{D.Map=Map}catch(e){D.Map=function(){var n=0,r=[],a=[];return{delete:function(e){var t=i(e);return t&&(r.splice(n,1),a.splice(n,1)),t},get:function(e){return i(e)?a[n]:void 0},has:function(e){return i(e)},set:function(e,t){return a[i(e)?n:r.push(e)-1]=t,this}};function i(e){return-1<(n=r.indexOf(e))}}}var P=D.Map;function Z(e,t,n,r){return{name:r,node:t,path:n,type:e}}function q(e,t){for(var n=t.length,r=0;r<n;)e=e.childNodes[t[r++]];return e}function B(e,t,n,r){for(var a=new P,i=e.attributes,o=[],c=o.slice.call(i,0),u=c.length,s=0;s<u;){var l=c[s++];if(l.value===N){var h=l.name;if(!a.has(h)){var f=n.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*['"]?$/,"$1"),p=i[f]||i[f.toLowerCase()];a.set(h,p),t.push(Z("attr",p,r,f))}o.push(l)}}for(u=o.length,s=0;s<u;){var d=o[s++];/^id$/i.test(d.name)?e.removeAttribute(d.name):e.removeAttributeNode(d)}var v=e.nodeName;if(/^script$/i.test(v)){var g=m.createElement(v);for(u=i.length,s=0;s<u;)g.setAttributeNode(i[s++].cloneNode(!0));g.textContent=e.textContent,e.parentNode.replaceChild(g,e)}}var G=new e,I=new e;function J(o,c){var e=function(e){return e.join(M).replace(W,z).replace(R,F)}(c),t=o.transform;t&&(e=t(e));var n=a(e,o.type);!function(e){var t=e.childNodes,n=t.length;for(;n--;){var r=t[n];1!==r.nodeType&&0===y.call(r.textContent).length&&e.removeChild(r)}}(n);var u=[];!function e(t,n,r,a){for(var i=t.childNodes,o=i.length,c=0;c<o;){var u=i[c];switch(u.nodeType){case C:var s=a.concat(c);B(u,n,r,s),e(u,n,r,s);break;case k:var l=u.textContent;if(l===N)r.shift(),n.push(T.test(t.nodeName)?Z("text",t,a):Z("any",u,a.concat(c)));else switch(l.slice(0,2)){case"/*":if("*/"!==l.slice(-2))break;case"👻":t.removeChild(u),c--,o--}break;case E:T.test(t.nodeName)&&y.call(u.textContent)===M&&(r.shift(),n.push(Z("text",t,a)))}c++}}(n,u,c.slice(0),[]);var r={content:n,updates:function(r){for(var a=[],i=u.length,e=0;e<i;){var t=u[e++],n=q(r,t.path);switch(t.type){case"any":a.push(o.any(n,[]));break;case"attr":a.push(o.attribute(n,t.name,t.node));break;case"text":a.push(o.text(n)),n.textContent=""}}return function(){var e=arguments.length,t=e-1,n=1;if(i!==t)throw new Error(t+" values instead of "+i+"\n"+c.join(", "));for(;n<e;)a[n-1](arguments[n++]);return r}}};return G.set(c,r),r}return function(n){return function(e){var t=I.get(n);return null!=t&&t.template===e||(t=function(e,t){var n=G.get(t)||J(e,t),r=b.call(m,n.content,!0),a={content:r,template:t,updates:n.updates(r)};return I.set(e,a),a}(n,e)),t.updates.apply(null,arguments),t.content}}}(document);
return domtagger}));
