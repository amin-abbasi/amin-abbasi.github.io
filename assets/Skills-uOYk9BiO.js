import{m as x,j as o,L as Q,A as U}from"./vendor-motion-CLxAPPWH.js";import{F as T}from"./index-D7T8C9WV.js";import{H as Z,a as _}from"./index-DNmKwcGq.js";import{F as ee}from"./FallbackSpinner-DGogp4PS.js";import{b as te,a as p}from"./vendor-icons-oi0yKthW.js";import{c as n,s as P,X as oe,u as ie,H as ne}from"./app-DIpUg5qZ.js";import"./vendor-charts-DbC-OHEB.js";import"./vendor-firebase-BBPOHLSG.js";const re=n.div`
    padding: 40px 0 80px;
    position: relative;
    overflow-x: clip; /* Prevent node overflows from causing horizontal scroll */
`,ae=n.div`
    max-width: 800px;
    text-align: start;
    margin-bottom: 36px;
    border-inline-start: 2px solid ${e=>e.theme.accentColor};
    padding-inline-start: 24px;
`,se=n.div`
    font-family: var(--font-main);
    font-size: 1.05rem;
    line-height: 1.8;
    color: ${e=>e.theme.color}DD;
    font-weight: 400;
    margin-bottom: 8px;
`;n.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
    gap: 24px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;n.div`
    background: ${e=>e.theme.cardBackground};
    border: 1px solid ${e=>e.theme.cardBorderColor};
    border-radius: 4px;
    padding: 24px;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);

    &::before {
        content: '';
        position: absolute;
        top: -1px;
        left: -1px;
        width: 10px;
        height: 10px;
        border-top: 2px solid ${e=>e.theme.accentColor};
        border-left: 2px solid ${e=>e.theme.accentColor};
        opacity: 0.5;
    }

    &:hover {
        border-color: ${e=>e.theme.accentColor}40;
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
        transform: translateY(-2px);
    }
    &:hover::before {
        opacity: 1;
    }
`;n.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
    border-bottom: 1px solid ${e=>e.theme.cardBorderColor};
    padding-bottom: 12px;
`;n.h3`
    font-family: var(--font-mono);
    font-size: 0.9rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin: 0;
    color: ${e=>e.theme.color};
`;n.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;n.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 14px;
    background: ${e=>e.$isCore?`${e.theme.accentColor}18`:`${e.theme.accentColor}08`};
    border: 1px solid ${e=>e.$isCore?e.theme.accentColor:`${e.theme.accentColor}15`};
    border-radius: 2px;
    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
    position: relative;
    margin-bottom: 4px;

    ${e=>e.$isCore&&P`
        box-shadow: 0 0 12px ${i=>i.theme.accentColor}40, inset 0 0 4px ${i=>i.theme.accentColor}15;
        
        &::after {
            content: '';
            position: absolute;
            top: 50%;
            right: 8px;
            transform: translateY(-50%);
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: ${i=>i.theme.accentColor};
            box-shadow: 0 0 10px ${i=>i.theme.accentColor}, 0 0 20px ${i=>i.theme.accentColor};
            opacity: 0.9;
        }

        &::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, ${i=>i.theme.accentColor}10, transparent);
            border-radius: 2px;
            pointer-events: none;
        }
    `}

    &:hover {
        background: ${e=>e.$isCore?`${e.theme.accentColor}25`:`${e.theme.accentColor}12`};
        border-color: ${e=>e.$isCore?e.theme.accentColor:`${e.theme.accentColor}50`};
        transform: translateY(-2px) scale(1.05);
        box-shadow: ${e=>e.$isCore?`0 8px 25px ${i=>i.theme.accentColor}50`:"0 4px 12px rgba(0, 0, 0, 0.05)"};
        z-index: 10;
    }
`;n.img`
    width: 18px;
    height: 18px;
    object-fit: contain;
    filter: grayscale(0.2) opacity(0.8);
`;n.span`
    font-family: var(--font-mono);
    font-size: 0.78rem;
    font-weight: 500;
    color: ${e=>e.theme.color}EE;
`;n.div`
    font-family: var(--font-mono);
    font-size: 0.6rem;
    color: ${e=>e.theme.accentColor};
    opacity: 0.4;
    margin-inline-start: auto;
`;const ce=n.div`
    position: relative;
    width: 100%;
    min-height: 900px;
    margin: 1rem 0 1rem;
    padding: 1rem 0 1rem;
    overflow: visible;
    background: radial-gradient(circle at 50% 50%, ${e=>e.theme.accentColor}08 0%, transparent 75%);
    z-index: 1; /* Stay below navbar */

    @media (max-width: 768px) {
        min-height: auto;
        margin: 1rem 0 4rem;
        padding-bottom: 0;
        background: none;
    }
`,le=n.div`
    display: none;
    flex-direction: column;
    gap: 32px;
    margin-bottom: 80px;
    width: 100%;

    @media (max-width: 768px) {
        display: flex;
    }
`,de=n.div`
    background: ${e=>e.theme.cardBackground}40;
    border: 1px solid ${e=>e.theme.cardBorderColor};
    border-radius: 8px;
    padding: 24px;
    position: relative;
    backdrop-filter: blur(10px);
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background: linear-gradient(90deg, 
            transparent, 
            ${e=>e.theme.accentColor}, 
            transparent
        );
    }
`,pe=n.h4`
    font-family: var(--font-mono);
    font-size: 0.9rem;
    font-weight: 700;
    color: ${e=>e.theme.accentColor};
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    display: flex;
    align-items: center;
    gap: 12px;

    &::before {
        content: '';
        width: 8px;
        height: 8px;
        background: ${e=>e.theme.accentColor};
        box-shadow: 0 0 10px ${e=>e.theme.accentColor};
    }
`,he=n.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    gap: 12px;
`,me=n.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 14px;
    background: ${e=>e.theme.cardBackground}80;
    border: 1px solid ${e=>e.theme.cardBorderColor}40;
    border-radius: 4px;
    
    img {
        width: 20px;
        height: 20px;
        object-fit: contain;
    }

    span {
        font-family: var(--font-mono);
        font-size: 0.75rem;
        font-weight: 500;
        color: ${e=>e.theme.color}EE;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`,xe=n.div`
    margin-top: 16px;
    font-family: var(--font-main);
    font-size: 0.8rem;
    line-height: 1.5;
    color: ${e=>e.theme.color}BB;
    padding-top: 12px;
    border-top: 1px dashed ${e=>e.theme.cardBorderColor}60;
`,X=n(x.div)`
    padding: 8px 16px;
    background: ${e=>e.$isActive?`${e.theme.accentColor}f0`:`${e.theme.cardBackground}f0`};
    border: 1px solid ${e=>e.$isSelected?e.theme.accentColor:e.theme.cardBorderColor};
    border-radius: 40px;
    cursor: pointer;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: background 0.4s ease, border-color 0.4s ease, transform 0.4s ease;
    backdrop-filter: blur(12px);
    opacity: ${e=>e.$isDimmed?.2:1};
    transform: ${e=>e.$isSelected?"translateY(6px)":"translateY(0)"};
    box-shadow: ${e=>e.$isSelected?`0 2px 20px ${i=>i.theme.accentColor}40, inset 0 0 20px ${i=>i.theme.accentColor}10`:e.$isActive?`0 0 20px ${i=>i.theme.accentColor}20`:"0 4px 15px rgba(0, 0, 0, 0.1)"};
    box-sizing: border-box;
    max-width: 400px;
    position: relative;
    
    &:hover {
        border-color: ${e=>e.theme.accentColor};
        box-shadow: 0 8px 30px ${e=>e.theme.accentColor}30;
        z-index: 55;
    }

    @media (max-width: 768px) {
        padding: 12px 24px;
        max-width: 280px;
    }
`,fe=n(x.span)`
    font-family: var(--font-mono);
    font-size: 0.9rem;
    font-weight: 700;
    color: inherit;

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`,ue=n(x.div)`
    position: absolute;
    bottom: 120%;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 10, 20, 0.95);
    backdrop-filter: blur(8px);
    border: 1px solid ${e=>e.theme.accentColor}50;
    color: white;
    padding: 12px 18px;
    border-radius: 8px;
    font-size: 0.82rem;
    font-family: var(--font-main);
    line-height: 1.5;
    width: max-content;
    max-width: 250px;
    text-align: center;
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
    z-index: 100;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 242, 255, 0.2);

    &::after {
        content: '';
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        border-width: 6px;
        border-style: solid;
        border-color: ${e=>e.theme.accentColor}50 transparent transparent transparent;
    }

    ${X}:hover & {
        opacity: 1;
        visibility: visible;
        bottom: 130%;
    }
`,H=n(x.div)`
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: ${e=>e.$isActive?`${e.theme.accentColor}18`:`${e.theme.cardBackground}`};
    border: 1px solid ${e=>e.$isSelected?e.theme.accentColor:e.theme.cardBorderColor};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.3s ease, border-color 0.3s ease;
    opacity: ${e=>e.$isDimmed?.3:1};
    backdrop-filter: blur(8px);
    
    ${e=>e.$isSelected&&P`
        box-shadow: 0 0 25px ${i=>i.theme.accentColor}40, inset 0 0 10px ${i=>i.theme.accentColor}10;
        transform: scale(1.1);
    `}

    &:hover {
        border-color: ${e=>e.theme.accentColor};
        transform: scale(1.15);
        box-shadow: 0 0 20px ${e=>e.theme.accentColor}40;
        z-index: 40;
    }

    @media (max-width: 768px) {
        width: 48px;
        height: 48px;
    }
`,ge=n(x.img)`
    width: 32px;
    height: 32px;
    object-fit: contain;

    @media (max-width: 768px) {
        width: 20px;
        height: 20px;
    }
`,be=n(x.div)`
    position: absolute;
    top: 110%;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.85);
    color: white;
    padding: 4px 10px;
    border-radius: 4px;
    font-size: 0.65rem;
    font-family: var(--font-mono);
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s ease;
    z-index: 45;

    ${H}:hover & {
        opacity: 1;
    }
`,$e=n.svg`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 10;
`,ye=n.div`
    margin-top: 10px;
    padding-top: 50px;
    border-top: 1px solid ${e=>e.theme.cardBorderColor}30;
    position: relative;
    z-index: 100;

    @media (max-width: 768px) {
        margin-top: 200px;
        padding-top: 100px;
    }
`,ve=n.h2`
    font-family: var(--font-mono);
    font-size: 1.4rem;
    font-weight: 700;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: ${e=>e.theme.accentColor};
    margin-bottom: 50px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    &::before, &::after {
        content: '';
        height: 1px;
        width: 100px;
        background: linear-gradient(to var(--dir, right), ${e=>e.theme.accentColor}, transparent);
    }
    &::after { --dir: left; }
`,we=n.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 32px;
`,Ce=n.div`
    padding: 22px;
    background: ${e=>e.theme.cardBackground}C0;
    border: 1px solid ${e=>e.theme.cardBorderColor};
    border-radius: 6px;
    position: relative;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background: ${e=>e.theme.accentColor}20;
    }

    &:hover {
        transform: translateY(-8px);
        border-color: ${e=>e.theme.accentColor}60;
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
        &::before {
            background: ${e=>e.theme.accentColor};
        }
    }
`,ke=n.h3`
    font-family: var(--font-mono);
    font-size: 1rem;
    font-weight: 700;
    color: ${e=>e.theme.color};
    margin-bottom: 24px;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    display: flex;
    align-items: center;
    gap: 12px;

    &::before {
        content: '>';
        color: ${e=>e.theme.accentColor};
        font-weight: 900;
    }
`,je=n.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`,Se=n.li`
    font-family: var(--font-main);
    font-size: 1rem;
    line-height: 1.2;
    color: ${e=>e.theme.color}BB;
    margin-bottom: 16px;
    padding-left: 24px;
    position: relative;
    text-align: start;

    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 10px;
        width: 6px;
        height: 6px;
        background: ${e=>e.theme.accentColor}40;
        border: 1px solid ${e=>e.theme.accentColor};
        border-radius: 50%;
    }

    &:last-child {
        margin-bottom: 0;
    }
`,ze=({techs:e,groups:i})=>{const z=te.useContext(oe),d=p.useRef(null),u=p.useRef({}),[h,v]=p.useState(null),[m,A]=p.useState(null),[f,W]=p.useState({width:0,height:0}),[E,F]=p.useState({}),$=p.useCallback(()=>{if(!d.current)return;const t=d.current.getBoundingClientRect(),r={};[...e,...i].forEach(a=>{const l=u.current[a.id];if(l){const s=l.getBoundingClientRect();r[a.id]={x:s.left+s.width/2-t.left,y:s.top+s.height/2-t.top,width:s.width,height:s.height}}}),F(r)},[e,i]);p.useEffect(()=>{if(!d.current)return;const t=new ResizeObserver(()=>{d.current&&W({width:d.current.clientWidth,height:d.current.clientHeight}),$()});return t.observe(d.current),()=>t.disconnect()},[$]),p.useEffect(()=>{const t=setTimeout($,100);return()=>clearTimeout(t)},[$,f]);const R=p.useMemo(()=>{const{width:t,height:r}=f;if(t===0)return{groups:[],techs:[]};const a=t/2,l=r/2,s=t<768,c=t<480,w=t*(s?.36:.32),C=r*(s?.22:.24),k=t*.44,I=r*(s?.35:.4),g=c?.85:1,B=i.map((j,S)=>{const b=S/i.length*2*Math.PI-Math.PI/2;return{id:j.id,x:a+Math.cos(b)*w*g,y:l+Math.sin(b)*C*g}}),y=e.map((j,S)=>{const b=S/e.length*2*Math.PI-Math.PI/2;return{id:j.id,x:a+Math.cos(b)*k*g,y:l+Math.sin(b)*I*g}});return{groups:B,techs:y}},[f,i,e]),G=p.useMemo(()=>{var t;return h?((t=i.find(r=>r.id===h))==null?void 0:t.techIds)||[]:[]},[h,i]),D=p.useMemo(()=>m?i.filter(t=>t.techIds.includes(m)).map(t=>t.id):[],[m,i]),L=!!(h||m),q=(t,r)=>{r.stopPropagation(),A(null),v(h===t?null:t),setTimeout($,0)},V=(t,r)=>{r.stopPropagation(),v(null),A(m===t?null:t),setTimeout($,0)};p.useEffect(()=>{const t=()=>{v(null),A(null)};return window.addEventListener("click",t),()=>window.removeEventListener("click",t)},[]);const J=()=>{const t=[];return h&&G.forEach(r=>{t.push({from:h,to:r,key:`${h}-${r}`})}),m&&D.forEach(r=>{t.push({from:r,to:m,key:`${m}-${r}`})}),o.jsx($e,{viewBox:`0 0 ${f.width} ${f.height}`,children:o.jsx(U,{children:t.map(r=>{const a=E[r.from],l=E[r.to];if(!a||!l)return null;const s=l.x-a.x,c=l.y-a.y,w=Math.sqrt(s*s+c*c);if(w<40)return null;const C=s/w,k=c/w,I=N=>{const Y=(N.width||80)/2,O=(N.height||40)/2;return Y*O/Math.sqrt(Math.pow(O*C,2)+Math.pow(Y*k,2))},g=I(a),B=I(l),y=2,j=a.x+C*(g+y),S=a.y+k*(g+y),b=l.x-C*(B+y),K=l.y-k*(B+y);return o.jsx(x.line,{initial:{pathLength:0,opacity:0},animate:{pathLength:1,opacity:.6},exit:{pathLength:0,opacity:0},x1:j,y1:S,x2:b,y2:K,stroke:z.accentColor,strokeWidth:"1",strokeDasharray:"4,4",transition:{duration:.4}},r.key)})})})},M=f.width>0&&f.width<768;return o.jsxs(ce,{ref:d,children:[!M&&f.width>0&&J(),o.jsxs(Q,{children:[!M&&R.groups.map(t=>{const r=i.find(c=>c.id===t.id),a=h===t.id||D.includes(t.id),l=h===t.id,s=L&&!a;return o.jsx(x.div,{ref:c=>u.current[t.id]=c,layout:!0,initial:!1,animate:{left:t.x,top:t.y,opacity:s?.2:1,zIndex:a?50:20},whileHover:{zIndex:110},style:{position:"absolute",x:"-50%",y:"-50%"},transition:{type:"spring",stiffness:200,damping:25},children:o.jsxs(X,{layout:!0,$isActive:a,$isSelected:l,$isDimmed:!!s,onClick:c=>q(t.id,c),children:[o.jsx(fe,{layout:"position",children:r.title}),r.impactNote&&o.jsx(ue,{children:r.impactNote})]})},t.id)}),!M&&R.techs.map(t=>{const r=e.find(c=>c.id===t.id),a=m===t.id||G.includes(t.id),l=m===t.id,s=L&&!a;return o.jsx(x.div,{ref:c=>u.current[t.id]=c,layout:!0,initial:!1,animate:{left:t.x,top:t.y,opacity:s?.3:1,zIndex:a?45:20},style:{position:"absolute",x:"-50%",y:"-50%"},transition:{type:"spring",stiffness:200,damping:25},children:o.jsx(H,{layout:!0,$isActive:a,$isSelected:l,$isDimmed:!!s,onClick:c=>V(t.id,c),children:o.jsxs(x.div,{layout:"position",style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[o.jsx(ge,{src:r.icon,alt:r.title}),o.jsx(be,{layout:"position",children:r.title})]})})},t.id)})]}),M&&o.jsx(le,{children:i.map((t,r)=>o.jsx(x.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:r*.1},children:o.jsxs(de,{children:[o.jsx(pe,{children:t.title}),o.jsx(he,{children:e.filter(a=>t.techIds.includes(a.id)).map(a=>o.jsxs(me,{children:[o.jsx("img",{src:a.icon,alt:a.title}),o.jsx("span",{children:a.title})]},a.id))}),t.impactNote&&o.jsx(xe,{children:t.impactNote})]})},t.id))})]})};function De(e){const{t:i}=ie(),{header:z}=e,d={intro:i("resSkills:intro"),techs:i("resSkills:techs",{returnObjects:!0})||[],groups:i("resSkills:groups",{returnObjects:!0})||[],softSkills:i("resSkills:softSkills",{returnObjects:!0})||[]};return!d.techs||!d.groups?o.jsx(ee,{}):o.jsxs(o.Fragment,{children:[o.jsxs(ne,{children:[o.jsxs("title",{children:[z||i("layout:sections.skills")," | Amin Abbasi"]}),o.jsx("meta",{name:"description",content:"Technical skill set including Node.js, Distributed Systems, and Pipeline Architecture."})]}),o.jsx(Z,{title:z||i("layout:sections.skills")}),o.jsx(re,{children:o.jsxs(_,{style:{maxWidth:"1200px",padding:"0 24px"},children:[o.jsx(T,{direction:"up",triggerOnce:!0,duration:800,children:o.jsx(ae,{children:o.jsx(se,{children:d.intro})})}),o.jsx(T,{direction:"up",triggerOnce:!0,delay:200,children:o.jsx(ze,{techs:d.techs,groups:d.groups})}),o.jsxs(ye,{children:[o.jsx(T,{direction:"up",triggerOnce:!0,delay:400,children:o.jsx(ve,{children:i("layout:sections.softSkills",{defaultValue:"Leadership & Soft Skills"})})}),o.jsx(we,{children:d.softSkills.map((u,h)=>o.jsx(T,{direction:"up",triggerOnce:!0,delay:500+h*100,children:o.jsxs(Ce,{children:[o.jsx(ke,{children:u.title}),o.jsx(je,{children:u.items.map((v,m)=>o.jsx(Se,{children:v},m))})]})},u.title))})]})]})})]})}export{De as default};
