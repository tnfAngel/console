"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[8350],{16502:function(e,n,t){t(72791);var a=t(11135),l=t(25787),r=t(80184);n.Z=(0,l.Z)((function(e){return(0,a.Z)({headerContainer:{backgroundColor:"#e78794",borderRadius:3,marginBottom:20,padding:1,paddingBottom:15},labelHeadline:{color:"#000000",fontSize:14,marginLeft:20},labelText:{color:"#000000",fontSize:14,marginLeft:20,marginRight:40}})}))((function(e){var n=e.classes,t=e.label,a=e.title;return(0,r.jsxs)("div",{className:n.headerContainer,children:[(0,r.jsx)("h4",{className:n.labelHeadline,children:a}),(0,r.jsx)("div",{className:n.labelText,children:t})]})}))},78350:function(e,n,t){t.r(n);var a=t(29439),l=t(72791),r=t(51691),i=t(60364),s=t(42649),o=t(21435),c=t(61889),d=t(9505),u=t(2148),m=t(62410),f=t(16502),h=t(37516),p=t(80184),x=(0,i.$j)(null,{setErrorSnackMessage:s.Ih});n.default=x((function(e){var n=e.deleteOpen,t=e.selectedTenant,i=e.closeDeleteModalAndRefresh,s=e.setErrorSnackMessage,x=(0,l.useState)(""),b=(0,a.Z)(x,2),g=b[0],j=b[1],v=(0,l.useState)(!1),Z=(0,a.Z)(v,2),C=Z[0],T=Z[1],k=(0,d.Z)((function(){return i(!0)}),(function(e){return s(e)})),D=(0,a.Z)(k,2),E=D[0],N=D[1];return(0,p.jsx)(u.Z,{title:"Delete Tenant",confirmText:"Delete",isOpen:n,titleIcon:(0,p.jsx)(m.NvT,{}),isLoading:E,onConfirm:function(){g===t.name?N("DELETE","/api/v1/namespaces/".concat(t.namespace,"/tenants/").concat(t.name),{delete_pvcs:C}):s({errorMessage:"Tenant name is incorrect",detailedError:""})},onClose:function(){return i(!1)},confirmButtonProps:{disabled:g!==t.name||E},confirmationContent:(0,p.jsxs)(r.Z,{children:[C&&(0,p.jsx)(c.ZP,{item:!0,xs:12,children:(0,p.jsx)(f.Z,{title:"WARNING",label:"Delete Volumes: Data will be permanently deleted. Please proceed with caution."})}),"To continue please type ",(0,p.jsx)("b",{children:t.name})," in the box.",(0,p.jsxs)(c.ZP,{item:!0,xs:12,children:[(0,p.jsx)(o.Z,{id:"retype-tenant",name:"retype-tenant",onChange:function(e){j(e.target.value)},label:"",value:g}),(0,p.jsx)("br",{}),(0,p.jsx)(h.Z,{checked:C,id:"delete-volumes",label:"Delete Volumes",name:"delete-volumes",onChange:function(){T(!C)},value:C})]})]})})}))}}]);
//# sourceMappingURL=8350.4570a88e.chunk.js.map