import{j as t}from"./vendor-motion-CLxAPPWH.js";import{a as x,Q as y,C as j,c as v,A as w,L as C,d as $,I as k}from"./vendor-icons-oi0yKthW.js";import{F as d}from"./index-BD3xWMwD.js";import{S as z,H as A,a as S,G as L,C as f}from"./index-BASf_s-A.js";import{F as P}from"./FallbackSpinner-C8FKn4kQ.js";import{c as o,u as g,L as B,b as I,H as T}from"./app-UXPFcj1Y.js";import{M as u}from"./index-G7g8hZHv.js";import"./vendor-charts-DbC-OHEB.js";import"./vendor-firebase-BBPOHLSG.js";const O=o.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0;
    margin: 2rem 0;
    border: 1px solid ${e=>e.theme.cardBorderColor};
    border-radius: 6px;
    overflow: hidden;
`,E=o.div`
    flex: 1;
    min-width: 120px;
    text-align: center;
    padding: 16px 12px;
    border-right: 1px solid ${e=>e.theme.cardBorderColor};
    position: relative;

    &:last-child {
        border-right: none;
    }
`,R=o.div`
    font-family: var(--font-mono);
    font-size: 1.7rem;
    font-weight: 700;
    color: ${e=>e.theme.accentColor};
    line-height: 1;
    margin-bottom: 4px;
`,V=o.div`
    font-family: var(--font-mono);
    font-size: 0.65rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: ${e=>e.theme.color}77;
`;function D({stats:e}){return!Array.isArray(e)||e.length===0?null:t.jsx(d,{direction:"up",triggerOnce:!0,delay:200,children:t.jsx(O,{children:e.map(r=>t.jsxs(E,{children:[t.jsx(R,{children:r.value}),t.jsx(V,{children:r.label})]},r.label))})})}const U=o.div`
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 16px 20px;
    margin-top: 2rem;
    background: ${e=>e.theme.cardBackground};
    border: 1px solid ${e=>e.theme.accentColor}30;
    border-radius: 6px;
    position: relative;
    overflow: hidden;
    text-align: start;

    &::before {
        content: '';
        position: absolute;
        inset-inline-start: 0;
        top: 0;
        bottom: 0;
        width: 3px;
        background: ${e=>e.theme.accentColor};
        border-radius: 0 2px 2px 0;
    }
`,F=o.span`
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #00e676;
    display: inline-block;
    flex-shrink: 0;
    box-shadow: 0 0 0 0 rgba(0, 230, 118, 0.7);
    animation: availPulse 2s infinite;

    @keyframes availPulse {
        0% { box-shadow: 0 0 0 0 rgba(0, 230, 118, 0.7); }
        70% { box-shadow: 0 0 0 8px rgba(0, 230, 118, 0); }
        100% { box-shadow: 0 0 0 0 rgba(0, 230, 118, 0); }
    }
`,H=o.div`
    font-family: var(--font-mono);
    font-size: 0.78rem;
    line-height: 1.5;
    color: ${e=>e.theme.color}CC;

    strong {
        color: ${e=>e.theme.accentColor};
        font-weight: 600;
        display: block;
        margin-bottom: 4px;
    }
`;function N({availability:e}){return e?t.jsxs(U,{children:[t.jsx(F,{}),t.jsxs(H,{children:[t.jsx("strong",{children:e.status}),t.jsxs("span",{children:[e.location," · ",e.timezone,e.remote&&" · Remote OK"]})]})]}):null}const G=o.div`
    padding: 24px;
    background: ${e=>e.theme.cardBackground};
    border: 1px solid ${e=>e.theme.cardBorderColor};
    border-radius: 8px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.3s ease;
    text-align: start;

    &:hover {
        border-color: ${e=>e.theme.accentColor}40;
        transform: translateY(-4px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 576px) {
        padding: 18px;
    }
`,M=o.div`
    color: ${e=>e.theme.accentColor};
    opacity: 0.2;
    position: absolute;
    top: 16px;
    left: 16px;
`,q=o.div`
    position: relative;
    max-height: ${e=>e.$isFeatured?"none":e.$expanded?"1000px":"135px"};
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1);
    margin-bottom: 12px;
    z-index: 1;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 60px;
        background: linear-gradient(to bottom, transparent, ${e=>e.theme.cardBackground});
        opacity: ${e=>e.$expanded||e.$isFeatured?0:1};
        transition: opacity 0.3s ease;
        pointer-events: none;
    }
`,Q=o.p`
    font-family: var(--font-main);
    font-size: 0.95rem;
    line-height: 1.7;
    color: ${e=>e.theme.color}EE;
    margin: 0;
    padding-left: 8px;
    font-style: italic;

    @media (max-width: 576px) {
        font-size: 0.88rem;
    }
`,_=o.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid ${e=>e.theme.cardBorderColor}40;
`,W=o.div`
    display: flex;
    align-items: center;
    gap: 12px;
`,Y=o.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${e=>e.theme.accentColor}20;
    border: 1.5px solid ${e=>e.theme.accentColor}40;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-mono);
    font-size: 0.75rem;
    font-weight: 700;
    color: ${e=>e.theme.accentColor};
    flex-shrink: 0;
`,K=o.div`
    font-family: var(--font-mono);
    font-size: 0.72rem;

    strong {
        display: block;
        color: ${e=>e.theme.color};
        font-weight: 600;
        font-size: 0.85rem;
    }
    span {
        color: ${e=>e.theme.color}88;
        font-size: 0.7rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }
`,J=o.button`
    background: none;
    border: none;
    color: ${e=>e.theme.accentColor};
    font-family: var(--font-mono);
    font-size: 0.68rem;
    font-weight: 700;
    padding: 4px 8px;
    margin-top: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 4px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    opacity: 0.8;
    
    &:hover { opacity: 1; }
`,X=o(B)`
    display: flex;
    align-items: center;
    gap: 6px;
    font-family: var(--font-mono);
    font-size: 0.7rem;
    font-weight: 700;
    color: ${e=>e.theme.accentColor};
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    opacity: 0.8;
    transition: all 0.2s ease;

    &:hover {
        opacity: 1;
        gap: 10px;
    }
`,Z=o.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${e=>e.theme.accentColor};
    opacity: 0.7;
    transition: all 0.2s ease;

    &:hover {
        opacity: 1;
        transform: scale(1.1);
    }
`,ee=({testimonial:e,isFeatured:r=!1,showLinkedIn:n=!1,initiallyExpanded:l=!1})=>{const{t:s}=g(),[i,p]=x.useState(l),h=180,a=r?e.summaryDescription||e.text.substring(0,100)+"...":e.text,m=!r&&e.text.length>h,b=()=>{r&&(window.location.href=`/about?expand=${encodeURIComponent(e.name)}#testimonials`)};return t.jsxs(G,{id:`testimonial-${e.name}`,onClick:r?b:void 0,style:{cursor:r?"pointer":"default"},children:[t.jsx(M,{children:t.jsx(y,{size:40})}),t.jsxs("div",{style:{flex:1,position:"relative",marginTop:"8px"},children:[t.jsx(q,{$expanded:i,$isFeatured:r,children:t.jsxs(Q,{children:['"',a,'"']})}),m&&t.jsx(J,{onClick:c=>{c.stopPropagation(),p(!i)},children:i?t.jsxs(t.Fragment,{children:[t.jsx(j,{size:14})," ",s("layout:about.showLess",{defaultValue:"Show less"})]}):t.jsxs(t.Fragment,{children:[t.jsx(v,{size:14})," ",s("layout:about.showMore",{defaultValue:"Show more"})]})})]}),t.jsxs(_,{children:[t.jsxs(W,{children:[t.jsx(Y,{children:e.initials}),t.jsxs(K,{children:[t.jsx("strong",{children:e.name}),t.jsx("span",{children:e.role})]})]}),r&&t.jsxs(X,{to:`/about?expand=${encodeURIComponent(e.name)}#testimonials`,onClick:c=>c.stopPropagation(),children:[s("layout:home.fullReview",{defaultValue:"Full Review"})," ",t.jsx(w,{size:14})]}),n&&e.linkedinUrl&&t.jsx(Z,{href:e.linkedinUrl,target:"_blank",rel:"noopener noreferrer",title:s("layout:about.viewOnLinkedin",{defaultValue:"View on LinkedIn"}),onClick:c=>c.stopPropagation(),children:t.jsx(C,{size:18})})]})]})},te=o.div`
    margin-top: 4rem;
    margin-bottom: 2rem;
`,oe=o.h3`
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: ${e=>e.theme.accentColor};
    display: flex;
    align-items: center;
    gap: 1rem;
    font-family: var(--font-mono);

    &::after {
        content: '';
        flex: 1;
        height: 1px;
        background: linear-gradient(90deg, ${e=>e.theme.accentColor} 0%, transparent 100%);
        opacity: 0.2;
    }
`,re=o.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-bottom: 5rem;

    @media (max-width: 991px) {
        grid-template-columns: 1fr;
    }
`,ne=o.div`
    background: ${e=>e.theme.cardBackground};
    padding: 2.5rem 2rem;
    border-radius: 4px;
    border: 1px solid ${e=>e.theme.cardBorderColor};
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(10px);

    /* Corner Accents (Blueprint Style) */
    &::before,
    &::after {
        content: '';
        position: absolute;
        width: 14px;
        height: 14px;
        border-color: ${e=>e.theme.accentColor};
        border-style: solid;
        opacity: 0.4;
        transition: all 0.3s ease;
    }

    &::before {
        top: -1px;
        left: -1px;
        border-width: 2px 0 0 2px;
    }

    &::after {
        bottom: -1px;
        right: -1px;
        border-width: 0 2px 2px 0;
    }

    &:hover {
        border-color: ${e=>e.theme.accentColor}60;
        transform: translateY(-8px);
        box-shadow: 0 20px 40px -20px ${e=>e.theme.accentColor}40;
        background: ${e=>e.theme.accentColor}08;

        &::before,
        &::after {
            opacity: 1;
            width: 20px;
            height: 20px;
        }
    }

    /* Subtle Grid Background Pattern for Card */
    .blueprint-pattern {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: radial-gradient(${e=>e.theme.accentColor}10 1px, transparent 1px);
        background-size: 20px 20px;
        opacity: 0.3;
        z-index: 0;
        pointer-events: none;
    }
`,ie=o.div`
    display: flex;
    align-items: center;
    gap: 1.25rem;
    margin-bottom: 0.5rem;
    position: relative;
    z-index: 1;
`,ae=o.div`
    width: 44px;
    height: 44px;
    flex-shrink: 0;
    border-radius: 4px;
    background: ${e=>e.theme.accentColor}1A;
    border: 1px solid ${e=>e.theme.accentColor}40;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${e=>e.theme.accentColor};
    position: relative;

    svg {
        width: 22px;
        height: 22px;
        filter: drop-shadow(0 0 5px ${e=>e.theme.accentColor}40);
    }
`,se=o.h4`
    font-family: var(--font-mono);
    font-size: 1.15rem;
    font-weight: 700;
    color: ${e=>e.theme.color};
    margin: 0;
    letter-spacing: -0.02em;
    text-align: start;
`,le=o.div`
    font-size: 0.95rem;
    line-height: 1.7;
    color: ${e=>e.theme.color}CC;
    margin: 0;
    position: relative;
    z-index: 1;
    text-align: start;

    strong {
        color: ${e=>e.theme.accentColor};
        font-weight: 600;
    }
`,ce=({title:e,pillars:r})=>!r||r.length===0?null:t.jsxs(te,{children:[t.jsx(d,{direction:"up",triggerOnce:!0,children:t.jsx(oe,{children:e})}),t.jsx(re,{children:r.map((n,l)=>{const s=$[n.icon]||k;return t.jsx(d,{direction:"up",triggerOnce:!0,delay:l*150,children:t.jsxs(ne,{children:[t.jsx("div",{className:"blueprint-pattern"}),t.jsxs(ie,{children:[t.jsx(ae,{children:t.jsx(s,{})}),t.jsx(se,{children:n.title})]}),t.jsx(le,{as:"div",children:t.jsx(u,{children:n.description})})]})},n.id)})})]}),de=()=>{const{t:e,i18n:r}=g();return{data:{about:e("resAbout:about"),quote:e("resAbout:quote",{defaultValue:""}),imageSource:e("resAbout:imageSource"),stats:e("resAbout:stats",{returnObjects:!0}),availability:e("resAbout:availability",{returnObjects:!0}),testimonials:e("resAbout:testimonials",{returnObjects:!0}),leadershipPhilosophy:e("resAbout:leadershipPhilosophy",{returnObjects:!0})},t:e,currentLanguage:r.language}},pe=o(z)`
    padding-bottom: 6rem;
`,me=o.div`
    font-size: 1.05em;
    font-weight: 400;
    line-height: 1.5;
    position: relative;
    z-index: 10;
    text-align: start;

    @media (min-width: 992px) {
        padding-inline-end: 4rem;
    }

    h3 {
        font-family: var(--font-mono);
        margin-top: 2rem;
        margin-bottom: 1.5rem;
        color: ${e=>e.theme.accentColor};
        font-size: 1.5rem;
        font-weight: 700;
    }

    p {
        margin-bottom: 0.5rem;
        color: ${e=>e.theme.color}DD;
    }

    strong {
        color: ${e=>e.theme.accentColor};
        font-weight: 600;
    }
`,he=o.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
`,xe=o.div`
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1.1;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    border-bottom: 3px solid ${e=>e.theme.accentColor};

    &::after {
        content: '';
        position: absolute;
        width: 250px;
        height: 250px;
        background: ${e=>e.theme.accentColor};
        filter: blur(80px);
        opacity: 0.35;
        border-radius: 50%;
        animation: floatOrb 8s ease-in-out infinite;
        z-index: 0;
        top: 20%;
    }

    @keyframes floatOrb {
        0% { transform: translate(0, 0) scale(1); }
        33% { transform: translate(30px, -50px) scale(1.1); }
        66% { transform: translate(-20px, 20px) scale(0.9); }
        100% { transform: translate(0, 0) scale(1); }
    }
`,fe=o.img`
    width: 100%;
    max-width: 600px;
    height: auto;
    display: block;
    z-index: 2;
    position: relative;
    filter: drop-shadow(0 0 10px ${e=>e.theme.accentColor}40);
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.08);
        filter: drop-shadow(0 0 40px ${e=>e.theme.accentColor});
    }
`,ge=o.div`
    margin-top: 1.5rem;
    font-family: var(--font-mono);
    font-size: 0.88rem;
    font-style: italic;
    color: ${e=>e.theme.color}BB;
    text-align: center;
    position: relative;
    padding: 0 14px;
    line-height: 1.4;

    &::before,
    &::after {
        content: '"';
        color: ${e=>e.theme.accentColor}80;
        font-size: 1.5rem;
        position: absolute;
        top: -10px;
    }
    &::before { left: 0; }
    &::after { right: 0; }
`,ue=o.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 1rem;
    
    @media (min-width: 992px) {
        grid-template-columns: repeat(3, 1fr);
    }
`,be=o.p`
    font-family: var(--font-mono);
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: ${e=>e.theme.accentColor};
    margin-bottom: 0.2rem;
    opacity: 0.8;
    text-align: start;
`,Se=({header:e})=>{const{data:r,t:n}=de(),l=I(),i=new URLSearchParams(l.search).get("expand"),[p,h]=x.useState(!1);return x.useEffect(()=>{i&&!p&&setTimeout(()=>{const a=document.getElementById(`testimonial-${i}`);if(a)a.scrollIntoView({behavior:"smooth",block:"center"}),h(!0);else{const m=document.getElementById("testimonials");m&&m.scrollIntoView({behavior:"smooth"})}},500)},[l,p,i]),r.about?t.jsxs(t.Fragment,{children:[t.jsxs(T,{children:[t.jsxs("title",{children:[e||n("layout:sections.about")," | Amin Abbasi"]}),t.jsx("meta",{name:"description",content:"Learn more about Amin Abbasi, a Lead Backend Architect with 10+ years of experience."})]}),t.jsx(A,{title:e||n("layout:sections.about")}),t.jsx(pe,{children:t.jsx(S,{children:t.jsxs(d,{triggerOnce:!0,duration:1e3,children:[t.jsxs(L,{className:"align-items-start",children:[t.jsx(f,{lg:5,md:12,order:1,orderLg:2,className:"mb-5 mb-lg-0 mt-lg-4",children:t.jsx(d,{direction:"right",triggerOnce:!0,delay:200,children:t.jsxs(he,{children:[t.jsx(xe,{children:t.jsx(fe,{src:r.imageSource,alt:"Amin Abbasi — Lead Software Engineer",loading:"lazy"})}),r.quote&&t.jsx(ge,{children:r.quote}),r.availability&&t.jsx(N,{availability:r.availability})]})})}),t.jsx(f,{lg:7,md:12,order:2,orderLg:1,children:t.jsxs(me,{children:[t.jsx(u,{children:r.about}),t.jsx(D,{stats:r.stats||[]})]})})]}),r.leadershipPhilosophy&&t.jsx(ce,{title:r.leadershipPhilosophy.title,pillars:r.leadershipPhilosophy.pillars}),Array.isArray(r.testimonials)&&r.testimonials.length>0&&t.jsxs("div",{className:"mt-5 pt-lg-5",id:"testimonials",children:[t.jsx(be,{children:n("layout:about.testimonials",{defaultValue:"Testimonials"})}),t.jsx(ue,{children:r.testimonials.map(a=>t.jsx(ee,{testimonial:a,showLinkedIn:!0,initiallyExpanded:a.name===i},a.name))})]})]})})})]}):t.jsx(P,{})};export{Se as default};
