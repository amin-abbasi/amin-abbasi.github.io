import{R as $t,a as S,j as M}from"./vendor-motion-DqXPcTsu.js";import{h as ar,X as nr,c as G,s as H}from"./app-p3rWjA3G.js";import{a as or}from"./vendor-charts-xJu14wT5.js";function sr(t){var r=Object.create(null);return function(e){return r[e]===void 0&&(r[e]=t(e)),r[e]}}function ir(t){if(t.sheet)return t.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===t)return document.styleSheets[r]}function cr(t){var r=document.createElement("style");return r.setAttribute("data-emotion",t.key),t.nonce!==void 0&&r.setAttribute("nonce",t.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var fr=(function(){function t(e){var a=this;this._insertTag=function(n){var o;a.tags.length===0?a.insertionPoint?o=a.insertionPoint.nextSibling:a.prepend?o=a.container.firstChild:o=a.before:o=a.tags[a.tags.length-1].nextSibling,a.container.insertBefore(n,o),a.tags.push(n)},this.isSpeedy=e.speedy===void 0?!0:e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var r=t.prototype;return r.hydrate=function(a){a.forEach(this._insertTag)},r.insert=function(a){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(cr(this));var n=this.tags[this.tags.length-1];if(this.isSpeedy){var o=ir(n);try{o.insertRule(a,o.cssRules.length)}catch{}}else n.appendChild(document.createTextNode(a));this.ctr++},r.flush=function(){this.tags.forEach(function(a){var n;return(n=a.parentNode)==null?void 0:n.removeChild(a)}),this.tags=[],this.ctr=0},t})(),A="-ms-",et="-moz-",x="-webkit-",jt="comm",yt="rule",gt="decl",dr="@import",kt="@keyframes",lr="@layer",mr=Math.abs,at=String.fromCharCode,ur=Object.assign;function pr(t,r){return N(t,0)^45?(((r<<2^N(t,0))<<2^N(t,1))<<2^N(t,2))<<2^N(t,3):0}function zt(t){return t.trim()}function hr(t,r){return(t=r.exec(t))?t[0]:t}function b(t,r,e){return t.replace(r,e)}function lt(t,r){return t.indexOf(r)}function N(t,r){return t.charCodeAt(r)|0}function B(t,r,e){return t.slice(r,e)}function k(t){return t.length}function vt(t){return t.length}function J(t,r){return r.push(t),t}function yr(t,r){return t.map(r).join("")}var nt=1,L=1,Xt=0,P=0,E=0,F="";function ot(t,r,e,a,n,o,s){return{value:t,root:r,parent:e,type:a,props:n,children:o,line:nt,column:L,length:s,return:""}}function V(t,r){return ur(ot("",null,null,"",null,null,0),t,{length:-t.length},r)}function gr(){return E}function vr(){return E=P>0?N(F,--P):0,L--,E===10&&(L=1,nt--),E}function j(){return E=P<Xt?N(F,P++):0,L++,E===10&&(L=1,nt++),E}function X(){return N(F,P)}function Q(){return P}function U(t,r){return B(F,t,r)}function D(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Yt(t){return nt=L=1,Xt=k(F=t),P=0,[]}function Lt(t){return F="",t}function tt(t){return zt(U(P-1,mt(t===91?t+2:t===40?t+1:t)))}function xr(t){for(;(E=X())&&E<33;)j();return D(t)>2||D(E)>3?"":" "}function br(t,r){for(;--r&&j()&&!(E<48||E>102||E>57&&E<65||E>70&&E<97););return U(t,Q()+(r<6&&X()==32&&j()==32))}function mt(t){for(;j();)switch(E){case t:return P;case 34:case 39:t!==34&&t!==39&&mt(E);break;case 40:t===41&&mt(t);break;case 92:j();break}return P}function wr(t,r){for(;j()&&t+E!==57;)if(t+E===84&&X()===47)break;return"/*"+U(r,P-1)+"*"+at(t===47?t:j())}function $r(t){for(;!D(X());)j();return U(t,P)}function Sr(t){return Lt(rt("",null,null,null,[""],t=Yt(t),0,[0],t))}function rt(t,r,e,a,n,o,s,f,l){for(var m=0,u=0,p=s,v=0,C=0,h=0,d=1,c=1,g=1,y=0,O="",_=n,T=o,R=a,$=O;c;)switch(h=y,y=j()){case 40:if(h!=108&&N($,p-1)==58){lt($+=b(tt(y),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:$+=tt(y);break;case 9:case 10:case 13:case 32:$+=xr(h);break;case 92:$+=br(Q()-1,7);continue;case 47:switch(X()){case 42:case 47:J(Cr(wr(j(),Q()),r,e),l);break;default:$+="/"}break;case 123*d:f[m++]=k($)*g;case 125*d:case 59:case 0:switch(y){case 0:case 125:c=0;case 59+u:g==-1&&($=b($,/\f/g,"")),C>0&&k($)-p&&J(C>32?Ct($+";",a,e,p-1):Ct(b($," ","")+";",a,e,p-2),l);break;case 59:$+=";";default:if(J(R=St($,r,e,m,u,n,f,O,_=[],T=[],p),o),y===123)if(u===0)rt($,r,R,R,_,o,p,f,T);else switch(v===99&&N($,3)===110?100:v){case 100:case 108:case 109:case 115:rt(t,R,R,a&&J(St(t,R,R,0,0,n,f,O,n,_=[],p),T),n,T,p,f,a?_:T);break;default:rt($,R,R,R,[""],T,0,f,T)}}m=u=C=0,d=g=1,O=$="",p=s;break;case 58:p=1+k($),C=h;default:if(d<1){if(y==123)--d;else if(y==125&&d++==0&&vr()==125)continue}switch($+=at(y),y*d){case 38:g=u>0?1:($+="\f",-1);break;case 44:f[m++]=(k($)-1)*g,g=1;break;case 64:X()===45&&($+=tt(j())),v=X(),u=p=k(O=$+=$r(Q())),y++;break;case 45:h===45&&k($)==2&&(d=0)}}return o}function St(t,r,e,a,n,o,s,f,l,m,u){for(var p=n-1,v=n===0?o:[""],C=vt(v),h=0,d=0,c=0;h<a;++h)for(var g=0,y=B(t,p+1,p=mr(d=s[h])),O=t;g<C;++g)(O=zt(d>0?v[g]+" "+y:b(y,/&\f/g,v[g])))&&(l[c++]=O);return ot(t,r,e,n===0?yt:f,l,m,u)}function Cr(t,r,e){return ot(t,r,e,jt,at(gr()),B(t,2,-2),0)}function Ct(t,r,e,a){return ot(t,r,e,gt,B(t,0,a),B(t,a+1,-1),a)}function Y(t,r){for(var e="",a=vt(t),n=0;n<a;n++)e+=r(t[n],n,t,r)||"";return e}function Or(t,r,e,a){switch(t.type){case lr:if(t.children.length)break;case dr:case gt:return t.return=t.return||t.value;case jt:return"";case kt:return t.return=t.value+"{"+Y(t.children,a)+"}";case yt:t.value=t.props.join(",")}return k(e=Y(t.children,a))?t.return=t.value+"{"+e+"}":""}function Er(t){var r=vt(t);return function(e,a,n,o){for(var s="",f=0;f<r;f++)s+=t[f](e,a,n,o)||"";return s}}function Ir(t){return function(r){r.root||(r=r.return)&&t(r)}}var Rr=function(r,e,a){for(var n=0,o=0;n=o,o=X(),n===38&&o===12&&(e[a]=1),!D(o);)j();return U(r,P)},Nr=function(r,e){var a=-1,n=44;do switch(D(n)){case 0:n===38&&X()===12&&(e[a]=1),r[a]+=Rr(P-1,e,a);break;case 2:r[a]+=tt(n);break;case 4:if(n===44){r[++a]=X()===58?"&\f":"",e[a]=r[a].length;break}default:r[a]+=at(n)}while(n=j());return r},Ar=function(r,e){return Lt(Nr(Yt(r),e))},Ot=new WeakMap,Tr=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var e=r.value,a=r.parent,n=r.column===a.column&&r.line===a.line;a.type!=="rule";)if(a=a.parent,!a)return;if(!(r.props.length===1&&e.charCodeAt(0)!==58&&!Ot.get(a))&&!n){Ot.set(r,!0);for(var o=[],s=Ar(e,o),f=a.props,l=0,m=0;l<s.length;l++)for(var u=0;u<f.length;u++,m++)r.props[m]=o[l]?s[l].replace(/&\f/g,f[u]):f[u]+" "+s[l]}}},_r=function(r){if(r.type==="decl"){var e=r.value;e.charCodeAt(0)===108&&e.charCodeAt(2)===98&&(r.return="",r.value="")}};function Ft(t,r){switch(pr(t,r)){case 5103:return x+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return x+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return x+t+et+t+A+t+t;case 6828:case 4268:return x+t+A+t+t;case 6165:return x+t+A+"flex-"+t+t;case 5187:return x+t+b(t,/(\w+).+(:[^]+)/,x+"box-$1$2"+A+"flex-$1$2")+t;case 5443:return x+t+A+"flex-item-"+b(t,/flex-|-self/,"")+t;case 4675:return x+t+A+"flex-line-pack"+b(t,/align-content|flex-|-self/,"")+t;case 5548:return x+t+A+b(t,"shrink","negative")+t;case 5292:return x+t+A+b(t,"basis","preferred-size")+t;case 6060:return x+"box-"+b(t,"-grow","")+x+t+A+b(t,"grow","positive")+t;case 4554:return x+b(t,/([^-])(transform)/g,"$1"+x+"$2")+t;case 6187:return b(b(b(t,/(zoom-|grab)/,x+"$1"),/(image-set)/,x+"$1"),t,"")+t;case 5495:case 3959:return b(t,/(image-set\([^]*)/,x+"$1$`$1");case 4968:return b(b(t,/(.+:)(flex-)?(.*)/,x+"box-pack:$3"+A+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+x+t+t;case 4095:case 3583:case 4068:case 2532:return b(t,/(.+)-inline(.+)/,x+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(k(t)-1-r>6)switch(N(t,r+1)){case 109:if(N(t,r+4)!==45)break;case 102:return b(t,/(.+:)(.+)-([^]+)/,"$1"+x+"$2-$3$1"+et+(N(t,r+3)==108?"$3":"$2-$3"))+t;case 115:return~lt(t,"stretch")?Ft(b(t,"stretch","fill-available"),r)+t:t}break;case 4949:if(N(t,r+1)!==115)break;case 6444:switch(N(t,k(t)-3-(~lt(t,"!important")&&10))){case 107:return b(t,":",":"+x)+t;case 101:return b(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+x+(N(t,14)===45?"inline-":"")+"box$3$1"+x+"$2$3$1"+A+"$2box$3")+t}break;case 5936:switch(N(t,r+11)){case 114:return x+t+A+b(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return x+t+A+b(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return x+t+A+b(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return x+t+A+t+t}return t}var Pr=function(r,e,a,n){if(r.length>-1&&!r.return)switch(r.type){case gt:r.return=Ft(r.value,r.length);break;case kt:return Y([V(r,{value:b(r.value,"@","@"+x)})],n);case yt:if(r.length)return yr(r.props,function(o){switch(hr(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Y([V(r,{props:[b(o,/:(read-\w+)/,":"+et+"$1")]})],n);case"::placeholder":return Y([V(r,{props:[b(o,/:(plac\w+)/,":"+x+"input-$1")]}),V(r,{props:[b(o,/:(plac\w+)/,":"+et+"$1")]}),V(r,{props:[b(o,/:(plac\w+)/,A+"input-$1")]})],n)}return""})}},Mr=[Pr],jr=function(r){var e=r.key;if(e==="css"){var a=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(a,function(d){var c=d.getAttribute("data-emotion");c.indexOf(" ")!==-1&&(document.head.appendChild(d),d.setAttribute("data-s",""))})}var n=r.stylisPlugins||Mr,o={},s,f=[];s=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+e+' "]'),function(d){for(var c=d.getAttribute("data-emotion").split(" "),g=1;g<c.length;g++)o[c[g]]=!0;f.push(d)});var l,m=[Tr,_r];{var u,p=[Or,Ir(function(d){u.insert(d)})],v=Er(m.concat(n,p)),C=function(c){return Y(Sr(c),v)};l=function(c,g,y,O){u=y,C(c?c+"{"+g.styles+"}":g.styles),O&&(h.inserted[g.name]=!0)}}var h={key:e,sheet:new fr({key:e,container:s,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:o,registered:{},insert:l};return h.sheet.hydrate(f),h},it,Et;function kr(){if(Et)return it;Et=1;var t=or(),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},e={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},n={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},o={};o[t.ForwardRef]=a,o[t.Memo]=n;function s(h){return t.isMemo(h)?n:o[h.$$typeof]||r}var f=Object.defineProperty,l=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,v=Object.prototype;function C(h,d,c){if(typeof d!="string"){if(v){var g=p(d);g&&g!==v&&C(h,g,c)}var y=l(d);m&&(y=y.concat(m(d)));for(var O=s(h),_=s(d),T=0;T<y.length;++T){var R=y[T];if(!e[R]&&!(c&&c[R])&&!(_&&_[R])&&!(O&&O[R])){var $=u(d,R);try{f(h,R,$)}catch{}}}}return h}return it=C,it}kr();var zr=!0;function Vt(t,r,e){var a="";return e.split(" ").forEach(function(n){t[n]!==void 0?r.push(t[n]+";"):n&&(a+=n+" ")}),a}var xt=function(r,e,a){var n=r.key+"-"+e.name;(a===!1||zr===!1)&&r.registered[n]===void 0&&(r.registered[n]=e.styles)},Bt=function(r,e,a){xt(r,e,a);var n=r.key+"-"+e.name;if(r.inserted[e.name]===void 0){var o=e;do r.insert(e===o?"."+n:"",o,r.sheet,!0),o=o.next;while(o!==void 0)}};function Xr(t){for(var r=0,e,a=0,n=t.length;n>=4;++a,n-=4)e=t.charCodeAt(a)&255|(t.charCodeAt(++a)&255)<<8|(t.charCodeAt(++a)&255)<<16|(t.charCodeAt(++a)&255)<<24,e=(e&65535)*1540483477+((e>>>16)*59797<<16),e^=e>>>24,r=(e&65535)*1540483477+((e>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(n){case 3:r^=(t.charCodeAt(a+2)&255)<<16;case 2:r^=(t.charCodeAt(a+1)&255)<<8;case 1:r^=t.charCodeAt(a)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var Yr=/[A-Z]|^ms/g,Lr=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Dt=function(r){return r.charCodeAt(1)===45},It=function(r){return r!=null&&typeof r!="boolean"},ct=sr(function(t){return Dt(t)?t:t.replace(Yr,"-$&").toLowerCase()}),Rt=function(r,e){switch(r){case"animation":case"animationName":if(typeof e=="string")return e.replace(Lr,function(a,n,o){return z={name:n,styles:o,next:z},n})}return ar[r]!==1&&!Dt(r)&&typeof e=="number"&&e!==0?e+"px":e};function W(t,r,e){if(e==null)return"";var a=e;if(a.__emotion_styles!==void 0)return a;switch(typeof e){case"boolean":return"";case"object":{var n=e;if(n.anim===1)return z={name:n.name,styles:n.styles,next:z},n.name;var o=e;if(o.styles!==void 0){var s=o.next;if(s!==void 0)for(;s!==void 0;)z={name:s.name,styles:s.styles,next:z},s=s.next;var f=o.styles+";";return f}return Fr(t,r,e)}case"function":{if(t!==void 0){var l=z,m=e(t);return z=l,W(t,r,m)}break}}var u=e;if(r==null)return u;var p=r[u];return p!==void 0?p:u}function Fr(t,r,e){var a="";if(Array.isArray(e))for(var n=0;n<e.length;n++)a+=W(t,r,e[n])+";";else for(var o in e){var s=e[o];if(typeof s!="object"){var f=s;r!=null&&r[f]!==void 0?a+=o+"{"+r[f]+"}":It(f)&&(a+=ct(o)+":"+Rt(o,f)+";")}else if(Array.isArray(s)&&typeof s[0]=="string"&&(r==null||r[s[0]]===void 0))for(var l=0;l<s.length;l++)It(s[l])&&(a+=ct(o)+":"+Rt(o,s[l])+";");else{var m=W(t,r,s);switch(o){case"animation":case"animationName":{a+=ct(o)+":"+m+";";break}default:a+=o+"{"+m+"}"}}}return a}var Nt=/label:\s*([^\s;{]+)\s*(;|$)/g,z;function bt(t,r,e){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var a=!0,n="";z=void 0;var o=t[0];if(o==null||o.raw===void 0)a=!1,n+=W(e,r,o);else{var s=o;n+=s[0]}for(var f=1;f<t.length;f++)if(n+=W(e,r,t[f]),a){var l=o;n+=l[f]}Nt.lastIndex=0;for(var m="",u;(u=Nt.exec(n))!==null;)m+="-"+u[1];var p=Xr(n)+m;return{name:p,styles:n,next:z}}var Vr=function(r){return r()},Br=$t.useInsertionEffect?$t.useInsertionEffect:!1,Wt=Br||Vr,qt=S.createContext(typeof HTMLElement<"u"?jr({key:"css"}):null);qt.Provider;var Gt=function(r){return S.forwardRef(function(e,a){var n=S.useContext(qt);return r(e,n,a)})},Ut=S.createContext({}),st={}.hasOwnProperty,ut="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Ht=function(r,e){var a={};for(var n in e)st.call(e,n)&&(a[n]=e[n]);return a[ut]=r,a},Dr=function(r){var e=r.cache,a=r.serialized,n=r.isStringTag;return xt(e,a,n),Wt(function(){return Bt(e,a,n)}),null},Wr=Gt(function(t,r,e){var a=t.css;typeof a=="string"&&r.registered[a]!==void 0&&(a=r.registered[a]);var n=t[ut],o=[a],s="";typeof t.className=="string"?s=Vt(r.registered,o,t.className):t.className!=null&&(s=t.className+" ");var f=bt(o,void 0,S.useContext(Ut));s+=r.key+"-"+f.name;var l={};for(var m in t)st.call(t,m)&&m!=="css"&&m!==ut&&(l[m]=t[m]);return l.className=s,e&&(l.ref=e),S.createElement(S.Fragment,null,S.createElement(Dr,{cache:r,serialized:f,isStringTag:typeof n=="string"}),S.createElement(n,l))}),Jt=Wr,qr=M.Fragment,I=function(r,e,a){return st.call(e,"css")?M.jsx(Jt,Ht(r,e),a):M.jsx(r,e,a)},At=function(r,e){var a=arguments;if(e==null||!st.call(e,"css"))return S.createElement.apply(void 0,a);var n=a.length,o=new Array(n);o[0]=Jt,o[1]=Ht(r,e);for(var s=2;s<n;s++)o[s]=a[s];return S.createElement.apply(null,o)};(function(t){var r;r||(r=t.JSX||(t.JSX={}))})(At||(At={}));function Kt(){for(var t=arguments.length,r=new Array(t),e=0;e<t;e++)r[e]=arguments[e];return bt(r)}function i(){var t=Kt.apply(void 0,arguments),r="animation-"+t.name;return{name:r,styles:"@keyframes "+r+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var Gr=function t(r){for(var e=r.length,a=0,n="";a<e;a++){var o=r[a];if(o!=null){var s=void 0;switch(typeof o){case"boolean":break;case"object":{if(Array.isArray(o))s=t(o);else{s="";for(var f in o)o[f]&&f&&(s&&(s+=" "),s+=f)}break}default:s=o}s&&(n&&(n+=" "),n+=s)}}return n};function Ur(t,r,e){var a=[],n=Vt(t,a,e);return a.length<2?e:n+r(a)}var Hr=function(r){var e=r.cache,a=r.serializedArr;return Wt(function(){for(var n=0;n<a.length;n++)Bt(e,a[n],!1)}),null},ft=Gt(function(t,r){var e=[],a=function(){for(var l=arguments.length,m=new Array(l),u=0;u<l;u++)m[u]=arguments[u];var p=bt(m,r.registered);return e.push(p),xt(r,p,!1),r.key+"-"+p.name},n=function(){for(var l=arguments.length,m=new Array(l),u=0;u<l;u++)m[u]=arguments[u];return Ur(r.registered,a,Gr(m))},o={css:a,cx:n,theme:S.useContext(Ut)},s=t.children(o);return S.createElement(S.Fragment,null,S.createElement(Hr,{cache:r,serializedArr:e}),s)}),Jr=Object.defineProperty,Kr=(t,r,e)=>r in t?Jr(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,K=(t,r,e)=>Kr(t,typeof r!="symbol"?r+"":r,e),pt=new Map,Z=new WeakMap,Tt=0,Zr=void 0;function Qr(t){return t?(Z.has(t)||(Tt+=1,Z.set(t,Tt.toString())),Z.get(t)):"0"}function te(t){return Object.keys(t).sort().filter(r=>t[r]!==void 0).map(r=>`${r}_${r==="root"?Qr(t.root):t[r]}`).toString()}function re(t){const r=te(t);let e=pt.get(r);if(!e){const a=new Map;let n;const o=new IntersectionObserver(s=>{s.forEach(f=>{var l;const m=f.isIntersecting&&n.some(u=>f.intersectionRatio>=u);t.trackVisibility&&typeof f.isVisible>"u"&&(f.isVisible=m),(l=a.get(f.target))==null||l.forEach(u=>{u(m,f)})})},t);n=o.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),e={id:r,observer:o,elements:a},pt.set(r,e)}return e}function Zt(t,r,e={},a=Zr){if(typeof window.IntersectionObserver>"u"&&a!==void 0){const l=t.getBoundingClientRect();return r(a,{isIntersecting:a,target:t,intersectionRatio:typeof e.threshold=="number"?e.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:n,observer:o,elements:s}=re(e),f=s.get(t)||[];return s.has(t)||s.set(t,f),f.push(r),o.observe(t),function(){f.splice(f.indexOf(r),1),f.length===0&&(s.delete(t),o.unobserve(t)),s.size===0&&(o.disconnect(),pt.delete(n))}}function ee(t){return typeof t.children!="function"}var _t=class extends S.Component{constructor(t){super(t),K(this,"node",null),K(this,"_unobserveCb",null),K(this,"handleNode",r=>{this.node&&(this.unobserve(),!r&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=r||null,this.observeNode()}),K(this,"handleChange",(r,e)=>{r&&this.props.triggerOnce&&this.unobserve(),ee(this.props)||this.setState({inView:r,entry:e}),this.props.onChange&&this.props.onChange(r,e)}),this.state={inView:!!t.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:t,root:r,rootMargin:e,trackVisibility:a,delay:n,fallbackInView:o}=this.props;this._unobserveCb=Zt(this.node,this.handleChange,{threshold:t,root:r,rootMargin:e,trackVisibility:a,delay:n},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:t}=this.props;if(typeof t=="function"){const{inView:C,entry:h}=this.state;return t({inView:C,entry:h,ref:this.handleNode})}const{as:r,triggerOnce:e,threshold:a,root:n,rootMargin:o,onChange:s,skip:f,trackVisibility:l,delay:m,initialInView:u,fallbackInView:p,...v}=this.props;return S.createElement(r||"div",{ref:this.handleNode,...v},t)}};function Qt({threshold:t,delay:r,trackVisibility:e,rootMargin:a,root:n,triggerOnce:o,skip:s,initialInView:f,fallbackInView:l,onChange:m}={}){var u;const[p,v]=S.useState(null),C=S.useRef(m),[h,d]=S.useState({inView:!!f,entry:void 0});C.current=m,S.useEffect(()=>{if(s||!p)return;let O;return O=Zt(p,(_,T)=>{d({inView:_,entry:T}),C.current&&C.current(_,T),T.isIntersecting&&o&&O&&(O(),O=void 0)},{root:n,rootMargin:a,threshold:t,trackVisibility:e,delay:r},l),()=>{O&&O()}},[Array.isArray(t)?t.toString():t,p,n,a,o,s,e,l,r]);const c=(u=h.entry)==null?void 0:u.target,g=S.useRef(void 0);!p&&c&&!o&&!s&&g.current!==c&&(g.current=c,d({inView:!!f,entry:void 0}));const y=[v,h.inView,h.entry];return y.ref=y[0],y.inView=y[1],y.entry=y[2],y}var dt={exports:{}},w={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pt;function ae(){if(Pt)return w;Pt=1;var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),e=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),n=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),s=Symbol.for("react.context"),f=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),u=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),C=Symbol.for("react.offscreen"),h;h=Symbol.for("react.module.reference");function d(c){if(typeof c=="object"&&c!==null){var g=c.$$typeof;switch(g){case t:switch(c=c.type,c){case e:case n:case a:case m:case u:return c;default:switch(c=c&&c.$$typeof,c){case f:case s:case l:case v:case p:case o:return c;default:return g}}case r:return g}}}return w.ContextConsumer=s,w.ContextProvider=o,w.Element=t,w.ForwardRef=l,w.Fragment=e,w.Lazy=v,w.Memo=p,w.Portal=r,w.Profiler=n,w.StrictMode=a,w.Suspense=m,w.SuspenseList=u,w.isAsyncMode=function(){return!1},w.isConcurrentMode=function(){return!1},w.isContextConsumer=function(c){return d(c)===s},w.isContextProvider=function(c){return d(c)===o},w.isElement=function(c){return typeof c=="object"&&c!==null&&c.$$typeof===t},w.isForwardRef=function(c){return d(c)===l},w.isFragment=function(c){return d(c)===e},w.isLazy=function(c){return d(c)===v},w.isMemo=function(c){return d(c)===p},w.isPortal=function(c){return d(c)===r},w.isProfiler=function(c){return d(c)===n},w.isStrictMode=function(c){return d(c)===a},w.isSuspense=function(c){return d(c)===m},w.isSuspenseList=function(c){return d(c)===u},w.isValidElementType=function(c){return typeof c=="string"||typeof c=="function"||c===e||c===n||c===a||c===m||c===u||c===C||typeof c=="object"&&c!==null&&(c.$$typeof===v||c.$$typeof===p||c.$$typeof===o||c.$$typeof===s||c.$$typeof===l||c.$$typeof===h||c.getModuleId!==void 0)},w.typeOf=d,w}var Mt;function ne(){return Mt||(Mt=1,dt.exports=ae()),dt.exports}var oe=ne();i`
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
`;i`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;i`
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
`;i`
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
`;i`
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
`;i`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;i`
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
`;i`
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
`;i`
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
`;i`
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
`;i`
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
`;i`
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
`;i`
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
`;const se=i`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,ie=i`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ce=i`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,fe=i`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,de=i`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,wt=i`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,le=i`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,me=i`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ue=i`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,pe=i`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,he=i`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ye=i`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ge=i`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function ve({duration:t=1e3,delay:r=0,timingFunction:e="ease",keyframes:a=wt,iterationCount:n=1}){return Kt`
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
  `}function xe(t){return t==null}function be(t){return typeof t=="string"||typeof t=="number"||typeof t=="boolean"}function tr(t,r){return e=>e?t():r()}function q(t){return tr(t,()=>null)}function ht(t){return q(()=>({opacity:0}))(t)}const rr=t=>{const{cascade:r=!1,damping:e=.5,delay:a=0,duration:n=1e3,fraction:o=0,keyframes:s=wt,triggerOnce:f=!1,className:l,style:m,childClassName:u,childStyle:p,children:v,onVisibilityChange:C}=t,h=S.useMemo(()=>ve({keyframes:s,duration:n}),[n,s]);return xe(v)?null:be(v)?I($e,{...t,animationStyles:h,children:String(v)}):oe.isFragment(v)?I(er,{...t,animationStyles:h}):I(qr,{children:S.Children.map(v,(d,c)=>{if(!S.isValidElement(d))return null;const g=a+(r?c*n*e:0);switch(d.type){case"ol":case"ul":return I(ft,{children:({cx:y})=>I(d.type,{...d.props,className:y(l,d.props.className),style:Object.assign({},m,d.props.style),children:I(rr,{...t,children:d.props.children})})});case"li":return I(_t,{threshold:o,triggerOnce:f,onChange:C,children:({inView:y,ref:O})=>I(ft,{children:({cx:_})=>I(d.type,{...d.props,ref:O,className:_(u,d.props.className),css:q(()=>h)(y),style:Object.assign({},p,d.props.style,ht(!y),{animationDelay:g+"ms"})})})});default:return I(_t,{threshold:o,triggerOnce:f,onChange:C,children:({inView:y,ref:O})=>I("div",{ref:O,className:l,css:q(()=>h)(y),style:Object.assign({},m,ht(!y),{animationDelay:g+"ms"}),children:I(ft,{children:({cx:_})=>I(d.type,{...d.props,className:_(u,d.props.className),style:Object.assign({},p,d.props.style)})})})})}})})},we={display:"inline-block",whiteSpace:"pre"},$e=t=>{const{animationStyles:r,cascade:e=!1,damping:a=.5,delay:n=0,duration:o=1e3,fraction:s=0,triggerOnce:f=!1,className:l,style:m,children:u,onVisibilityChange:p}=t,{ref:v,inView:C}=Qt({triggerOnce:f,threshold:s,onChange:p});return tr(()=>I("div",{ref:v,className:l,style:Object.assign({},m,we),children:u.split("").map((h,d)=>I("span",{css:q(()=>r)(C),style:{animationDelay:n+d*o*a+"ms"},children:h},d))}),()=>I(er,{...t,children:u}))(e)},er=t=>{const{animationStyles:r,fraction:e=0,triggerOnce:a=!1,className:n,style:o,children:s,onVisibilityChange:f}=t,{ref:l,inView:m}=Qt({triggerOnce:a,threshold:e,onChange:f});return I("div",{ref:l,className:n,css:q(()=>r)(m),style:Object.assign({},o,ht(!m)),children:s})};i`
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
`;i`
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
`;i`
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
`;i`
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
`;i`
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
`;i`
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
`;i`
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
`;i`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;i`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;i`
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
`;const Se=i`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,Ce=i`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Oe=i`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,Ee=i`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,Ie=i`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,Re=i`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,Ne=i`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,Ae=i`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,Te=i`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,_e=i`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Pe=i`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,Me=i`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,je=i`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function ke(t,r,e){switch(e){case"bottom-left":return r?Ce:ie;case"bottom-right":return r?Oe:ce;case"down":return t?r?Ie:de:r?Ee:fe;case"left":return t?r?Ne:le:r?Re:wt;case"right":return t?r?Te:ue:r?Ae:me;case"top-left":return r?_e:pe;case"top-right":return r?Pe:he;case"up":return t?r?je:ge:r?Me:ye;default:return r?Se:se}}const We=t=>{const{big:r=!1,direction:e,reverse:a=!1,...n}=t,o=S.useMemo(()=>ke(r,a,e),[r,e,a]);return I(rr,{keyframes:o,...n})};i`
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
`;i`
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
`;i`
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
`;i`
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
`;i`
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
`;i`
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
`;i`
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
`;i`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;i`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;i`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;i`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;i`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;i`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;i`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;i`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;i`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;i`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;i`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;i`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;i`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;i`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;i`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;i`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;i`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;i`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;i`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;i`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;i`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;i`
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
`;i`
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
`;i`
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
`;i`
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
`;i`
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
`;i`
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
`;i`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;i`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;i`
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
`;function qe(t){const{title:r}=t,e=S.useContext(nr);return M.jsxs("div",{style:{textAlign:"center",marginBottom:"1rem",padding:"90px 16px 0"},children:[M.jsx("h2",{style:{fontFamily:"var(--font-mono)",fontSize:"clamp(1.8rem, 4vw, 2.6rem)",fontWeight:700,letterSpacing:"-0.03em",color:e.color,margin:"0 0 1rem"},children:r}),M.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:12},children:[M.jsx("div",{style:{width:40,height:1,background:`linear-gradient(to right, transparent, ${e.accentColor})`}}),M.jsx("div",{style:{width:8,height:8,border:`1.5px solid ${e.accentColor}`,transform:"rotate(45deg)"}}),M.jsx("div",{style:{width:40,height:1,background:`linear-gradient(to left, transparent, ${e.accentColor})`}})]})]})}const ze=G.section.withConfig({displayName:"layoutstyles__StyledSection",componentId:"sc-1p1yzxg-0"})(["padding:4rem 0;background:transparent;color:",";position:relative;overflow:hidden;"],t=>t.theme.color),Xe=G.div.withConfig({displayName:"layoutstyles__StyledContainer",componentId:"sc-1p1yzxg-1"})(["width:100%;padding-right:1.5rem;padding-left:1.5rem;margin-right:auto;margin-left:auto;max-width:1320px;@media (max-width:1400px){max-width:1140px;}@media (max-width:1200px){max-width:960px;}@media (max-width:992px){max-width:720px;}@media (max-width:768px){max-width:540px;}@media (max-width:576px){max-width:100%;}"]),Ye=G.div.withConfig({displayName:"layoutstyles__GridRow",componentId:"sc-1p1yzxg-2"})(["display:flex;flex-wrap:wrap;margin-right:",";margin-left:",";"],t=>t.$noGutters?"0":"-1.5rem",t=>t.$noGutters?"0":"-1.5rem"),Le=G.div.withConfig({displayName:"layoutstyles__GridColumn",componentId:"sc-1p1yzxg-3"})(["position:relative;width:100%;padding-right:1.5rem;padding-left:1.5rem;margin-bottom:2.5rem;flex:0 0 100%;max-width:100%;order:",";"," "," "," ",""],t=>t.$order||0,t=>t.$sm&&H(["@media (min-width:576px){flex:0 0 ","%;max-width:","%;order:",";}"],t.$sm/12*100,t.$sm/12*100,t.$orderSm!==void 0?t.$orderSm:t.$order||0),t=>t.$md&&H(["@media (min-width:768px){flex:0 0 ","%;max-width:","%;order:",";}"],t.$md/12*100,t.$md/12*100,t.$orderMd!==void 0?t.$orderMd:t.$orderSm!==void 0?t.$orderSm:t.$order||0),t=>t.$lg&&H(["@media (min-width:992px){flex:0 0 ","%;max-width:","%;order:",";}"],t.$lg/12*100,t.$lg/12*100,t.$orderLg!==void 0?t.$orderLg:t.$orderMd!==void 0?t.$orderMd:t.$orderSm!==void 0?t.$orderSm:t.$order||0),t=>t.$xl&&H(["@media (min-width:1200px){flex:0 0 ","%;max-width:","%;order:",";}"],t.$xl/12*100,t.$xl/12*100,t.$orderXl!==void 0?t.$orderXl:t.$orderLg!==void 0?t.$orderLg:t.$orderMd!==void 0?t.$orderMd:t.$orderSm!==void 0?t.$orderSm:t.$order||0));G.div.withConfig({displayName:"layoutstyles__SectionHeader",componentId:"sc-1p1yzxg-4"})(["margin-bottom:3rem;text-align:start;h2{font-family:var(--font-mono);font-size:1.75rem;font-weight:700;color:",";letter-spacing:-0.02em;margin:0;}"],t=>t.theme.accentColor);const Ge=({children:t,className:r,id:e})=>M.jsx(ze,{className:r,id:e,children:t}),Ue=({children:t,className:r,id:e,style:a})=>M.jsx(Xe,{className:r,id:e,style:a,children:t}),He=({children:t,className:r,id:e,noGutters:a})=>M.jsx(Ye,{className:r,id:e,$noGutters:a,children:t}),Je=({children:t,className:r,id:e,style:a,xs:n,sm:o,md:s,lg:f,xl:l,order:m,orderSm:u,orderMd:p,orderLg:v,orderXl:C})=>M.jsx(Le,{className:r,id:e,style:a,$xs:n,$sm:o,$md:s,$lg:f,$xl:l,$order:m,$orderSm:u,$orderMd:p,$orderLg:v,$orderXl:C,children:t});export{Je as C,We as F,He as G,qe as H,Ge as S,Ue as a};
