/*! (c) Andrea Giammarchi - ISC */var domtagger=function(b){"use strict";var t={};try{t.WeakMap=WeakMap}catch(e){t.WeakMap=function(t,e){var n=e.defineProperty,r=e.hasOwnProperty,a=i.prototype;return a.delete=function(e){return this.has(e)&&delete e[this._]},a.get=function(e){return this.has(e)?e[this._]:void 0},a.has=function(e){return r.call(e,this._)},a.set=function(e,t){return n(e,this._,{configurable:!0,value:t}),this},i;function i(e){n(this,"_",{value:"_@ungap/weakmap"+t++}),e&&e.forEach(o,this)}function o(e){this.set(e[0],e[1])}}(Math.random(),Object)}var n,i,o,r,e=t.WeakMap,a=(n=b,i="fragment",r="content"in c(o="template")?function(e){var t=c(o);return t.innerHTML=e,t.content}:function(e){var t=c(i),n=c(o),r=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var a=RegExp.$1;n.innerHTML="<table>"+e+"</table>",r=n.querySelectorAll(a)}else n.innerHTML=e,r=n.childNodes;return s(t,r),t},function(e,t){return("svg"===t?function(e){var t=c(i),n=c("div");return n.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",s(t,n.firstChild.childNodes),t}:r)(e)});function s(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function c(e){return e===i?n.createDocumentFragment():n.createElementNS("http://www.w3.org/1999/xhtml",e)}var u,l,f,h,p,v,d,g,m,w,x=(l="appendChild",f="cloneNode",h="createTextNode",v=(p="importNode")in(u=b),(d=u.createDocumentFragment())[l](u[h]("g")),d[l](u[h]("")),(v?u[p](d,!0):d[f](!0)).childNodes.length<2?function e(t,n){for(var r=t[f](),a=t.childNodes||[],i=a.length,o=0;n&&o<i;o++)r[l](e(a[o],n));return r}:v?u[p]:function(e,t){return e[f](!!t)}),y="".trim||function(){return String(this).replace(/^\s+|\s+/g,"")},N="-"+Math.random().toFixed(6)+"%",M=!1;try{g=b.createElement("template"),w="tabindex",(m="content")in g&&(g.innerHTML="<p "+w+'="'+N+'"></p>',g[m].childNodes[0].getAttribute(w)==N)||(N="_dt: "+N.slice(1,-1)+";",M=!0)}catch(e){}var k="\x3c!--"+N+"--\x3e",C=8,E=1,S=3,T=/^(?:style|textarea)$/i,_=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;var $=" \\f\\n\\r\\t",A="[^"+$+"\\/>\"'=]+",L="["+$+"]+"+A,H="<([A-Za-z]+[A-Za-z0-9:._-]*)((?:",O="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+A.replace("\\/","")+"))?)",R=new RegExp(H+L+O+"+)(["+$+"]*/?>)","g"),j=new RegExp(H+L+O+"*)(["+$+"]*/>)","g"),W=new RegExp("("+L+"\\s*=\\s*)(['\"]?)"+k+"\\2","gi");function F(e,t,n,r){return"<"+t+n.replace(W,z)+r}function z(e,t,n){return t+(n||'"')+N+(n||'"')}function D(e,t,n){return _.test(t)?e:"<"+t+n+"></"+t+">"}var P={};try{P.Map=Map}catch(e){P.Map=function(){var n=0,a=[],i=[];return{delete:function(e){var t=r(e);return t&&(a.splice(n,1),i.splice(n,1)),t},forEach:function(n,r){a.forEach(function(e,t){n.call(r,i[t],e,this)},this)},get:function(e){return r(e)?i[n]:void 0},has:function(e){return r(e)},set:function(e,t){return i[r(e)?n:a.push(e)-1]=t,this}};function r(e){return-1<(n=a.indexOf(e))}}}var Z=P.Map,q=M?function(e,t){var n=t.join(" ");return t.slice.call(e,0).sort(function(e,t){return n.indexOf(e.name)<=n.indexOf(t.name)?-1:1})}:function(e,t){return t.slice.call(e,0)};function G(e,t){for(var n=t.length,r=0;r<n;)e=e.childNodes[t[r++]];return e}function V(e,t,n,r){for(var a=new Z,i=e.attributes,o=[],s=q(i,n),c=s.length,u=0;u<c;){var l,f=s[u++],h=f.value===N;if(h||1<(l=f.value.split(k)).length){var p=f.name;if(!a.has(p)){var v=n.shift().replace(h?/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*('|")?$/:new RegExp("^(?:|[\\S\\s]*?\\s)("+p+")\\s*=\\s*('|\")[\\S\\s]*","i"),"$1"),d=i[v]||i[v.toLowerCase()];if(a.set(p,d),h)t.push(B(d,r,v,null));else{for(var g=l.length-2;g--;)n.shift();t.push(B(d,r,v,l))}}o.push(f)}}for(var m=((u=0)<(c=o.length)&&M&&!("ownerSVGElement"in e));u<c;){var w=o[u++];m&&(w.value=""),e.removeAttribute(w.name)}var x=e.nodeName;if(/^script$/i.test(x)){var y=b.createElement(x);for(c=i.length,u=0;u<c;)y.setAttributeNode(i[u++].cloneNode(!0));y.textContent=e.textContent,e.parentNode.replaceChild(y,e)}}function B(e,t,n,r){return{type:"attr",node:e,path:t,name:n,sparse:r}}function I(e,t){return{type:"text",node:e,path:t}}var J=new e,K=new e;function Q(o,f){var e=(o.convert||function(e){return e.join(k).replace(j,D).replace(R,F)})(f),t=o.transform;t&&(e=t(e));var n=a(e,o.type);!function(e){var t=e.childNodes,n=t.length;for(;n--;){var r=t[n];1!==r.nodeType&&0===y.call(r.textContent).length&&e.removeChild(r)}}(n);var s=[];!function e(t,n,r,a){for(var i,o,s=t.childNodes,c=s.length,u=0;u<c;){var l=s[u];switch(l.nodeType){case E:var f=a.concat(u);V(l,n,r,f),e(l,n,r,f);break;case C:var h=l.textContent;if(h===N)r.shift(),n.push(T.test(t.nodeName)?I(t,a):(i=l,o=a.concat(u),{type:"any",node:i,path:o}));else switch(h.slice(0,2)){case"/*":if("*/"!==h.slice(-2))break;case"👻":t.removeChild(l),u--,c--}break;case S:T.test(t.nodeName)&&y.call(l.textContent)===k&&(r.shift(),n.push(I(t,a)))}u++}}(n,s,f.slice(0),[]);var r={content:n,updates:function(c){for(var u=[],l=s.length,e=0,t=0;e<l;){var n=s[e++],r=G(c,n.path);switch(n.type){case"any":u.push({fn:o.any(r,[]),sparse:!1});break;case"attr":var a=n.sparse,i=o.attribute(r,n.name,n.node);null===a?u.push({fn:i,sparse:!1}):(t+=a.length-2,u.push({fn:i,sparse:!0,values:a}));break;case"text":u.push({fn:o.text(r),sparse:!1}),r.textContent=""}}return l+=t,function(){var e=arguments.length;if(l!==e-1)throw new Error(e-1+" values instead of "+l+"\n"+f.join("${value}"));for(var t=1,n=1;t<e;){var r=u[t-n];if(r.sparse){var a=r.values,i=a[0],o=1,s=a.length;for(n+=s-2;o<s;)i+=arguments[t++]+a[o++];r.fn(i)}else r.fn(arguments[t++])}return c}}};return J.set(f,r),r}return function(n){return function(e){var t=K.get(n);return null!=t&&t.template===e||(t=function(e,t){var n=J.get(t)||Q(e,t),r=x.call(b,n.content,!0),a={content:r,template:t,updates:n.updates(r)};return K.set(e,a),a}(n,e)),t.updates.apply(null,arguments),t.content}}}(document);
