!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){e.exports=n(4)()},,function(e,t,n){var o;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var i=typeof o;if("string"===i||"number"===i)e.push(o);else if(Array.isArray(o)&&o.length){var c=r.apply(null,o);c&&e.push(c)}else if("object"===i)for(var a in o)n.call(o,a)&&o[a]&&e.push(a)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},function(e,t,n){},function(e,t,n){"use strict";var o=n(5);function r(){}e.exports=function(){function e(e,t,n,r,i,c){if(c!==o){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";n.r(t);let o=void 0,r=void 0,i=void 0,c=void 0,a=void 0;function u(){return[o,i++]}const l=Symbol();var s=(e,t)=>{const n=a;return(u,s)=>{if(u._!==e){u._parent=n,u._hooks=[];const t=u._cleanup=[];u.$&&u.$(),u.$=(()=>{for(const e of t)e()}),u._=e,u.a={}}o=u._hooks,r=u._cleanup,i=0,c=s,a=u;const d=e[l]?e[l](t):e(t);return o=void 0,r=void 0,i=void 0,c=void 0,a=void 0,d(u.a,s)}};let d=[];function f(e){d.push(e)}function p(){for(const e of d)e();d.length=0}var b=e=>document.createTextNode(e);const y={},h=Symbol();var m=(e,t,n,o)=>{const r=n+"_",i=n+"$";if("function"==typeof t){const c=()=>{const a=!o&&e[n];let u;!o&&e[r]||(e[r]={},e[i]=void 0),o=!1;const l=e[r];l._rerender=(()=>{c(),p()}),e[n]=u=t(l,()=>{e[r]===l&&l._rerender()}),a&&a!==u&&a.parentElement.replaceChild(u,a)};c()}else{let c;if(Array.isArray(t))!o&&e[r]||(e[r]={},e[i]=void 0),c=((e,t)=>{e._!==y&&(e.$&&e.$(),e.$=(()=>{const t=e.items;if(t)for(const e of t)e.context.$&&e.context.$()}),e._=y);const n=e.items,o=document.createDocumentFragment(),r=new Set;if(e.items=t.map((t,n)=>{const i=h in t?`key[${t[h]}]`:`item${n}`;m(e,t,i,!1);const c=e[i];return r.add(i),o.appendChild(c),{key:i,node:c,context:e[i+"_"]}}),n)for(const e of n)r.has(e.key)||e.context.$&&e.context.$();return o})(e,t);else{e[r]&&(!o&&e[r].$&&e[r].$(),e[r]=void 0,e[i]=void 0);const a=(e=>!1===e||null==e?"":`${e}`)(t);if(e[i]===a)return;if(e[i]=a,!o){const t=e[n];if(t&&3===t.nodeType)return void(t.textContent=a)}c=b(a)}if(!o){const t=e[n];t&&t!==c&&t.parentElement.replaceChild(c,t)}e[n]=c}};const v=new WeakMap;n(3);var g=e=>document.createElement(e),_=e=>e&&e.$&&e.$(),T=(e,t)=>{for(const n of t)e.appendChild("string"==typeof n?b(n):n)},w=e=>{const[t,n]=u(),o=function(){const e=c;if(!e)throw new Error;return()=>{Promise.resolve().then(e)}}();return t[n]||t.push([e,e=>{t[n][0]=e,o()}]),t[n]},O=n(0),k=n.n(O),$=(e,t,n)=>{e.addEventListener(t,n)},j=(e,t,n,o)=>{e.removeEventListener(t,n),e.addEventListener(t,o)},S=(e,t,n)=>{e.removeEventListener(t,n)},x=(e,t)=>{if(t&&e&&t.length===e.length){let n;for(n=0;n<e.length;n++)if(t[n]!==e[n])return!1;return!0}return!1},R=(e,t)=>{const[n,o]=u(),i={};if(n[o]){const r=n[o];if(x(t,r.dependencies))return;r.dependencies=t,r.token=i,r.cleanup&&(r.cleanup(),r.cleanup=void 0),f(()=>{if(r.token!==i)return;const t=e();r.cleanup=t})}else{const c={dependencies:t,cleanup:void 0,token:i};n[o]=c,f(()=>{if(c.token!==i)return;const t=e();c.cleanup=t}),function(e){r.push(e)}(()=>{c.cleanup&&(c.cleanup(),c.cleanup=void 0)})}},C=e=>{const[t,n]=u();if(!t[n]){const n=e=>{n.current=e};n.current=e,t.push(n)}return t[n]},q=e=>Object.keys(e).reduce((t,n)=>(t.push(n,e[n]),t),[]);function P(e){this.props=e}P[l]=function(e){const t=((e,t=[e])=>{const[n,o]=u();if(n[o]){const r=n[o];return x(t,r.dependencies)?r.value:r.value=e()}{const o={value:e(),dependencies:t};return n.push(o),o.value}})(()=>new this(e),[]),[n,o]=w(t.state);t.props=e,t.state=n,t.__setState=o,R(()=>(t.componentDidMount&&t.componentDidMount(),()=>{t.componentWillUnmount&&t.componentWillUnmount()}),[]);const r=C(null),i=C(null);return R(()=>{r.current&&t.componentDidUpdate&&t.componentDidUpdate(r.current,i.current),r.current=e,i.current=n},q(e).concat(q(n))),t.render()},P.prototype.setState=function(e){this.__setState(Object.assign({},this.state,e))};var E=n(2),A=n.n(E);const N={};function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function U(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var W=function(e){function t(){var e,n,o,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,c=new Array(i),a=0;a<i;a++)c[a]=arguments[a];return o=this,r=(e=I(t)).call.apply(e,[this].concat(c)),n=!r||"object"!==D(r)&&"function"!=typeof r?U(o):r,L(U(U(n)),"state",{text:n.props.text||""}),L(U(U(n)),"handleSubmit",function(e){var t=e.target.value.trim();13===e.which&&(n.props.onSave(t),n.props.newTodo&&n.setState({text:""}))}),L(U(U(n)),"handleChange",function(e){n.setState({text:e.target.value})}),L(U(U(n)),"handleBlur",function(e){n.props.newTodo||n.props.onSave(e.target.value)}),n}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(t,P),n=t,(o=[{key:"render",value:function(){const e=A()({edit:this.props.editing,"new-todo":this.props.newTodo}),t=this.props.placeholder,n=this.state.text,o=this.handleBlur,r=this.handleChange,i=this.handleChange,c=this.handleSubmit;return a=>(a._!==N?(a.$&&a.$(),a.$=(()=>{S(a.a,"blur",a.d),S(a.a,"input",a.e),S(a.a,"change",a.f),S(a.a,"keydown",a.g)}),a._=N,a.a=g("input"),a.a.className=a.b=e,a.a.type="text",a.a.placeholder=a.c=t,a.a.autofocus=!0,a.a.value=a.a.value=n,$(a.a,"blur",a.d=o),$(a.a,"input",a.e=(e=>"text"===a.a.type&&r(e))),$(a.a,"change",a.f=i),$(a.a,"keydown",a.g=c)):(a.b!==e&&(a.a.className=a.b=e),a.c!==t&&(a.a.placeholder=a.c=t),a.a.value!==n&&(a.a.value=a.a.value=n),a.d!==o&&j(a.a,"blur",a.d,a.d=o),a.e!==r&&j(a.a,"input",a.e,a.e=(e=>"text"===a.a.type&&r(e))),a.f!==i&&j(a.a,"change",a.f,a.f=i),a.g!==c&&j(a.a,"keydown",a.g,a.g=c)),a.a)}}])&&F(n.prototype,o),r&&F(n,r),t}();L(W,"propTypes",{onSave:k.a.func.isRequired,text:k.a.string,placeholder:k.a.string,editing:k.a.bool,newTodo:k.a.bool});const B={};var H=function(e){var t=e.addTodo;const n=s(W,{newTodo:!0,onSave:function(e){0!==e.length&&t(e)},placeholder:"What needs to be done?"});return e=>(e._!==B?(e.$&&e.$(),e.$=(()=>{_(e.c_)}),e._=B,e.a=g("header"),e.a.className="header",e.b=g("h1"),T(e.b,["todos"]),m(e,n,"c",1),T(e.a,[e.b,e.c])):m(e,n,"c",0),e.a)};H.propTypes={addTodo:k.a.func.isRequired};var V=H;const Y={},z={},G={};var J;function K(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Q=(K(J={},"show_all","All"),K(J,"show_active","Active"),K(J,"show_completed","Completed"),J),X=function(e){var t=e.visibilityFilter,n=e.activeCount,o=e.completedCount,r=e.setFilter,i=e.clearCompleted;const c=n||"No",a=1===n?"item":"items",u=Object.keys(Q).map(function(e){const n=e,o=A()({selected:e===t}),i=function(){return r(e)},c=Q[e];return e=>(e._!==z?(e.$&&e.$(),e.$=(()=>{S(e.c,"click",e.e),_(e.f_)}),e._=z,e.a=g("li"),e.a.key=e.b=n,e.c=g("a"),e.c.className=e.d=o,((e,t)=>{if("string"==typeof t)e.style=t;else if("object"==typeof t){e.style="";for(let n in t){let o=t[n];"number"==typeof o&&(o=`${o}px`),e.style[n]=o}}})(e.c,{cursor:"pointer"}),$(e.c,"click",e.e=i),m(e,c,"f",1),T(e.c,[e.f]),T(e.a,[e.c])):(e.b!==n&&(e.a.key=e.b=n),e.d!==o&&(e.c.className=e.d=o),e.e!==i&&j(e.c,"click",e.e,e.e=i),m(e,c,"f",0)),e.a)}),l=!!o&&(()=>{const e=i;return t=>(t._!==G?(t.$&&t.$(),t.$=(()=>{S(t.a,"click",t.b)}),t._=G,t.a=g("button"),t.a.className="clear-completed",$(t.a,"click",t.b=e),T(t.a,["Clear completed"])):t.b!==e&&j(t.a,"click",t.b,t.b=e),t.a)})();return e=>(e._!==Y?(e.$&&e.$(),e.$=(()=>{_(e.d_),_(e.e_),_(e.g_),_(e.h_)}),e._=Y,e.a=g("footer"),e.a.className="footer",e.b=g("span"),e.b.className="todo-count",e.c=g("strong"),m(e,c,"d",1),T(e.c,[e.d]),m(e,a,"e",1),T(e.b,[e.c," ",e.e," left"]),e.f=g("ul"),e.f.className="filters",m(e,u,"g",1),T(e.f,[e.g]),m(e,l,"h",1),T(e.a,[e.b,e.f,e.h])):(m(e,c,"d",0),m(e,a,"e",0),m(e,u,"g",0),m(e,l,"h",0)),e.a)};X.propTypes={visibilityFilter:k.a.string.isRequired,completedCount:k.a.number.isRequired,activeCount:k.a.number.isRequired,clearCompleted:k.a.func.isRequired,setFilter:k.a.func.isRequired};var Z=X;const ee={},te={};function ne(e){return(ne="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function oe(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function re(e){return(re=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ie(e,t){return(ie=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ce(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ue=function(e){function t(){var e,n,o,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,c=new Array(i),a=0;a<i;a++)c[a]=arguments[a];return o=this,r=(e=re(t)).call.apply(e,[this].concat(c)),n=!r||"object"!==ne(r)&&"function"!=typeof r?ce(o):r,ae(ce(ce(n)),"state",{editing:!1}),ae(ce(ce(n)),"handleDoubleClick",function(){n.setState({editing:!0})}),ae(ce(ce(n)),"handleSave",function(e,t){0===t.length?n.props.deleteTodo(e):n.props.editTodo(e,t),n.setState({editing:!1})}),n}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ie(e,t)}(t,P),n=t,(o=[{key:"render",value:function(){var e,t=this,n=this.props,o=n.todo,r=n.toggleTodo,i=n.deleteTodo;e=this.state.editing?s(W,{text:o.text,editing:this.state.editing,onSave:function(e){return t.handleSave(o.id,e)}}):(()=>{const e=o.completed,t=function(){return r(o.id)},n=function(){return r(o.id)},c=this.handleDoubleClick,a=o.text,u=function(){return i(o.id)};return o=>(o._!==ee?(o.$&&o.$(),o.$=(()=>{S(o.b,"input",o.d),S(o.b,"change",o.e),S(o.f,"dblclick",o.g),_(o.h_),S(o.i,"click",o.j)}),o._=ee,o.a=g("div"),o.a.className="view",o.b=g("input"),o.b.className="toggle",o.b.type="checkbox",o.b.checked=o.c=e,$(o.b,"input",o.d=(e=>"text"===o.b.type&&t())),$(o.b,"change",o.e=n),o.f=g("label"),$(o.f,"dblclick",o.g=c),m(o,a,"h",1),T(o.f,[o.h]),o.i=g("button"),o.i.className="destroy",$(o.i,"click",o.j=u),T(o.a,[o.b,o.f,o.i])):(o.c!==e&&(o.b.checked=o.c=e),o.d!==t&&j(o.b,"input",o.d,o.d=(e=>"text"===o.b.type&&t())),o.e!==n&&j(o.b,"change",o.e,o.e=n),o.g!==c&&j(o.f,"dblclick",o.g,o.g=c),m(o,a,"h",0),o.j!==u&&j(o.i,"click",o.j,o.j=u)),o.a)})();const c=A()({completed:o.completed,editing:this.state.editing}),a=e;return e=>(e._!==te?(e.$&&e.$(),e.$=(()=>{_(e.c_)}),e._=te,e.a=g("li"),e.a.className=e.b=c,m(e,a,"c",1),T(e.a,[e.c])):(e.b!==c&&(e.a.className=e.b=c),m(e,a,"c",0)),e.a)}}])&&oe(n.prototype,o),r&&oe(n,r),t}();ae(ue,"propTypes",{todo:k.a.object.isRequired,editTodo:k.a.func.isRequired,deleteTodo:k.a.func.isRequired,toggleTodo:k.a.func.isRequired});const le={};var se=function(e){var t=e.todos,n=e.editTodo,o=e.deleteTodo,r=e.toggleTodo;const i=t.map(function(e){return s(ue,{key:e.id,todo:e,editTodo:n,toggleTodo:r,deleteTodo:o})});return e=>(e._!==le?(e.$&&e.$(),e.$=(()=>{_(e.b_)}),e._=le,e.a=g("ul"),e.a.className="todo-list",m(e,i,"b",1),T(e.a,[e.b])):m(e,i,"b",0),e.a)};se.propTypes={todos:k.a.arrayOf(k.a.shape({id:k.a.number.isRequired,completed:k.a.bool.isRequired,text:k.a.string.isRequired}).isRequired).isRequired,editTodo:k.a.func.isRequired,deleteTodo:k.a.func.isRequired,toggleTodo:k.a.func.isRequired};var de=se;const fe={},pe={};function be(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var c,a=e[Symbol.iterator]();!(o=(c=a.next()).done)&&(n.push(c.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==a.return||a.return()}finally{if(r)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var ye=function(e){var t,n=e.todos,o=e.deleteTodo,r=e.editTodo,i=e.toggleTodo,c=e.toggleAllTodo,a=e.clearCompleted,u=be(w("show_all"),2),l=u[0],d=u[1],f=n.length,p=n.filter(function(e){return e.completed}).length;switch(l){case"show_all":t=n;break;case"show_completed":t=n.filter(function(e){return e.completed});break;case"show_active":t=n.filter(function(e){return!e.completed});break;default:throw new Error("Unknown filter: "+l)}const b=!!f&&(()=>{const e=p===f,t=c;return n=>(n._!==pe?(n.$&&n.$(),n.$=(()=>{S(n.d,"click",n.e)}),n._=pe,n.a=g("span"),n.b=g("input"),n.b.className="toggle-all",n.b.type="checkbox",n.b.checked=n.c=e,n.b.readOnly=!0,n.d=g("label"),$(n.d,"click",n.e=t),T(n.a,[n.b,n.d])):(n.c!==e&&(n.b.checked=n.c=e),n.e!==t&&j(n.d,"click",n.e,n.e=t)),n.a)})(),y=s(de,{todos:t,deleteTodo:o,editTodo:r,toggleTodo:i}),h=!!f&&s(Z,{visibilityFilter:l,setFilter:d,completedCount:p,activeCount:f-p,clearCompleted:a});return e=>(e._!==fe?(e.$&&e.$(),e.$=(()=>{_(e.b_),_(e.c_),_(e.d_)}),e._=fe,e.a=g("section"),e.a.className="main",m(e,b,"b",1),m(e,y,"c",1),m(e,h,"d",1),T(e.a,[e.b,e.c,e.d])):(m(e,b,"b",0),m(e,y,"c",0),m(e,h,"d",0)),e.a)};ye.propTypes={todos:k.a.arrayOf(k.a.shape({id:k.a.number.isRequired,completed:k.a.bool.isRequired,text:k.a.string.isRequired}).isRequired).isRequired,deleteTodo:k.a.func.isRequired,editTodo:k.a.func.isRequired,toggleTodo:k.a.func.isRequired,toggleAllTodo:k.a.func.isRequired,clearCompleted:k.a.func.isRequired};var he=ye;const me={};function ve(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){ge(e,t,n[t])})}return e}function ge(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _e(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function Te(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var c,a=e[Symbol.iterator]();!(o=(c=a.next()).done)&&(n.push(c.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==a.return||a.return()}finally{if(r)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var we=function(){var e=function(){var e=Te(w([]),2),t=e[0],n=e[1];return[t,{addTodo:function(e){n(_e(t).concat([{id:t.reduce(function(e,t){return Math.max(t.id,e)},-1)+1,completed:!1,text:e}]))},deleteTodo:function(e){n(t.filter(function(t){return t.id!==e}))},editTodo:function(e,o){n(t.map(function(t){return t.id===e?ve({},t,{text:o}):t}))},toggleTodo:function(e){n(t.map(function(t){return t.id===e?ve({},t,{completed:!t.completed}):t}))},toggleAllTodo:function(){var e=t.every(function(e){return e.completed});n(t.map(function(t){return ve({},t,{completed:!e})}))},clearCompleted:function(){n(t.filter(function(e){return!1===e.completed}))}}]}(),t=Te(e,2),n=t[0],o=t[1],r=o.addTodo,i=o.deleteTodo,c=o.editTodo,a=o.toggleTodo,u=o.toggleAllTodo,l=o.clearCompleted;const d=s(V,{addTodo:r}),f=s(he,{todos:n,deleteTodo:i,editTodo:c,toggleTodo:a,toggleAllTodo:u,clearCompleted:l});return e=>(e._!==me?(e.$&&e.$(),e.$=(()=>{_(e.b_),_(e.c_)}),e._=me,e.a=g("div"),m(e,d,"b",1),m(e,f,"c",1),T(e.a,[e.b,e.c])):(m(e,d,"b",0),m(e,f,"c",0)),e.a)};((e,t)=>{let n=v.get(t);n||v.set(t,n={}),m(n,e,"node",!1);const o=n.node;o.parentElement!==t&&t.appendChild(o),p()})(s(we,{}),document.getElementById("root"))}]);