"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[9033],{24065:function(e,t,n){n.r(t),n.d(t,{default:function(){return B}});var s=n(29439),o=n(1413),r=n(72791),a=n(60364),i=n(11135),c=n(61889),l=n(81207),u=n(64554),d=n(62410),h=n(92983),x=n(21639),f=n(32291),m=n(23814),p=n(25787),Z=n(56028),j=n(21435),v=n(36151),g=n(40986),w=n(3579),S=n(20165),y=n(87995),b=n(80184),C=(0,p.Z)((function(e){return(0,i.Z)((0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)({},m.ID),m.DF),m.bK),(0,m.Bz)(e.spacing(4))))}))((function(e){var t=e.classes,n=e.open,o=e.closeModal,i=(0,a.I0)(),u=(0,r.useState)(""),h=(0,s.Z)(u,2),x=h[0],f=h[1],m=(0,r.useState)(""),p=(0,s.Z)(m,2),C=p[0],A=p[1],P=(0,r.useState)(""),I=(0,s.Z)(P,2),k=I[0],N=I[1],F=(0,r.useState)(!1),E=(0,s.Z)(F,2),R=E[0],_=E[1],D=(0,r.useState)(!1),M=(0,s.Z)(D,2),T=M[0],O=M[1],z=localStorage.getItem("userLoggedIn")||"";return n?(0,b.jsxs)(Z.Z,{title:"Change Password for ".concat(z),modalOpen:n,onClose:function(){A(""),N(""),f(""),o()},titleIcon:(0,b.jsx)(d.IaT,{}),children:[(0,b.jsx)("div",{children:"This will change your Console password. Please note your new password down, as it will be required to log into Console after this session."}),(0,b.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){!function(e){if(e.preventDefault(),C===k){if(C.length<8)i((0,y.zb)({errorMessage:"Passwords must be at least 8 characters long",detailedError:""}));else if(!R){_(!0);var t={current_secret_key:x,new_secret_key:C};l.Z.invoke("POST","/api/v1/account/change-password",t).then((function(){_(!1),A(""),N(""),f(""),o()})).catch((function(e){_(!1),A(""),N(""),f(""),i((0,y.zb)(e))}))}}else i((0,y.zb)({errorMessage:"New passwords don't match",detailedError:""}))}(e)},children:(0,b.jsxs)(c.ZP,{container:!0,children:[(0,b.jsxs)(c.ZP,{item:!0,xs:12,className:t.modalFormScrollable,children:[(0,b.jsx)(c.ZP,{item:!0,xs:12,className:t.formFieldRow,children:(0,b.jsx)(j.Z,{id:"current-password",name:"current-password",onChange:function(e){f(e.target.value)},label:"Current Password",type:T?"text":"password",value:x,overlayAction:function(){return O(!T)},overlayIcon:T?(0,b.jsx)(S.Z,{}):(0,b.jsx)(w.Z,{})})}),(0,b.jsx)(c.ZP,{item:!0,xs:12,className:t.formFieldRow,children:(0,b.jsx)(j.Z,{id:"new-password",name:"new-password",onChange:function(e){A(e.target.value)},label:"New Password",type:T?"text":"password",value:C,overlayAction:function(){return O(!T)},overlayIcon:T?(0,b.jsx)(S.Z,{}):(0,b.jsx)(w.Z,{})})}),(0,b.jsx)(c.ZP,{item:!0,xs:12,className:t.formFieldRow,children:(0,b.jsx)(j.Z,{id:"re-new-password",name:"re-new-password",onChange:function(e){N(e.target.value)},label:"Type New Password Again",type:T?"text":"password",value:k,overlayAction:function(){return O(!T)},overlayIcon:T?(0,b.jsx)(S.Z,{}):(0,b.jsx)(w.Z,{})})})]}),(0,b.jsx)(c.ZP,{item:!0,xs:12,className:t.modalButtonBar,children:(0,b.jsx)(v.Z,{type:"submit",variant:"contained",color:"primary",disabled:R||!(x.length>0&&C.length>0&&k.length>0),children:"Save"})}),R&&(0,b.jsx)(c.ZP,{item:!0,xs:12,children:(0,b.jsx)(g.Z,{})})]})})]}):null})),A=n(23804),P=n(74794),I=n(59114),k=n(75578),N=n(56087),F=n(38442),E=n(40603),R=n(58493),_=n(18303),D=n(14048),M=n(72455),T=n(46078),O=(0,k.Z)(r.lazy((function(){return n.e(3956).then(n.bind(n,23956))}))),z=(0,M.Z)((function(e){return(0,i.Z)((0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)({},m.OR),m.qg),{},{searchField:(0,o.Z)((0,o.Z)({},m.qg.searchField),{},{marginRight:"auto",maxWidth:380})},m.VX),(0,m.Bz)(e.spacing(4))))})),B=function(e){var t=e.history,n=(0,a.I0)(),o=z(),i=(0,a.v9)(T.$4),m=(0,r.useState)([]),p=(0,s.Z)(m,2),Z=p[0],j=p[1],v=(0,r.useState)(!1),g=(0,s.Z)(v,2),w=g[0],S=g[1],k=(0,r.useState)(""),M=(0,s.Z)(k,2),B=M[0],L=M[1],V=(0,r.useState)(!1),q=(0,s.Z)(V,2),K=q[0],U=q[1],G=(0,r.useState)(null),J=(0,s.Z)(G,2),W=J[0],X=J[1],Y=(0,r.useState)(!1),$=(0,s.Z)(Y,2),H=$[0],Q=$[1],ee=(0,r.useState)([]),te=(0,s.Z)(ee,2),ne=te[0],se=te[1],oe=(0,r.useState)(!1),re=(0,s.Z)(oe,2),ae=re[0],ie=re[1],ce=(0,r.useState)(!1),le=(0,s.Z)(ce,2),ue=le[0],de=le[1],he=i&&i.includes("external-idp")||!1;(0,r.useEffect)((function(){xe()}),[]),(0,r.useEffect)((function(){w&&l.Z.invoke("GET","/api/v1/service-accounts").then((function(e){var t=e.sort(x.V2);S(!1),j(t)})).catch((function(e){n((0,y.Ih)(e)),S(!1)}))}),[w,S,j,n]);var xe=function(){S(!0)},fe=[{type:"view",onClick:function(e){X(e),de(!0)}},{type:"delete",onClick:function(e){X(e),U(!0)}}],me=Z.filter((function(e){return e.toLowerCase().includes(B.toLowerCase())}));return(0,b.jsxs)(r.Fragment,{children:[K&&(0,b.jsx)(O,{deleteOpen:K,selectedServiceAccount:W,closeDeleteModalAndRefresh:function(e){!function(e){U(!1),e&&xe()}(e)}}),ae&&(0,b.jsx)(_.Z,{deleteOpen:ae,selectedSAs:ne,closeDeleteModalAndRefresh:function(e){ie(!1),e&&(n((0,y.y1)("Service accounts deleted successfully.")),se([]),S(!0))}}),ue&&(0,b.jsx)(D.Z,{open:ue,selectedAccessKey:W,closeModalAndRefresh:function(){de(!1),S(!0)}}),(0,b.jsx)(C,{open:H,closeModal:function(){return Q(!1)}}),(0,b.jsx)(f.Z,{label:"Service Accounts"}),(0,b.jsxs)(P.Z,{children:[(0,b.jsxs)(c.ZP,{item:!0,xs:12,className:o.actionsTray,children:[(0,b.jsx)(I.Z,{placeholder:"Search Service Accounts",onChange:L,overrideClass:o.searchField,value:B}),(0,b.jsxs)(u.Z,{sx:{display:"flex"},children:[" ",(0,b.jsx)(E.Z,{tooltip:"Delete Selected",onClick:function(){ie(!0)},text:"Delete Selected",icon:(0,b.jsx)(d.pJl,{}),color:"secondary",disabled:0===ne.length,variant:"outlined"}),(0,b.jsx)(F.s,{scopes:[N.Ft.ADMIN_CREATE_USER],resource:N.C3,matchAll:!0,errorProps:{disabled:!0},children:(0,b.jsx)(E.Z,{onClick:function(){return Q(!0)},text:"Change Password",icon:(0,b.jsx)(d.tvm,{}),color:"primary",variant:"outlined",disabled:he})}),(0,b.jsx)(E.Z,{onClick:function(e){t.push("".concat(N.gA.ACCOUNT_ADD))},text:"Create service account",icon:(0,b.jsx)(d.dtP,{}),color:"primary",variant:"contained"})]})]}),(0,b.jsx)(c.ZP,{item:!0,xs:12,className:o.tableBlock,children:(0,b.jsx)(h.Z,{isLoading:w,records:me,entityName:"Service Accounts",idField:"",columns:[{label:"Service Account",elementKey:""}],itemActions:fe,selectedItems:ne,onSelect:function(e){return(0,R._0)(e,se,ne)},onSelectAll:function(){ne.length!==Z.length?se(Z):se([])}})}),(0,b.jsx)(c.ZP,{item:!0,xs:12,marginTop:"15px",children:(0,b.jsx)(A.Z,{title:"Learn more about SERVICE ACCOUNTS",iconComponent:(0,b.jsx)(d.frP,{}),help:(0,b.jsxs)(r.Fragment,{children:["MinIO service accounts are child identities of an authenticated MinIO user, including externally managed identities. Each service account inherits its privileges based on the policies attached to it\u2019s parent user or those groups in which the parent user has membership. Service accounts also support an optional inline policy which further restricts access to a subset of actions and resources available to the parent user.",(0,b.jsx)("br",{}),(0,b.jsx)("br",{}),"You can learn more at our"," ",(0,b.jsx)("a",{href:"https://docs.min.io/minio/baremetal/security/minio-identity-management/user-management.html?ref=con#service-accounts",target:"_blank",rel:"noreferrer",children:"documentation"}),"."]})})})]})]})}}}]);
//# sourceMappingURL=9033.481de2bd.chunk.js.map