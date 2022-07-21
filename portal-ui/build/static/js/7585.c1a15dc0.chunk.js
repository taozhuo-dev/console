"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[7585],{75578:function(e,n,t){var a=t(1413),o=t(72791),i=t(80184);n.Z=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;function t(t){return(0,i.jsx)(o.Suspense,{fallback:n,children:(0,i.jsx)(e,(0,a.Z)({},t))})}return t}},14662:function(e,n,t){t.d(n,{Z:function(){return W}});var a=t(1413),o=t(29439),i=t(72791),r=t(64554),l=t(43896),s=t(80184),c=i.createContext(null);function u(e){var n=e.children,t=e.value,a=function(){var e=i.useState(null),n=(0,o.Z)(e,2),t=n[0],a=n[1];return i.useEffect((function(){a("mui-p-".concat(Math.round(1e5*Math.random())))}),[]),t}(),r=i.useMemo((function(){return{idPrefix:a,value:t}}),[a,t]);return(0,s.jsx)(c.Provider,{value:r,children:n})}function d(){return i.useContext(c)}function m(e,n){return null===e.idPrefix?null:"".concat(e.idPrefix,"-P-").concat(n)}function h(e,n){return null===e.idPrefix?null:"".concat(e.idPrefix,"-T-").concat(n)}var p=t(87462),f=t(63366),x=t(25228),b=["children"],v=i.forwardRef((function(e,n){var t=e.children,a=(0,f.Z)(e,b),o=d();if(null===o)throw new TypeError("No TabContext provided");var r=i.Children.map(t,(function(e){return i.isValidElement(e)?i.cloneElement(e,{"aria-controls":m(o,e.props.value),id:h(o,e.props.value)}):null}));return(0,s.jsx)(x.Z,(0,p.Z)({},a,{ref:n,value:o.value,children:r}))})),j=t(28182),g=t(66934),Z=t(31402),y=t(94419),C=t(21217);function A(e){return(0,C.Z)("MuiTabPanel",e)}(0,t(75878).Z)("MuiTabPanel",["root"]);var P=["children","className","value"],w=(0,g.ZP)("div",{name:"MuiTabPanel",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(e){return{padding:e.theme.spacing(3)}})),T=i.forwardRef((function(e,n){var t=(0,Z.Z)({props:e,name:"MuiTabPanel"}),a=t.children,o=t.className,i=t.value,r=(0,f.Z)(t,P),l=(0,p.Z)({},t),c=function(e){var n=e.classes;return(0,y.Z)({root:["root"]},A,n)}(l),u=d();if(null===u)throw new TypeError("No TabContext provided");var x=m(u,i),b=h(u,i);return(0,s.jsx)(w,(0,p.Z)({"aria-labelledby":b,className:(0,j.Z)(c.root,o),hidden:i!==u.value,id:x,ref:n,role:"tabpanel",ownerState:l},r,{children:i===u.value&&a}))})),E=t(25787),z=t(13967),S=t(11135),M=t(95193),N={minHeight:60},W=(0,E.Z)((function(e){return(0,S.Z)({tabsContainer:{display:"flex",height:"100%",width:"100%"},tabsHeaderContainer:{width:"300px",background:"#F8F8F8",borderRight:"1px solid #EAEAEA","& .MuiTabs-root":{"& .MuiTabs-indicator":{display:"none"},"& .MuiTab-root":{display:"flex",flexFlow:"row",alignItems:"center",justifyContent:"flex-start",borderBottom:"1px solid #EAEAEA","& .MuiSvgIcon-root":{marginRight:8,marginBottom:0},"&.Mui-selected":{background:"#E5E5E5",fontWeight:600}},"&. MuiTabs-scroller":{display:"none"}}},tabContentContainer:{width:"100%","& .MuiTabPanel-root":{height:"100%"}},tabPanel:{height:"100%"},"@media (max-width: 900px)":{tabsContainer:{flexFlow:"column",flexDirection:"column"},tabsHeaderContainer:{width:"100%",borderBottom:" 1px solid #EAEAEA","& .MuiTabs-root .MuiTabs-scroller .MuiButtonBase-root":{borderBottom:" 0px"}}}})}))((function(e){var n=e.children,t=e.classes,c=e.selectedTab,d=void 0===c?"0":c,m=e.routes,h=e.isRouteTabs,p=i.useState(d),f=(0,o.Z)(p,2),x=f[0],b=f[1],j=(0,z.Z)(),g=(0,M.Z)(j.breakpoints.down("md")),Z=[],y=[];return n?(n.forEach((function(e){Z.push(e.tabConfig),y.push(e.content)})),(0,s.jsx)(u,{value:"".concat(x),children:(0,s.jsxs)(r.Z,{className:t.tabsContainer,children:[(0,s.jsx)(r.Z,{className:t.tabsHeaderContainer,children:(0,s.jsx)(v,{onChange:function(e,n){b(n)},orientation:g?"horizontal":"vertical",variant:g?"scrollable":"standard",scrollButtons:"auto",className:t.tabList,children:Z.map((function(e,n){return e?(0,s.jsx)(l.Z,(0,a.Z)((0,a.Z)({className:t.tabHeader,value:"".concat(n),style:N},e),{},{disableRipple:!0,disableTouchRipple:!0,focusRipple:!0}),"v-tab-".concat(n)):null}))})}),(0,s.jsxs)(r.Z,{className:t.tabContentContainer,children:[h?null:y.map((function(e,n){return(0,s.jsx)(T,{classes:(0,a.Z)({},t.tabPanel),value:"".concat(n),children:e||null},"v-tab-p-".concat(n))})),h?(0,s.jsx)("div",{className:t.tabPanel,children:m}):null]})]})})):null}))},77585:function(e,n,t){t.r(n);var a=t(29439),o=t(1413),i=t(72791),r=t(60364),l=t(16871),s=t(43504),c=t(11135),u=t(25787),d=t(61889),m=t(23814),h=t(81551),p=t(32291),f=t(23742),x=t(45248),b=t(14917),v=t(33548),j=t(28789),g=t(88449),Z=t(74794),y=t(84669),C=t(14662),A=t(85531),P=t(75578),w=t(56087),T=t(49724),E=t(87995),z=t(17238),S=t(82295),M=t(40986),N=t(80184),W=(0,P.Z)(i.lazy((function(){return Promise.all([t.e(1747),t.e(1268)]).then(t.bind(t,82859))}))),B=(0,P.Z)(i.lazy((function(){return Promise.all([t.e(1373),t.e(2011),t.e(3909),t.e(1030)]).then(t.bind(t,21353))}))),R=(0,P.Z)(i.lazy((function(){return Promise.all([t.e(2426),t.e(6431),t.e(9145)]).then(t.bind(t,59145))}))),U=(0,P.Z)(i.lazy((function(){return Promise.all([t.e(5171),t.e(2983),t.e(8998)]).then(t.bind(t,51379))}))),k=(0,P.Z)(i.lazy((function(){return Promise.all([t.e(5171),t.e(2983),t.e(1501)]).then(t.bind(t,27331))}))),F=(0,P.Z)(i.lazy((function(){return t.e(7770).then(t.bind(t,77770))}))),L=(0,P.Z)(i.lazy((function(){return Promise.all([t.e(5358),t.e(426)]).then(t.bind(t,426))}))),H=(0,P.Z)(i.lazy((function(){return Promise.all([t.e(5358),t.e(4298)]).then(t.bind(t,24298))}))),D=(0,P.Z)(i.lazy((function(){return Promise.all([t.e(5171),t.e(2983),t.e(2878)]).then(t.bind(t,55521))}))),I=(0,P.Z)(i.lazy((function(){return t.e(8495).then(t.bind(t,48495))}))),Y=(0,P.Z)(i.lazy((function(){return t.e(4934).then(t.bind(t,74934))}))),V=(0,P.Z)(i.lazy((function(){return Promise.all([t.e(5358),t.e(1918),t.e(9942)]).then(t.bind(t,89942))}))),_=(0,P.Z)(i.lazy((function(){return t.e(7021).then(t.bind(t,37021))}))),J=(0,P.Z)(i.lazy((function(){return Promise.all([t.e(2426),t.e(1918),t.e(6431),t.e(3388),t.e(2684)]).then(t.bind(t,12684))}))),O=(0,P.Z)(i.lazy((function(){return Promise.all([t.e(2426),t.e(1918),t.e(6431),t.e(3388),t.e(6683)]).then(t.bind(t,76683))}))),q=(0,P.Z)(i.lazy((function(){return t.e(8350).then(t.bind(t,78350))}))),X=(0,P.Z)(i.lazy((function(){return Promise.all([t.e(5171),t.e(5358),t.e(1918),t.e(4873)]).then(t.bind(t,14873))}))),$=(0,P.Z)(i.lazy((function(){return t.e(5367).then(t.bind(t,15367))})));n.default=(0,u.Z)((function(e){return(0,c.Z)((0,o.Z)((0,o.Z)((0,o.Z)({},m.oZ),{},{pageContainer:{border:"1px solid #EAEAEA",width:"100%",height:"100%"},contentSpacer:(0,o.Z)((0,o.Z)({},m.Bw.contentSpacer),{},{minHeight:400}),redState:{color:e.palette.error.main,"& .min-icon":{width:16,height:16}},yellowState:{color:e.palette.warning.main,"& .min-icon":{width:16,height:16}},greenState:{color:e.palette.success.main,"& .min-icon":{width:16,height:16}},greyState:{color:"grey","& .min-icon":{width:16,height:16}},healthStatusIcon:{position:"relative",fontSize:10,left:26,height:10,top:4}},(0,m.Bz)(e.spacing(4))),{},{tenantActionButton:{"& span":{fontSize:14,"@media (max-width: 900px)":{display:"none"}},"& .min-icon":{width:12,marginLeft:5,"@media (max-width: 900px)":{width:16,marginLeft:0}}},deleteBtn:{color:"#f44336",border:"1px solid rgba(244, 67, 54, 0.5)"}}))}))((function(e){var n=e.classes,t=(0,h.TL)(),o=(0,l.UO)(),c=(0,l.s0)(),u=(0,l.TH)().pathname,m=void 0===u?"":u,P=(0,r.v9)((function(e){return e.tenants.loadingTenant})),G=(0,r.v9)((function(e){return e.tenants.currentTenant})),K=(0,r.v9)((function(e){return e.tenants.currentNamespace})),Q=(0,r.v9)((function(e){return e.tenants.tenantInfo})),ee=o.tenantName||"",ne=o.tenantNamespace||"",te=(0,i.useState)(!1),ae=(0,a.Z)(te,2),oe=ae[0],ie=ae[1];(0,i.useEffect)((function(){K===ne&&G===ee||(t((0,z.V7)({name:ee,namespace:ne})),t((0,S.v)()))}),[G,K,t,ee,ne]);var re=m.split("/"),le=re[re.length-1]||"summary";":podName"!==le&&"pods"!==le||(le="pods");var se=(0,i.useState)(le),ce=(0,a.Z)(se,2),ue=ce[0],de=ce[1];(0,i.useEffect)((function(){de(le)}),[le]);var me,he=function(e){return"/namespaces/".concat(ne,"/tenants/").concat(ee,"/").concat(e)};return(0,N.jsxs)(i.Fragment,{children:[oe&&null!==Q&&(0,N.jsx)(q,{deleteOpen:oe,selectedTenant:Q,closeDeleteModalAndRefresh:function(e){ie(!1),e&&(t((0,E.y1)("Tenant Deleted")),c("/tenants"))}}),(0,N.jsx)(p.Z,{label:(0,N.jsx)(i.Fragment,{children:(0,N.jsx)(y.Z,{to:w.gA.TENANTS,label:"Tenants"})}),actions:(0,N.jsx)(i.Fragment,{})}),(0,N.jsxs)(Z.Z,{className:n.pageContainer,children:[P&&(0,N.jsx)(d.ZP,{item:!0,xs:12,children:(0,N.jsx)(M.Z,{})}),(0,N.jsx)(d.ZP,{item:!0,xs:12,children:(0,N.jsx)(b.Z,{icon:(0,N.jsxs)(i.Fragment,{children:[(0,N.jsx)("div",{className:n.healthStatusIcon,children:Q&&Q.status&&(0,N.jsx)("span",{className:(me=Q.status.health_status,"red"===me?n.redState:"yellow"===me?n.yellowState:"green"===me?n.greenState:n.greyState),children:(0,N.jsx)(f.J$M,{})})}),(0,N.jsx)(g.Z,{})]}),title:ee,subTitle:(0,N.jsxs)(i.Fragment,{children:["Namespace: ",ne," / Capacity:"," ",(0,x.ae)(((null===Q||void 0===Q?void 0:Q.total_size)||0).toString(10))]}),actions:(0,N.jsxs)("div",{children:[(0,N.jsxs)(A.Z,{id:"delete-tenant",tooltip:"Delete",variant:"outlined","aria-label":"Delete",onClick:function(){ie(!0)},color:"secondary",classes:{root:"".concat(n.tenantActionButton," ").concat(n.deleteBtn)},size:"large",children:[(0,N.jsx)("span",{children:"Delete"})," ",(0,N.jsx)(f.XHJ,{})]}),(0,N.jsxs)(A.Z,{classes:{root:n.tenantActionButton},tooltip:"Edit YAML",color:"primary",variant:"outlined","aria-label":"Edit YAML",onClick:function(){c(he("summary/yaml"))},size:"large",children:[(0,N.jsx)("span",{children:"YAML"}),(0,N.jsx)(v.Z,{})]}),(0,N.jsxs)(A.Z,{classes:{root:n.tenantActionButton},tooltip:"Management Console",onClick:function(){c("/namespaces/".concat(ne,"/tenants/").concat(ee,"/hop"))},disabled:!Q||!(0,T.Yk)(Q),variant:"outlined",color:"primary",children:[(0,N.jsx)("span",{children:"Console"})," ",(0,N.jsx)(f.YEz,{style:{height:16}})]}),(0,N.jsxs)(A.Z,{classes:{root:n.tenantActionButton},tooltip:"Refresh",color:"primary",variant:"outlined","aria-label":"Refresh List",onClick:function(){t((0,S.v)())},children:[(0,N.jsx)("span",{children:"Refresh"})," ",(0,N.jsx)(j.default,{})]})]})})}),(0,N.jsxs)(C.Z,{selectedTab:ue,isRouteTabs:!0,routes:(0,N.jsx)("div",{className:n.contentSpacer,children:(0,N.jsxs)(l.Z5,{children:[(0,N.jsx)(l.AW,{path:"summary",element:(0,N.jsx)(B,{})}),(0,N.jsx)(l.AW,{path:"summary/yaml",element:(0,N.jsx)(W,{})}),(0,N.jsx)(l.AW,{path:"metrics",element:(0,N.jsx)(I,{})}),(0,N.jsx)(l.AW,{path:"trace",element:(0,N.jsx)(Y,{})}),(0,N.jsx)(l.AW,{path:"identity-provider",element:(0,N.jsx)(_,{})}),(0,N.jsx)(l.AW,{path:"security",element:(0,N.jsx)(J,{})}),(0,N.jsx)(l.AW,{path:"encryption",element:(0,N.jsx)(O,{})}),(0,N.jsx)(l.AW,{path:"pools",element:(0,N.jsx)(U,{})}),(0,N.jsx)(l.AW,{path:"pods/:podName",element:(0,N.jsx)(X,{})}),(0,N.jsx)(l.AW,{path:"pods",element:(0,N.jsx)(k,{})}),(0,N.jsx)(l.AW,{path:"pvcs/:PVCName",element:(0,N.jsx)(V,{})}),(0,N.jsx)(l.AW,{path:"volumes",element:(0,N.jsx)(D,{})}),(0,N.jsx)(l.AW,{path:"license",element:(0,N.jsx)(R,{})}),(0,N.jsx)(l.AW,{path:"monitoring",element:(0,N.jsx)($,{})}),(0,N.jsx)(l.AW,{path:"logging",element:(0,N.jsx)(F,{})}),(0,N.jsx)(l.AW,{path:"events",element:(0,N.jsx)(L,{})}),(0,N.jsx)(l.AW,{path:"csr",element:(0,N.jsx)(H,{})}),(0,N.jsx)(l.AW,{path:"/",element:(0,N.jsx)(l.Fg,{to:"/namespaces/".concat(ne,"/tenants/").concat(ee,"/summary")})})]})}),children:[{tabConfig:{label:"Summary",value:"summary",component:s.rU,to:he("summary")}},{tabConfig:{label:"Metrics",value:"metrics",component:s.rU,to:he("metrics")}},{tabConfig:{label:"Identity Provider",value:"identity-provider",component:s.rU,to:he("identity-provider")}},{tabConfig:{label:"Security",value:"security",component:s.rU,to:he("security")}},{tabConfig:{label:"Encryption",value:"encryption",component:s.rU,to:he("encryption")}},{tabConfig:{label:"Pools",value:"pools",component:s.rU,to:he("pools")}},{tabConfig:{label:"Monitoring",value:"monitoring",component:s.rU,to:he("monitoring")}},{tabConfig:{label:"Audit Log",value:"logging",component:s.rU,to:he("logging")}},{tabConfig:{label:"Pods",value:"pods",component:s.rU,id:"tenant-pod-tab",to:he("pods")}},{tabConfig:{label:"Volumes",value:"volumes",component:s.rU,to:he("volumes")}},{tabConfig:{label:"Events",value:"events",component:s.rU,to:he("events")}},{tabConfig:{label:"Certificate Requests",value:"csr",component:s.rU,to:he("csr")}},{tabConfig:{label:"License",value:"license",component:s.rU,to:he("license")}}]})]})]})}))}}]);
//# sourceMappingURL=7585.c1a15dc0.chunk.js.map