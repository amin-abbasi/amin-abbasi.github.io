import{j as e}from"./vendor-motion-CLxAPPWH.js";import{c as o,L as r,u as n}from"./app-UXPFcj1Y.js";import"./vendor-icons-oi0yKthW.js";import"./vendor-charts-DbC-OHEB.js";import"./vendor-firebase-BBPOHLSG.js";const a=o.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 70vh;
    text-align: center;
    padding: 2rem;
`,i=o.h1`
    font-size: clamp(5rem, 15vw, 10rem);
    font-weight: 700;
    font-family: var(--font-mono);
    color: ${t=>t.theme.accentColor};
    margin: 0;
    line-height: 1;
    position: relative;
    text-shadow: 0 0 20px ${t=>t.theme.accentColor}33;

    &::after {
        content: '404';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.5;
        z-index: -1;
        filter: blur(10px);
    }
`,l=o.div`
    max-width: 600px;
    margin-top: 1rem;
    padding: 2rem;
    background: ${t=>t.theme.cardBackground};
    border: 1px solid ${t=>t.theme.cardBorderColor};
    border-radius: var(--border-radius);
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: -1px;
        left: 20px;
        right: 20px;
        height: 1px;
        background: linear-gradient(90deg, transparent, ${t=>t.theme.accentColor}, transparent);
    }
`,c=o.h2`
    font-size: 1.5rem;
    font-family: var(--font-mono);
    color: ${t=>t.theme.accentColor};
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
`,s=o.p`
    color: ${t=>t.theme.color};
    opacity: 0.8;
    margin-bottom: 2rem;
    line-height: 1.6;
`,d=o(r)`
    display: inline-block;
    padding: 0.8rem 2rem;
    background: transparent;
    border: 1px solid ${t=>t.theme.accentColor};
    color: ${t=>t.theme.accentColor};
    font-family: var(--font-mono);
    text-decoration: none;
    transition: all var(--transition-fast);
    letter-spacing: 0.05em;

    &:hover {
        background: ${t=>t.theme.accentColor};
        color: ${t=>t.theme.background};
        box-shadow: 0 0 20px ${t=>t.theme.accentColor}44;
        transform: translateY(-2px);
    }
`;function x(){const{t}=n();return e.jsxs(a,{children:[e.jsx(i,{children:"404"}),e.jsxs(l,{className:"blueprint-border",children:[e.jsx(c,{children:t("layout:notFound.title",{defaultValue:"404 — ROUTE_NOT_FOUND"})}),e.jsx(s,{children:t("layout:notFound.subtitle",{defaultValue:"The requested component or path does not exist in the current build."})}),e.jsx(d,{to:"/",children:t("layout:notFound.backHome",{defaultValue:"SYSTEM.REBOOT (Go Home)"})})]})]})}export{x as default};
