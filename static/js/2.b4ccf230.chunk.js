(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[2,6,8],{132:function(e,t,a){"use strict";var c=a(3),r=a(2),n=a(5),s=a(7),o=a.n(s),i=a(0),l=a(8),d=a(1),b=["as","bsPrefix","className"],j=["className"],f=["xxl","xl","lg","md","sm","xs"];var u=i.forwardRef((function(e,t){var a=function(e){var t=e.as,a=e.bsPrefix,c=e.className,s=Object(n.a)(e,b);a=Object(l.a)(a,"col");var i=[],d=[];return f.forEach((function(e){var t,c,r,n=s[e];delete s[e],"object"===typeof n&&null!=n?(t=n.span,c=n.offset,r=n.order):t=n;var o="xs"!==e?"-".concat(e):"";t&&i.push(!0===t?"".concat(a).concat(o):"".concat(a).concat(o,"-").concat(t)),null!=r&&d.push("order".concat(o,"-").concat(r)),null!=c&&d.push("offset".concat(o,"-").concat(c))})),[Object(r.a)(Object(r.a)({},s),{},{className:o.a.apply(void 0,[c].concat(i,d))}),{as:t,bsPrefix:a,spans:i}]}(e),s=Object(c.a)(a,2),i=s[0],u=i.className,O=Object(n.a)(i,j),x=s[1],m=x.as,v=void 0===m?"div":m,p=x.bsPrefix,y=x.spans;return Object(d.jsx)(v,Object(r.a)(Object(r.a)({},O),{},{ref:t,className:o()(u,!y.length&&p)}))}));u.displayName="Col",t.a=u},149:function(e,t,a){"use strict";var c=a(2),r=a(5),n=a(7),s=a.n(n),o=a(0),i=a(8),l=a(1),d=["bsPrefix","className","as"],b=["xxl","xl","lg","md","sm","xs"],j=o.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,o=e.as,j=void 0===o?"div":o,f=Object(r.a)(e,d),u=Object(i.a)(a,"row"),O="".concat(u,"-cols"),x=[];return b.forEach((function(e){var t,a=f[e];delete f[e],t=null!=a&&"object"===typeof a?a.cols:a;var c="xs"!==e?"-".concat(e):"";null!=t&&x.push("".concat(O).concat(c,"-").concat(t))})),Object(l.jsx)(j,Object(c.a)(Object(c.a)({ref:t},f),{},{className:s.a.apply(void 0,[n,u].concat(x))}))}));j.displayName="Row",t.a=j},159:function(e,t,a){"use strict";var c=a(2),r=a(3),n=a(5),s=a(7),o=a.n(s),i=a(0),l=a(27),d=a(8),b=a(1),j=["as","bsPrefix","variant","size","active","className"],f=i.forwardRef((function(e,t){var a=e.as,s=e.bsPrefix,i=e.variant,f=e.size,u=e.active,O=e.className,x=Object(n.a)(e,j),m=Object(d.a)(s,"btn"),v=Object(l.b)(Object(c.a)({tagName:a},x)),p=Object(r.a)(v,2),y=p[0],h=p[1].tagName;return Object(b.jsx)(h,Object(c.a)(Object(c.a)(Object(c.a)({},x),y),{},{ref:t,className:o()(O,m,u&&"active",i&&"".concat(m,"-").concat(i),f&&"".concat(m,"-").concat(f),x.href&&x.disabled&&"disabled")}))}));f.displayName="Button",f.defaultProps={variant:"primary",active:!1,disabled:!1},t.a=f},73:function(e,t,a){"use strict";a.r(t);a(0),a(75);var c=a(1);t.default=function(e){var t=e.title;return Object(c.jsx)("div",{className:"header",children:t})}},76:function(e,t,a){"use strict";a.r(t);var c=a(2),r=a(0),n=a(132),s=a(5),o=a(7),i=a.n(o),l=a(8),d=a(30),b=a(1),j=function(e){return r.forwardRef((function(t,a){return Object(b.jsx)("div",Object(c.a)(Object(c.a)({},t),{},{ref:a,className:i()(t.className,e)}))}))},f=["bsPrefix","className","variant","as"],u=r.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,n=e.variant,o=e.as,d=void 0===o?"img":o,j=Object(s.a)(e,f),u=Object(l.a)(a,"card-img");return Object(b.jsx)(d,Object(c.a)({ref:t,className:i()(n?"".concat(u,"-").concat(n):u,r)},j))}));u.displayName="CardImg";var O=u,x=a(52),m=["bsPrefix","className","as"],v=r.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,o=e.as,d=void 0===o?"div":o,j=Object(s.a)(e,m),f=Object(l.a)(a,"card-header"),u=Object(r.useMemo)((function(){return{cardHeaderBsPrefix:f}}),[f]);return Object(b.jsx)(x.a.Provider,{value:u,children:Object(b.jsx)(d,Object(c.a)(Object(c.a)({ref:t},j),{},{className:i()(n,f)}))})}));v.displayName="CardHeader";var p=v,y=["bsPrefix","className","bg","text","border","body","children","as"],h=j("h5"),g=j("h6"),N=Object(d.a)("card-body"),S=Object(d.a)("card-title",{Component:h}),P=Object(d.a)("card-subtitle",{Component:g}),w=Object(d.a)("card-link",{Component:"a"}),C=Object(d.a)("card-text",{Component:"p"}),k=Object(d.a)("card-footer"),B=Object(d.a)("card-img-overlay"),R=r.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,n=e.bg,o=e.text,d=e.border,j=e.body,f=e.children,u=e.as,O=void 0===u?"div":u,x=Object(s.a)(e,y),m=Object(l.a)(a,"card");return Object(b.jsx)(O,Object(c.a)(Object(c.a)({ref:t},x),{},{className:i()(r,m,n&&"bg-".concat(n),o&&"text-".concat(o),d&&"border-".concat(d)),children:j?Object(b.jsx)(N,{children:f}):f}))}));R.displayName="Card",R.defaultProps={body:!1};var T=Object.assign(R,{Img:O,Title:S,Subtitle:P,Body:N,Link:w,Text:C,Header:p,Footer:k,ImgOverlay:B}),V=a(159),E=["bsPrefix","bg","pill","text","className","as"],F=r.forwardRef((function(e,t){var a=e.bsPrefix,r=e.bg,n=e.pill,o=e.text,d=e.className,j=e.as,f=void 0===j?"span":j,u=Object(s.a)(e,E),O=Object(l.a)(a,"badge");return Object(b.jsx)(f,Object(c.a)(Object(c.a)({ref:t},u),{},{className:i()(d,O,n&&"rounded-pill",o&&"text-".concat(o),r&&"bg-".concat(r))}))}));F.displayName="Badge",F.defaultProps={bg:"primary",pill:!1};var I=F,z=a(14),H=a(128),M={badgeStyle:{paddingLeft:10,paddingRight:10,paddingTop:5,paddingBottom:5,margin:5},cardStyle:{borderRadius:10},cardTitleStyle:{fontSize:24,fontWeight:700},cardTextStyle:{textAlign:"left"},linkStyle:{textDecoration:"none",padding:10},buttonStyle:{margin:5}};t.default=function(e){var t,a,s=Object(r.useContext)(z.a),o=e.project;return Object(b.jsx)(n.a,{children:Object(b.jsxs)(T,{style:Object(c.a)(Object(c.a)({},M.cardStyle),{},{backgroundColor:s.cardBackground,borderColor:s.cardBorderColor}),text:s.bsSecondaryVariant,children:[Object(b.jsx)(T.Img,{variant:"top",src:null===o||void 0===o?void 0:o.image}),Object(b.jsxs)(T.Body,{children:[Object(b.jsx)(T.Title,{style:M.cardTitleStyle,children:o.title}),Object(b.jsx)(T.Text,{style:M.cardTextStyle,children:(a=o.bodyText,Object(b.jsx)(H.a,{children:a}))})]}),Object(b.jsx)(T.Body,{children:null===o||void 0===o||null===(t=o.links)||void 0===t?void 0:t.map((function(e){return Object(b.jsx)(V.a,{style:M.buttonStyle,variant:"outline-"+s.bsSecondaryVariant,onClick:function(){return window.open(e.href,"_blank")},children:e.text},e.href)}))}),o.tags&&Object(b.jsx)(T.Footer,{style:{backgroundColor:s.cardFooterBackground},children:o.tags.map((function(e){return Object(b.jsx)(I,{pill:!0,bg:s.bsSecondaryVariant,text:s.bsPrimaryVariant,style:M.badgeStyle,children:e},e)}))})]})})}},80:function(e,t,a){"use strict";a.r(t);var c=a(3),r=a(0),n=a(125),s=a(149),o=a(159),i=a(14),l=a(53),d=a.n(l),b=a(73),j=a(17),f=a(76),u=a(20),O=a(1),x={containerStyle:{marginBottom:25},showMoreStyle:{margin:25}};t.default=function(e){var t,a=Object(r.useContext)(i.a),l=e.header,m=Object(r.useState)(null),v=Object(c.a)(m,2),p=v[0],y=v[1],h=Object(r.useState)(!1),g=Object(c.a)(h,2),N=g[0],S=g[1];Object(r.useEffect)((function(){fetch(j.a.projects,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return y(e)})).catch((function(e){return e}))}),[]);var P=N&&p?p.length:6;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(b.default,{title:l}),p?Object(O.jsx)("div",{className:"section-content-container",children:Object(O.jsxs)(n.a,{style:x.containerStyle,children:[Object(O.jsx)(s.a,{xs:1,sm:1,md:2,lg:3,className:"g-4",children:null===(t=p.projects)||void 0===t?void 0:t.slice(0,P).map((function(e){return Object(O.jsx)(d.a,{children:Object(O.jsx)(f.default,{project:e})},e.title)}))}),!N&&Object(O.jsx)(o.a,{style:x.showMoreStyle,variant:a.bsSecondaryVariant,onClick:function(){return S(!0)},children:"show more"})]})}):Object(O.jsx)(u.default,{})]})}}}]);
//# sourceMappingURL=2.b4ccf230.chunk.js.map