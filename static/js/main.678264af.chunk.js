(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var a=c(9),n=c.n(a),s=c(4),i=(c(14),c(15),c(16),c(2)),b=c(6),j=c.n(b),r=c(1),l=function(e){var t=e.tabs,c=Object(i.h)().tabId,a=void 0===c?null:c,n=t.find((function(e){return e.id===a}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{className:"title",children:"Tabs page"}),Object(r.jsx)("div",{className:"tabs is-boxed",children:Object(r.jsx)("ul",{children:t.map((function(e){return Object(r.jsx)("li",{"data-cy":"Tab",className:j()({"is-active":e.id===a}),children:Object(r.jsx)(s.b,{to:"../".concat(e.id),"data-cy":"TabLink",children:e.title})},e.id)}))})}),Object(r.jsx)("div",{className:"block","data-cy":"TabContent",children:n?n.content:"Please select a tab"})]})},d=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(s.c,{to:"/",className:function(e){var t=e.isActive;return j()("navbar-item",{"is-active":t})},children:"Home"}),Object(r.jsx)(s.c,{to:"/tabs",className:function(e){var t=e.isActive;return j()("navbar-item",{"is-active":t})},children:"Tabs"})]})},o=function(){return Object(r.jsx)("h1",{className:"title",children:"Page not found"})},h=function(){return Object(r.jsx)("h1",{className:"title",children:"Home page"})},x=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],O=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"navbar-brand",children:Object(r.jsx)(d,{})})})}),Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)(i.d,{children:[Object(r.jsx)(i.b,{path:"*",element:Object(r.jsx)(o,{})}),Object(r.jsx)(i.b,{path:"/",element:Object(r.jsx)(h,{})}),Object(r.jsx)(i.b,{path:"/home",element:Object(r.jsx)(i.a,{to:"/",replace:!0})}),Object(r.jsxs)(i.b,{path:"tabs",children:[Object(r.jsx)(i.b,{index:!0,element:Object(r.jsx)(l,{tabs:x})}),Object(r.jsx)(i.b,{path:":tabId",element:Object(r.jsx)(l,{tabs:x})})]})]})})})]})};n.a.render(Object(r.jsx)(s.a,{children:Object(r.jsx)(O,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.678264af.chunk.js.map