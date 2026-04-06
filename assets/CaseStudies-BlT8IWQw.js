import{j as h,m as ke,A as $e}from"./vendor-motion-CLxAPPWH.js";import{a as V,r as Pe,g as Me,C as Ne}from"./vendor-icons-oi0yKthW.js";import{X as pe,c as P,u as we,H as Le}from"./app-B6OVh5v3.js";import{F as ye}from"./index-6uBIWij9.js";import{H as ze,a as De}from"./index-DDrhNUNy.js";import{M as ue}from"./index-G7g8hZHv.js";import"./vendor-charts-DbC-OHEB.js";import"./vendor-firebase-BBPOHLSG.js";const Re=P.div`
  width: 100%;
  margin: 20px 0;
  padding: 24px;
  background: ${u=>u.theme.cardSecondaryBackground};
  border: 1px solid ${u=>u.theme.cardBorderColor};
  border-radius: 8px;
  position: relative;
  overflow: hidden;

  /* Architectural Accents */
  &::after {
    content: 'TECHNICAL_SPEC_V2.0';
    position: absolute;
    top: 8px;
    right: 12px;
    font-family: var(--font-mono);
    font-size: 0.55rem;
    color: ${u=>u.theme.accentColor}66;
    letter-spacing: 0.1em;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: -1px;
    right: -1px;
    width: 20px;
    height: 20px;
    border-bottom: 2px solid ${u=>u.theme.accentColor};
    border-right: 2px solid ${u=>u.theme.accentColor};
    opacity: 0.4;
  }
`,Be=P.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  
  svg {
    max-width: 100% !important;
    height: auto !important;
  }
`,Fe=({code:u,id:R,onMouseEnter:U,onMouseMove:H,onMouseLeave:Q})=>{const S=V.useContext(pe),B=V.useRef(null),[t,o]=V.useState(!1),e=S.bsPrimaryVariant==="dark";return V.useEffect(()=>{if(window.mermaid)window.mermaid.initialize({theme:e?"dark":"default",themeVariables:{primaryColor:S.accentColor,primaryTextColor:S.color,primaryBorderColor:S.accentColor,lineColor:S.accentColor}}),o(!0);else{const r=document.createElement("script");r.src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js",r.async=!0,r.onload=()=>{window.mermaid.initialize({startOnLoad:!1,theme:e?"dark":"default",securityLevel:"loose",fontFamily:"var(--font-mono)",themeVariables:{primaryColor:S.accentColor,primaryTextColor:S.color,primaryBorderColor:S.accentColor,lineColor:S.accentColor,secondaryColor:S.cardBackground,tertiaryColor:S.cardSecondaryBackground}}),o(!0)},document.body.appendChild(r)}},[e,S]),V.useEffect(()=>{(async()=>{if(t&&B.current&&window.mermaid)try{B.current.innerHTML="";const{svg:a}=await window.mermaid.render(`mermaid-${R}`,u);B.current.innerHTML=a}catch(a){console.error("Mermaid render error:",a),B.current.innerHTML='<p style="color: red; font-size: 0.8rem;">Diagram Rendering Error</p>'}})()},[u,t,R,e]),h.jsx(Re,{onMouseEnter:U,onMouseMove:H,onMouseLeave:Q,children:h.jsx(Be,{ref:B,id:`wrap-${R}`,children:!t&&h.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:"0.7rem",opacity:.5},children:"L O A D I N G _ D I A G R A M . . ."})})})};var ae={exports:{}},Ie=ae.exports,ge;function He(){return ge||(ge=1,(function(u,R){(function(U,H){u.exports=H(Pe())})(typeof self<"u"?self:Ie,(U=>(()=>{var H={2:(t,o,e)=>{var r=e(2199),a=e(4664),i=e(5950);t.exports=function(n){return r(n,i,a)}},79:(t,o,e)=>{var r=e(3702),a=e(80),i=e(4739),n=e(8655),c=e(1175);function p(l){var f=-1,m=l==null?0:l.length;for(this.clear();++f<m;){var d=l[f];this.set(d[0],d[1])}}p.prototype.clear=r,p.prototype.delete=a,p.prototype.get=i,p.prototype.has=n,p.prototype.set=c,t.exports=p},80:(t,o,e)=>{var r=e(6025),a=Array.prototype.splice;t.exports=function(i){var n=this.__data__,c=r(n,i);return!(c<0||(c==n.length-1?n.pop():a.call(n,c,1),--this.size,0))}},270:(t,o,e)=>{var r=e(7068),a=e(346);t.exports=function i(n,c,p,l,f){return n===c||(n==null||c==null||!a(n)&&!a(c)?n!=n&&c!=c:r(n,c,p,l,i,f))}},289:(t,o,e)=>{var r=e(2651);t.exports=function(a){return r(this,a).get(a)}},294:t=>{t.exports=function(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=9007199254740991}},317:t=>{t.exports=function(o){var e=-1,r=Array(o.size);return o.forEach((function(a,i){r[++e]=[i,a]})),r}},346:t=>{t.exports=function(o){return o!=null&&typeof o=="object"}},361:t=>{var o=/^(?:0|[1-9]\d*)$/;t.exports=function(e,r){var a=typeof e;return!!(r=r??9007199254740991)&&(a=="number"||a!="symbol"&&o.test(e))&&e>-1&&e%1==0&&e<r}},392:t=>{t.exports=function(o,e){return o==null?void 0:o[e]}},659:(t,o,e)=>{var r=e(1873),a=Object.prototype,i=a.hasOwnProperty,n=a.toString,c=r?r.toStringTag:void 0;t.exports=function(p){var l=i.call(p,c),f=p[c];try{p[c]=void 0;var m=!0}catch{}var d=n.call(p);return m&&(l?p[c]=f:delete p[c]),d}},689:(t,o,e)=>{var r=e(2),a=Object.prototype.hasOwnProperty;t.exports=function(i,n,c,p,l,f){var m=1&c,d=r(i),T=d.length;if(T!=r(n).length&&!m)return!1;for(var x=T;x--;){var v=d[x];if(!(m?v in n:a.call(n,v)))return!1}var _=f.get(i),j=f.get(n);if(_&&j)return _==n&&j==i;var E=!0;f.set(i,n),f.set(n,i);for(var w=m;++x<T;){var g=i[v=d[x]],k=n[v];if(p)var N=m?p(k,g,v,n,i,f):p(g,k,v,i,n,f);if(!(N===void 0?g===k||l(g,k,c,p,f):N)){E=!1;break}w||(w=v=="constructor")}if(E&&!w){var L=i.constructor,D=n.constructor;L==D||!("constructor"in i)||!("constructor"in n)||typeof L=="function"&&L instanceof L&&typeof D=="function"&&D instanceof D||(E=!1)}return f.delete(i),f.delete(n),E}},695:(t,o,e)=>{var r=e(8096),a=e(2428),i=e(6449),n=e(3656),c=e(361),p=e(7167),l=Object.prototype.hasOwnProperty;t.exports=function(f,m){var d=i(f),T=!d&&a(f),x=!d&&!T&&n(f),v=!d&&!T&&!x&&p(f),_=d||T||x||v,j=_?r(f.length,String):[],E=j.length;for(var w in f)!m&&!l.call(f,w)||_&&(w=="length"||x&&(w=="offset"||w=="parent")||v&&(w=="buffer"||w=="byteLength"||w=="byteOffset")||c(w,E))||j.push(w);return j}},938:t=>{t.exports=function(o){var e=this.__data__,r=e.delete(o);return this.size=e.size,r}},945:(t,o,e)=>{var r=e(79),a=e(8223),i=e(3661);t.exports=function(n,c){var p=this.__data__;if(p instanceof r){var l=p.__data__;if(!a||l.length<199)return l.push([n,c]),this.size=++p.size,this;p=this.__data__=new i(l)}return p.set(n,c),this.size=p.size,this}},1042:(t,o,e)=>{var r=e(6110)(Object,"create");t.exports=r},1175:(t,o,e)=>{var r=e(6025);t.exports=function(a,i){var n=this.__data__,c=r(n,a);return c<0?(++this.size,n.push([a,i])):n[c][1]=i,this}},1380:t=>{t.exports=function(o){return this.__data__.set(o,"__lodash_hash_undefined__"),this}},1420:(t,o,e)=>{var r=e(79);t.exports=function(){this.__data__=new r,this.size=0}},1459:t=>{t.exports=function(o){return this.__data__.has(o)}},1549:(t,o,e)=>{var r=e(2032),a=e(3862),i=e(6721),n=e(2749),c=e(5749);function p(l){var f=-1,m=l==null?0:l.length;for(this.clear();++f<m;){var d=l[f];this.set(d[0],d[1])}}p.prototype.clear=r,p.prototype.delete=a,p.prototype.get=i,p.prototype.has=n,p.prototype.set=c,t.exports=p},1873:(t,o,e)=>{var r=e(9325).Symbol;t.exports=r},1882:(t,o,e)=>{var r=e(2552),a=e(3805);t.exports=function(i){if(!a(i))return!1;var n=r(i);return n=="[object Function]"||n=="[object GeneratorFunction]"||n=="[object AsyncFunction]"||n=="[object Proxy]"}},1986:(t,o,e)=>{var r=e(1873),a=e(7828),i=e(5288),n=e(5911),c=e(317),p=e(4247),l=r?r.prototype:void 0,f=l?l.valueOf:void 0;t.exports=function(m,d,T,x,v,_,j){switch(T){case"[object DataView]":if(m.byteLength!=d.byteLength||m.byteOffset!=d.byteOffset)return!1;m=m.buffer,d=d.buffer;case"[object ArrayBuffer]":return!(m.byteLength!=d.byteLength||!_(new a(m),new a(d)));case"[object Boolean]":case"[object Date]":case"[object Number]":return i(+m,+d);case"[object Error]":return m.name==d.name&&m.message==d.message;case"[object RegExp]":case"[object String]":return m==d+"";case"[object Map]":var E=c;case"[object Set]":var w=1&x;if(E||(E=p),m.size!=d.size&&!w)return!1;var g=j.get(m);if(g)return g==d;x|=2,j.set(m,d);var k=n(E(m),E(d),x,v,_,j);return j.delete(m),k;case"[object Symbol]":if(f)return f.call(m)==f.call(d)}return!1}},2032:(t,o,e)=>{var r=e(1042);t.exports=function(){this.__data__=r?r(null):{},this.size=0}},2199:(t,o,e)=>{var r=e(4528),a=e(6449);t.exports=function(i,n,c){var p=n(i);return a(i)?p:r(p,c(i))}},2404:(t,o,e)=>{var r=e(270);t.exports=function(a,i){return r(a,i)}},2428:(t,o,e)=>{var r=e(7534),a=e(346),i=Object.prototype,n=i.hasOwnProperty,c=i.propertyIsEnumerable,p=r((function(){return arguments})())?r:function(l){return a(l)&&n.call(l,"callee")&&!c.call(l,"callee")};t.exports=p},2552:(t,o,e)=>{var r=e(1873),a=e(659),i=e(9350),n=r?r.toStringTag:void 0;t.exports=function(c){return c==null?c===void 0?"[object Undefined]":"[object Null]":n&&n in Object(c)?a(c):i(c)}},2651:(t,o,e)=>{var r=e(4218);t.exports=function(a,i){var n=a.__data__;return r(i)?n[typeof i=="string"?"string":"hash"]:n.map}},2749:(t,o,e)=>{var r=e(1042),a=Object.prototype.hasOwnProperty;t.exports=function(i){var n=this.__data__;return r?n[i]!==void 0:a.call(n,i)}},2804:(t,o,e)=>{var r=e(6110)(e(9325),"Promise");t.exports=r},2949:(t,o,e)=>{var r=e(2651);t.exports=function(a,i){var n=r(this,a),c=n.size;return n.set(a,i),this.size+=n.size==c?0:1,this}},3040:(t,o,e)=>{var r=e(1549),a=e(79),i=e(8223);t.exports=function(){this.size=0,this.__data__={hash:new r,map:new(i||a),string:new r}}},3146:(t,o,e)=>{for(var r=e(3491),a=typeof window>"u"?e.g:window,i=["moz","webkit"],n="AnimationFrame",c=a["request"+n],p=a["cancel"+n]||a["cancelRequest"+n],l=0;!c&&l<i.length;l++)c=a[i[l]+"Request"+n],p=a[i[l]+"Cancel"+n]||a[i[l]+"CancelRequest"+n];if(!c||!p){var f=0,m=0,d=[],T=1e3/60;c=function(x){if(d.length===0){var v=r(),_=Math.max(0,T-(v-f));f=_+v,setTimeout((function(){var j=d.slice(0);d.length=0;for(var E=0;E<j.length;E++)if(!j[E].cancelled)try{j[E].callback(f)}catch(w){setTimeout((function(){throw w}),0)}}),Math.round(_))}return d.push({handle:++m,callback:x,cancelled:!1}),m},p=function(x){for(var v=0;v<d.length;v++)d[v].handle===x&&(d[v].cancelled=!0)}}t.exports=function(x){return c.call(a,x)},t.exports.cancel=function(){p.apply(a,arguments)},t.exports.polyfill=function(x){x||(x=a),x.requestAnimationFrame=c,x.cancelAnimationFrame=p}},3345:t=>{t.exports=function(){return[]}},3491:function(t){(function(){var o,e,r,a,i,n;typeof performance<"u"&&performance!==null&&performance.now?t.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(t.exports=function(){return(o()-i)/1e6},e=process.hrtime,a=(o=function(){var c;return 1e9*(c=e())[0]+c[1]})(),n=1e9*process.uptime(),i=a-n):Date.now?(t.exports=function(){return Date.now()-r},r=Date.now()):(t.exports=function(){return new Date().getTime()-r},r=new Date().getTime())}).call(this)},3605:t=>{t.exports=function(o){return this.__data__.get(o)}},3650:(t,o,e)=>{var r=e(4335)(Object.keys,Object);t.exports=r},3656:(t,o,e)=>{t=e.nmd(t);var r=e(9325),a=e(9935),i=o&&!o.nodeType&&o,n=i&&t&&!t.nodeType&&t,c=n&&n.exports===i?r.Buffer:void 0,p=(c?c.isBuffer:void 0)||a;t.exports=p},3661:(t,o,e)=>{var r=e(3040),a=e(7670),i=e(289),n=e(4509),c=e(2949);function p(l){var f=-1,m=l==null?0:l.length;for(this.clear();++f<m;){var d=l[f];this.set(d[0],d[1])}}p.prototype.clear=r,p.prototype.delete=a,p.prototype.get=i,p.prototype.has=n,p.prototype.set=c,t.exports=p},3702:t=>{t.exports=function(){this.__data__=[],this.size=0}},3805:t=>{t.exports=function(o){var e=typeof o;return o!=null&&(e=="object"||e=="function")}},3862:t=>{t.exports=function(o){var e=this.has(o)&&delete this.__data__[o];return this.size-=e?1:0,e}},4218:t=>{t.exports=function(o){var e=typeof o;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?o!=="__proto__":o===null}},4247:t=>{t.exports=function(o){var e=-1,r=Array(o.size);return o.forEach((function(a){r[++e]=a})),r}},4248:t=>{t.exports=function(o,e){for(var r=-1,a=o==null?0:o.length;++r<a;)if(e(o[r],r,o))return!0;return!1}},4335:t=>{t.exports=function(o,e){return function(r){return o(e(r))}}},4509:(t,o,e)=>{var r=e(2651);t.exports=function(a){return r(this,a).has(a)}},4528:t=>{t.exports=function(o,e){for(var r=-1,a=e.length,i=o.length;++r<a;)o[i+r]=e[r];return o}},4664:(t,o,e)=>{var r=e(9770),a=e(3345),i=Object.prototype.propertyIsEnumerable,n=Object.getOwnPropertySymbols,c=n?function(p){return p==null?[]:(p=Object(p),r(n(p),(function(l){return i.call(p,l)})))}:a;t.exports=c},4739:(t,o,e)=>{var r=e(6025);t.exports=function(a){var i=this.__data__,n=r(i,a);return n<0?void 0:i[n][1]}},4840:(t,o,e)=>{var r=typeof e.g=="object"&&e.g&&e.g.Object===Object&&e.g;t.exports=r},4894:(t,o,e)=>{var r=e(1882),a=e(294);t.exports=function(i){return i!=null&&a(i.length)&&!r(i)}},4901:(t,o,e)=>{var r=e(2552),a=e(294),i=e(346),n={};n["[object Float32Array]"]=n["[object Float64Array]"]=n["[object Int8Array]"]=n["[object Int16Array]"]=n["[object Int32Array]"]=n["[object Uint8Array]"]=n["[object Uint8ClampedArray]"]=n["[object Uint16Array]"]=n["[object Uint32Array]"]=!0,n["[object Arguments]"]=n["[object Array]"]=n["[object ArrayBuffer]"]=n["[object Boolean]"]=n["[object DataView]"]=n["[object Date]"]=n["[object Error]"]=n["[object Function]"]=n["[object Map]"]=n["[object Number]"]=n["[object Object]"]=n["[object RegExp]"]=n["[object Set]"]=n["[object String]"]=n["[object WeakMap]"]=!1,t.exports=function(c){return i(c)&&a(c.length)&&!!n[r(c)]}},5083:(t,o,e)=>{var r=e(1882),a=e(7296),i=e(3805),n=e(7473),c=/^\[object .+?Constructor\]$/,p=Function.prototype,l=Object.prototype,f=p.toString,m=l.hasOwnProperty,d=RegExp("^"+f.call(m).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(T){return!(!i(T)||a(T))&&(r(T)?d:c).test(n(T))}},5288:t=>{t.exports=function(o,e){return o===e||o!=o&&e!=e}},5481:(t,o,e)=>{var r=e(9325)["__core-js_shared__"];t.exports=r},5527:t=>{var o=Object.prototype;t.exports=function(e){var r=e&&e.constructor;return e===(typeof r=="function"&&r.prototype||o)}},5580:(t,o,e)=>{var r=e(6110)(e(9325),"DataView");t.exports=r},5749:(t,o,e)=>{var r=e(1042);t.exports=function(a,i){var n=this.__data__;return this.size+=this.has(a)?0:1,n[a]=r&&i===void 0?"__lodash_hash_undefined__":i,this}},5861:(t,o,e)=>{var r=e(5580),a=e(8223),i=e(2804),n=e(6545),c=e(8303),p=e(2552),l=e(7473),f="[object Map]",m="[object Promise]",d="[object Set]",T="[object WeakMap]",x="[object DataView]",v=l(r),_=l(a),j=l(i),E=l(n),w=l(c),g=p;(r&&g(new r(new ArrayBuffer(1)))!=x||a&&g(new a)!=f||i&&g(i.resolve())!=m||n&&g(new n)!=d||c&&g(new c)!=T)&&(g=function(k){var N=p(k),L=N=="[object Object]"?k.constructor:void 0,D=L?l(L):"";if(D)switch(D){case v:return x;case _:return f;case j:return m;case E:return d;case w:return T}return N}),t.exports=g},5911:(t,o,e)=>{var r=e(8859),a=e(4248),i=e(9219);t.exports=function(n,c,p,l,f,m){var d=1&p,T=n.length,x=c.length;if(T!=x&&!(d&&x>T))return!1;var v=m.get(n),_=m.get(c);if(v&&_)return v==c&&_==n;var j=-1,E=!0,w=2&p?new r:void 0;for(m.set(n,c),m.set(c,n);++j<T;){var g=n[j],k=c[j];if(l)var N=d?l(k,g,j,c,n,m):l(g,k,j,n,c,m);if(N!==void 0){if(N)continue;E=!1;break}if(w){if(!a(c,(function(L,D){if(!i(w,D)&&(g===L||f(g,L,p,l,m)))return w.push(D)}))){E=!1;break}}else if(g!==k&&!f(g,k,p,l,m)){E=!1;break}}return m.delete(n),m.delete(c),E}},5950:(t,o,e)=>{var r=e(695),a=e(8984),i=e(4894);t.exports=function(n){return i(n)?r(n):a(n)}},6009:(t,o,e)=>{t=e.nmd(t);var r=e(4840),a=o&&!o.nodeType&&o,i=a&&t&&!t.nodeType&&t,n=i&&i.exports===a&&r.process,c=(function(){try{return i&&i.require&&i.require("util").types||n&&n.binding&&n.binding("util")}catch{}})();t.exports=c},6025:(t,o,e)=>{var r=e(5288);t.exports=function(a,i){for(var n=a.length;n--;)if(r(a[n][0],i))return n;return-1}},6110:(t,o,e)=>{var r=e(5083),a=e(392);t.exports=function(i,n){var c=a(i,n);return r(c)?c:void 0}},6449:t=>{var o=Array.isArray;t.exports=o},6545:(t,o,e)=>{var r=e(6110)(e(9325),"Set");t.exports=r},6721:(t,o,e)=>{var r=e(1042),a=Object.prototype.hasOwnProperty;t.exports=function(i){var n=this.__data__;if(r){var c=n[i];return c==="__lodash_hash_undefined__"?void 0:c}return a.call(n,i)?n[i]:void 0}},7068:(t,o,e)=>{var r=e(7217),a=e(5911),i=e(1986),n=e(689),c=e(5861),p=e(6449),l=e(3656),f=e(7167),m="[object Arguments]",d="[object Array]",T="[object Object]",x=Object.prototype.hasOwnProperty;t.exports=function(v,_,j,E,w,g){var k=p(v),N=p(_),L=k?d:c(v),D=N?d:c(_),O=(L=L==m?T:L)==T,Y=(D=D==m?T:D)==T,q=L==D;if(q&&l(v)){if(!l(_))return!1;k=!0,O=!1}if(q&&!O)return g||(g=new r),k||f(v)?a(v,_,j,E,w,g):i(v,_,L,j,E,w,g);if(!(1&j)){var A=O&&x.call(v,"__wrapped__"),y=Y&&x.call(_,"__wrapped__");if(A||y){var $=A?v.value():v,C=y?_.value():_;return g||(g=new r),w($,C,j,E,g)}}return!!q&&(g||(g=new r),n(v,_,j,E,w,g))}},7167:(t,o,e)=>{var r=e(4901),a=e(7301),i=e(6009),n=i&&i.isTypedArray,c=n?a(n):r;t.exports=c},7217:(t,o,e)=>{var r=e(79),a=e(1420),i=e(938),n=e(3605),c=e(9817),p=e(945);function l(f){var m=this.__data__=new r(f);this.size=m.size}l.prototype.clear=a,l.prototype.delete=i,l.prototype.get=n,l.prototype.has=c,l.prototype.set=p,t.exports=l},7296:(t,o,e)=>{var r,a=e(5481),i=(r=/[^.]+$/.exec(a&&a.keys&&a.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";t.exports=function(n){return!!i&&i in n}},7301:t=>{t.exports=function(o){return function(e){return o(e)}}},7473:t=>{var o=Function.prototype.toString;t.exports=function(e){if(e!=null){try{return o.call(e)}catch{}try{return e+""}catch{}}return""}},7534:(t,o,e)=>{var r=e(2552),a=e(346);t.exports=function(i){return a(i)&&r(i)=="[object Arguments]"}},7670:(t,o,e)=>{var r=e(2651);t.exports=function(a){var i=r(this,a).delete(a);return this.size-=i?1:0,i}},7828:(t,o,e)=>{var r=e(9325).Uint8Array;t.exports=r},8096:t=>{t.exports=function(o,e){for(var r=-1,a=Array(o);++r<o;)a[r]=e(r);return a}},8223:(t,o,e)=>{var r=e(6110)(e(9325),"Map");t.exports=r},8303:(t,o,e)=>{var r=e(6110)(e(9325),"WeakMap");t.exports=r},8655:(t,o,e)=>{var r=e(6025);t.exports=function(a){return r(this.__data__,a)>-1}},8859:(t,o,e)=>{var r=e(3661),a=e(1380),i=e(1459);function n(c){var p=-1,l=c==null?0:c.length;for(this.__data__=new r;++p<l;)this.add(c[p])}n.prototype.add=n.prototype.push=a,n.prototype.has=i,t.exports=n},8984:(t,o,e)=>{var r=e(5527),a=e(3650),i=Object.prototype.hasOwnProperty;t.exports=function(n){if(!r(n))return a(n);var c=[];for(var p in Object(n))i.call(n,p)&&p!="constructor"&&c.push(p);return c}},9155:t=>{t.exports=U},9219:t=>{t.exports=function(o,e){return o.has(e)}},9325:(t,o,e)=>{var r=e(4840),a=typeof self=="object"&&self&&self.Object===Object&&self,i=r||a||Function("return this")();t.exports=i},9350:t=>{var o=Object.prototype.toString;t.exports=function(e){return o.call(e)}},9770:t=>{t.exports=function(o,e){for(var r=-1,a=o==null?0:o.length,i=0,n=[];++r<a;){var c=o[r];e(c,r,o)&&(n[i++]=c)}return n}},9817:t=>{t.exports=function(o){return this.__data__.has(o)}},9905:(t,o,e)=>{e.d(o,{default:()=>q});var r=e(3146),a=e.n(r);const i=function(A){return new RegExp(/<[a-z][\s\S]*>/i).test(A)},n=function(A,y){return Math.floor(Math.random()*(y-A+1))+A};var c="TYPE_CHARACTER",p="REMOVE_CHARACTER",l="REMOVE_ALL",f="REMOVE_LAST_VISIBLE_NODE",m="PAUSE_FOR",d="CALL_FUNCTION",T="ADD_HTML_TAG_ELEMENT",x="CHANGE_DELETE_SPEED",v="CHANGE_DELAY",_="CHANGE_CURSOR",j="PASTE_STRING",E="HTML_TAG";function w(A){return w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},w(A)}function g(A,y){var $=Object.keys(A);if(Object.getOwnPropertySymbols){var C=Object.getOwnPropertySymbols(A);y&&(C=C.filter((function(G){return Object.getOwnPropertyDescriptor(A,G).enumerable}))),$.push.apply($,C)}return $}function k(A){for(var y=1;y<arguments.length;y++){var $=arguments[y]!=null?arguments[y]:{};y%2?g(Object($),!0).forEach((function(C){O(A,C,$[C])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors($)):g(Object($)).forEach((function(C){Object.defineProperty(A,C,Object.getOwnPropertyDescriptor($,C))}))}return A}function N(A){return(function(y){if(Array.isArray(y))return L(y)})(A)||(function(y){if(typeof Symbol<"u"&&y[Symbol.iterator]!=null||y["@@iterator"]!=null)return Array.from(y)})(A)||(function(y,$){if(y){if(typeof y=="string")return L(y,$);var C={}.toString.call(y).slice(8,-1);return C==="Object"&&y.constructor&&(C=y.constructor.name),C==="Map"||C==="Set"?Array.from(y):C==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C)?L(y,$):void 0}})(A)||(function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)})()}function L(A,y){(y==null||y>A.length)&&(y=A.length);for(var $=0,C=Array(y);$<y;$++)C[$]=A[$];return C}function D(A,y){for(var $=0;$<y.length;$++){var C=y[$];C.enumerable=C.enumerable||!1,C.configurable=!0,"value"in C&&(C.writable=!0),Object.defineProperty(A,Y(C.key),C)}}function O(A,y,$){return(y=Y(y))in A?Object.defineProperty(A,y,{value:$,enumerable:!0,configurable:!0,writable:!0}):A[y]=$,A}function Y(A){var y=(function($){if(w($)!="object"||!$)return $;var C=$[Symbol.toPrimitive];if(C!==void 0){var G=C.call($,"string");if(w(G)!="object")return G;throw new TypeError("@@toPrimitive must return a primitive value.")}return String($)})(A);return w(y)=="symbol"?y:y+""}const q=(function(){function A(C,G){var s=this;if((function(b,M){if(!(b instanceof M))throw new TypeError("Cannot call a class as a function")})(this,A),O(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),O(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),O(this,"setupWrapperElement",(function(){s.state.elements.container&&(s.state.elements.wrapper.className=s.options.wrapperClassName,s.state.elements.cursor.className=s.options.cursorClassName,s.state.elements.cursor.innerHTML=s.options.cursor,s.state.elements.container.innerHTML="",s.state.elements.container.appendChild(s.state.elements.wrapper),s.state.elements.container.appendChild(s.state.elements.cursor))})),O(this,"start",(function(){return s.state.eventLoopPaused=!1,s.runEventLoop(),s})),O(this,"pause",(function(){return s.state.eventLoopPaused=!0,s})),O(this,"stop",(function(){return s.state.eventLoop&&((0,r.cancel)(s.state.eventLoop),s.state.eventLoop=null),s})),O(this,"pauseFor",(function(b){return s.addEventToQueue(m,{ms:b}),s})),O(this,"typeOutAllStrings",(function(){return typeof s.options.strings=="string"?(s.typeString(s.options.strings).pauseFor(s.options.pauseFor),s):(s.options.strings.forEach((function(b){s.typeString(b).pauseFor(s.options.pauseFor).deleteAll(s.options.deleteSpeed)})),s)})),O(this,"typeString",(function(b){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(i(b))return s.typeOutHTMLString(b,M);if(b){var F=(s.options||{}).stringSplitter,I=typeof F=="function"?F(b):b.split("");s.typeCharacters(I,M)}return s})),O(this,"pasteString",(function(b){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return i(b)?s.typeOutHTMLString(b,M,!0):(b&&s.addEventToQueue(j,{character:b,node:M}),s)})),O(this,"typeOutHTMLString",(function(b){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,F=arguments.length>2?arguments[2]:void 0,I=(function(K){var Z=document.createElement("div");return Z.innerHTML=K,Z.childNodes})(b);if(I.length>0)for(var z=0;z<I.length;z++){var W=I[z],X=W.innerHTML;W&&W.nodeType!==3?(W.innerHTML="",s.addEventToQueue(T,{node:W,parentNode:M}),F?s.pasteString(X,W):s.typeString(X,W)):W.textContent&&(F?s.pasteString(W.textContent,M):s.typeString(W.textContent,M))}return s})),O(this,"deleteAll",(function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return s.addEventToQueue(l,{speed:b}),s})),O(this,"changeDeleteSpeed",(function(b){if(!b)throw new Error("Must provide new delete speed");return s.addEventToQueue(x,{speed:b}),s})),O(this,"changeDelay",(function(b){if(!b)throw new Error("Must provide new delay");return s.addEventToQueue(v,{delay:b}),s})),O(this,"changeCursor",(function(b){if(!b)throw new Error("Must provide new cursor");return s.addEventToQueue(_,{cursor:b}),s})),O(this,"deleteChars",(function(b){if(!b)throw new Error("Must provide amount of characters to delete");for(var M=0;M<b;M++)s.addEventToQueue(p);return s})),O(this,"callFunction",(function(b,M){if(!b||typeof b!="function")throw new Error("Callback must be a function");return s.addEventToQueue(d,{cb:b,thisArg:M}),s})),O(this,"typeCharacters",(function(b){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!b||!Array.isArray(b))throw new Error("Characters must be an array");return b.forEach((function(F){s.addEventToQueue(c,{character:F,node:M})})),s})),O(this,"removeCharacters",(function(b){if(!b||!Array.isArray(b))throw new Error("Characters must be an array");return b.forEach((function(){s.addEventToQueue(p)})),s})),O(this,"addEventToQueue",(function(b,M){var F=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return s.addEventToStateProperty(b,M,F,"eventQueue")})),O(this,"addReverseCalledEvent",(function(b,M){var F=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return s.options.loop?s.addEventToStateProperty(b,M,F,"reverseCalledEvents"):s})),O(this,"addEventToStateProperty",(function(b,M){var F=arguments.length>2&&arguments[2]!==void 0&&arguments[2],I=arguments.length>3?arguments[3]:void 0,z={eventName:b,eventArgs:M||{}};return s.state[I]=F?[z].concat(N(s.state[I])):[].concat(N(s.state[I]),[z]),s})),O(this,"runEventLoop",(function(){s.state.lastFrameTime||(s.state.lastFrameTime=Date.now());var b=Date.now(),M=b-s.state.lastFrameTime;if(!s.state.eventQueue.length){if(!s.options.loop)return;s.state.eventQueue=N(s.state.calledEvents),s.state.calledEvents=[],s.options=k({},s.state.initialOptions)}if(s.state.eventLoop=a()(s.runEventLoop),!s.state.eventLoopPaused){if(s.state.pauseUntil){if(b<s.state.pauseUntil)return;s.state.pauseUntil=null}var F,I=N(s.state.eventQueue),z=I.shift();if(!(M<=(F=z.eventName===f||z.eventName===p?s.options.deleteSpeed==="natural"?n(40,80):s.options.deleteSpeed:s.options.delay==="natural"?n(120,160):s.options.delay))){var W=z.eventName,X=z.eventArgs;switch(s.logInDevMode({currentEvent:z,state:s.state,delay:F}),W){case j:case c:var K=X.character,Z=X.node,fe=document.createTextNode(K),ee=fe;s.options.onCreateTextNode&&typeof s.options.onCreateTextNode=="function"&&(ee=s.options.onCreateTextNode(K,fe)),ee&&(Z?Z.appendChild(ee):s.state.elements.wrapper.appendChild(ee)),s.state.visibleNodes=[].concat(N(s.state.visibleNodes),[{type:"TEXT_NODE",character:K,node:ee}]);break;case p:I.unshift({eventName:f,eventArgs:{removingCharacterNode:!0}});break;case m:var je=z.eventArgs.ms;s.state.pauseUntil=Date.now()+parseInt(je);break;case d:var he=z.eventArgs,_e=he.cb,Ce=he.thisArg;_e.call(Ce,{elements:s.state.elements});break;case T:var me=z.eventArgs,ie=me.node,se=me.parentNode;se?se.appendChild(ie):s.state.elements.wrapper.appendChild(ie),s.state.visibleNodes=[].concat(N(s.state.visibleNodes),[{type:E,node:ie,parentNode:se||s.state.elements.wrapper}]);break;case l:var Se=s.state.visibleNodes,ce=X.speed,re=[];ce&&re.push({eventName:x,eventArgs:{speed:ce,temp:!0}});for(var ve=0,Ee=Se.length;ve<Ee;ve++)re.push({eventName:f,eventArgs:{removingCharacterNode:!1}});ce&&re.push({eventName:x,eventArgs:{speed:s.options.deleteSpeed,temp:!0}}),I.unshift.apply(I,re);break;case f:var Te=z.eventArgs.removingCharacterNode;if(s.state.visibleNodes.length){var le=s.state.visibleNodes.pop(),Oe=le.type,ne=le.node,Ae=le.character;s.options.onRemoveNode&&typeof s.options.onRemoveNode=="function"&&s.options.onRemoveNode({node:ne,character:Ae}),ne&&ne.parentNode.removeChild(ne),Oe===E&&Te&&I.unshift({eventName:f,eventArgs:{}})}break;case x:s.options.deleteSpeed=z.eventArgs.speed;break;case v:s.options.delay=z.eventArgs.delay;break;case _:s.options.cursor=z.eventArgs.cursor,s.state.elements.cursor.innerHTML=z.eventArgs.cursor}s.options.loop&&(z.eventName===f||z.eventArgs&&z.eventArgs.temp||(s.state.calledEvents=[].concat(N(s.state.calledEvents),[z]))),s.state.eventQueue=I,s.state.lastFrameTime=b}}})),C)if(typeof C=="string"){var de=document.querySelector(C);if(!de)throw new Error("Could not find container element");this.state.elements.container=de}else this.state.elements.container=C;G&&(this.options=k(k({},this.options),G)),this.state.initialOptions=k({},this.options),this.init()}var y,$;return y=A,($=[{key:"init",value:function(){var C,G;this.setupWrapperElement(),this.addEventToQueue(_,{cursor:this.options.cursor},!0),this.addEventToQueue(l,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(C=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(G=document.createElement("style")).appendChild(document.createTextNode(C)),document.head.appendChild(G),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(C){this.options.devMode&&console.log(C)}}])&&D(y.prototype,$),Object.defineProperty(y,"prototype",{writable:!1}),A})()},9935:t=>{t.exports=function(){return!1}}},Q={};function S(t){var o=Q[t];if(o!==void 0)return o.exports;var e=Q[t]={id:t,loaded:!1,exports:{}};return H[t].call(e.exports,e,e.exports,S),e.loaded=!0,e.exports}S.n=t=>{var o=t&&t.__esModule?()=>t.default:()=>t;return S.d(o,{a:o}),o},S.d=(t,o)=>{for(var e in o)S.o(o,e)&&!S.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:o[e]})},S.g=(function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}})(),S.o=(t,o)=>Object.prototype.hasOwnProperty.call(t,o),S.nmd=t=>(t.paths=[],t.children||(t.children=[]),t);var B={};return(()=>{S.d(B,{default:()=>T});var t=S(9155),o=S.n(t),e=S(9905),r=S(2404),a=S.n(r);function i(x){return i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(v){return typeof v}:function(v){return v&&typeof Symbol=="function"&&v.constructor===Symbol&&v!==Symbol.prototype?"symbol":typeof v},i(x)}function n(x,v){for(var _=0;_<v.length;_++){var j=v[_];j.enumerable=j.enumerable||!1,j.configurable=!0,"value"in j&&(j.writable=!0),Object.defineProperty(x,m(j.key),j)}}function c(x,v){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(_,j){return _.__proto__=j,_},c(x,v)}function p(x){if(x===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return x}function l(){try{var x=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch{}return(l=function(){return!!x})()}function f(x){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(v){return v.__proto__||Object.getPrototypeOf(v)},f(x)}function m(x){var v=(function(_){if(i(_)!="object"||!_)return _;var j=_[Symbol.toPrimitive];if(j!==void 0){var E=j.call(_,"string");if(i(E)!="object")return E;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(_)})(x);return i(v)=="symbol"?v:v+""}var d=(function(x){(function(w,g){if(typeof g!="function"&&g!==null)throw new TypeError("Super expression must either be null or a function");w.prototype=Object.create(g&&g.prototype,{constructor:{value:w,writable:!0,configurable:!0}}),Object.defineProperty(w,"prototype",{writable:!1}),g&&c(w,g)})(E,x);var v,_,j=(function(w){var g=l();return function(){var k,N=f(w);if(g){var L=f(this).constructor;k=Reflect.construct(N,arguments,L)}else k=N.apply(this,arguments);return(function(D,O){if(O&&(i(O)=="object"||typeof O=="function"))return O;if(O!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return p(D)})(this,k)}})(E);function E(){var w,g,k,N;(function(Y,q){if(!(Y instanceof q))throw new TypeError("Cannot call a class as a function")})(this,E);for(var L=arguments.length,D=new Array(L),O=0;O<L;O++)D[O]=arguments[O];return g=p(w=j.call.apply(j,[this].concat(D))),N={instance:null},(k=m(k="state"))in g?Object.defineProperty(g,k,{value:N,enumerable:!0,configurable:!0,writable:!0}):g[k]=N,w}return v=E,(_=[{key:"componentDidMount",value:function(){var w=this,g=new e.default(this.typewriter,this.props.options);this.setState({instance:g},(function(){var k=w.props.onInit;k&&k(g)}))}},{key:"componentDidUpdate",value:function(w){a()(this.props.options,w.options)||this.setState({instance:new e.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var w=this,g=this.props.component;return o().createElement(g,{ref:function(k){return w.typewriter=k},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&n(v.prototype,_),Object.defineProperty(v,"prototype",{writable:!1}),E})(t.Component);d.defaultProps={component:"div"};const T=d})(),B.default})()))})(ae)),ae.exports}var Ve=He();const Qe=Me(Ve),Ue=(u,R)=>{const U=R?{keyword:"#c586c0",string:"#ce9178",comment:"#6a9955",key:"#9cdcfe",number:"#b5cea8",function:"#dcdcaa"}:{keyword:"#af00db",string:"#a31515",comment:"#008000",key:"#0451a5",number:"#098658",function:"#795e26"},H=u.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),Q=[],S=["const","let","var","async","await","return","type","while","if","else","break","new","interface"],B=new RegExp(["(?<comment>\\/\\/.*)",`(?<string>"(?:\\\\"|[^"])*"|'(?:\\\\'|[^'])*')`,`\\b(?<keyword>${S.join("|")})\\b`,"\\b(?<number>\\d+)\\b","\\b(?<function>\\w+)(?=\\s*\\()","\\b(?<key>\\w+)\\b(?=\\s*:)"].join("|"),"g");let t=0,o;for(;(o=B.exec(H))!==null;){o.index>t&&Q.push({type:"plain",text:H.substring(t,o.index)});const e=o.groups,r=Object.keys(e).find(a=>!!e[a]);r&&Q.push({type:r,text:e[r]}),t=B.lastIndex}return t<H.length&&Q.push({type:"plain",text:H.substring(t)}),Q.map(e=>e.type==="plain"?e.text:`<span style="color: ${U[e.type]}">${e.text}</span>`).join("")},We=P(Ne)`
    transition: transform 0.3s ease;
`,Ge=P.div`
    padding: 40px 0 80px;
`,qe=P.div`
    max-width: 1200px;
    margin-bottom: 36px;
    border-inline-start: 2px solid ${u=>u.theme.accentColor};
    padding-inline-start: 24px;
    font-size: 1rem;
    line-height: 1.8;
    color: ${u=>u.theme.color}CC;
    font-family: var(--font-main);
    text-align: start;
`,Ye=P.div`
    background: ${u=>u.theme.cardSecondaryBackground};
    border: 1px solid ${u=>u.theme.cardBorderColor};
    border-radius: 6px;
    margin-bottom: 40px;
    overflow: hidden;
    transition: all 0.3s ease;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: -1px;
        inset-inline-start: -1px;
        width: 14px;
        height: 14px;
        border-top: 2px solid ${u=>u.theme.accentColor};
        border-inline-start: 2px solid ${u=>u.theme.accentColor};
        border-radius: 6px 0 0 0;
    }

    &:hover {
        border-color: ${u=>u.theme.accentColor}35;
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
    }
`,Xe=P.div`
    padding: 24px 32px;
    padding-inline-end: 72px; /* Ensure space for the absolute icon */
    border-bottom: 1px solid ${u=>u.theme.cardBorderColor};
    display: flex;
    align-items: center;
    position: relative;
    gap: 16px;
    cursor: pointer;
    user-select: none;
`,Je=P.div`
    flex: 1;
`,Ke=P.p`
    font-family: var(--font-mono);
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: ${u=>u.theme.accentColor};
    margin: 0 0 8px;
    opacity: 0.8;
    text-align: start;
`,Ze=P.h3`
    font-family: var(--font-mono);
    font-size: 1.35rem;
    font-weight: 700;
    color: ${u=>u.theme.color};
    margin: 0 0 6px;
    letter-spacing: -0.02em;
    text-align: start;
`,et=P.p`
    font-size: 0.88rem;
    color: ${u=>u.theme.color}88;
    margin: 0;
    text-align: start;
`,tt=P.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 12px;
`,rt=P.span`
    font-family: var(--font-mono);
    font-size: 0.7rem;
    padding: 2px 8px;
    border-radius: 4px;
    background: ${u=>u.theme.accentColor}0D;
    color: ${u=>u.theme.accentColor};
    border: 1px solid ${u=>u.theme.accentColor}20;
    margin-bottom: 4px;
`,nt=P.span`
    position: absolute;
    top: 24px;
    right: 24px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1.5px solid ${u=>u.theme.accentColor}40;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: ${u=>u.theme.accentColor};
    font-size: 1rem;
    transition: transform 0.3s ease;
    transform: rotate(${u=>u.$open?"180deg":"0deg"});

    @media (max-width: 768px) {
        top: 20px;
        right: 16px;
        width: 26px;
        height: 26px;
    }
`,ot=P.div`
    display: grid;
    grid-template-rows: ${u=>u.$open?"1fr":"0fr"};
    transition: grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    background: ${u=>u.theme.cardBackground};
    overflow: hidden;
    min-height: 0;
`,at=P.div`
    overflow: hidden;
    min-height: 0;
    padding: 0 32px 32px;
`,J=P.div`
    margin-top: 1px;
    &:first-child { margin-top: 32px; }
`,te=P.h4`
    font-family: var(--font-mono);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: ${u=>u.theme.accentColor};
    margin: 0 0 6px;
    opacity: 0.9;
    text-align: start;
`,xe=P.div`
    font-size: 0.92rem;
    line-height: 1.5;
    color: ${u=>u.theme.color}CC;
    margin: 0;
    text-align: start;
    strong {
        color: ${u=>u.theme.accentColor};
        font-weight: 600;
    }
    p { margin: 0; }
`,it=P.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
    li {
        position: relative;
        padding-inline-start: 16px;
        font-size: 0.9rem;
        line-height: 1.65;
        color: ${u=>u.theme.color}CC;
        text-align: start;

        &::before {
            content: '▸';
            position: absolute;
            inset-inline-start: 0;
            color: ${u=>u.theme.accentColor};
            margin-top: -0.25em;
            font-size: 1.4em;
        }

        strong {
            color: ${u=>u.theme.accentColor};
            font-weight: 600;
        }
        
        p { display: inline; margin: 0; }
    }
`,st=P.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 8px;
`,ct=P.div`
    display: flex;
    flex-direction: column;
    padding: 12px 18px;
    background: ${u=>u.theme.accentColor}0D;
    border: 1px solid ${u=>u.theme.accentColor}25;
    border-radius: 6px;
    text-align: start;
    min-width: 100px;
`,lt=P.span`
    font-family: var(--font-mono);
    font-size: 1.4rem;
    font-weight: 700;
    color: ${u=>u.theme.accentColor};
    line-height: 1;
    margin-bottom: 4px;
`,ut=P.span`
    font-family: var(--font-mono);
    font-size: 0.7rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: ${u=>u.theme.color}66;
`,oe=P.hr`
    border-top: 1px solid ${u=>u.theme.cardBorderColor};
    margin: 16px 0;
`,pt=P.div`
    background: ${u=>u.theme.background==="#0d1117"?"#161b22":"#f6f8fa"};
    border: 1px solid ${u=>u.theme.cardBorderColor};
    border-radius: 6px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
    width: 320px;
    z-index: 2000;
    overflow: hidden;
    pointer-events: none;
    font-family: var(--font-mono);
    
    ${u=>u.$floating?`
        position: fixed;
        left: ${u.$x}px;
        top: ${u.$y}px;
        transform: translate(20px, 20px);
    `:`
        position: relative;
        width: 100%;
        margin-top: 16px;
        box-shadow: none;
    `}
`,dt=P.div`
    background: ${u=>u.theme.background==="#0d1117"?"#21262d":"#ebf0f4"};
    padding: 8px 12px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${u=>u.theme.cardBorderColor};
`,ft=P.div`
    display: flex;
    gap: 6px;
    margin-right: 12px;
    
    span {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        &:nth-child(1) { background: #ff5f56; }
        &:nth-child(2) { background: #ffbd2e; }
        &:nth-child(3) { background: #27c93f; }
    }
`,ht=P.div`
    font-size: 0.65rem;
    color: ${u=>u.theme.color}88;
    text-transform: lowercase;
    letter-spacing: 0.05em;
`,mt=P.div`
    padding: 14px;
    min-height: 120px;
    background: ${u=>u.theme.background==="#0d1117"?"#0d1117":"#ffffff"};
    text-align: left;
    
    * {
        font-size: 11px !important; /* Force small code-like font */
        font-family: var(--font-mono) !important;
        line-height: 1.5 !important;
        white-space: pre-wrap; /* Preserve indentation spaces */
    }
    
    .Typewriter__cursor {
        color: ${u=>u.theme.accentColor};
    }
`,vt=P.div`
    display: flex;
    gap: 6px;
    align-items: flex-start;
    justify-content: flex-start; /* Ensure left alignment */
    
    &::before {
        content: '>';
        color: ${u=>u.theme.accentColor};
        opacity: 0.7;
        flex-shrink: 0;
        margin-top: 1px;
    }

    .Typewriter {
        width: 100%;
        text-align: left;
    }
`,yt=P.div`
    margin-top: 12px;
    width: 100%;
    border-radius: 4px;
    overflow: hidden;
    border: 1px solid ${u=>u.theme.accentColor}20;
    background: ${u=>u.theme.accentColor}05;
`,gt=P.div`
    display: flex;
    align-items: center;
    gap: 6px;
    margin-top: 8px;
    font-size: 0.6rem;
    color: ${u=>u.theme.accentColor};
    opacity: 0.8;
    
    &::before {
        content: '';
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: ${u=>u.theme.accentColor};
        box-shadow: 0 0 8px ${u=>u.theme.accentColor};
    }
`,be=({snippet:u,visible:R,floating:U=!0,x:H=0,y:Q=0})=>{const{t:S}=we(),t=V.useContext(pe).background==="#0d1117",o=Ue(u,t),e=h.jsxs(pt,{$floating:U,$x:H,$y:Q,as:ke.div,initial:{opacity:0,scale:.9,y:10},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:5},transition:{duration:.2,ease:"easeOut"},children:[h.jsxs(dt,{children:[h.jsxs(ft,{children:[h.jsx("span",{}),h.jsx("span",{}),h.jsx("span",{})]}),h.jsxs(ht,{children:[S("layout:caseStudies.terminal.system",{defaultValue:"system.log"})," — ",S("layout:caseStudies.terminal.title",{defaultValue:"Terminal Preview"})]})]}),h.jsx(mt,{children:h.jsx(vt,{children:h.jsx(Qe,{options:{delay:1,cursor:"▊",autoStart:!0,loop:!1},onInit:r=>{r.typeString(`<span style="color: var(--accent-color); opacity: 0.5;">// ${S("layout:caseStudies.terminal.executing",{defaultValue:"Executing..."})}</span><br/>`).pauseFor(50).typeString(o.replace(/\n/g,"<br/>")).start()}})})})]});return U?h.jsx($e,{children:R&&e}):R?e:null};function Tt(u){var p;const{t:R}=we(),U=V.useContext(pe),{header:H}=u,Q=R("resCaseStudies:intro",{defaultValue:""}),S=R("resCaseStudies:studies",{returnObjects:!0})||[],[B,t]=V.useState(null),[o,e]=V.useState(!1),[r,a]=V.useState({id:null,x:0,y:0});V.useEffect(()=>{const l=window.location.hash.replace("#","");l&&S.some(f=>f.id===l)?t(l):!B&&S.length>0&&t(S[0].id)},[S,B]);const i=V.useRef({});V.useEffect(()=>{const l=()=>e(window.innerWidth<992);return l(),window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)},[]);const n=l=>{t(f=>f===l?null:l)};V.useEffect(()=>{if(B&&i.current[B]){const l=setTimeout(()=>{var f;(f=i.current[B])==null||f.scrollIntoView({behavior:"smooth",block:"start"})},300);return()=>clearTimeout(l)}},[B]);const c=V.useCallback((l,f)=>{o||a({id:f,x:l.clientX,y:l.clientY})},[o]);return h.jsxs(h.Fragment,{children:[h.jsxs(Le,{children:[h.jsxs("title",{children:[H||R("layout:sections.caseStudies",{defaultValue:"Case Studies"})," | Amin Abbasi"]}),h.jsx("meta",{name:"description",content:"Deep technical dives into architectural challenges and solutions in Fintech and HealthTech."})]}),h.jsx(ze,{title:H||R("layout:sections.caseStudies",{defaultValue:"Case Studies"})}),h.jsx(Ge,{children:h.jsxs(De,{style:{maxWidth:"1100px",padding:"0 24px"},children:[h.jsx(ye,{direction:"up",triggerOnce:!0,duration:700,children:h.jsx(qe,{style:{whiteSpace:"pre-line"},children:Q})}),!o&&r.id&&h.jsx(be,{visible:!0,snippet:((p=S.find(l=>l.id===r.id))==null?void 0:p.previewSnippet)||"",x:r.x,y:r.y,floating:!0}),S.map((l,f)=>{const m=B===l.id;return h.jsx(ye,{direction:"up",triggerOnce:!0,duration:600,delay:f*100,children:h.jsxs(Ye,{ref:d=>i.current[l.id]=d,children:[h.jsxs(Xe,{onClick:()=>n(l.id),children:[h.jsxs(Je,{children:[h.jsx(Ke,{children:l.label}),h.jsx(Ze,{children:l.title}),h.jsx(et,{children:l.subtitle}),h.jsx(tt,{children:l.tags.map(d=>h.jsx(rt,{children:d},d))})]}),h.jsx(nt,{$open:m,children:h.jsx(We,{size:14,strokeWidth:2.5})})]}),o&&l.previewSnippet&&h.jsx(yt,{children:h.jsxs("div",{style:{padding:"0 24px"},children:[h.jsx(be,{visible:!0,snippet:l.previewSnippet,floating:!1}),h.jsx("div",{style:{paddingBottom:"12px",paddingInlineStart:"4px"},children:h.jsx(gt,{children:R("layout:caseStudies.terminal.status",{defaultValue:"Ready"})})})]})}),h.jsx(ot,{$open:m,children:h.jsxs(at,{children:[!!l.diagram&&h.jsx(J,{children:h.jsx(Fe,{code:l.diagram,id:l.id,onMouseEnter:d=>!o&&a({id:l.id,x:d.clientX,y:d.clientY}),onMouseMove:d=>c(d,l.id),onMouseLeave:()=>!o&&a({id:null,x:0,y:0})})}),h.jsxs(J,{children:[h.jsx(te,{children:R("layout:caseStudies.problem")}),h.jsx(xe,{children:h.jsx(ue,{children:l.problem})})]}),h.jsx(oe,{}),h.jsxs(J,{children:[h.jsx(te,{children:R("layout:caseStudies.approach")}),h.jsx(it,{children:l.approach.map((d,T)=>h.jsx("li",{children:h.jsx(ue,{children:d})},T))})]}),h.jsx(oe,{}),h.jsxs(J,{children:[h.jsx(te,{children:R("layout:caseStudies.decisions")}),l.decisions.map((d,T)=>h.jsxs("div",{style:{marginBottom:T<l.decisions.length-1?12:0,textAlign:"start",lineHeight:1.6},children:[h.jsxs("span",{style:{fontFamily:"var(--font-mono)",fontSize:"0.88rem",fontWeight:700,color:U.accentColor,marginInlineEnd:"8px"},children:["◆ ",d.title,":"]}),h.jsx("span",{style:{fontSize:"0.88rem",color:U.color+"BB"},children:d.rationale})]},T))]}),h.jsx(oe,{}),h.jsxs(J,{children:[h.jsx(te,{children:R("layout:caseStudies.metrics")}),h.jsx(st,{children:l.metrics.map(d=>h.jsxs(ct,{children:[h.jsx(lt,{children:d.value}),h.jsx(ut,{children:d.label})]},d.label))})]}),h.jsx(oe,{}),h.jsxs(J,{children:[h.jsx(te,{children:R("layout:caseStudies.outcome")}),h.jsx(xe,{children:h.jsx(ue,{children:l.outcome})})]})]})})]})},l.id)})]})})]})}export{Tt as default};
