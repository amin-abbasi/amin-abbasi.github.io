import{j as t}from"./vendor-motion-CLxAPPWH.js";import{a as x,G as m,e as h}from"./vendor-icons-oi0yKthW.js";import{c as o,u as g,X as u,H as f}from"./app-DIpUg5qZ.js";import{F as b}from"./index-D7T8C9WV.js";import{H as j,a as y}from"./index-DNmKwcGq.js";import{F as $}from"./FallbackSpinner-DGogp4PS.js";import{M as c}from"./index-G7g8hZHv.js";import"./vendor-charts-DbC-OHEB.js";import"./vendor-firebase-BBPOHLSG.js";const v=o.div`
    padding: 40px 0 80px;
    position: relative;
`,w=o.div`
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
`,C=o.div`
    position: relative;
    margin-bottom: 180px;

    @media (max-width: 768px) {
        margin-bottom: 80px;
    }

    &:last-child {
        margin-bottom: 0;
    }
`,k=o.div`
    position: absolute;
    inset-inline-start: -56px;
    top: 30px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 2px solid ${e=>e.$accent};
    background: ${e=>e.theme.background};
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 10px ${e=>e.$accent}40;

    &::after {
        content: '';
        width: 4px;
        height: 4px;
        background: ${e=>e.$accent};
        border-radius: 50%;
    }

    @media (max-width: 768px) {
        display: none;
    }
`,T=o.div`
    padding: 28px 32px;
    margin-top: 1.4em;
    background: ${e=>e.theme.cardBackground};
    border: 1px solid ${e=>e.theme.cardBorderColor};
    border-radius: 4px;
    position: relative;
    transition: all 0.3s ease;

    /* Blueprint accents */
    &::before {
        content: '';
        position: absolute;
        top: -1px;
        left: -1px;
        width: 12px;
        height: 12px;
        border-top: 2px solid ${e=>e.theme.accentColor};
        border-inline-start: 2px solid ${e=>e.theme.accentColor};
    }

    &:hover {
        border-color: ${e=>e.theme.accentColor}40;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
        transform: translateY(-2px);
    }
`,B=o.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 8px;
`,z=o.div`
    display: flex;
    align-items: center;
    gap: 12px;
`,A=o.h3`
    font-family: var(--font-mono);
    font-size: 1.15rem;
    font-weight: 700;
    margin: 0;
    color: ${e=>e.theme.color};
    letter-spacing: -0.01em;
`,D=o.span`
    font-family: var(--font-mono);
    font-size: 0.8rem;
    font-weight: 600;
    color: ${e=>e.theme.accentColor};
    background: ${e=>e.theme.accentColor}08;
    border: 1px solid ${e=>e.theme.accentColor}25;
    padding: 4px 12px;
    border-radius: 2px;
    letter-spacing: 0.05em;
`,S=o.div`
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: var(--font-mono);
    font-size: 0.85rem;
    font-weight: 500;
    color: ${e=>e.theme.color}AA;
    margin-bottom: 20px;
    letter-spacing: 0.02em;
    text-align: start;
`,E=o.ul`
    list-style: none;
    padding: 0;
    margin: 0px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    li {
        position: relative;
        padding-inline-start: 20px;
        font-size: 0.92rem;
        line-height: 1.2;
        color: ${e=>e.theme.color}BB;
        text-align: start;

        &::before {
            content: '▸';
            position: absolute;
            margin-top: -0.3em;
            inset-inline-start: 0;
            color: ${e=>e.theme.accentColor};
            font-size: 1.5em;
        }
    }
`;function X(e){const{t:r}=g(),n=x.useContext(u),{header:a}=e,s={education:r("resEducation:education",{returnObjects:!0})};return s.education?t.jsxs(t.Fragment,{children:[t.jsxs(f,{children:[t.jsxs("title",{children:[a||r("layout:sections.education")," | Amin Abbasi"]}),t.jsx("meta",{name:"description",content:"Academic credentials and certifications in Software Engineering and Computer Science."})]}),t.jsx(j,{title:a||r("layout:sections.education")}),t.jsx(v,{children:t.jsx(y,{style:{maxWidth:"1400px",padding:"0 24px"},children:t.jsx(w,{children:s.education.map((i,l)=>t.jsx(b,{direction:"up",triggerOnce:!0,duration:600,delay:l*100,children:t.jsxs(C,{children:[t.jsx(k,{$accent:n.accentColor}),t.jsxs(T,{children:[t.jsxs(B,{children:[t.jsxs(z,{children:[t.jsx("div",{style:{flexShrink:0},children:t.jsx(m,{size:18,color:n.accentColor,style:{opacity:.8}})}),t.jsx(A,{children:i.cardTitle})]}),t.jsx(D,{children:i.title})]}),t.jsxs(S,{children:[t.jsx(h,{size:14,color:n.accentColor,style:{opacity:.7}}),t.jsx("span",{children:i.cardSubtitle})]}),i.bulletPoints&&t.jsx(E,{children:i.bulletPoints.map((d,p)=>t.jsx("li",{children:t.jsx(c,{components:{p:"span"},children:d})},p))}),!i.bulletPoints&&i.cardDetailedText&&t.jsx("div",{style:{textAlign:"start",fontSize:"0.92rem",color:n.color+"BB",lineHeight:1.7},children:t.jsx(c,{children:Array.isArray(i.cardDetailedText)?i.cardDetailedText.join(`

`):i.cardDetailedText})})]})]})},`${i.cardTitle}-${l}`))})})})]}):t.jsx($,{})}export{X as default};
