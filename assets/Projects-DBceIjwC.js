import{j as t}from"./vendor-motion-CLxAPPWH.js";import{f as d,h as p,a as u}from"./vendor-icons-oi0yKthW.js";import{F as b}from"./index-BD3xWMwD.js";import{H as j,a as C,G as y,C as v}from"./index-BASf_s-A.js";import{u as h,c as r,t as $,H as w}from"./app-UXPFcj1Y.js";import{M as k}from"./index-G7g8hZHv.js";import{F as z}from"./FallbackSpinner-C8FKn4kQ.js";import"./vendor-charts-DbC-OHEB.js";import"./vendor-firebase-BBPOHLSG.js";const f=r.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    background: ${e=>e.theme.cardBackground};
    border: 1px solid ${e=>e.theme.cardBorderColor};
    border-radius: 6px;
    overflow: hidden;
    transition: all 0.3s ease;
    position: relative;

    /* Blueprint corner accents */
    &::before,
    &::after {
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        z-index: 2;
        transition: all 0.3s ease;
    }
    &::before {
        top: -1px;
        left: -1px;
        border-top: 2px solid ${e=>e.theme.accentColor};
        border-inline-start: 2px solid ${e=>e.theme.accentColor};
        border-radius: 6px 0 0 0;
        opacity: 0.5;
    }
    &::after {
        bottom: -1px;
        right: -1px;
        border-bottom: 2px solid ${e=>e.theme.accentColor};
        border-inline-end: 2px solid ${e=>e.theme.accentColor};
        border-radius: 0 0 6px 0;
        opacity: 0.5;
    }

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 16px 40px rgba(0, 0, 0, 0.1);
        border-color: ${e=>e.theme.accentColor}40;
    }
    &:hover::before,
    &:hover::after {
        opacity: 1;
    }
`,B=r.div`
    padding: 16px 20px 14px;
    border-bottom: 1px solid ${e=>e.theme.cardBorderColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 10;
    background: ${e=>e.theme.cardBackground};
`,S=r.h3`
    font-family: var(--font-mono);
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: ${e=>e.theme.accentColor};
    opacity: 0.7;
    margin: 0;
`,M=r.div`
    display: flex;
    gap: 5px;
    span {
        display: block;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: ${e=>e.theme.accentColor};
        opacity: 0.2;
    }
`,F=r.div`
    width: 100%;
    height: 180px;
    overflow: hidden;
    position: relative;
    border-bottom: 1px solid ${e=>e.theme.cardBorderColor};

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
        filter: saturate(0.8);
    }
    ${f}:hover & img {
        transform: scale(1.04);
        filter: saturate(1);
    }
`,H=r.div`
    padding: 20px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    text-align: start;
`,L=r.div`
    font-size: 0.86rem;
    line-height: 1.6;
    color: ${e=>e.theme.color}BB;
    margin-bottom: 14px;
    flex-grow: 1;

    p {
        margin: 0;
    }
    ul {
        padding-inline-start: 16px;
        margin: 4px 0;
        list-style-type: none;
    }
    li {
        position: relative;
        padding-inline-start: 14px;
        margin-bottom: 4px;
        &::before {
            content: '▸';
            position: absolute;
            inset-inline-start: 0;
            font-size: 0.7em;
            color: ${e=>e.theme.accentColor};
            top: 2px;
        }
    }
`,E=r.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 18px;
`,G=r.span`
    font-family: var(--font-mono);
    font-size: 0.62rem;
    font-weight: 500;
    padding: 2px 8px;
    border-radius: 3px;
    background: ${e=>e.theme.accentColor}10;
    color: ${e=>e.theme.accentColor};
    border: 1px solid ${e=>e.theme.accentColor}20;
    margin-bottom: 4px;
`,P=r.div`
    display: flex;
    gap: 10px;
    margin-top: auto;
`,x=r.a`
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 7px 14px;
    border-radius: 4px;
    font-family: var(--font-mono);
    font-size: 0.78rem;
    font-weight: 600;
    text-decoration: none !important;
    transition: all 0.2s ease;
    letter-spacing: 0.04em;
    background: ${e=>e.theme.accentColor};
    color: #fff !important;

    &:hover {
        filter: brightness(1.1);
        transform: translateY(-1px);
    }
`,m=r.a`
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 7px 14px;
    border-radius: 4px;
    font-family: var(--font-mono);
    font-size: 0.78rem;
    font-weight: 600;
    text-decoration: none !important;
    transition: all 0.2s ease;
    letter-spacing: 0.04em;
    background: transparent;
    color: ${e=>e.theme.color} !important;
    border: 1px solid ${e=>e.theme.cardBorderColor};

    &:hover {
        border-color: ${e=>e.theme.accentColor}50;
        background: ${e=>e.theme.accentColor}08;
    }
`;function A(e){var s;const{t:i}=h(),{project:o}=e,a=n=>{$(`CLICK: ${o.title} (${n})`)};return t.jsxs(f,{children:[t.jsxs(B,{children:[t.jsx(S,{children:o.title}),t.jsxs(M,{children:[t.jsx("span",{})," ",t.jsx("span",{})," ",t.jsx("span",{})]})]}),o.image&&t.jsx(F,{children:t.jsx("img",{src:o.image,alt:o.title})}),t.jsxs(H,{children:[t.jsx(L,{children:t.jsx(k,{children:o.bodyText||o.description})}),o.tags&&o.tags.length>0&&t.jsx(E,{children:o.tags.map(n=>t.jsx(G,{children:n},n))}),t.jsxs(P,{children:[(s=o.links)==null?void 0:s.map(n=>n.text.toLowerCase()==="github"?t.jsxs(x,{href:n.href,target:"_blank",onClick:()=>a("GitHub"),children:[t.jsx(d,{size:14}),i("layout:projects.github",{defaultValue:"GitHub"})]},n.href):t.jsxs(m,{href:n.href,target:"_blank",onClick:()=>a(n.text),children:[t.jsx(p,{size:12}),n.text]},n.href)),o.source&&t.jsxs(x,{href:o.source,target:"_blank",onClick:()=>a("Source"),children:[t.jsx(d,{size:14}),i("layout:projects.source",{defaultValue:"Source"})]}),o.demo&&t.jsxs(m,{href:o.demo,target:"_blank",onClick:()=>a("Demo"),children:[t.jsx(p,{size:12}),i("layout:projects.demo",{defaultValue:"Demo"})]})]})]})]})}const D=r.div`
    position: relative;
    padding: 40px 0;
`,T=r.div`
    width: 100%;
`,V=r.div`
    display: flex;
    justify-content: center;
    margin-top: 48px;
`,W=r.button`
    padding: 12px 32px;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 12px;
    transition: all 0.2s ease;
    background: ${e=>e.theme.accentColor};
    border: none;
    color: #fff;
    cursor: pointer;

    &:hover {
        background: ${e=>e.theme.accentColor}EE;
        transform: translateY(-2px);
        box-shadow: 0 10px 20px ${e=>e.theme.accentColor}40;
    }
`;function Q(e){const{t:i}=h(),{header:o}=e,a={projects:i("resProjects:projects",{returnObjects:!0})},[s,n]=u.useState(!1),g=s&&a.projects?a.projects.length:6;return a.projects?t.jsxs(t.Fragment,{children:[t.jsxs(w,{children:[t.jsxs("title",{children:[o||i("layout:sections.projects")," | Amin Abbasi"]}),t.jsx("meta",{name:"description",content:"Showcasing high-scale distributed systems and backend architecture projects."})]}),t.jsx(j,{title:o||i("layout:sections.projects")}),t.jsx(D,{children:t.jsx(C,{style:{padding:"0 20px"},children:t.jsxs(T,{children:[t.jsx(y,{noGutters:!1,children:a.projects.slice(0,g).map((c,l)=>t.jsx(v,{lg:4,md:6,xs:12,children:t.jsx(b,{direction:"up",triggerOnce:!0,duration:600,delay:l*100,style:{height:"100%"},children:t.jsx(A,{project:c})})},c.id||l))}),!s&&a.projects.length>6&&t.jsx(V,{children:t.jsx(W,{onClick:()=>n(!0),children:i("layout:projects.loadMore",{defaultValue:"Load More Projects"})})})]})})})]}):t.jsx(z,{})}export{Q as default};
