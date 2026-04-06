import{j as ct}from"./vendor-motion-CLxAPPWH.js";import{R as xt,a as $}from"./vendor-icons-oi0yKthW.js";import{e as rr}from"./app-B6OVh5v3.js";import{f as er}from"./vendor-charts-DbC-OHEB.js";function ar(t){var r=Object.create(null);return function(e){return r[e]===void 0&&(r[e]=t(e)),r[e]}}function nr(t){if(t.sheet)return t.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===t)return document.styleSheets[r]}function sr(t){var r=document.createElement("style");return r.setAttribute("data-emotion",t.key),t.nonce!==void 0&&r.setAttribute("nonce",t.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var or=(function(){function t(e){var a=this;this._insertTag=function(n){var s;a.tags.length===0?a.insertionPoint?s=a.insertionPoint.nextSibling:a.prepend?s=a.container.firstChild:s=a.before:s=a.tags[a.tags.length-1].nextSibling,a.container.insertBefore(n,s),a.tags.push(n)},this.isSpeedy=e.speedy===void 0?!0:e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var r=t.prototype;return r.hydrate=function(a){a.forEach(this._insertTag)},r.insert=function(a){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(sr(this));var n=this.tags[this.tags.length-1];if(this.isSpeedy){var s=nr(n);try{s.insertRule(a,s.cssRules.length)}catch{}}else n.appendChild(document.createTextNode(a));this.ctr++},r.flush=function(){this.tags.forEach(function(a){var n;return(n=a.parentNode)==null?void 0:n.removeChild(a)}),this.tags=[],this.ctr=0},t})(),N="-ms-",Q="-moz-",v="-webkit-",_t="comm",pt="rule",yt="decl",ir="@import",kt="@keyframes",cr="@layer",fr=Math.abs,tt=String.fromCharCode,lr=Object.assign;function dr(t,r){return A(t,0)^45?(((r<<2^A(t,0))<<2^A(t,1))<<2^A(t,2))<<2^A(t,3):0}function Mt(t){return t.trim()}function ur(t,r){return(t=r.exec(t))?t[0]:t}function b(t,r,e){return t.replace(r,e)}function ft(t,r){return t.indexOf(r)}function A(t,r){return t.charCodeAt(r)|0}function L(t,r,e){return t.slice(r,e)}function M(t){return t.length}function ht(t){return t.length}function U(t,r){return r.push(t),t}function mr(t,r){return t.map(r).join("")}var rt=1,j=1,Yt=0,_=0,E=0,F="";function et(t,r,e,a,n,s,i){return{value:t,root:r,parent:e,type:a,props:n,children:s,line:rt,column:j,length:i,return:""}}function V(t,r){return lr(et("",null,null,"",null,null,0),t,{length:-t.length},r)}function pr(){return E}function yr(){return E=_>0?A(F,--_):0,j--,E===10&&(j=1,rt--),E}function k(){return E=_<Yt?A(F,_++):0,j++,E===10&&(j=1,rt++),E}function z(){return A(F,_)}function K(){return _}function q(t,r){return L(F,t,r)}function B(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function zt(t){return rt=j=1,Yt=M(F=t),_=0,[]}function Xt(t){return F="",t}function Z(t){return Mt(q(_-1,lt(t===91?t+2:t===40?t+1:t)))}function hr(t){for(;(E=z())&&E<33;)k();return B(t)>2||B(E)>3?"":" "}function gr(t,r){for(;--r&&k()&&!(E<48||E>102||E>57&&E<65||E>70&&E<97););return q(t,K()+(r<6&&z()==32&&k()==32))}function lt(t){for(;k();)switch(E){case t:return _;case 34:case 39:t!==34&&t!==39&&lt(E);break;case 40:t===41&&lt(t);break;case 92:k();break}return _}function vr(t,r){for(;k()&&t+E!==57;)if(t+E===84&&z()===47)break;return"/*"+q(r,_-1)+"*"+tt(t===47?t:k())}function br(t){for(;!B(z());)k();return q(t,_)}function xr(t){return Xt(G("",null,null,null,[""],t=zt(t),0,[0],t))}function G(t,r,e,a,n,s,i,f,d){for(var u=0,m=0,p=i,w=0,C=0,y=0,l=1,c=1,g=1,h=0,O="",P=n,T=s,I=a,S=O;c;)switch(y=h,h=k()){case 40:if(y!=108&&A(S,p-1)==58){ft(S+=b(Z(h),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:S+=Z(h);break;case 9:case 10:case 13:case 32:S+=hr(y);break;case 92:S+=gr(K()-1,7);continue;case 47:switch(z()){case 42:case 47:U(wr(vr(k(),K()),r,e),d);break;default:S+="/"}break;case 123*l:f[u++]=M(S)*g;case 125*l:case 59:case 0:switch(h){case 0:case 125:c=0;case 59+m:g==-1&&(S=b(S,/\f/g,"")),C>0&&M(S)-p&&U(C>32?St(S+";",a,e,p-1):St(b(S," ","")+";",a,e,p-2),d);break;case 59:S+=";";default:if(U(I=wt(S,r,e,u,m,n,f,O,P=[],T=[],p),s),h===123)if(m===0)G(S,r,I,I,P,s,p,f,T);else switch(w===99&&A(S,3)===110?100:w){case 100:case 108:case 109:case 115:G(t,I,I,a&&U(wt(t,I,I,0,0,n,f,O,n,P=[],p),T),n,T,p,f,a?P:T);break;default:G(S,I,I,I,[""],T,0,f,T)}}u=m=C=0,l=g=1,O=S="",p=i;break;case 58:p=1+M(S),C=y;default:if(l<1){if(h==123)--l;else if(h==125&&l++==0&&yr()==125)continue}switch(S+=tt(h),h*l){case 38:g=m>0?1:(S+="\f",-1);break;case 44:f[u++]=(M(S)-1)*g,g=1;break;case 64:z()===45&&(S+=Z(k())),w=z(),m=p=M(O=S+=br(K())),h++;break;case 45:y===45&&M(S)==2&&(l=0)}}return s}function wt(t,r,e,a,n,s,i,f,d,u,m){for(var p=n-1,w=n===0?s:[""],C=ht(w),y=0,l=0,c=0;y<a;++y)for(var g=0,h=L(t,p+1,p=fr(l=i[y])),O=t;g<C;++g)(O=Mt(l>0?w[g]+" "+h:b(h,/&\f/g,w[g])))&&(d[c++]=O);return et(t,r,e,n===0?pt:f,d,u,m)}function wr(t,r,e){return et(t,r,e,_t,tt(pr()),L(t,2,-2),0)}function St(t,r,e,a){return et(t,r,e,yt,L(t,0,a),L(t,a+1,-1),a)}function X(t,r){for(var e="",a=ht(t),n=0;n<a;n++)e+=r(t[n],n,t,r)||"";return e}function Sr(t,r,e,a){switch(t.type){case cr:if(t.children.length)break;case ir:case yt:return t.return=t.return||t.value;case _t:return"";case kt:return t.return=t.value+"{"+X(t.children,a)+"}";case pt:t.value=t.props.join(",")}return M(e=X(t.children,a))?t.return=t.value+"{"+e+"}":""}function $r(t){var r=ht(t);return function(e,a,n,s){for(var i="",f=0;f<r;f++)i+=t[f](e,a,n,s)||"";return i}}function Cr(t){return function(r){r.root||(r=r.return)&&t(r)}}var Or=function(r,e,a){for(var n=0,s=0;n=s,s=z(),n===38&&s===12&&(e[a]=1),!B(s);)k();return q(r,_)},Er=function(r,e){var a=-1,n=44;do switch(B(n)){case 0:n===38&&z()===12&&(e[a]=1),r[a]+=Or(_-1,e,a);break;case 2:r[a]+=Z(n);break;case 4:if(n===44){r[++a]=z()===58?"&\f":"",e[a]=r[a].length;break}default:r[a]+=tt(n)}while(n=k());return r},Rr=function(r,e){return Xt(Er(zt(r),e))},$t=new WeakMap,Ir=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var e=r.value,a=r.parent,n=r.column===a.column&&r.line===a.line;a.type!=="rule";)if(a=a.parent,!a)return;if(!(r.props.length===1&&e.charCodeAt(0)!==58&&!$t.get(a))&&!n){$t.set(r,!0);for(var s=[],i=Rr(e,s),f=a.props,d=0,u=0;d<i.length;d++)for(var m=0;m<f.length;m++,u++)r.props[u]=s[d]?i[d].replace(/&\f/g,f[m]):f[m]+" "+i[d]}}},Ar=function(r){if(r.type==="decl"){var e=r.value;e.charCodeAt(0)===108&&e.charCodeAt(2)===98&&(r.return="",r.value="")}};function jt(t,r){switch(dr(t,r)){case 5103:return v+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return v+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return v+t+Q+t+N+t+t;case 6828:case 4268:return v+t+N+t+t;case 6165:return v+t+N+"flex-"+t+t;case 5187:return v+t+b(t,/(\w+).+(:[^]+)/,v+"box-$1$2"+N+"flex-$1$2")+t;case 5443:return v+t+N+"flex-item-"+b(t,/flex-|-self/,"")+t;case 4675:return v+t+N+"flex-line-pack"+b(t,/align-content|flex-|-self/,"")+t;case 5548:return v+t+N+b(t,"shrink","negative")+t;case 5292:return v+t+N+b(t,"basis","preferred-size")+t;case 6060:return v+"box-"+b(t,"-grow","")+v+t+N+b(t,"grow","positive")+t;case 4554:return v+b(t,/([^-])(transform)/g,"$1"+v+"$2")+t;case 6187:return b(b(b(t,/(zoom-|grab)/,v+"$1"),/(image-set)/,v+"$1"),t,"")+t;case 5495:case 3959:return b(t,/(image-set\([^]*)/,v+"$1$`$1");case 4968:return b(b(t,/(.+:)(flex-)?(.*)/,v+"box-pack:$3"+N+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+v+t+t;case 4095:case 3583:case 4068:case 2532:return b(t,/(.+)-inline(.+)/,v+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(M(t)-1-r>6)switch(A(t,r+1)){case 109:if(A(t,r+4)!==45)break;case 102:return b(t,/(.+:)(.+)-([^]+)/,"$1"+v+"$2-$3$1"+Q+(A(t,r+3)==108?"$3":"$2-$3"))+t;case 115:return~ft(t,"stretch")?jt(b(t,"stretch","fill-available"),r)+t:t}break;case 4949:if(A(t,r+1)!==115)break;case 6444:switch(A(t,M(t)-3-(~ft(t,"!important")&&10))){case 107:return b(t,":",":"+v)+t;case 101:return b(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+v+(A(t,14)===45?"inline-":"")+"box$3$1"+v+"$2$3$1"+N+"$2box$3")+t}break;case 5936:switch(A(t,r+11)){case 114:return v+t+N+b(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return v+t+N+b(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return v+t+N+b(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return v+t+N+t+t}return t}var Nr=function(r,e,a,n){if(r.length>-1&&!r.return)switch(r.type){case yt:r.return=jt(r.value,r.length);break;case kt:return X([V(r,{value:b(r.value,"@","@"+v)})],n);case pt:if(r.length)return mr(r.props,function(s){switch(ur(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return X([V(r,{props:[b(s,/:(read-\w+)/,":"+Q+"$1")]})],n);case"::placeholder":return X([V(r,{props:[b(s,/:(plac\w+)/,":"+v+"input-$1")]}),V(r,{props:[b(s,/:(plac\w+)/,":"+Q+"$1")]}),V(r,{props:[b(s,/:(plac\w+)/,N+"input-$1")]})],n)}return""})}},Tr=[Nr],Pr=function(r){var e=r.key;if(e==="css"){var a=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(a,function(l){var c=l.getAttribute("data-emotion");c.indexOf(" ")!==-1&&(document.head.appendChild(l),l.setAttribute("data-s",""))})}var n=r.stylisPlugins||Tr,s={},i,f=[];i=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+e+' "]'),function(l){for(var c=l.getAttribute("data-emotion").split(" "),g=1;g<c.length;g++)s[c[g]]=!0;f.push(l)});var d,u=[Ir,Ar];{var m,p=[Sr,Cr(function(l){m.insert(l)})],w=$r(u.concat(n,p)),C=function(c){return X(xr(c),w)};d=function(c,g,h,O){m=h,C(c?c+"{"+g.styles+"}":g.styles),O&&(y.inserted[g.name]=!0)}}var y={key:e,sheet:new or({key:e,container:i,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:s,registered:{},insert:d};return y.sheet.hydrate(f),y},nt,Ct;function _r(){if(Ct)return nt;Ct=1;var t=er(),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},e={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},n={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};s[t.ForwardRef]=a,s[t.Memo]=n;function i(y){return t.isMemo(y)?n:s[y.$$typeof]||r}var f=Object.defineProperty,d=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,m=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,w=Object.prototype;function C(y,l,c){if(typeof l!="string"){if(w){var g=p(l);g&&g!==w&&C(y,g,c)}var h=d(l);u&&(h=h.concat(u(l)));for(var O=i(y),P=i(l),T=0;T<h.length;++T){var I=h[T];if(!e[I]&&!(c&&c[I])&&!(P&&P[I])&&!(O&&O[I])){var S=m(l,I);try{f(y,I,S)}catch{}}}}return y}return nt=C,nt}_r();var kr=!0;function Ft(t,r,e){var a="";return e.split(" ").forEach(function(n){t[n]!==void 0?r.push(t[n]+";"):n&&(a+=n+" ")}),a}var gt=function(r,e,a){var n=r.key+"-"+e.name;(a===!1||kr===!1)&&r.registered[n]===void 0&&(r.registered[n]=e.styles)},Vt=function(r,e,a){gt(r,e,a);var n=r.key+"-"+e.name;if(r.inserted[e.name]===void 0){var s=e;do r.insert(e===s?"."+n:"",s,r.sheet,!0),s=s.next;while(s!==void 0)}};function Mr(t){for(var r=0,e,a=0,n=t.length;n>=4;++a,n-=4)e=t.charCodeAt(a)&255|(t.charCodeAt(++a)&255)<<8|(t.charCodeAt(++a)&255)<<16|(t.charCodeAt(++a)&255)<<24,e=(e&65535)*1540483477+((e>>>16)*59797<<16),e^=e>>>24,r=(e&65535)*1540483477+((e>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(n){case 3:r^=(t.charCodeAt(a+2)&255)<<16;case 2:r^=(t.charCodeAt(a+1)&255)<<8;case 1:r^=t.charCodeAt(a)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var Yr=/[A-Z]|^ms/g,zr=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Lt=function(r){return r.charCodeAt(1)===45},Ot=function(r){return r!=null&&typeof r!="boolean"},st=ar(function(t){return Lt(t)?t:t.replace(Yr,"-$&").toLowerCase()}),Et=function(r,e){switch(r){case"animation":case"animationName":if(typeof e=="string")return e.replace(zr,function(a,n,s){return Y={name:n,styles:s,next:Y},n})}return rr[r]!==1&&!Lt(r)&&typeof e=="number"&&e!==0?e+"px":e};function D(t,r,e){if(e==null)return"";var a=e;if(a.__emotion_styles!==void 0)return a;switch(typeof e){case"boolean":return"";case"object":{var n=e;if(n.anim===1)return Y={name:n.name,styles:n.styles,next:Y},n.name;var s=e;if(s.styles!==void 0){var i=s.next;if(i!==void 0)for(;i!==void 0;)Y={name:i.name,styles:i.styles,next:Y},i=i.next;var f=s.styles+";";return f}return Xr(t,r,e)}case"function":{if(t!==void 0){var d=Y,u=e(t);return Y=d,D(t,r,u)}break}}var m=e;if(r==null)return m;var p=r[m];return p!==void 0?p:m}function Xr(t,r,e){var a="";if(Array.isArray(e))for(var n=0;n<e.length;n++)a+=D(t,r,e[n])+";";else for(var s in e){var i=e[s];if(typeof i!="object"){var f=i;r!=null&&r[f]!==void 0?a+=s+"{"+r[f]+"}":Ot(f)&&(a+=st(s)+":"+Et(s,f)+";")}else if(Array.isArray(i)&&typeof i[0]=="string"&&(r==null||r[i[0]]===void 0))for(var d=0;d<i.length;d++)Ot(i[d])&&(a+=st(s)+":"+Et(s,i[d])+";");else{var u=D(t,r,i);switch(s){case"animation":case"animationName":{a+=st(s)+":"+u+";";break}default:a+=s+"{"+u+"}"}}}return a}var Rt=/label:\s*([^\s;{]+)\s*(;|$)/g,Y;function vt(t,r,e){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var a=!0,n="";Y=void 0;var s=t[0];if(s==null||s.raw===void 0)a=!1,n+=D(e,r,s);else{var i=s;n+=i[0]}for(var f=1;f<t.length;f++)if(n+=D(e,r,t[f]),a){var d=s;n+=d[f]}Rt.lastIndex=0;for(var u="",m;(m=Rt.exec(n))!==null;)u+="-"+m[1];var p=Mr(n)+u;return{name:p,styles:n,next:Y}}var jr=function(r){return r()},Fr=xt.useInsertionEffect?xt.useInsertionEffect:!1,Bt=Fr||jr,Dt=$.createContext(typeof HTMLElement<"u"?Pr({key:"css"}):null);Dt.Provider;var Wt=function(r){return $.forwardRef(function(e,a){var n=$.useContext(Dt);return r(e,n,a)})},qt=$.createContext({}),at={}.hasOwnProperty,dt="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Ut=function(r,e){var a={};for(var n in e)at.call(e,n)&&(a[n]=e[n]);return a[dt]=r,a},Vr=function(r){var e=r.cache,a=r.serialized,n=r.isStringTag;return gt(e,a,n),Bt(function(){return Vt(e,a,n)}),null},Lr=Wt(function(t,r,e){var a=t.css;typeof a=="string"&&r.registered[a]!==void 0&&(a=r.registered[a]);var n=t[dt],s=[a],i="";typeof t.className=="string"?i=Ft(r.registered,s,t.className):t.className!=null&&(i=t.className+" ");var f=vt(s,void 0,$.useContext(qt));i+=r.key+"-"+f.name;var d={};for(var u in t)at.call(t,u)&&u!=="css"&&u!==dt&&(d[u]=t[u]);return d.className=i,e&&(d.ref=e),$.createElement($.Fragment,null,$.createElement(Vr,{cache:r,serialized:f,isStringTag:typeof n=="string"}),$.createElement(n,d))}),Ht=Lr,Br=ct.Fragment,R=function(r,e,a){return at.call(e,"css")?ct.jsx(Ht,Ut(r,e),a):ct.jsx(r,e,a)},It=function(r,e){var a=arguments;if(e==null||!at.call(e,"css"))return $.createElement.apply(void 0,a);var n=a.length,s=new Array(n);s[0]=Ht,s[1]=Ut(r,e);for(var i=2;i<n;i++)s[i]=a[i];return $.createElement.apply(null,s)};(function(t){var r;r||(r=t.JSX||(t.JSX={}))})(It||(It={}));function Jt(){for(var t=arguments.length,r=new Array(t),e=0;e<t;e++)r[e]=arguments[e];return vt(r)}function o(){var t=Jt.apply(void 0,arguments),r="animation-"+t.name;return{name:r,styles:"@keyframes "+r+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var Dr=function t(r){for(var e=r.length,a=0,n="";a<e;a++){var s=r[a];if(s!=null){var i=void 0;switch(typeof s){case"boolean":break;case"object":{if(Array.isArray(s))i=t(s);else{i="";for(var f in s)s[f]&&f&&(i&&(i+=" "),i+=f)}break}default:i=s}i&&(n&&(n+=" "),n+=i)}}return n};function Wr(t,r,e){var a=[],n=Ft(t,a,e);return a.length<2?e:n+r(a)}var qr=function(r){var e=r.cache,a=r.serializedArr;return Bt(function(){for(var n=0;n<a.length;n++)Vt(e,a[n],!1)}),null},ot=Wt(function(t,r){var e=[],a=function(){for(var d=arguments.length,u=new Array(d),m=0;m<d;m++)u[m]=arguments[m];var p=vt(u,r.registered);return e.push(p),gt(r,p,!1),r.key+"-"+p.name},n=function(){for(var d=arguments.length,u=new Array(d),m=0;m<d;m++)u[m]=arguments[m];return Wr(r.registered,a,Dr(u))},s={css:a,cx:n,theme:$.useContext(qt)},i=t.children(s);return $.createElement($.Fragment,null,$.createElement(qr,{cache:r,serializedArr:e}),i)}),Ur=Object.defineProperty,Hr=(t,r,e)=>r in t?Ur(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,H=(t,r,e)=>Hr(t,typeof r!="symbol"?r+"":r,e),ut=new Map,J=new WeakMap,At=0,Jr=void 0;function Kr(t){return t?(J.has(t)||(At+=1,J.set(t,At.toString())),J.get(t)):"0"}function Zr(t){return Object.keys(t).sort().filter(r=>t[r]!==void 0).map(r=>`${r}_${r==="root"?Kr(t.root):t[r]}`).toString()}function Gr(t){const r=Zr(t);let e=ut.get(r);if(!e){const a=new Map;let n;const s=new IntersectionObserver(i=>{i.forEach(f=>{var d;const u=f.isIntersecting&&n.some(m=>f.intersectionRatio>=m);t.trackVisibility&&typeof f.isVisible>"u"&&(f.isVisible=u),(d=a.get(f.target))==null||d.forEach(m=>{m(u,f)})})},t);n=s.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),e={id:r,observer:s,elements:a},ut.set(r,e)}return e}function Kt(t,r,e={},a=Jr){if(typeof window.IntersectionObserver>"u"&&a!==void 0){const d=t.getBoundingClientRect();return r(a,{isIntersecting:a,target:t,intersectionRatio:typeof e.threshold=="number"?e.threshold:0,time:0,boundingClientRect:d,intersectionRect:d,rootBounds:d}),()=>{}}const{id:n,observer:s,elements:i}=Gr(e),f=i.get(t)||[];return i.has(t)||i.set(t,f),f.push(r),s.observe(t),function(){f.splice(f.indexOf(r),1),f.length===0&&(i.delete(t),s.unobserve(t)),i.size===0&&(s.disconnect(),ut.delete(n))}}function Qr(t){return typeof t.children!="function"}var Nt=class extends $.Component{constructor(t){super(t),H(this,"node",null),H(this,"_unobserveCb",null),H(this,"handleNode",r=>{this.node&&(this.unobserve(),!r&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=r||null,this.observeNode()}),H(this,"handleChange",(r,e)=>{r&&this.props.triggerOnce&&this.unobserve(),Qr(this.props)||this.setState({inView:r,entry:e}),this.props.onChange&&this.props.onChange(r,e)}),this.state={inView:!!t.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:t,root:r,rootMargin:e,trackVisibility:a,delay:n,fallbackInView:s}=this.props;this._unobserveCb=Kt(this.node,this.handleChange,{threshold:t,root:r,rootMargin:e,trackVisibility:a,delay:n},s)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:t}=this.props;if(typeof t=="function"){const{inView:C,entry:y}=this.state;return t({inView:C,entry:y,ref:this.handleNode})}const{as:r,triggerOnce:e,threshold:a,root:n,rootMargin:s,onChange:i,skip:f,trackVisibility:d,delay:u,initialInView:m,fallbackInView:p,...w}=this.props;return $.createElement(r||"div",{ref:this.handleNode,...w},t)}};function Zt({threshold:t,delay:r,trackVisibility:e,rootMargin:a,root:n,triggerOnce:s,skip:i,initialInView:f,fallbackInView:d,onChange:u}={}){var m;const[p,w]=$.useState(null),C=$.useRef(u),[y,l]=$.useState({inView:!!f,entry:void 0});C.current=u,$.useEffect(()=>{if(i||!p)return;let O;return O=Kt(p,(P,T)=>{l({inView:P,entry:T}),C.current&&C.current(P,T),T.isIntersecting&&s&&O&&(O(),O=void 0)},{root:n,rootMargin:a,threshold:t,trackVisibility:e,delay:r},d),()=>{O&&O()}},[Array.isArray(t)?t.toString():t,p,n,a,s,i,e,d,r]);const c=(m=y.entry)==null?void 0:m.target,g=$.useRef(void 0);!p&&c&&!s&&!i&&g.current!==c&&(g.current=c,l({inView:!!f,entry:void 0}));const h=[w,y.inView,y.entry];return h.ref=h[0],h.inView=h[1],h.entry=h[2],h}var it={exports:{}},x={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tt;function te(){if(Tt)return x;Tt=1;var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),e=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),n=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),i=Symbol.for("react.context"),f=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),m=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),C=Symbol.for("react.offscreen"),y;y=Symbol.for("react.module.reference");function l(c){if(typeof c=="object"&&c!==null){var g=c.$$typeof;switch(g){case t:switch(c=c.type,c){case e:case n:case a:case u:case m:return c;default:switch(c=c&&c.$$typeof,c){case f:case i:case d:case w:case p:case s:return c;default:return g}}case r:return g}}}return x.ContextConsumer=i,x.ContextProvider=s,x.Element=t,x.ForwardRef=d,x.Fragment=e,x.Lazy=w,x.Memo=p,x.Portal=r,x.Profiler=n,x.StrictMode=a,x.Suspense=u,x.SuspenseList=m,x.isAsyncMode=function(){return!1},x.isConcurrentMode=function(){return!1},x.isContextConsumer=function(c){return l(c)===i},x.isContextProvider=function(c){return l(c)===s},x.isElement=function(c){return typeof c=="object"&&c!==null&&c.$$typeof===t},x.isForwardRef=function(c){return l(c)===d},x.isFragment=function(c){return l(c)===e},x.isLazy=function(c){return l(c)===w},x.isMemo=function(c){return l(c)===p},x.isPortal=function(c){return l(c)===r},x.isProfiler=function(c){return l(c)===n},x.isStrictMode=function(c){return l(c)===a},x.isSuspense=function(c){return l(c)===u},x.isSuspenseList=function(c){return l(c)===m},x.isValidElementType=function(c){return typeof c=="string"||typeof c=="function"||c===e||c===n||c===a||c===u||c===m||c===C||typeof c=="object"&&c!==null&&(c.$$typeof===w||c.$$typeof===p||c.$$typeof===s||c.$$typeof===i||c.$$typeof===d||c.$$typeof===y||c.getModuleId!==void 0)},x.typeOf=l,x}var Pt;function re(){return Pt||(Pt=1,it.exports=te()),it.exports}var ee=re();o`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;o`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;o`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;o`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;o`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;o`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;o`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;o`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;o`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;o`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;o`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;o`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;o`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const ae=o`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,ne=o`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,se=o`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,oe=o`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ie=o`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,bt=o`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ce=o`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,fe=o`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,le=o`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,de=o`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ue=o`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,me=o`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,pe=o`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function ye({duration:t=1e3,delay:r=0,timingFunction:e="ease",keyframes:a=bt,iterationCount:n=1}){return Jt`
    animation-duration: ${t}ms;
    animation-timing-function: ${e};
    animation-delay: ${r}ms;
    animation-name: ${a};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${n};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function he(t){return t==null}function ge(t){return typeof t=="string"||typeof t=="number"||typeof t=="boolean"}function Gt(t,r){return e=>e?t():r()}function W(t){return Gt(t,()=>null)}function mt(t){return W(()=>({opacity:0}))(t)}const Qt=t=>{const{cascade:r=!1,damping:e=.5,delay:a=0,duration:n=1e3,fraction:s=0,keyframes:i=bt,triggerOnce:f=!1,className:d,style:u,childClassName:m,childStyle:p,children:w,onVisibilityChange:C}=t,y=$.useMemo(()=>ye({keyframes:i,duration:n}),[n,i]);return he(w)?null:ge(w)?R(be,{...t,animationStyles:y,children:String(w)}):ee.isFragment(w)?R(tr,{...t,animationStyles:y}):R(Br,{children:$.Children.map(w,(l,c)=>{if(!$.isValidElement(l))return null;const g=a+(r?c*n*e:0);switch(l.type){case"ol":case"ul":return R(ot,{children:({cx:h})=>R(l.type,{...l.props,className:h(d,l.props.className),style:Object.assign({},u,l.props.style),children:R(Qt,{...t,children:l.props.children})})});case"li":return R(Nt,{threshold:s,triggerOnce:f,onChange:C,children:({inView:h,ref:O})=>R(ot,{children:({cx:P})=>R(l.type,{...l.props,ref:O,className:P(m,l.props.className),css:W(()=>y)(h),style:Object.assign({},p,l.props.style,mt(!h),{animationDelay:g+"ms"})})})});default:return R(Nt,{threshold:s,triggerOnce:f,onChange:C,children:({inView:h,ref:O})=>R("div",{ref:O,className:d,css:W(()=>y)(h),style:Object.assign({},u,mt(!h),{animationDelay:g+"ms"}),children:R(ot,{children:({cx:P})=>R(l.type,{...l.props,className:P(m,l.props.className),style:Object.assign({},p,l.props.style)})})})})}})})},ve={display:"inline-block",whiteSpace:"pre"},be=t=>{const{animationStyles:r,cascade:e=!1,damping:a=.5,delay:n=0,duration:s=1e3,fraction:i=0,triggerOnce:f=!1,className:d,style:u,children:m,onVisibilityChange:p}=t,{ref:w,inView:C}=Zt({triggerOnce:f,threshold:i,onChange:p});return Gt(()=>R("div",{ref:w,className:d,style:Object.assign({},u,ve),children:m.split("").map((y,l)=>R("span",{css:W(()=>r)(C),style:{animationDelay:n+l*s*a+"ms"},children:y},l))}),()=>R(tr,{...t,children:m}))(e)},tr=t=>{const{animationStyles:r,fraction:e=0,triggerOnce:a=!1,className:n,style:s,children:i,onVisibilityChange:f}=t,{ref:d,inView:u}=Zt({triggerOnce:a,threshold:e,onChange:f});return R("div",{ref:d,className:n,css:W(()=>r)(u),style:Object.assign({},s,mt(!u)),children:i})};o`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;o`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;o`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;o`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;o`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;o`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;o`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;o`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;o`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;o`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const xe=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,we=o`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Se=o`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,$e=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,Ce=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,Oe=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,Ee=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,Re=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,Ie=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Ae=o`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Ne=o`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,Te=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,Pe=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function _e(t,r,e){switch(e){case"bottom-left":return r?we:ne;case"bottom-right":return r?Se:se;case"down":return t?r?Ce:ie:r?$e:oe;case"left":return t?r?Ee:ce:r?Oe:bt;case"right":return t?r?Ie:le:r?Re:fe;case"top-left":return r?Ae:de;case"top-right":return r?Ne:ue;case"up":return t?r?Pe:pe:r?Te:me;default:return r?xe:ae}}const je=t=>{const{big:r=!1,direction:e,reverse:a=!1,...n}=t,s=$.useMemo(()=>_e(r,a,e),[r,e,a]);return R(Qt,{keyframes:s,...n})};o`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;o`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;o`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;o`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;o`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;o`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;o`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;o`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;o`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;o`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;o`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;o`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;o`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;o`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;o`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;o`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;o`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;o`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;o`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;o`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;o`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;o`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;o`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;o`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;o`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;o`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;o`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;o`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;o`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;o`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;o`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;o`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;o`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;o`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;o`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;o`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;export{je as F};
