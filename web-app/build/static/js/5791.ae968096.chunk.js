"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[5791],{18602:(e,t,n)=>{n.d(t,{u:()=>T});var r,i=n(72791),a=n(63733),o=n(98202),c=n(74786),l=n.n(c),u=n(29627),s=n.n(u),p=n(42854),h=n.n(p),f=n(82066),y=n.n(f),d=n(18111),m=n.n(d),v=n(75555),b=n(39718),g=n(46044),O=n(87970),A=n(36768),w=n(70587),x=n(73822),j=n(23031),P=["layout","type","stroke","connectNulls","isRange","ref"];function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function S(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function k(){return k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},k.apply(this,arguments)}function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){I(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,B(r.key),r)}}function R(e,t){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},R(e,t)}function C(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=H(e);if(t){var i=H(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===E(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return N(e)}(this,n)}}function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function H(e){return H=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},H(e)}function I(e,t,n){return(t=B(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function B(e){var t=function(e,t){if("object"!==E(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===E(t)?t:String(t)}var T=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R(e,t)}(u,e);var t,n,r,c=C(u);function u(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return I(N(e=c.call.apply(c,[this].concat(n))),"state",{isAnimationFinished:!0}),I(N(e),"id",(0,w.EL)("recharts-area-")),I(N(e),"handleAnimationEnd",(function(){var t=e.props.onAnimationEnd;e.setState({isAnimationFinished:!0}),l()(t)&&t()})),I(N(e),"handleAnimationStart",(function(){var t=e.props.onAnimationStart;e.setState({isAnimationFinished:!1}),l()(t)&&t()})),e}return t=u,r=[{key:"getDerivedStateFromProps",value:function(e,t){return e.animationId!==t.prevAnimationId?{prevAnimationId:e.animationId,curPoints:e.points,curBaseLine:e.baseLine,prevPoints:t.curPoints,prevBaseLine:t.curBaseLine}:e.points!==t.curPoints||e.baseLine!==t.curBaseLine?{curPoints:e.points,curBaseLine:e.baseLine}:null}}],(n=[{key:"renderDots",value:function(e,t,n){var r=this.props.isAnimationActive,a=this.state.isAnimationFinished;if(r&&!a)return null;var o=this.props,c=o.dot,l=o.points,s=o.dataKey,p=(0,j.L6)(this.props),h=(0,j.L6)(c,!0),f=l.map((function(e,t){var n=L(L(L({key:"dot-".concat(t),r:3},p),h),{},{dataKey:s,cx:e.x,cy:e.y,index:t,value:e.value,payload:e.payload});return u.renderDotItem(c,n)})),y={clipPath:e?"url(#clipPath-".concat(t?"":"dots-").concat(n,")"):null};return i.createElement(g.m,k({className:"recharts-area-dots"},y),f)}},{key:"renderHorizontalRect",value:function(e){var t=this.props,n=t.baseLine,r=t.points,a=t.strokeWidth,o=r[0].x,c=r[r.length-1].x,l=e*Math.abs(o-c),u=s()(r.map((function(e){return e.y||0})));return(0,w.hj)(n)&&"number"===typeof n?u=Math.max(n,u):n&&Array.isArray(n)&&n.length&&(u=Math.max(s()(n.map((function(e){return e.y||0}))),u)),(0,w.hj)(u)?i.createElement("rect",{x:o<c?o:o-l,y:0,width:l,height:Math.floor(u+(a?parseInt("".concat(a),10):1))}):null}},{key:"renderVerticalRect",value:function(e){var t=this.props,n=t.baseLine,r=t.points,a=t.strokeWidth,o=r[0].y,c=r[r.length-1].y,l=e*Math.abs(o-c),u=s()(r.map((function(e){return e.x||0})));return(0,w.hj)(n)&&"number"===typeof n?u=Math.max(n,u):n&&Array.isArray(n)&&n.length&&(u=Math.max(s()(n.map((function(e){return e.x||0}))),u)),(0,w.hj)(u)?i.createElement("rect",{x:0,y:o<c?o:o-l,width:u+(a?parseInt("".concat(a),10):1),height:Math.floor(l)}):null}},{key:"renderClipRect",value:function(e){return"vertical"===this.props.layout?this.renderVerticalRect(e):this.renderHorizontalRect(e)}},{key:"renderAreaStatically",value:function(e,t,n,r){var a=this.props,o=a.layout,c=a.type,l=a.stroke,u=a.connectNulls,s=a.isRange,p=(a.ref,S(a,P));return i.createElement(g.m,{clipPath:n?"url(#clipPath-".concat(r,")"):null},i.createElement(v.H,k({},(0,j.L6)(p,!0),{points:e,connectNulls:u,type:c,baseLine:t,layout:o,stroke:"none",className:"recharts-area-area"})),"none"!==l&&i.createElement(v.H,k({},(0,j.L6)(this.props),{className:"recharts-area-curve",layout:o,type:c,connectNulls:u,fill:"none",points:e})),"none"!==l&&s&&i.createElement(v.H,k({},(0,j.L6)(this.props),{className:"recharts-area-curve",layout:o,type:c,connectNulls:u,fill:"none",points:t})))}},{key:"renderAreaWithAnimation",value:function(e,t){var n=this,r=this.props,a=r.points,c=r.baseLine,l=r.isAnimationActive,u=r.animationBegin,s=r.animationDuration,p=r.animationEasing,f=r.animationId,d=this.state,m=d.prevPoints,v=d.prevBaseLine;return i.createElement(o.ZP,{begin:u,duration:s,isActive:l,easing:p,from:{t:0},to:{t:1},key:"area-".concat(f),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},(function(r){var o=r.t;if(m){var l,u=m.length/a.length,s=a.map((function(e,t){var n=Math.floor(t*u);if(m[n]){var r=m[n],i=(0,w.k4)(r.x,e.x),a=(0,w.k4)(r.y,e.y);return L(L({},e),{},{x:i(o),y:a(o)})}return e}));return l=(0,w.hj)(c)&&"number"===typeof c?(0,w.k4)(v,c)(o):h()(c)||y()(c)?(0,w.k4)(v,0)(o):c.map((function(e,t){var n=Math.floor(t*u);if(v[n]){var r=v[n],i=(0,w.k4)(r.x,e.x),a=(0,w.k4)(r.y,e.y);return L(L({},e),{},{x:i(o),y:a(o)})}return e})),n.renderAreaStatically(s,l,e,t)}return i.createElement(g.m,null,i.createElement("defs",null,i.createElement("clipPath",{id:"animationClipPath-".concat(t)},n.renderClipRect(o))),i.createElement(g.m,{clipPath:"url(#animationClipPath-".concat(t,")")},n.renderAreaStatically(a,c,e,t)))}))}},{key:"renderArea",value:function(e,t){var n=this.props,r=n.points,i=n.baseLine,a=n.isAnimationActive,o=this.state,c=o.prevPoints,l=o.prevBaseLine,u=o.totalLength;return a&&r&&r.length&&(!c&&u>0||!m()(c,r)||!m()(l,i))?this.renderAreaWithAnimation(e,t):this.renderAreaStatically(r,i,e,t)}},{key:"render",value:function(){var e,t=this.props,n=t.hide,r=t.dot,o=t.points,c=t.className,l=t.top,u=t.left,s=t.xAxis,p=t.yAxis,f=t.width,y=t.height,d=t.isAnimationActive,m=t.id;if(n||!o||!o.length)return null;var v=this.state.isAnimationFinished,b=1===o.length,A=(0,a.Z)("recharts-area",c),w=s&&s.allowDataOverflow,x=p&&p.allowDataOverflow,P=w||x,E=h()(m)?this.id:m,S=null!==(e=(0,j.L6)(r))&&void 0!==e?e:{r:3,strokeWidth:2},k=S.r,D=void 0===k?3:k,L=S.strokeWidth,M=void 0===L?2:L,R=((0,j.$k)(r)?r:{}).clipDot,C=void 0===R||R,N=2*D+M;return i.createElement(g.m,{className:A},w||x?i.createElement("defs",null,i.createElement("clipPath",{id:"clipPath-".concat(E)},i.createElement("rect",{x:w?u:u-f/2,y:x?l:l-y/2,width:w?f:2*f,height:x?y:2*y})),!C&&i.createElement("clipPath",{id:"clipPath-dots-".concat(E)},i.createElement("rect",{x:u-N/2,y:l-N/2,width:f+N,height:y+N}))):null,b?null:this.renderArea(P,E),(r||b)&&this.renderDots(P,C,E),(!d||v)&&O.e.renderCallByParent(this.props,o))}}])&&M(t.prototype,n),r&&M(t,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(i.PureComponent);r=T,I(T,"displayName","Area"),I(T,"defaultProps",{stroke:"#3182bd",fill:"#3182bd",fillOpacity:.6,xAxisId:0,yAxisId:0,legendType:"line",connectNulls:!1,points:[],dot:!1,activeDot:!0,hide:!1,isAnimationActive:!A.x.isSsr,animationBegin:0,animationDuration:1500,animationEasing:"ease"}),I(T,"getBaseValue",(function(e,t,n,r){var i=e.layout,a=e.baseValue,o=t.props.baseValue,c=null!==o&&void 0!==o?o:a;if((0,w.hj)(c)&&"number"===typeof c)return c;var l="horizontal"===i?r:n,u=l.scale.domain();if("number"===l.type){var s=Math.max(u[0],u[1]),p=Math.min(u[0],u[1]);return"dataMin"===c?p:"dataMax"===c||s<0?s:Math.max(Math.min(u[0],u[1]),0)}return"dataMin"===c?u[0]:"dataMax"===c?u[1]:u[0]})),I(T,"getComposedData",(function(e){var t,n=e.props,i=e.item,a=e.xAxis,o=e.yAxis,c=e.xAxisTicks,l=e.yAxisTicks,u=e.bandSize,s=e.dataKey,p=e.stackedData,h=e.dataStartIndex,f=e.displayedData,y=e.offset,d=n.layout,m=p&&p.length,v=r.getBaseValue(n,i,a,o),b="horizontal"===d,g=!1,O=f.map((function(e,t){var n;m?n=p[h+t]:(n=(0,x.F$)(e,s),Array.isArray(n)?g=!0:n=[v,n]);var r=null==n[1]||m&&null==(0,x.F$)(e,s);return b?{x:(0,x.Hv)({axis:a,ticks:c,bandSize:u,entry:e,index:t}),y:r?null:o.scale(n[1]),value:n,payload:e}:{x:r?null:a.scale(n[1]),y:(0,x.Hv)({axis:o,ticks:l,bandSize:u,entry:e,index:t}),value:n,payload:e}}));return t=m||g?O.map((function(e){var t=Array.isArray(e.value)?e.value[0]:null;return b?{x:e.x,y:null!=t&&null!=e.y?o.scale(t):null}:{x:null!=t?a.scale(t):null,y:e.y}})):b?o.scale(v):a.scale(v),L({points:O,baseLine:t,layout:d,isRange:g},y)})),I(T,"renderDotItem",(function(e,t){return i.isValidElement(e)?i.cloneElement(e,t):l()(e)?e(t):i.createElement(b.o,k({},t,{className:"recharts-area-dot"}))}))},28265:(e,t,n)=>{n.d(t,{T:()=>l});var r=n(91724),i=n(18602),a=n(90466),o=n(12891),c=n(93137),l=(0,r.z)({chartName:"AreaChart",GraphicalChild:i.u,axisComponents:[{axisType:"xAxis",AxisComp:a.K},{axisType:"yAxis",AxisComp:o.B}],formatAxisMap:c.t9})},19913:(e,t,n)=>{n.d(t,{h:()=>v});var r=n(63733),i=n(72791),a=n(33038),o=n.n(a),c=n(57441),l=n(70587),u=n(15303),s=n(23031);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==p(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===p(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,a,o,c=[],l=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=a.call(n)).done)&&(c.push(r.value),c.length!==t);l=!0);}catch(e){u=!0,i=e}finally{try{if(!l&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw i}}return c}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var v=(0,i.forwardRef)((function(e,t){var n=e.aspect,a=e.initialDimension,p=void 0===a?{width:-1,height:-1}:a,h=e.width,y=void 0===h?"100%":h,m=e.height,v=void 0===m?"100%":m,b=e.minWidth,g=void 0===b?0:b,O=e.minHeight,A=e.maxHeight,w=e.children,x=e.debounce,j=void 0===x?0:x,P=e.id,E=e.className,S=e.onResize,k=e.style,D=void 0===k?{}:k,L=(0,i.useRef)(null),M=(0,i.useRef)();M.current=S,(0,i.useImperativeHandle)(t,(function(){return Object.assign(L.current,{get current(){return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."),L.current}})}));var R=d((0,i.useState)({containerWidth:p.width,containerHeight:p.height}),2),C=R[0],N=R[1],H=(0,i.useCallback)((function(e,t){N((function(n){var r=Math.round(e),i=Math.round(t);return n.containerWidth===r&&n.containerHeight===i?n:{containerWidth:r,containerHeight:i}}))}),[]);(0,i.useEffect)((function(){var e=function(e){var t,n=e[0].contentRect,r=n.width,i=n.height;H(r,i),null===(t=M.current)||void 0===t||t.call(M,r,i)};j>0&&(e=o()(e,j,{trailing:!0,leading:!1}));var t=new ResizeObserver(e),n=L.current.getBoundingClientRect(),r=n.width,i=n.height;return H(r,i),t.observe(L.current),function(){t.disconnect()}}),[H,j]);var I=(0,i.useMemo)((function(){var e=C.containerWidth,t=C.containerHeight;if(e<0||t<0)return null;(0,u.Z)((0,l.hU)(y)||(0,l.hU)(v),"The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.",y,v),(0,u.Z)(!n||n>0,"The aspect(%s) must be greater than zero.",n);var r=(0,l.hU)(y)?e:y,a=(0,l.hU)(v)?t:v;n&&n>0&&(r?a=r/n:a&&(r=a*n),A&&a>A&&(a=A)),(0,u.Z)(r>0||a>0,"The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.",r,a,y,v,g,O,n);var o=!Array.isArray(w)&&(0,c.isElement)(w)&&(0,s.Gf)(w.type).endsWith("Chart");return i.Children.map(w,(function(e){return(0,c.isElement)(e)?(0,i.cloneElement)(e,f({width:r,height:a},o?{style:f({height:"100%",width:"100%",maxHeight:a,maxWidth:r},e.props.style)}:{})):e}))}),[n,w,v,A,O,g,C,y]);return i.createElement("div",{id:P?"".concat(P):void 0,className:(0,r.Z)("recharts-responsive-container",E),style:f(f({},D),{},{width:y,height:v,minWidth:g,minHeight:O,maxHeight:A}),ref:L},I)}))}}]);
//# sourceMappingURL=5791.ae968096.chunk.js.map