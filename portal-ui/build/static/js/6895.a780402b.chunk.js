"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[6895],{66895:function(e,n,t){t.r(n);var a=t(29439),i=t(1413),r=t(72791),o=t(79271),c=t(91523),s=t(60364),l=t(11135),u=t(25787),d=t(61889),f=t(81207),b=t(23814),p=t(32291),m=t(14917),h=t(20068),x=t(13400),v=t(64554),Z=t(28789),T=t(56087),C=t(74794),E=t(50276),j=t(84669),_=t(38442),N=t(75578),k=t(40603),y=t(51047),g=t(87995),F=t(9859),P=t(80184),I=r.lazy((function(){return Promise.resolve().then(t.bind(t,37746))})),A=r.lazy((function(){return Promise.resolve().then(t.bind(t,56673))})),S=(0,N.Z)(r.lazy((function(){return t.e(9968).then(t.bind(t,39968))}))),w=(0,N.Z)(r.lazy((function(){return Promise.all([t.e(5171),t.e(2983),t.e(2180)]).then(t.bind(t,47494))}))),R=(0,N.Z)(r.lazy((function(){return Promise.all([t.e(5171),t.e(2983),t.e(8253)]).then(t.bind(t,84738))}))),U=(0,N.Z)(r.lazy((function(){return t.e(3328).then(t.bind(t,63328))}))),B=(0,N.Z)(r.lazy((function(){return Promise.all([t.e(5171),t.e(2983),t.e(1440)]).then(t.bind(t,25702))}))),M=(0,N.Z)(r.lazy((function(){return Promise.all([t.e(5171),t.e(2983),t.e(9179)]).then(t.bind(t,32512))}))),O=(0,N.Z)(r.lazy((function(){return Promise.all([t.e(5171),t.e(6484),t.e(2983),t.e(51)]).then(t.bind(t,51))})));n.default=(0,u.Z)((function(e){return(0,l.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)({pageContainer:{height:"100%"},screenTitle:{border:0,paddingTop:0}},b.Bw),b.qg),{},{capitalize:{textTransform:"capitalize"}},b.bp),b.Si),(0,b.Bz)(e.spacing(4))))}))((function(e){var n=e.classes,t=e.match,i=e.history,l=(0,s.I0)(),u=(0,s.v9)(g.N5),b=(0,s.v9)(F.HQ),N=(0,s.v9)(F.G6),z=(0,s.v9)(g.gw),L=(0,r.useState)(!1),G=(0,a.Z)(L,2),D=G[0],W=G[1],H=(0,r.useState)(!1),K=(0,a.Z)(H,2),Y=K[0],Q=K[1],q=t.params.bucketName,J=null===t||void 0===t?void 0:t.params[0];J=J||"summary";var V=(0,r.useState)(J),X=(0,a.Z)(V,2),$=X[0],ee=X[1];(0,r.useEffect)((function(){ee(J)}),[J]),(0,r.useEffect)((function(){D||(l((0,F.d5)(!0)),W(!0))}),[D,l,W]),(0,r.useEffect)((function(){b&&f.Z.invoke("GET","/api/v1/buckets/".concat(q)).then((function(e){l((0,F.d5)(!1)),l((0,F.f4)(e))})).catch((function(e){l((0,F.d5)(!1)),l((0,g.Ih)(e))}))}),[q,b,l]);var ne="/buckets/".concat(q),te={events:"/admin/events",replication:"/admin/replication",lifecycle:"/admin/lifecycle",access:"/admin/access",prefix:"/admin/prefix"},ae=function(e){var n=te[e];return n=n?"".concat(ne).concat(n):"".concat(ne).concat("/admin/summary")};return(0,P.jsxs)(r.Fragment,{children:[Y&&(0,P.jsx)(S,{deleteOpen:Y,selectedBucket:q,closeDeleteModalAndRefresh:function(e){!function(e){Q(!1),e&&i.push("/buckets")}(e)}}),(0,P.jsx)(p.Z,{label:(0,P.jsx)(j.Z,{to:"/buckets",label:"Buckets"}),actions:(0,P.jsx)(r.Fragment,{children:(0,P.jsx)(h.Z,{title:"Browse Bucket",children:(0,P.jsx)(x.Z,{color:"primary","aria-label":"Browse Bucket",component:"span",onClick:function(){i.push("/buckets/".concat(q,"/browse"))},size:"large",children:(0,P.jsx)(A,{})})})})}),(0,P.jsxs)(C.Z,{className:n.pageContainer,children:[(0,P.jsx)(d.ZP,{item:!0,xs:12,children:(0,P.jsx)(m.Z,{classes:{screenTitle:n.screenTitle},icon:(0,P.jsx)(r.Fragment,{children:(0,P.jsx)(I,{width:40})}),title:q,subTitle:(0,P.jsxs)(_.s,{scopes:[T.Ft.S3_GET_BUCKET_POLICY],resource:q,children:[(0,P.jsx)("span",{style:{fontSize:15},children:"Access: "}),(0,P.jsx)("span",{className:n.capitalize,style:{fontWeight:600,fontSize:15},children:null===N||void 0===N?void 0:N.access.toLowerCase()})]}),actions:(0,P.jsxs)(r.Fragment,{children:[(0,P.jsx)(_.s,{scopes:[T.Ft.S3_DELETE_BUCKET,T.Ft.S3_FORCE_DELETE_BUCKET],resource:q,errorProps:{disabled:!0},children:(0,P.jsx)(k.Z,{tooltip:"Delete Bucket",onClick:function(){Q(!0)},text:"Delete Bucket",icon:(0,P.jsx)(y.XHJ,{}),color:"secondary",variant:"outlined"})}),(0,P.jsx)(k.Z,{onClick:function(){l((0,F.d5)(!0))},text:"Refresh",icon:(0,P.jsx)(Z.default,{}),color:"primary"})]})})}),(0,P.jsx)(v.Z,{sx:{border:"1px solid #eaeaea"},children:(0,P.jsxs)(E.Z,{selectedTab:$,isRouteTabs:!0,routes:(0,P.jsx)("div",{className:n.contentSpacer,children:(0,P.jsx)(o.F0,{history:i,children:(0,P.jsxs)(o.rs,{children:[(0,P.jsx)(o.AW,{exact:!0,path:"/buckets/:bucketName/admin/summary",component:U}),(0,P.jsx)(o.AW,{exact:!0,path:"/buckets/:bucketName/admin/events",component:B}),u&&(0,P.jsx)(o.AW,{exact:!0,path:"/buckets/:bucketName/admin/replication",component:M}),u&&(0,P.jsx)(o.AW,{exact:!0,path:"/buckets/:bucketName/admin/lifecycle",component:O}),(0,P.jsx)(o.AW,{exact:!0,path:"/buckets/:bucketName/admin/access",component:R}),(0,P.jsx)(o.AW,{exact:!0,path:"/buckets/:bucketName/admin/prefix",component:w}),(0,P.jsx)(o.AW,{path:"/buckets/:bucketName",component:function(){return(0,P.jsx)(o.l_,{to:"/buckets/".concat(q,"/admin/summary")})}})]})})}),children:[{tabConfig:{label:"Summary",value:"summary",component:c.rU,to:ae("summary")}},{tabConfig:{label:"Events",value:"events",component:c.rU,disabled:!(0,_.F)(q,[T.Ft.S3_GET_BUCKET_NOTIFICATIONS,T.Ft.S3_PUT_BUCKET_NOTIFICATIONS]),to:ae("events")}},{tabConfig:{label:"Replication",value:"replication",component:c.rU,disabled:!u||z.enabled&&z.curSite||!(0,_.F)(q,[T.Ft.S3_GET_REPLICATION_CONFIGURATION,T.Ft.S3_PUT_REPLICATION_CONFIGURATION]),to:ae("replication")}},{tabConfig:{label:"Lifecycle",value:"lifecycle",component:c.rU,disabled:!u||!(0,_.F)(q,[T.Ft.S3_GET_LIFECYCLE_CONFIGURATION,T.Ft.S3_PUT_LIFECYCLE_CONFIGURATION]),to:ae("lifecycle")}},{tabConfig:{label:"Access Audit",value:"access",component:c.rU,disabled:!(0,_.F)(q,[T.Ft.ADMIN_GET_POLICY,T.Ft.ADMIN_LIST_USER_POLICIES,T.Ft.ADMIN_LIST_USERS]),to:ae("access")}},{tabConfig:{label:"Access Rules",value:"prefix",component:c.rU,disabled:!(0,_.F)(q,[T.Ft.S3_GET_BUCKET_POLICY]),to:ae("prefix")}}]})})]})]})}))},75578:function(e,n,t){var a=t(1413),i=t(72791),r=t(80184);n.Z=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;function t(t){return(0,r.jsx)(i.Suspense,{fallback:n,children:(0,r.jsx)(e,(0,a.Z)({},t))})}return t}},50276:function(e,n,t){var a=t(1413),i=t(29439),r=t(72791),o=t(64554),c=t(43896),s=t(83449),l=t(47283),u=t(82851),d=t(25787),f=t(13967),b=t(11135),p=t(95193),m=t(80184),h={minHeight:60};n.Z=(0,d.Z)((function(e){return(0,b.Z)({tabsContainer:{display:"flex",height:"100%",width:"100%"},tabsHeaderContainer:{width:"300px",background:"#F8F8F8",borderRight:"1px solid #EAEAEA","& .MuiTabs-root":{"& .MuiTabs-indicator":{display:"none"},"& .MuiTab-root":{display:"flex",flexFlow:"row",alignItems:"center",justifyContent:"flex-start",borderBottom:"1px solid #EAEAEA","& .MuiSvgIcon-root":{marginRight:8,marginBottom:0},"&.Mui-selected":{background:"#E5E5E5",fontWeight:600}},"&. MuiTabs-scroller":{display:"none"}}},tabContentContainer:{width:"100%","& .MuiTabPanel-root":{height:"100%"}},tabPanel:{height:"100%"},"@media (max-width: 900px)":{tabsContainer:{flexFlow:"column",flexDirection:"column"},tabsHeaderContainer:{width:"100%",borderBottom:" 1px solid #EAEAEA","& .MuiTabs-root .MuiTabs-scroller .MuiButtonBase-root":{borderBottom:" 0px"}}}})}))((function(e){var n=e.children,t=e.classes,d=e.selectedTab,b=void 0===d?"0":d,x=e.routes,v=e.isRouteTabs,Z=r.useState(b),T=(0,i.Z)(Z,2),C=T[0],E=T[1],j=(0,f.Z)(),_=(0,p.Z)(j.breakpoints.down("md")),N=[],k=[];return n?(n.forEach((function(e){N.push(e.tabConfig),k.push(e.content)})),(0,m.jsx)(s.ZP,{value:"".concat(C),children:(0,m.jsxs)(o.Z,{className:t.tabsContainer,children:[(0,m.jsx)(o.Z,{className:t.tabsHeaderContainer,children:(0,m.jsx)(l.Z,{onChange:function(e,n){E(n)},orientation:_?"horizontal":"vertical",variant:_?"scrollable":"standard",scrollButtons:"auto",className:t.tabList,children:N.map((function(e,n){return e?(0,m.jsx)(c.Z,(0,a.Z)((0,a.Z)({className:t.tabHeader,value:"".concat(n),style:h},e),{},{disableRipple:!0,disableTouchRipple:!0,focusRipple:!0}),"v-tab-".concat(n)):null}))})}),(0,m.jsxs)(o.Z,{className:t.tabContentContainer,children:[v?null:k.map((function(e,n){return(0,m.jsx)(u.Z,{classes:(0,a.Z)({},t.tabPanel),value:"".concat(n),children:e||null},"v-tab-p-".concat(n))})),v?(0,m.jsx)("div",{className:t.tabPanel,children:x}):null]})]})})):null}))},83449:function(e,n,t){t.d(n,{ZP:function(){return c},_i:function(){return s},pQ:function(){return u},uU:function(){return l}});var a=t(29439),i=t(72791),r=t(80184),o=i.createContext(null);function c(e){var n=e.children,t=e.value,c=function(){var e=i.useState(null),n=(0,a.Z)(e,2),t=n[0],r=n[1];return i.useEffect((function(){r("mui-p-".concat(Math.round(1e5*Math.random())))}),[]),t}(),s=i.useMemo((function(){return{idPrefix:c,value:t}}),[c,t]);return(0,r.jsx)(o.Provider,{value:s,children:n})}function s(){return i.useContext(o)}function l(e,n){return null===e.idPrefix?null:"".concat(e.idPrefix,"-P-").concat(n)}function u(e,n){return null===e.idPrefix?null:"".concat(e.idPrefix,"-T-").concat(n)}},47283:function(e,n,t){var a=t(87462),i=t(63366),r=t(72791),o=t(18073),c=t(83449),s=t(80184),l=["children"],u=r.forwardRef((function(e,n){var t=e.children,u=(0,i.Z)(e,l),d=(0,c._i)();if(null===d)throw new TypeError("No TabContext provided");var f=r.Children.map(t,(function(e){return r.isValidElement(e)?r.cloneElement(e,{"aria-controls":(0,c.uU)(d,e.props.value),id:(0,c.pQ)(d,e.props.value)}):null}));return(0,s.jsx)(o.Z,(0,a.Z)({},u,{ref:n,value:d.value,children:f}))}));n.Z=u},82851:function(e,n,t){t.d(n,{Z:function(){return h}});var a=t(87462),i=t(63366),r=t(72791),o=t(28182),c=t(66934),s=t(31402),l=t(94419),u=t(21217);function d(e){return(0,u.Z)("MuiTabPanel",e)}(0,t(75878).Z)("MuiTabPanel",["root"]);var f=t(83449),b=t(80184),p=["children","className","value"],m=(0,c.ZP)("div",{name:"MuiTabPanel",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(e){return{padding:e.theme.spacing(3)}})),h=r.forwardRef((function(e,n){var t=(0,s.Z)({props:e,name:"MuiTabPanel"}),r=t.children,c=t.className,u=t.value,h=(0,i.Z)(t,p),x=(0,a.Z)({},t),v=function(e){var n=e.classes;return(0,l.Z)({root:["root"]},d,n)}(x),Z=(0,f._i)();if(null===Z)throw new TypeError("No TabContext provided");var T=(0,f.uU)(Z,u),C=(0,f.pQ)(Z,u);return(0,b.jsx)(m,(0,a.Z)({"aria-labelledby":C,className:(0,o.Z)(v.root,c),hidden:u!==Z.value,id:T,ref:n,role:"tabpanel",ownerState:x},h,{children:u===Z.value&&r}))}))}}]);
//# sourceMappingURL=6895.a780402b.chunk.js.map