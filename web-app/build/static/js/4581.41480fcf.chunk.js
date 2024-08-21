"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[4581],{57671:(t,e,r)=>{r.d(e,{u:()=>T});var n=r(65043),i=r(11629),o=r.n(i),a=r(33097),c=r.n(a),l=r(58387),s=r(45248),u=r(94020),f=r(84140),h=r(92647),p=r(76307),y=r(17287),d=r(240),v=r(98854),b=["viewBox"],g=["viewBox"],m=["ticks"];function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function O(){return O=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},O.apply(this,arguments)}function k(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function x(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?k(Object(r),!0).forEach((function(e){z(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function j(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function P(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,N(n.key),n)}}function S(t,e,r){return e=A(e),function(t,e){if(e&&("object"===w(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,E()?Reflect.construct(e,r||[],A(t).constructor):e.apply(t,r))}function E(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(E=function(){return!!t})()}function A(t){return A=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},A(t)}function C(t,e){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},C(t,e)}function z(t,e,r){return(e=N(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function N(t){var e=function(t,e){if("object"!=w(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=w(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==w(e)?e:String(e)}var T=function(t){function e(t){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(r=S(this,e,[t])).state={fontSize:"",letterSpacing:""},r}var r,i,a;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&C(t,e)}(e,t),r=e,a=[{key:"renderTickItem",value:function(t,e,r){return n.isValidElement(t)?n.cloneElement(t,e):o()(t)?t(e):n.createElement(f.E,O({},e,{className:"recharts-cartesian-axis-tick-value"}),r)}}],(i=[{key:"shouldComponentUpdate",value:function(t,e){var r=t.viewBox,n=j(t,b),i=this.props,o=i.viewBox,a=j(i,g);return!(0,s.b)(r,o)||!(0,s.b)(n,a)||!(0,s.b)(e,this.state)}},{key:"componentDidMount",value:function(){var t=this.layerReference;if(t){var e=t.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];e&&this.setState({fontSize:window.getComputedStyle(e).fontSize,letterSpacing:window.getComputedStyle(e).letterSpacing})}}},{key:"getTickLineCoord",value:function(t){var e,r,n,i,o,a,c=this.props,l=c.x,s=c.y,u=c.width,f=c.height,h=c.orientation,y=c.tickSize,d=c.mirror,v=c.tickMargin,b=d?-1:1,g=t.tickSize||y,m=(0,p.Et)(t.tickCoord)?t.tickCoord:t.coordinate;switch(h){case"top":e=r=t.coordinate,a=(n=(i=s+ +!d*f)-b*g)-b*v,o=m;break;case"left":n=i=t.coordinate,o=(e=(r=l+ +!d*u)-b*g)-b*v,a=m;break;case"right":n=i=t.coordinate,o=(e=(r=l+ +d*u)+b*g)+b*v,a=m;break;default:e=r=t.coordinate,a=(n=(i=s+ +d*f)+b*g)+b*v,o=m}return{line:{x1:e,y1:n,x2:r,y2:i},tick:{x:o,y:a}}}},{key:"getTickTextAnchor",value:function(){var t,e=this.props,r=e.orientation,n=e.mirror;switch(r){case"left":t=n?"start":"end";break;case"right":t=n?"end":"start";break;default:t="middle"}return t}},{key:"getTickVerticalAnchor",value:function(){var t=this.props,e=t.orientation,r=t.mirror,n="end";switch(e){case"left":case"right":n="middle";break;case"top":n=r?"start":"end";break;default:n=r?"end":"start"}return n}},{key:"renderAxisLine",value:function(){var t=this.props,e=t.x,r=t.y,i=t.width,o=t.height,a=t.orientation,s=t.mirror,u=t.axisLine,f=x(x(x({},(0,d.J9)(this.props,!1)),(0,d.J9)(u,!1)),{},{fill:"none"});if("top"===a||"bottom"===a){var h=+("top"===a&&!s||"bottom"===a&&s);f=x(x({},f),{},{x1:e,y1:r+h*o,x2:e+i,y2:r+h*o})}else{var p=+("left"===a&&!s||"right"===a&&s);f=x(x({},f),{},{x1:e+p*i,y1:r,x2:e+p*i,y2:r+o})}return n.createElement("line",O({},f,{className:(0,l.A)("recharts-cartesian-axis-line",c()(u,"className"))}))}},{key:"renderTicks",value:function(t,r,i){var a=this,s=this.props,f=s.tickLine,h=s.stroke,p=s.tick,b=s.tickFormatter,g=s.unit,m=(0,v.f)(x(x({},this.props),{},{ticks:t}),r,i),w=this.getTickTextAnchor(),k=this.getTickVerticalAnchor(),j=(0,d.J9)(this.props,!1),P=(0,d.J9)(p,!1),S=x(x({},j),{},{fill:"none"},(0,d.J9)(f,!1)),E=m.map((function(t,r){var i=a.getTickLineCoord(t),s=i.line,d=i.tick,v=x(x(x(x({textAnchor:w,verticalAnchor:k},j),{},{stroke:"none",fill:h},P),d),{},{index:r,payload:t,visibleTicksCount:m.length,tickFormatter:b});return n.createElement(u.W,O({className:"recharts-cartesian-axis-tick",key:"tick-".concat(t.value,"-").concat(t.coordinate,"-").concat(t.tickCoord)},(0,y.XC)(a.props,t,r)),f&&n.createElement("line",O({},S,s,{className:(0,l.A)("recharts-cartesian-axis-tick-line",c()(f,"className"))})),p&&e.renderTickItem(p,v,"".concat(o()(b)?b(t.value,r):t.value).concat(g||"")))}));return n.createElement("g",{className:"recharts-cartesian-axis-ticks"},E)}},{key:"render",value:function(){var t=this,e=this.props,r=e.axisLine,i=e.width,a=e.height,c=e.ticksGenerator,s=e.className;if(e.hide)return null;var f=this.props,p=f.ticks,y=j(f,m),d=p;return o()(c)&&(d=p&&p.length>0?c(this.props):c(y)),i<=0||a<=0||!d||!d.length?null:n.createElement(u.W,{className:(0,l.A)("recharts-cartesian-axis",s),ref:function(e){t.layerReference=e}},r&&this.renderAxisLine(),this.renderTicks(d,this.state.fontSize,this.state.letterSpacing),h.J.renderCallByParent(this.props))}}])&&P(r.prototype,i),a&&P(r,a),Object.defineProperty(r,"prototype",{writable:!1}),e}(n.Component);z(T,"displayName","CartesianAxis"),z(T,"defaultProps",{x:0,y:0,width:0,height:0,viewBox:{x:0,y:0,width:0,height:0},orientation:"bottom",ticks:[],stroke:"#666",tickLine:!0,axisLine:!0,tick:!0,mirror:!1,minTickGap:5,tickSize:6,tickMargin:2,interval:"preserveEnd"})},87734:(t,e,r)=>{r.d(e,{d:()=>z});var n=r(65043),i=r(11629),o=r.n(i),a=r(155),c=r(76307),l=r(240),s=r(20202),u=r(98854),f=r(57671),h=r(52103),p=["x1","y1","x2","y2","key"],y=["offset"];function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){g(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function g(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=d(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==d(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function m(){return m=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},m.apply(this,arguments)}function w(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var O=function(t){var e=t.fill;if(!e||"none"===e)return null;var r=t.fillOpacity,i=t.x,o=t.y,a=t.width,c=t.height;return n.createElement("rect",{x:i,y:o,width:a,height:c,stroke:"none",fill:e,fillOpacity:r,className:"recharts-cartesian-grid-bg"})};function k(t,e){var r;if(n.isValidElement(t))r=n.cloneElement(t,e);else if(o()(t))r=t(e);else{var i=e.x1,a=e.y1,c=e.x2,s=e.y2,u=e.key,f=w(e,p),h=(0,l.J9)(f,!1),d=(h.offset,w(h,y));r=n.createElement("line",m({},d,{x1:i,y1:a,x2:c,y2:s,fill:"none",key:u}))}return r}function x(t){var e=t.x,r=t.width,i=t.horizontal,o=void 0===i||i,a=t.horizontalPoints;if(!o||!a||!a.length)return null;var c=a.map((function(n,i){var a=b(b({},t),{},{x1:e,y1:n,x2:e+r,y2:n,key:"line-".concat(i),index:i});return k(o,a)}));return n.createElement("g",{className:"recharts-cartesian-grid-horizontal"},c)}function j(t){var e=t.y,r=t.height,i=t.vertical,o=void 0===i||i,a=t.verticalPoints;if(!o||!a||!a.length)return null;var c=a.map((function(n,i){var a=b(b({},t),{},{x1:n,y1:e,x2:n,y2:e+r,key:"line-".concat(i),index:i});return k(o,a)}));return n.createElement("g",{className:"recharts-cartesian-grid-vertical"},c)}function P(t){var e=t.horizontalFill,r=t.fillOpacity,i=t.x,o=t.y,a=t.width,c=t.height,l=t.horizontalPoints,s=t.horizontal;if(!(void 0===s||s)||!e||!e.length)return null;var u=l.map((function(t){return Math.round(t+o-o)})).sort((function(t,e){return t-e}));o!==u[0]&&u.unshift(0);var f=u.map((function(t,l){var s=!u[l+1]?o+c-t:u[l+1]-t;if(s<=0)return null;var f=l%e.length;return n.createElement("rect",{key:"react-".concat(l),y:t,x:i,height:s,width:a,stroke:"none",fill:e[f],fillOpacity:r,className:"recharts-cartesian-grid-bg"})}));return n.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},f)}function S(t){var e=t.vertical,r=void 0===e||e,i=t.verticalFill,o=t.fillOpacity,a=t.x,c=t.y,l=t.width,s=t.height,u=t.verticalPoints;if(!r||!i||!i.length)return null;var f=u.map((function(t){return Math.round(t+a-a)})).sort((function(t,e){return t-e}));a!==f[0]&&f.unshift(0);var h=f.map((function(t,e){var r=!f[e+1]?a+l-t:f[e+1]-t;if(r<=0)return null;var u=e%i.length;return n.createElement("rect",{key:"react-".concat(e),x:t,y:c,width:r,height:s,stroke:"none",fill:i[u],fillOpacity:o,className:"recharts-cartesian-grid-bg"})}));return n.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},h)}var E=function(t,e){var r=t.xAxis,n=t.width,i=t.height,o=t.offset;return(0,s.PW)((0,u.f)(b(b(b({},f.u.defaultProps),r),{},{ticks:(0,s.Rh)(r,!0),viewBox:{x:0,y:0,width:n,height:i}})),o.left,o.left+o.width,e)},A=function(t,e){var r=t.yAxis,n=t.width,i=t.height,o=t.offset;return(0,s.PW)((0,u.f)(b(b(b({},f.u.defaultProps),r),{},{ticks:(0,s.Rh)(r,!0),viewBox:{x:0,y:0,width:n,height:i}})),o.top,o.top+o.height,e)},C={horizontal:!0,vertical:!0,horizontalPoints:[],verticalPoints:[],stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[]};function z(t){var e,r,i,l,s,u,f=(0,h.yi)(),p=(0,h.rY)(),y=(0,h.hj)(),v=b(b({},t),{},{stroke:null!==(e=t.stroke)&&void 0!==e?e:C.stroke,fill:null!==(r=t.fill)&&void 0!==r?r:C.fill,horizontal:null!==(i=t.horizontal)&&void 0!==i?i:C.horizontal,horizontalFill:null!==(l=t.horizontalFill)&&void 0!==l?l:C.horizontalFill,vertical:null!==(s=t.vertical)&&void 0!==s?s:C.vertical,verticalFill:null!==(u=t.verticalFill)&&void 0!==u?u:C.verticalFill,x:(0,c.Et)(t.x)?t.x:y.left,y:(0,c.Et)(t.y)?t.y:y.top,width:(0,c.Et)(t.width)?t.width:y.width,height:(0,c.Et)(t.height)?t.height:y.height}),g=v.x,w=v.y,k=v.width,z=v.height,N=v.syncWithTicks,T=v.horizontalValues,D=v.verticalValues,B=(0,h.pj)(),F=(0,h.$G)();if(!(0,c.Et)(k)||k<=0||!(0,c.Et)(z)||z<=0||!(0,c.Et)(g)||g!==+g||!(0,c.Et)(w)||w!==+w)return null;var G=v.verticalCoordinatesGenerator||E,R=v.horizontalCoordinatesGenerator||A,_=v.horizontalPoints,L=v.verticalPoints;if((!_||!_.length)&&o()(R)){var I=T&&T.length,J=R({yAxis:F?b(b({},F),{},{ticks:I?T:F.ticks}):void 0,width:f,height:p,offset:y},!!I||N);(0,a.R)(Array.isArray(J),"horizontalCoordinatesGenerator should return Array but instead it returned [".concat(d(J),"]")),Array.isArray(J)&&(_=J)}if((!L||!L.length)&&o()(G)){var V=D&&D.length,W=G({xAxis:B?b(b({},B),{},{ticks:V?D:B.ticks}):void 0,width:f,height:p,offset:y},!!V||N);(0,a.R)(Array.isArray(W),"verticalCoordinatesGenerator should return Array but instead it returned [".concat(d(W),"]")),Array.isArray(W)&&(L=W)}return n.createElement("g",{className:"recharts-cartesian-grid"},n.createElement(O,{fill:v.fill,fillOpacity:v.fillOpacity,x:v.x,y:v.y,width:v.width,height:v.height}),n.createElement(x,m({},v,{offset:y,horizontalPoints:_,xAxis:B,yAxis:F})),n.createElement(j,m({},v,{offset:y,verticalPoints:L,xAxis:B,yAxis:F})),n.createElement(P,m({},v,{horizontalPoints:_})),n.createElement(S,m({},v,{verticalPoints:L})))}z.displayName="CartesianGrid"},52185:(t,e,r)=>{r.d(e,{W:()=>s});var n=r(65043),i=r(58387),o=r(52103),a=r(57671),c=r(20202);function l(){return l=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},l.apply(this,arguments)}var s=function(t){var e=t.xAxisId,r=(0,o.yi)(),s=(0,o.rY)(),u=(0,o.AF)(e);return null==u?null:n.createElement(a.u,l({},u,{className:(0,i.A)("recharts-".concat(u.axisType," ").concat(u.axisType),u.className),viewBox:{x:0,y:0,width:r,height:s},ticksGenerator:function(t){return(0,c.Rh)(t,!0)}}))};s.displayName="XAxis",s.defaultProps={allowDecimals:!0,hide:!1,orientation:"bottom",width:0,height:30,mirror:!1,xAxisId:0,tickCount:5,type:"category",padding:{left:0,right:0},allowDataOverflow:!1,scale:"auto",reversed:!1,allowDuplicatedCategory:!0}},6026:(t,e,r)=>{r.d(e,{h:()=>s});var n=r(65043),i=r(58387),o=r(52103),a=r(57671),c=r(20202);function l(){return l=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},l.apply(this,arguments)}var s=function(t){var e=t.yAxisId,r=(0,o.yi)(),s=(0,o.rY)(),u=(0,o.Nk)(e);return null==u?null:n.createElement(a.u,l({},u,{className:(0,i.A)("recharts-".concat(u.axisType," ").concat(u.axisType),u.className),viewBox:{x:0,y:0,width:r,height:s},ticksGenerator:function(t){return(0,c.Rh)(t,!0)}}))};s.displayName="YAxis",s.defaultProps={allowDuplicatedCategory:!0,allowDecimals:!0,hide:!1,orientation:"left",width:60,height:0,mirror:!1,yAxisId:0,tickCount:5,type:"number",padding:{top:0,bottom:0},allowDataOverflow:!1,scale:"auto",reversed:!1}},98854:(t,e,r)=>{r.d(e,{f:()=>d});var n=r(11629),i=r.n(n),o=r(76307),a=r(17213),c=r(6015),l=r(3831);function s(t,e,r){if(e<1)return[];if(1===e&&void 0===r)return t;for(var n=[],i=0;i<t.length;i+=e){if(void 0!==r&&!0!==r(t[i]))return;n.push(t[i])}return n}function u(t,e,r,n,i){if(t*e<t*n||t*e>t*i)return!1;var o=r();return t*(e-t*o/2-n)>=0&&t*(e+t*o/2-i)<=0}function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){y(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function y(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=f(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==f(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function d(t,e,r){var n=t.tick,f=t.ticks,h=t.viewBox,y=t.minTickGap,d=t.orientation,v=t.interval,b=t.tickFormatter,g=t.unit,m=t.angle;if(!f||!f.length||!n)return[];if((0,o.Et)(v)||c.m.isSsr)return function(t,e){return s(t,e+1)}(f,"number"===typeof v&&(0,o.Et)(v)?v:0);var w=[],O="top"===d||"bottom"===d?"width":"height",k=g&&"width"===O?(0,a.Pu)(g,{fontSize:e,letterSpacing:r}):{width:0,height:0},x=function(t,n){var o=i()(b)?b(t.value,n):t.value;return"width"===O?function(t,e,r){var n={width:t.width+e.width,height:t.height+e.height};return(0,l.bx)(n,r)}((0,a.Pu)(o,{fontSize:e,letterSpacing:r}),k,m):(0,a.Pu)(o,{fontSize:e,letterSpacing:r})[O]},j=f.length>=2?(0,o.sA)(f[1].coordinate-f[0].coordinate):1,P=function(t,e,r){var n="width"===r,i=t.x,o=t.y,a=t.width,c=t.height;return 1===e?{start:n?i:o,end:n?i+a:o+c}:{start:n?i+a:o+c,end:n?i:o}}(h,j,O);return"equidistantPreserveStart"===v?function(t,e,r,n,i){for(var o,a=(n||[]).slice(),c=e.start,l=e.end,f=0,h=1,p=c,y=function(){var e=null===n||void 0===n?void 0:n[f];if(void 0===e)return{v:s(n,h)};var o,a=f,y=function(){return void 0===o&&(o=r(e,a)),o},d=e.coordinate,v=0===f||u(t,d,y,p,l);v||(f=0,p=c,h+=1),v&&(p=d+t*(y()/2+i),f+=h)};h<=a.length;)if(o=y())return o.v;return[]}(j,P,x,f,y):(w="preserveStart"===v||"preserveStartEnd"===v?function(t,e,r,n,i,o){var a=(n||[]).slice(),c=a.length,l=e.start,s=e.end;if(o){var f=n[c-1],h=r(f,c-1),y=t*(f.coordinate+t*h/2-s);a[c-1]=f=p(p({},f),{},{tickCoord:y>0?f.coordinate-y*t:f.coordinate}),u(t,f.tickCoord,(function(){return h}),l,s)&&(s=f.tickCoord-t*(h/2+i),a[c-1]=p(p({},f),{},{isShow:!0}))}for(var d=o?c-1:c,v=function(e){var n,o=a[e],c=function(){return void 0===n&&(n=r(o,e)),n};if(0===e){var f=t*(o.coordinate-t*c()/2-l);a[e]=o=p(p({},o),{},{tickCoord:f<0?o.coordinate-f*t:o.coordinate})}else a[e]=o=p(p({},o),{},{tickCoord:o.coordinate});u(t,o.tickCoord,c,l,s)&&(l=o.tickCoord+t*(c()/2+i),a[e]=p(p({},o),{},{isShow:!0}))},b=0;b<d;b++)v(b);return a}(j,P,x,f,y,"preserveStartEnd"===v):function(t,e,r,n,i){for(var o=(n||[]).slice(),a=o.length,c=e.start,l=e.end,s=function(e){var n,s=o[e],f=function(){return void 0===n&&(n=r(s,e)),n};if(e===a-1){var h=t*(s.coordinate+t*f()/2-l);o[e]=s=p(p({},s),{},{tickCoord:h>0?s.coordinate-h*t:s.coordinate})}else o[e]=s=p(p({},s),{},{tickCoord:s.coordinate});u(t,s.tickCoord,f,c,l)&&(l=s.tickCoord-t*(f()/2+i),o[e]=p(p({},s),{},{isShow:!0}))},f=a-1;f>=0;f--)s(f);return o}(j,P,x,f,y),w.filter((function(t){return t.isShow})))}}}]);
//# sourceMappingURL=4581.41480fcf.chunk.js.map