import{j as t}from"./vendor-motion-CLxAPPWH.js";import{a as d,C as p}from"./vendor-icons-oi0yKthW.js";import{c as o,L as m,u as x,X as h,H as g}from"./app-UXPFcj1Y.js";import{F as f}from"./index-BD3xWMwD.js";import{S as b,H as u,a as y}from"./index-BASf_s-A.js";import{F as w}from"./FallbackSpinner-C8FKn4kQ.js";import{M as $}from"./index-G7g8hZHv.js";import"./vendor-charts-DbC-OHEB.js";import"./vendor-firebase-BBPOHLSG.js";const C=o(b)`
    padding-bottom: 6rem;
`,j=o.div`
    position: relative;
    padding-inline-start: 80px;

    @media (max-width: 768px) {
        padding-inline-start: 0;
    }

    &::before {
        content: '';
        position: absolute;
        inset-inline-start: 28px;
        top: 0;
        bottom: 0;
        width: 1px;
        background: ${e=>e.theme.timelineLineColor};

        @media (max-width: 768px) {
            display: none;
        }
    }
`,k=o.div`
    position: relative;
    margin-bottom: 72px;

    @media (max-width: 768px) {
        margin-bottom: 56px;
    }

    &:last-child {
        margin-bottom: 0;
    }
`,v=o.div`
    position: absolute;
    inset-inline-start: -56px;
    top: 30px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid ${e=>e.$accent};
    background: ${e=>e.theme.background};
    box-shadow: 0 0 8px ${e=>e.$accent}60;

    @media (max-width: 768px) {
        display: none;
    }
`,S=o.div`
    padding: 2.5rem;
    background: ${e=>e.theme.cardBackground};
    border: 1px solid ${e=>e.theme.cardBorderColor};
    border-radius: 8px;
    position: relative;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    margin-bottom: 0.5rem;
    margin-top: 1.5rem;

    &::before,
    &::after {
        content: '';
        position: absolute;
        width: 12px;
        height: 12px;
    }
    &::before {
        top: -1px;
        left: -1px;
        border-top: 2px solid ${e=>e.theme.accentColor};
        border-left: 2px solid ${e=>e.theme.accentColor};
        border-radius: 8px 0 0 0;
    }
    &::after {
        bottom: -1px;
        right: -1px;
        border-bottom: 2px solid ${e=>e.theme.accentColor};
        border-right: 2px solid ${e=>e.theme.accentColor};
        border-radius: 0 0 8px 0;
    }

    &:hover {
        border-color: ${e=>e.theme.accentColor}40;
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
        transform: translateY(-4px);
    }
`,z=o.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 0.5rem;
`,T=o.h3`
    font-family: var(--font-mono);
    font-size: 1.25rem;
    font-weight: 700;
    margin: 0;
    color: ${e=>e.theme.color};
    letter-spacing: -0.01em;
`,B=o.span`
    font-family: var(--font-mono);
    font-size: 0.75rem;
    font-weight: 600;
    color: ${e=>e.theme.accentColor};
    background: ${e=>e.theme.accentColor}12;
    border: 1px solid ${e=>e.theme.accentColor}30;
    padding: 0.35rem 1rem;
    border-radius: 4px;
    letter-spacing: 0.05em;
`,D=o.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-bottom: 1.5rem;

    .badges-container {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        align-items: center;
    }

    .promotion-badge {
        order: -1;
    }

    .work-type-badge {
        order: 0;
    }

    @media (max-width: 768px) {
        .promotion-badge {
            order: 1;
        }
        .work-type-badge {
            order: 0;
        }
    }
`,E=o.span`
    font-family: var(--font-mono);
    font-size: 0.88rem;
    font-weight: 500;
    color: ${e=>e.theme.color}AA;
    
    &::before {
        content: '@ ';
        color: ${e=>e.theme.accentColor};
    }
`,A=o.span`
    font-family: var(--font-mono);
    font-size: 0.64rem;
    font-weight: 600;
    padding: 0.2rem 0.6rem;
    border-radius: 50px;
    background: transparent;
    color: ${e=>e.theme.accentColor};
    border: 1px solid ${e=>e.theme.accentColor}40;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    display: inline-flex;
    align-items: center;
`,L=o.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    li {
        position: relative;
        padding-inline-start: 1.75rem;
        font-size: 0.95rem;
        line-height: 1.2;
        color: ${e=>e.theme.color}DD;
        text-align: start;

        &::before {
            content: '▸';
            position: absolute;
            inset-inline-start: 0;
            color: ${e=>e.theme.accentColor};
            font-size: 1.25rem;
            line-height: 1;
        }
    }
`,N=o.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 2rem;
    padding-top: 1.5rem;
    border-top: 1px solid ${e=>e.theme.cardBorderColor}60;
`,F=o.span`
    font-family: var(--font-mono);
    font-size: 0.65rem;
    font-weight: 600;
    padding: 0.25rem 0.75rem;
    border-radius: 4px;
    background: ${e=>e.theme.accentColor}0D;
    color: ${e=>e.theme.accentColor};
    border: 1px solid ${e=>e.theme.accentColor}25;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    transition: all 0.2s ease;

    &:hover {
        background: ${e=>e.theme.accentColor}15;
    }
`,H=o.div`
    display: flex;
    align-items: center;
    position: relative;
    z-index: 5;
`,I=o.div`
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.2rem 0.8rem;
    background: ${e=>e.theme.accentColor}1A;
    border: 1px solid ${e=>e.theme.accentColor}40;
    border-radius: 50px;
    font-family: var(--font-mono);
    font-size: 0.64rem;
    font-weight: 700;
    color: ${e=>e.theme.accentColor};
    letter-spacing: 0.05em;
    text-transform: uppercase;
`,W=o.div`
    position: absolute;
    inset-inline-start: -80px;
    top: 30px;
    width: 24px;
    font-family: var(--font-mono);
    font-size: 0.65rem;
    font-weight: 700;
    color: ${e=>e.theme.accentColor};
    opacity: 0.4;
    text-align: right;
    padding-right: 1rem;

    @media (max-width: 768px) {
        display: none;
    }
`,P=o(m)`
    font-family: var(--font-mono);
    font-size: 0.72rem;
    font-weight: 700;
    color: ${e=>e.theme.accentColor};
    text-decoration: none;
    margin-inline-start: 12px;
    padding: 3px 8px;
    border: 1px solid ${e=>e.theme.accentColor}30;
    border-radius: 4px;
    background: ${e=>e.theme.accentColor}08;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    text-transform: uppercase;
    letter-spacing: 0.02em;

    &:hover {
        background: ${e=>e.theme.accentColor}15;
        border-color: ${e=>e.theme.accentColor}60;
        transform: translateY(-1px);
    }

    @media (max-width: 768px) {
        margin-inline-start: 0;
        margin-top: 8px;
        display: inline-flex;
    }
`,K=({header:e})=>{const{t:n}=x(),l=d.useContext(h),s=n("resExperiences:experiences",{returnObjects:!0});return s?t.jsxs(t.Fragment,{children:[t.jsxs(g,{children:[t.jsxs("title",{children:[e||n("layout:sections.experience")," | Amin Abbasi"]}),t.jsx("meta",{name:"description",content:"Detailed professional experience as a Lead Software Engineer and Backend Architect."})]}),t.jsx(u,{title:e||n("layout:sections.experience")}),t.jsx(C,{children:t.jsx(y,{children:t.jsx(j,{children:s.map((r,a)=>t.jsx(f,{direction:"up",triggerOnce:!0,duration:600,delay:a*80,children:t.jsxs(k,{children:[t.jsx(W,{children:String(a+1).padStart(2,"0")}),t.jsx(v,{$accent:l.accentColor}),t.jsxs(S,{children:[t.jsxs(z,{children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"8px"},children:[t.jsx(T,{children:r.title}),r.caseStudyId&&t.jsx(P,{to:`/case-studies#${r.caseStudyId}`,children:n("layout:experience.viewCaseStudy")})]}),t.jsx(B,{children:r.dateText})]}),t.jsxs(D,{children:[t.jsx(E,{children:r.subtitle}),t.jsxs("div",{className:"badges-container",children:[r.promotionNote&&t.jsx(H,{className:"promotion-badge",children:t.jsxs(I,{children:[t.jsx(p,{size:12,strokeWidth:2.5}),r.promotionNote]})}),r.workType&&t.jsx(A,{className:"work-type-badge",children:r.workType})]})]}),t.jsx(L,{children:r.workDescription.map((i,c)=>t.jsx("li",{children:t.jsx($,{components:{p:"span"},children:i})},c))}),r.techStack&&r.techStack.length>0&&t.jsx(N,{children:r.techStack.map(i=>t.jsx(F,{children:i},i))})]})]})},`${r.title}-${a}`))})})})]}):t.jsx(w,{})};export{K as default};
