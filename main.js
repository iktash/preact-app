!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",o=e[3];if(!o)return t;if(n&&"function"==typeof btoa){var r=(_=o,l=btoa(unescape(encodeURIComponent(JSON.stringify(_)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(u," */")),i=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[t].concat(i).concat([r]).join("\n")}var _,l,u;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var _=this[i][0];null!=_&&(r[_]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);o&&r[u[0]]||(t&&(u[2]?u[2]="".concat(t," and ").concat(u[2]):u[2]=t),n.push(u))}},n}},function(e,n,t){var o=t(2),r=t(3);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);e.exports=r.locals||{}},function(e,n,t){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),_=[];function l(e){for(var n=-1,t=0;t<_.length;t++)if(_[t].identifier===e){n=t;break}return n}function u(e,n){for(var t={},o=[],r=0;r<e.length;r++){var i=e[r],u=n.base?i[0]+n.base:i[0],c=t[u]||0,a="".concat(u," ").concat(c);t[u]=c+1;var s=l(a),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==s?(_[s].references++,_[s].updater(f)):_.push({identifier:a,updater:v(f,n),references:1}),o.push(a)}return o}function c(e){var n=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=t.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){n.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(n);else{var _=i(e.insert||"head");if(!_)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");_.appendChild(n)}return n}var a,s=(a=[],function(e,n){return a[e]=n,a.filter(Boolean).join("\n")});function f(e,n,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=s(n,r);else{var i=document.createTextNode(r),_=e.childNodes;_[n]&&e.removeChild(_[n]),_.length?e.insertBefore(i,_[n]):e.appendChild(i)}}function p(e,n,t){var o=t.css,r=t.media,i=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var d=null,h=0;function v(e,n){var t,o,r;if(n.singleton){var i=h++;t=d||(d=c(n)),o=f.bind(null,t,i,!1),r=f.bind(null,t,i,!0)}else t=c(n),o=p.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=r());var t=u(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<t.length;o++){var r=l(t[o]);_[r].references--}for(var i=u(e,n),c=0;c<t.length;c++){var a=l(t[c]);0===_[a].references&&(_[a].updater(),_.splice(a,1))}t=i}}}},function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o)()(!1);r.push([e.i,"html{width:100vw;height:100vh}body{max-width:1000px;margin:auto;font-family:Arial,Helvetica,sans-serif}.caption{text-align:center}.caption .location-input{min-width:15rem;font-size:.8em;text-overflow:ellipsis}",""]),n.default=r},function(e,n,t){"use strict";t.r(n);var o,r,i,_,l,u={},c=[],a=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function s(e,n){for(var t in n)e[t]=n[t];return e}function f(e){var n=e.parentNode;n&&n.removeChild(e)}function p(e,n,t){var o,r=arguments,i={};for(o in n)"key"!==o&&"ref"!==o&&(i[o]=n[o]);if(arguments.length>3)for(t=[t],o=3;o<arguments.length;o++)t.push(r[o]);if(null!=t&&(i.children=t),"function"==typeof e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===i[o]&&(i[o]=e.defaultProps[o]);return d(e,i,n&&n.key,n&&n.ref,null)}function d(e,n,t,r,i){var _={type:e,props:n,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:i};return null==i&&(_.__v=_),o.vnode&&o.vnode(_),_}function h(e){return e.children}function v(e,n){this.props=e,this.context=n}function m(e,n){if(null==n)return e.__?m(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?m(e):null}function y(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return y(e)}}function g(e){(!e.__d&&(e.__d=!0)&&r.push(e)&&!b.__r++||_!==o.debounceRendering)&&((_=o.debounceRendering)||i)(b)}function b(){for(var e;b.__r=r.length;)e=r.sort((function(e,n){return e.__v.__b-n.__v.__b})),r=[],e.some((function(e){var n,t,o,r,i,_,l;e.__d&&(_=(i=(n=e).__v).__e,(l=n.__P)&&(t=[],(o=s({},i)).__v=o,r=H(l,i,o,n.__n,void 0!==l.ownerSVGElement,null,t,null==_?m(i):_),T(t,i),r!=_&&y(i)))}))}function k(e,n,t,o,r,i,_,l,a,s){var p,v,y,g,b,k,x,S=o&&o.__k||c,C=S.length;for(a==u&&(a=null!=_?_[0]:C?m(o,0):null),t.__k=[],p=0;p<n.length;p++)if(null!=(g=t.__k[p]=null==(g=n[p])||"boolean"==typeof g?null:"string"==typeof g||"number"==typeof g?d(null,g,null,null,g):Array.isArray(g)?d(h,{children:g},null,null,null):null!=g.__e||null!=g.__c?d(g.type,g.props,g.key,null,g.__v):g)){if(g.__=t,g.__b=t.__b+1,null===(y=S[p])||y&&g.key==y.key&&g.type===y.type)S[p]=void 0;else for(v=0;v<C;v++){if((y=S[v])&&g.key==y.key&&g.type===y.type){S[v]=void 0;break}y=null}b=H(e,g,y=y||u,r,i,_,l,a,s),(v=g.ref)&&y.ref!=v&&(x||(x=[]),y.ref&&x.push(y.ref,null,g),x.push(v,g.__c||b,g)),null!=b?(null==k&&(k=b),a=w(e,g,y,S,_,b,a),"option"==t.type?e.value="":"function"==typeof t.type&&(t.__d=a)):a&&y.__e==a&&a.parentNode!=e&&(a=m(y))}if(t.__e=k,null!=_&&"function"!=typeof t.type)for(p=_.length;p--;)null!=_[p]&&f(_[p]);for(p=C;p--;)null!=S[p]&&A(S[p],S[p]);if(x)for(p=0;p<x.length;p++)P(x[p],x[++p],x[++p])}function w(e,n,t,o,r,i,_){var l,u,c;if(void 0!==n.__d)l=n.__d,n.__d=void 0;else if(r==t||i!=_||null==i.parentNode)e:if(null==_||_.parentNode!==e)e.appendChild(i),l=null;else{for(u=_,c=0;(u=u.nextSibling)&&c<o.length;c+=2)if(u==i)break e;e.insertBefore(i,_),l=_}return void 0!==l?l:i.nextSibling}function x(e,n,t){"-"===n[0]?e.setProperty(n,t):e[n]="number"==typeof t&&!1===a.test(n)?t+"px":null==t?"":t}function S(e,n,t,o,r){var i,_,l,u,c;if(r?"className"===n&&(n="class"):"class"===n&&(n="className"),"style"===n)if(i=e.style,"string"==typeof t)i.cssText=t;else{if("string"==typeof o&&(i.cssText="",o=null),o)for(u in o)t&&u in t||x(i,u,"");if(t)for(c in t)o&&t[c]===o[c]||x(i,c,t[c])}else"o"===n[0]&&"n"===n[1]?(_=n!==(n=n.replace(/Capture$/,"")),l=n.toLowerCase(),n=(l in e?l:n).slice(2),t?(o||e.addEventListener(n,C,_),(e.l||(e.l={}))[n]=t):e.removeEventListener(n,C,_)):"list"!==n&&"tagName"!==n&&"form"!==n&&"type"!==n&&"size"!==n&&!r&&n in e?e[n]=null==t?"":t:"function"!=typeof t&&"dangerouslySetInnerHTML"!==n&&(n!==(n=n.replace(/^xlink:?/,""))?null==t||!1===t?e.removeAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase(),t):null==t||!1===t&&!/^ar/.test(n)?e.removeAttribute(n):e.setAttribute(n,t))}function C(e){this.l[e.type](o.event?o.event(e):e)}function N(e,n,t){var o,r;for(o=0;o<e.__k.length;o++)(r=e.__k[o])&&(r.__=e,r.__e&&("function"==typeof r.type&&r.__k.length>1&&N(r,n,t),n=w(t,r,r,e.__k,null,r.__e,n),"function"==typeof e.type&&(e.__d=n)))}function H(e,n,t,r,i,_,l,u,c){var a,f,p,d,m,y,g,b,w,x,S,C=n.type;if(void 0!==n.constructor)return null;(a=o.__b)&&a(n);try{e:if("function"==typeof C){if(b=n.props,w=(a=C.contextType)&&r[a.__c],x=a?w?w.props.value:a.__:r,t.__c?g=(f=n.__c=t.__c).__=f.__E:("prototype"in C&&C.prototype.render?n.__c=f=new C(b,x):(n.__c=f=new v(b,x),f.constructor=C,f.render=E),w&&w.sub(f),f.props=b,f.state||(f.state={}),f.context=x,f.__n=r,p=f.__d=!0,f.__h=[]),null==f.__s&&(f.__s=f.state),null!=C.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=s({},f.__s)),s(f.__s,C.getDerivedStateFromProps(b,f.__s))),d=f.props,m=f.state,p)null==C.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==C.getDerivedStateFromProps&&b!==d&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(b,x),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(b,f.__s,x)||n.__v===t.__v){f.props=b,f.state=f.__s,n.__v!==t.__v&&(f.__d=!1),f.__v=n,n.__e=t.__e,n.__k=t.__k,f.__h.length&&l.push(f),N(n,u,e);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(b,f.__s,x),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(d,m,y)}))}f.context=x,f.props=b,f.state=f.__s,(a=o.__r)&&a(n),f.__d=!1,f.__v=n,f.__P=e,a=f.render(f.props,f.state,f.context),f.state=f.__s,null!=f.getChildContext&&(r=s(s({},r),f.getChildContext())),p||null==f.getSnapshotBeforeUpdate||(y=f.getSnapshotBeforeUpdate(d,m)),S=null!=a&&a.type==h&&null==a.key?a.props.children:a,k(e,Array.isArray(S)?S:[S],n,t,r,i,_,l,u,c),f.base=n.__e,f.__h.length&&l.push(f),g&&(f.__E=f.__=null),f.__e=!1}else null==_&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=M(t.__e,n,t,r,i,_,l,c);(a=o.diffed)&&a(n)}catch(e){n.__v=null,o.__e(e,n,t)}return n.__e}function T(e,n){o.__c&&o.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){o.__e(e,n.__v)}}))}function M(e,n,t,o,r,i,_,l){var a,s,f,p,d,h=t.props,v=n.props;if(r="svg"===n.type||r,null!=i)for(a=0;a<i.length;a++)if(null!=(s=i[a])&&((null===n.type?3===s.nodeType:s.localName===n.type)||e==s)){e=s,i[a]=null;break}if(null==e){if(null===n.type)return document.createTextNode(v);e=r?document.createElementNS("http://www.w3.org/2000/svg",n.type):document.createElement(n.type,v.is&&{is:v.is}),i=null,l=!1}if(null===n.type)h!==v&&e.data!=v&&(e.data=v);else{if(null!=i&&(i=c.slice.call(e.childNodes)),f=(h=t.props||u).dangerouslySetInnerHTML,p=v.dangerouslySetInnerHTML,!l){if(null!=i)for(h={},d=0;d<e.attributes.length;d++)h[e.attributes[d].name]=e.attributes[d].value;(p||f)&&(p&&f&&p.__html==f.__html||(e.innerHTML=p&&p.__html||""))}(function(e,n,t,o,r){var i;for(i in t)"children"===i||"key"===i||i in n||S(e,i,null,t[i],o);for(i in n)r&&"function"!=typeof n[i]||"children"===i||"key"===i||"value"===i||"checked"===i||t[i]===n[i]||S(e,i,n[i],t[i],o)})(e,v,h,r,l),p?n.__k=[]:(a=n.props.children,k(e,Array.isArray(a)?a:[a],n,t,o,"foreignObject"!==n.type&&r,i,_,u,l)),l||("value"in v&&void 0!==(a=v.value)&&a!==e.value&&S(e,"value",a,h.value,!1),"checked"in v&&void 0!==(a=v.checked)&&a!==e.checked&&S(e,"checked",a,h.checked,!1))}return e}function P(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){o.__e(e,t)}}function A(e,n,t){var r,i,_;if(o.unmount&&o.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||P(r,null,n)),t||"function"==typeof e.type||(t=null!=(i=e.__e)),e.__e=e.__d=void 0,null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){o.__e(e,n)}r.base=r.__P=null}if(r=e.__k)for(_=0;_<r.length;_++)r[_]&&A(r[_],n,t);null!=i&&f(i)}function E(e,n,t){return this.constructor(e,t)}function j(e,n,t){var r,i,_;o.__&&o.__(e,n),i=(r=t===l)?null:t&&t.__k||n.__k,e=p(h,null,[e]),_=[],H(n,(r?n:t||n).__k=e,i||u,u,void 0!==n.ownerSVGElement,t&&!r?[t]:i?null:n.childNodes.length?c.slice.call(n.childNodes):null,_,t||u,r),T(_,e)}o={__e:function(e,n){for(var t,o;n=n.__;)if((t=n.__c)&&!t.__)try{if(t.constructor&&null!=t.constructor.getDerivedStateFromError&&(o=!0,t.setState(t.constructor.getDerivedStateFromError(e))),null!=t.componentDidCatch&&(o=!0,t.componentDidCatch(e)),o)return g(t.__E=t)}catch(n){e=n}throw e}},v.prototype.setState=function(e,n){var t;t=this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof e&&(e=e(t,this.props)),e&&s(t,e),null!=e&&this.__v&&(n&&this.__h.push(n),g(this))},v.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),g(this))},v.prototype.render=h,r=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,b.__r=0,l=u;var L,U,F,D=0,O=[],R=o.__r,B=o.diffed,I=o.__c,W=o.unmount;function K(e,n){o.__h&&o.__h(U,e,D||n),D=0;var t=U.__H||(U.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({}),t.__[e]}function q(e){return D=1,function(e,n,t){var o=K(L++,2);return o.t=e,o.__c||(o.__c=U,o.__=[t?t(n):Q(void 0,n),function(e){var n=o.t(o.__[0],e);o.__[0]!==n&&(o.__=[n,o.__[1]],o.__c.setState({}))}]),o.__}(Q,e)}function $(e,n){var t=K(L++,7);return Y(t.__H,n)?(t.__H=n,t.__h=e,t.__=e()):t.__}function z(){O.some((function(e){if(e.__P)try{e.__H.__h.forEach(G),e.__H.__h.forEach(V),e.__H.__h=[]}catch(n){return e.__H.__h=[],o.__e(n,e.__v),!0}})),O=[]}o.__r=function(e){R&&R(e),L=0;var n=(U=e.__c).__H;n&&(n.__h.forEach(G),n.__h.forEach(V),n.__h=[])},o.diffed=function(e){B&&B(e);var n=e.__c;n&&n.__H&&n.__H.__h.length&&(1!==O.push(n)&&F===o.requestAnimationFrame||((F=o.requestAnimationFrame)||function(e){var n,t=function(){clearTimeout(o),J&&cancelAnimationFrame(n),setTimeout(e)},o=setTimeout(t,100);J&&(n=requestAnimationFrame(t))})(z))},o.__c=function(e,n){n.some((function(e){try{e.__h.forEach(G),e.__h=e.__h.filter((function(e){return!e.__||V(e)}))}catch(t){n.some((function(e){e.__h&&(e.__h=[])})),n=[],o.__e(t,e.__v)}})),I&&I(e,n)},o.unmount=function(e){W&&W(e);var n=e.__c;if(n&&n.__H)try{n.__H.__.forEach(G)}catch(e){o.__e(e,n.__v)}};var J="function"==typeof requestAnimationFrame;function G(e){"function"==typeof e.u&&e.u()}function V(e){e.u=e.__()}function Y(e,n){return!e||n.some((function(n,t){return n!==e[t]}))}function Q(e,n){return"function"==typeof n?n(e):n}var X=(e,n=300)=>{const t=function(e){return D=5,$((function(){return{current:e}}),[])}(null);return(...o)=>{t.current&&(clearTimeout(t.current),t.current=null),t.current=setTimeout(()=>{t.current=null,e(...o)},n)}},Z=function(e,n,t,o){return new(t||(t=Promise))((function(r,i){function _(e){try{u(o.next(e))}catch(e){i(e)}}function l(e){try{u(o.throw(e))}catch(e){i(e)}}function u(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(_,l)}u((o=o.apply(e,n||[])).next())}))};var ee=({exclude:e=[],onChange:n=(()=>null),inputClassName:t=""})=>{const[r,i]=q(""),[_,l]=q([]),u=X((e,n)=>{((e,n=[])=>Z(void 0,void 0,void 0,(function*(){const t=yield fetch(` https://api.skypicker.com/locations?term=${e}&location_types=city`);if(!t.ok)return[];const{locations:o}=yield t.json();return o.filter(e=>e.airports>0&&!n.includes(e.id)).map(({id:e,name:n,region:t})=>({id:e,name:`${n} (${t.name})`}))})))(e,n).then(e=>{l(e)})});var c,a,s;return c=()=>{if(!r)return;const t=_.find(e=>e.name===r);t?n(t.id):u(r,e)},a=[r,e],s=K(L++,3),!o.__s&&Y(s.__H,a)&&(s.__=c,s.__H=a,U.__H.__h.push(s)),p("span",null,p("input",{type:"text",list:"locations",placeholder:"Start typing your current location...",value:r,onInput:e=>i(e.target.value),className:t}),p("datalist",{id:"locations"},_.map(({id:e,name:n})=>p("option",{key:e,value:n}))))};var ne={weatherLocations:[{name:"Amsterdam",locationKey:"249758"},{name:"Madrid",locationKey:"308526"},{name:"Budapest",locationKey:"187423"}],flightsLocations:[{name:"Amsterdam",locationKey:"amsterdam_nl"},{name:"Madrid",locationKey:"madrid_es"},{name:"Budapest",locationKey:"budapest_hu"}]};t(1);var te=()=>{const{weatherLocations:e,flightsLocations:n}=ne,[t,o]=q(null);return console.log("locationFrom",t),p("h1",{className:"caption"},"Hi Jamie! You are going to travel from"," ",p(ee,{exclude:n.map(e=>e.locationKey),onChange:o,inputClassName:"location-input"}))};j(p(te,null),document.body)}]);