"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[4061,8896,9134],{64163:function(e,n,t){var i=t(1413),s=t(72791),o=t(61889),l=t(11135),r=t(25787),a=t(23814),c=t(80184);n.Z=(0,r.Z)((function(e){return(0,l.Z)((0,i.Z)({},a.xx))}))((function(e){var n=e.classes,t=e.label,i=void 0===t?"":t,l=e.content,r=e.multiLine,a=void 0!==r&&r,u=e.actionButton;return(0,c.jsx)(s.Fragment,{children:(0,c.jsxs)(o.ZP,{className:n.prefinedContainer,children:[""!==i&&(0,c.jsx)(o.ZP,{item:!0,xs:12,className:n.predefinedTitle,children:i}),(0,c.jsxs)(o.ZP,{item:!0,xs:12,className:"".concat(n.predefinedList," ").concat(u?n.includesActionButton:""),children:[(0,c.jsx)(o.ZP,{item:!0,xs:12,className:a?n.innerContentMultiline:n.innerContent,children:l}),u&&(0,c.jsx)("div",{className:n.overlayShareOption,children:u})]})]})})}))},56028:function(e,n,t){var i=t(29439),s=t(1413),o=t(72791),l=t(60364),r=t(13400),a=t(55646),c=t(5289),u=t(65661),d=t(39157),f=t(11135),h=t(25787),m=t(23814),x=t(81551),p=t(29823),Z=t(28057),v=t(87995),b=t(80184);n.Z=(0,h.Z)((function(e){return(0,f.Z)((0,s.Z)((0,s.Z)({},m.Qw),{},{content:{padding:25,paddingBottom:0},customDialogSize:{width:"100%",maxWidth:765}},m.sN))}))((function(e){var n=e.onClose,t=e.modalOpen,f=e.title,h=e.children,m=e.classes,j=e.wideLimit,g=void 0===j||j,P=e.noContentPadding,C=e.titleIcon,y=void 0===C?null:C,S=(0,x.TL)(),N=(0,o.useState)(!1),E=(0,i.Z)(N,2),T=E[0],M=E[1],k=(0,l.v9)((function(e){return e.system.modalSnackBar}));(0,o.useEffect)((function(){S((0,v.MK)(""))}),[S]),(0,o.useEffect)((function(){if(k){if(""===k.message)return void M(!1);"error"!==k.type&&M(!0)}}),[k]);var A=g?{classes:{paper:m.customDialogSize}}:{maxWidth:"lg",fullWidth:!0},L="";return k&&(L=k.detailedErrorMsg,(""===k.detailedErrorMsg||k.detailedErrorMsg.length<5)&&(L=k.message)),(0,b.jsxs)(c.Z,(0,s.Z)((0,s.Z)({open:t,classes:m},A),{},{scroll:"paper",onClose:function(e,t){"backdropClick"!==t&&n()},className:m.root,children:[(0,b.jsxs)(u.Z,{className:m.title,children:[(0,b.jsxs)("div",{className:m.titleText,children:[y," ",f]}),(0,b.jsx)("div",{className:m.closeContainer,children:(0,b.jsx)(r.Z,{"aria-label":"close",id:"close",className:m.closeButton,onClick:n,disableRipple:!0,size:"small",children:(0,b.jsx)(p.Z,{})})})]}),(0,b.jsx)(Z.Z,{isModal:!0}),(0,b.jsx)(a.Z,{open:T,className:m.snackBarModal,onClose:function(){M(!1),S((0,v.MK)(""))},message:L,ContentProps:{className:"".concat(m.snackBar," ").concat(k&&"error"===k.type?m.errorSnackBar:"")},autoHideDuration:k&&"error"===k.type?1e4:5e3}),(0,b.jsx)(d.Z,{className:P?"":m.content,children:h})]}))}))},60680:function(e,n,t){t(72791);var i=t(11135),s=t(25787),o=t(80184);n.Z=(0,s.Z)((function(e){return(0,i.Z)({root:{padding:0,margin:0,fontSize:".9rem"}})}))((function(e){var n=e.classes,t=e.children;return(0,o.jsx)("h1",{className:n.root,children:t})}))},14662:function(e,n,t){t.d(n,{Z:function(){return R}});var i=t(1413),s=t(29439),o=t(72791),l=t(64554),r=t(43896),a=t(80184),c=o.createContext(null);function u(e){var n=e.children,t=e.value,i=function(){var e=o.useState(null),n=(0,s.Z)(e,2),t=n[0],i=n[1];return o.useEffect((function(){i("mui-p-".concat(Math.round(1e5*Math.random())))}),[]),t}(),l=o.useMemo((function(){return{idPrefix:i,value:t}}),[i,t]);return(0,a.jsx)(c.Provider,{value:l,children:n})}function d(){return o.useContext(c)}function f(e,n){return null===e.idPrefix?null:"".concat(e.idPrefix,"-P-").concat(n)}function h(e,n){return null===e.idPrefix?null:"".concat(e.idPrefix,"-T-").concat(n)}var m=t(87462),x=t(63366),p=t(25228),Z=["children"],v=o.forwardRef((function(e,n){var t=e.children,i=(0,x.Z)(e,Z),s=d();if(null===s)throw new TypeError("No TabContext provided");var l=o.Children.map(t,(function(e){return o.isValidElement(e)?o.cloneElement(e,{"aria-controls":f(s,e.props.value),id:h(s,e.props.value)}):null}));return(0,a.jsx)(p.Z,(0,m.Z)({},i,{ref:n,value:s.value,children:l}))})),b=t(28182),j=t(66934),g=t(31402),P=t(94419),C=t(21217);function y(e){return(0,C.Z)("MuiTabPanel",e)}(0,t(75878).Z)("MuiTabPanel",["root"]);var S=["children","className","value"],N=(0,j.ZP)("div",{name:"MuiTabPanel",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(e){return{padding:e.theme.spacing(3)}})),E=o.forwardRef((function(e,n){var t=(0,g.Z)({props:e,name:"MuiTabPanel"}),i=t.children,s=t.className,o=t.value,l=(0,x.Z)(t,S),r=(0,m.Z)({},t),c=function(e){var n=e.classes;return(0,P.Z)({root:["root"]},y,n)}(r),u=d();if(null===u)throw new TypeError("No TabContext provided");var p=f(u,o),Z=h(u,o);return(0,a.jsx)(N,(0,m.Z)({"aria-labelledby":Z,className:(0,b.Z)(c.root,s),hidden:o!==u.value,id:p,ref:n,role:"tabpanel",ownerState:r},l,{children:o===u.value&&i}))})),T=t(25787),M=t(13967),k=t(11135),A=t(95193),L={minHeight:60},R=(0,T.Z)((function(e){return(0,k.Z)({tabsContainer:{display:"flex",height:"100%",width:"100%"},tabsHeaderContainer:{width:"300px",background:"#F8F8F8",borderRight:"1px solid #EAEAEA","& .MuiTabs-root":{"& .MuiTabs-indicator":{display:"none"},"& .MuiTab-root":{display:"flex",flexFlow:"row",alignItems:"center",justifyContent:"flex-start",borderBottom:"1px solid #EAEAEA","& .MuiSvgIcon-root":{marginRight:8,marginBottom:0},"&.Mui-selected":{background:"#E5E5E5",fontWeight:600}},"&. MuiTabs-scroller":{display:"none"}}},tabContentContainer:{width:"100%","& .MuiTabPanel-root":{height:"100%"}},tabPanel:{height:"100%"},"@media (max-width: 900px)":{tabsContainer:{flexFlow:"column",flexDirection:"column"},tabsHeaderContainer:{width:"100%",borderBottom:" 1px solid #EAEAEA","& .MuiTabs-root .MuiTabs-scroller .MuiButtonBase-root":{borderBottom:" 0px"}}}})}))((function(e){var n=e.children,t=e.classes,c=e.selectedTab,d=void 0===c?"0":c,f=e.routes,h=e.isRouteTabs,m=o.useState(d),x=(0,s.Z)(m,2),p=x[0],Z=x[1],b=(0,M.Z)(),j=(0,A.Z)(b.breakpoints.down("md")),g=[],P=[];return n?(n.forEach((function(e){g.push(e.tabConfig),P.push(e.content)})),(0,a.jsx)(u,{value:"".concat(p),children:(0,a.jsxs)(l.Z,{className:t.tabsContainer,children:[(0,a.jsx)(l.Z,{className:t.tabsHeaderContainer,children:(0,a.jsx)(v,{onChange:function(e,n){Z(n)},orientation:j?"horizontal":"vertical",variant:j?"scrollable":"standard",scrollButtons:"auto",className:t.tabList,children:g.map((function(e,n){return e?(0,a.jsx)(r.Z,(0,i.Z)((0,i.Z)({className:t.tabHeader,value:"".concat(n),style:L},e),{},{disableRipple:!0,disableTouchRipple:!0,focusRipple:!0}),"v-tab-".concat(n)):null}))})}),(0,a.jsxs)(l.Z,{className:t.tabContentContainer,children:[h?null:P.map((function(e,n){return(0,a.jsx)(E,{classes:(0,i.Z)({},t.tabPanel),value:"".concat(n),children:e||null},"v-tab-p-".concat(n))})),h?(0,a.jsx)("div",{className:t.tabPanel,children:f}):null]})]})})):null}))},88896:function(e,n,t){t.r(n);var i=t(37762),s=t(29439),o=(t(72791),t(51691)),l=t(46111),r=t(9505),a=t(23742),c=t(45248),u=t(87995),d=t(81551),f=t(80184);n.default=function(e){var n=e.selectedGroups,t=e.deleteOpen,h=e.closeDeleteModalAndRefresh,m=(0,d.TL)(),x=(0,r.Z)((function(){return h(!0)}),(function(e){m((0,u.Ih)(e)),h(!1)})),p=(0,s.Z)(x,2),Z=p[0],v=p[1];if(!n)return null;var b=n.map((function(e){return(0,f.jsx)("div",{children:(0,f.jsx)("b",{children:e})},e)}));return(0,f.jsx)(l.Z,{title:"Delete Group".concat(n.length>1?"s":""),confirmText:"Delete",isOpen:t,titleIcon:(0,f.jsx)(a.NvT,{}),isLoading:Z,onConfirm:function(){var e,t=(0,i.Z)(n);try{for(t.s();!(e=t.n()).done;){var s=e.value;v("DELETE","/api/v1/group/".concat((0,c.LL)(s)))}}catch(o){t.e(o)}finally{t.f()}},onClose:function(){return h(!1)},confirmationContent:(0,f.jsxs)(o.Z,{children:["Are you sure you want to delete the following ",n.length," ","group",n.length>1?"s?":"?",b]})})}},94061:function(e,n,t){t.r(n),t.d(n,{default:function(){return U},formatPolicy:function(){return O}});var i=t(29439),s=t(1413),o=t(72791),l=t(16871),r=t(11135),a=t(23814),c=t(25787),u=t(61889),d=t(14917),f=t(23742),h=t(92983),m=t(81207),x=t(39134),p=t(40228),Z=t(56028),v=t(64163),b=t(36151),j=t(45248),g=t(87995),P=t(81551),C=t(80184),y=(0,c.Z)((function(e){return(0,r.Z)((0,s.Z)((0,s.Z)((0,s.Z)({userSelector:{"& .MuiPaper-root":{padding:0,marginBottom:15}}},a.ID),a.DF),a.oO))}))((function(e){var n=e.classes,t=e.title,s=void 0===t?"":t,l=e.groupStatus,r=void 0===l?"enabled":l,a=e.preSelectedUsers,c=void 0===a?[]:a,d=e.selectedGroup,h=void 0===d?"":d,x=e.open,y=e.onClose,S=(0,P.TL)(),N=(0,o.useState)(c),E=(0,i.Z)(N,2),T=E[0],M=E[1];return(0,C.jsxs)(Z.Z,{modalOpen:x,onClose:y,title:s,titleIcon:(0,C.jsx)(f.ZmA,{}),children:[(0,C.jsx)(u.ZP,{container:!0,children:(0,C.jsxs)(u.ZP,{item:!0,xs:12,children:[(0,C.jsx)("div",{className:n.formFieldRow,children:(0,C.jsx)(v.Z,{label:"Selected Group",content:h})}),(0,C.jsx)("div",{className:n.userSelector,children:(0,C.jsx)(p.Z,{selectedUsers:T,setSelectedUsers:M,editMode:!h})})]})}),(0,C.jsxs)(u.ZP,{item:!0,xs:12,className:n.modalButtonBar,children:[(0,C.jsx)(b.Z,{type:"button",variant:"outlined",color:"primary",onClick:function(){M(c)},children:"Reset"}),(0,C.jsx)(b.Z,{type:"button",variant:"contained",color:"primary",onClick:function(){m.Z.invoke("PUT","/api/v1/group/".concat((0,j.LL)(h)),{group:h,members:T,status:r}).then((function(e){y()})).catch((function(e){y(),S((0,g.zb)(e))}))},children:"Save"})]})]})})),S=t(88896),N=t(14662),E=t(37516),T=t(74794),M=t(60680),k=t(59114),A=t(56087),L=t(38442),R=t(32291),w=t(84669),B=(0,c.Z)((function(e){return(0,r.Z)({})}))((function(e){e.classes;return(0,C.jsx)(R.Z,{label:(0,C.jsx)(o.Fragment,{children:(0,C.jsx)(w.Z,{to:A.gA.GROUPS,label:"Groups"})}),actions:(0,C.jsx)(o.Fragment,{})})})),F=t(40603),O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.length<=0?[]:e.split(",")},U=(0,c.Z)((function(e){return(0,r.Z)((0,s.Z)((0,s.Z)((0,s.Z)({pageContainer:{border:"1px solid #EAEAEA",width:"100%"},statusLabel:{fontSize:".8rem",marginRight:".7rem"},statusValue:{fontWeight:"bold",fontSize:".9rem",marginRight:".7rem"},searchField:(0,s.Z)((0,s.Z)({},a.qg.searchField),{},{maxWidth:280})},a.VX),a.bK),{},{actionsTray:(0,s.Z)((0,s.Z)({},a.OR.actionsTray),{},{alignItems:"center","& h1":{flex:1},"& button":{marginLeft:".8rem"},"@media (max-width: 900px)":{justifyContent:"flex-end","& h1":{display:"none"},"& button":{whiteSpace:"nowrap",textOverflow:"ellipsis"}}})},(0,a.Bz)(e.spacing(4))))}))((function(e){var n=e.classes,t=(0,P.TL)(),s=(0,l.s0)(),r=(0,l.UO)(),a=(0,o.useState)({}),c=(0,i.Z)(a,2),p=c[0],Z=c[1],v=(0,o.useState)(!1),b=(0,i.Z)(v,2),R=b[0],w=b[1],U=(0,o.useState)(!1),G=(0,i.Z)(U,2),D=G[0],I=G[1],_=(0,o.useState)(!1),z=(0,i.Z)(_,2),K=z[0],H=z[1],V=(0,o.useState)(""),W=(0,i.Z)(V,2),X=W[0],q=W[1],J=(0,j.IO)(r.groupName||""),Q=p.members,Y=void 0===Q?[]:Q,$=p.policy,ee=void 0===$?"":$,ne=p.status,te=Y.filter((function(e){return e.includes(X)}));(0,o.useEffect)((function(){J&&re()}),[J]);var ie=O(ee),se="enabled"===ne,oe=Y.length>0?"Edit Members":"Add Members",le=(0,L.F)(A.C3,[A.Ft.ADMIN_GET_GROUP]);function re(){le&&m.Z.invoke("GET","/api/v1/group/".concat((0,j.LL)(J))).then((function(e){Z(e)})).catch((function(e){t((0,g.zb)(e)),Z({})}))}var ae=(0,C.jsxs)(o.Fragment,{children:[(0,C.jsxs)("div",{className:n.actionsTray,children:[(0,C.jsx)(M.Z,{children:"Members"}),(0,C.jsx)(k.Z,{placeholder:"Search members",onChange:function(e){q(e)},overrideClass:n.searchField,value:X}),(0,C.jsx)(L.s,{resource:A.C3,scopes:[A.Ft.ADMIN_ADD_USER_TO_GROUP],errorProps:{disabled:!0},children:(0,C.jsx)(F.Z,{tooltip:oe,text:oe,variant:"contained",color:"primary",icon:(0,C.jsx)(f.dtP,{}),onClick:function(){I(!0)}})})]}),(0,C.jsx)("div",{className:n.tableBlock,children:(0,C.jsx)(L.s,{resource:A.C3,scopes:[A.Ft.ADMIN_LIST_USERS],errorProps:{disabled:!0},children:(0,C.jsx)(h.Z,{itemActions:[{type:"view",onClick:function(e){s("".concat(A.gA.USERS,"/").concat((0,j.LL)(e)))}}],columns:[{label:"Access Key",elementKey:""}],selectedItems:[],isLoading:!1,records:te,entityName:"Users",idField:""})})})]}),ce=(0,C.jsxs)(o.Fragment,{children:[(0,C.jsxs)("div",{className:n.actionsTray,children:[(0,C.jsx)(M.Z,{children:"Policies"}),(0,C.jsx)(F.Z,{tooltip:"Set Policies",text:"Set Policies",variant:"contained",color:"primary",icon:(0,C.jsx)(f.v42,{}),onClick:function(){w(!0)}})]}),(0,C.jsx)("div",{className:n.tableBlock,children:(0,C.jsx)(h.Z,{itemActions:[{type:"view",onClick:function(e){s("".concat(A.gA.POLICIES,"/").concat((0,j.LL)(e)))}}],columns:[{label:"Policy",elementKey:""}],isLoading:!1,records:ie,entityName:"Policies",idField:""})})]});return(0,C.jsxs)(o.Fragment,{children:[(0,C.jsx)(B,{}),(0,C.jsxs)(T.Z,{className:n.pageContainer,children:[(0,C.jsx)(u.ZP,{item:!0,xs:12,children:(0,C.jsx)(d.Z,{icon:(0,C.jsx)(o.Fragment,{children:(0,C.jsx)(f.wws,{width:40})}),title:J,subTitle:null,actions:(0,C.jsxs)(o.Fragment,{children:[(0,C.jsx)("span",{className:n.statusLabel,children:"Group Status:"}),(0,C.jsx)("span",{id:"group-status",className:n.statusValue,children:se?"Enabled":"Disabled"}),(0,C.jsx)(L.s,{resource:A.C3,scopes:[A.Ft.ADMIN_ENABLE_GROUP,A.Ft.ADMIN_DISABLE_GROUP],errorProps:{disabled:!0},matchAll:!0,children:(0,C.jsx)(E.Z,{indicatorLabels:["Enabled","Disabled"],checked:se,value:"group_enabled",id:"group-status",name:"group-status",onChange:function(){var e;e=!se,m.Z.invoke("PUT","/api/v1/group/".concat((0,j.LL)(J)),{group:J,members:Y,status:e?"enabled":"disabled"}).then((function(e){re()})).catch((function(e){t((0,g.zb)(e))}))},switchOnly:!0})}),(0,C.jsx)(L.s,{resource:A.C3,scopes:[A.Ft.ADMIN_REMOVE_USER_FROM_GROUP],errorProps:{disabled:!0},children:(0,C.jsx)("div",{className:n.spacerLeft,children:(0,C.jsx)(F.Z,{tooltip:"Delete Group",text:"",variant:"outlined",color:"secondary",icon:(0,C.jsx)(f.XHJ,{}),onClick:function(){H(!0)}})})})]})})}),(0,C.jsx)(u.ZP,{item:!0,xs:12,children:(0,C.jsxs)(N.Z,{children:[{tabConfig:{label:"Members"},content:ae},{tabConfig:{label:"Policies"},content:ce}]})})]}),R?(0,C.jsx)(x.default,{open:R,selectedGroups:[J],selectedUser:null,closeModalAndRefresh:function(){w(!1),re()}}):null,D?(0,C.jsx)(y,{selectedGroup:J,onSaveClick:function(){},title:oe,groupStatus:ne,preSelectedUsers:Y,open:D,onClose:function(){I(!1),re()}}):null,K&&(0,C.jsx)(S.default,{deleteOpen:K,selectedGroups:[J],closeDeleteModalAndRefresh:function(e){H(!1),e&&s(A.gA.GROUPS)}})]})}))},58400:function(e,n,t){var i=t(93433),s=t(29439),o=t(1413),l=t(72791),r=t(11135),a=t(25787),c=t(40986),u=t(61889),d=t(21639),f=t(23814),h=t(81207),m=t(92983),x=t(59114),p=t(87995),Z=t(81551),v=t(74616),b=t(60364),j=t(80184);n.Z=(0,a.Z)((function(e){return(0,r.Z)((0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)({noFound:{textAlign:"center",padding:"10px 0"},searchBox:{flex:1},fieldLabel:{fontWeight:400,width:160,marginRight:10},tableBlock:(0,o.Z)({},f.VX.tableBlock),filterBox:{display:"flex",marginBottom:15,alignItems:"center","& span":{fontSize:14}}},f.qg),f.VX),f.OR),f.jY))}))((function(e){var n=e.classes,t=(e.selectedPolicy,(0,Z.TL)()),o=(0,l.useState)([]),r=(0,s.Z)(o,2),a=r[0],f=r[1],g=(0,l.useState)(!1),P=(0,s.Z)(g,2),C=P[0],y=P[1],S=(0,l.useState)(""),N=(0,s.Z)(S,2),E=N[0],T=N[1],M=(0,b.v9)((function(e){return e.createUser.selectedPolicies})),k=(0,l.useCallback)((function(){y(!0),h.Z.invoke("GET","/api/v1/policies?limit=1000").then((function(e){var n=null===e.policies?[]:e.policies;y(!1),f(n.sort(d.g4))})).catch((function(e){y(!1),t((0,p.zb)(e))}))}),[t]);(0,l.useEffect)((function(){y(!0)}),[]),(0,l.useEffect)((function(){C&&k()}),[C,k]);var A=a.filter((function(e){return e.name.includes(E)}));return(0,j.jsx)(u.ZP,{container:!0,children:(0,j.jsxs)(u.ZP,{item:!0,xs:12,children:[C&&(0,j.jsx)(c.Z,{}),a.length>0?(0,j.jsxs)(l.Fragment,{children:[(0,j.jsxs)(u.ZP,{item:!0,xs:12,className:n.filterBox,children:[(0,j.jsx)("span",{className:n.fieldLabel,children:"Assign Policies"}),(0,j.jsx)("div",{className:n.searchBox,children:(0,j.jsx)(x.Z,{placeholder:"Start typing to search for a Policy",onChange:function(e){T(e)},value:E})})]}),(0,j.jsx)(u.ZP,{item:!0,xs:12,className:n.tableBlock,style:{paddingBottom:16},children:(0,j.jsx)(m.Z,{columns:[{label:"Policy",elementKey:"name"}],onSelect:function(e){var n=e.target,s=n.value,o=n.checked,l=(0,i.Z)(M);o?l.push(s):l=l.filter((function(e){return e!==s})),l=l.filter((function(e){return""!==e})),t((0,v.ue)(l))},selectedItems:M,isLoading:C,records:A,entityName:"Policies",idField:"name",customPaperHeight:n.multiSelectTable})})]}):(0,j.jsx)("div",{className:n.noFound,children:"No Policies Available"})]})})}))},39134:function(e,n,t){t.r(n);var i=t(29439),s=t(1413),o=t(72791),l=t(26181),r=t.n(l),a=t(11135),c=t(25787),u=t(36151),d=t(40986),f=t(61889),h=t(23814),m=t(56028),x=t(81207),p=t(58400),Z=t(64163),v=t(45248),b=t(87995),j=t(81551),g=t(60364),P=t(80184);n.default=(0,c.Z)((function(e){return(0,a.Z)((0,s.Z)((0,s.Z)((0,s.Z)({},h.oO),h.bK),{},{tableBlock:(0,s.Z)((0,s.Z)({},h.VX.tableBlock),{},{marginTop:15}),buttonContainer:{textAlign:"right",marginTop:".9rem"}}))}))((function(e){var n=e.classes,t=e.closeModalAndRefresh,s=e.selectedUser,l=e.selectedGroups,a=e.open,c=(0,j.TL)(),h=(0,o.useState)(!1),C=(0,i.Z)(h,2),y=C[0],S=C[1],N=(0,o.useState)([]),E=(0,i.Z)(N,2),T=E[0],M=E[1],k=(0,o.useState)([]),A=(0,i.Z)(k,2),L=A[0],R=A[1],w=(0,g.v9)((function(e){return e.createUser.selectedPolicies}));(0,o.useEffect)((function(){if(a){if(1===(null===l||void 0===l?void 0:l.length))return void(1===(null===l||void 0===l?void 0:l.length)&&x.Z.invoke("GET","/api/v1/group/".concat((0,v.LL)(l[0]))).then((function(e){var n=r()(e,"policy","");M(n.split(",")),R(n.split(","))})).catch((function(e){c((0,b.zb)(e)),S(!1)})));var e=r()(s,"policy",[]);M(e),R(e)}}),[a,null===l||void 0===l?void 0:l.length,s]);var B=r()(s,"accessKey","");return(0,P.jsxs)(m.Z,{onClose:function(){t()},modalOpen:a,title:"Set Policies",children:[(0,P.jsxs)(f.ZP,{container:!0,children:[(1===(null===l||void 0===l?void 0:l.length)||null!=s)&&(0,P.jsxs)(o.Fragment,{children:[(0,P.jsx)(f.ZP,{item:!0,xs:12,children:(0,P.jsx)(Z.Z,{label:"Selected ".concat(null!==l?"Group":"User"),content:null!==l?l[0]:B})}),(0,P.jsx)(f.ZP,{item:!0,xs:12,children:(0,P.jsx)(Z.Z,{label:"Current Policy",content:T.join(", ")})})]}),l&&(null===l||void 0===l?void 0:l.length)>1&&(0,P.jsx)(Z.Z,{label:"Selected Groups",content:l.join(", ")}),(0,P.jsx)(f.ZP,{item:!0,xs:12,children:(0,P.jsx)("div",{className:n.tableBlock,children:(0,P.jsx)(p.Z,{selectedPolicy:L})})})]}),(0,P.jsxs)(f.ZP,{item:!0,xs:12,className:n.buttonContainer,children:[(0,P.jsx)(u.Z,{type:"button",variant:"outlined",color:"primary",className:n.spacerRight,onClick:function(){R(T)},children:"Reset"}),(0,P.jsx)(u.Z,{type:"button",variant:"contained",color:"primary",disabled:y,onClick:function(){var e=null,n=null;null!==l?n=l:null!==s&&(e=[s.accessKey]||0),S(!0),x.Z.invoke("PUT","/api/v1/set-policy-multi",{name:w,groups:n,users:e}).then((function(){S(!1),t()})).catch((function(e){S(!1),c((0,b.zb)(e))}))},children:"Save"})]}),y&&(0,P.jsx)(f.ZP,{item:!0,xs:12,children:(0,P.jsx)(d.Z,{})})]})}))}}]);
//# sourceMappingURL=4061.969b267a.chunk.js.map