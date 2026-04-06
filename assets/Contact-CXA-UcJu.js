import{j as e}from"./vendor-motion-CLxAPPWH.js";import{a as g,i as F,L as M,j as q,e as H,k as O,l as D}from"./vendor-icons-oi0yKthW.js";import{c as r,p as T,u as E,X as G,H as R,a as V}from"./app-D0qGozB9.js";import{F as X}from"./index-D1yWaWIO.js";import{H as _,a as J}from"./index-BZE7Q92L.js";import"./vendor-charts-DbC-OHEB.js";import"./vendor-firebase-BBPOHLSG.js";const L=r.div`
    padding: 40px 0 80px;
`,N=r.div`
    display: grid;
    grid-template-columns: 1fr 1.4fr;
    gap: 48px;
    align-items: start;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`,W=r.div`
    padding: 32px;
    background: ${t=>t.theme.cardBackground};
    border: 1px solid ${t=>t.theme.cardBorderColor};
    border-radius: 6px;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: -1px;
        inset-inline-start: -1px;
        width: 14px;
        height: 14px;
        border-top: 2px solid ${t=>t.theme.accentColor};
        border-inline-start: 2px solid ${t=>t.theme.accentColor};
        border-radius: 6px 0 0 0;
    }
`,B=r.p`
    font-family: var(--font-mono);
    font-size: 0.68rem;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: ${t=>t.theme.accentColor};
    margin-bottom: 1.5rem;
    opacity: 0.8;
`,I=r.h3`
    font-family: var(--font-mono);
    font-size: 1.5rem;
    font-weight: 700;
    color: ${t=>t.theme.color};
    margin: 0 0 0.8rem;
    letter-spacing: -0.02em;
`,Y=r.p`
    font-size: 0.9rem;
    line-height: 1.6;
    color: ${t=>t.theme.color}BB;
    margin-bottom: 0.5rem;
    text-align: justify;
`,c=r.a`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 7px 0;
    border-bottom: 1px solid ${t=>t.theme.cardBorderColor};
    text-decoration: none;
    transition: all 0.2s ease;
    cursor: pointer;
    color: inherit;

    &:last-child { border-bottom: none; }
    &:hover { opacity: 0.8; }
    &:hover svg { transform: scale(1.1); }
`,l=r.span`
    width: 36px;
    height: 36px;
    border-radius: 6px;
    background: ${t=>t.theme.accentColor}15;
    border: 1px solid ${t=>t.theme.accentColor}30;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: ${t=>t.theme.accentColor};

    svg { transition: transform 0.2s ease; }
`,d=r.div`
    font-family: var(--font-mono);
    font-size: 0.78rem;

    strong {
        display: block;
        color: ${t=>t.theme.color};
        font-weight: 600;
        margin-bottom: 2px;
        font-size: 0.72rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
    }
    span {
        color: ${t=>t.theme.color}BB;
    }
`,K=r.div`
    margin-top: 16px;
    padding: 12px 16px;
    background: rgba(0, 230, 118, 0.07);
    border: 1px solid rgba(0, 230, 118, 0.25);
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 6px;
`,Q=T`
    0% { box-shadow: 0 0 0 0 rgba(0, 230, 118, 0.7); }
    70% { box-shadow: 0 0 0 8px rgba(0, 230, 118, 0); }
    100% { box-shadow: 0 0 0 0 rgba(0, 230, 118, 0); }
`,U=r.span`
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #00e676;
    flex-shrink: 0;
    box-shadow: 0 0 0 0 rgba(0, 230, 118, 0.7);
    animation: ${Q} 2s infinite;
`,Z=r.span`
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: #00e676;
    font-weight: 600;
`,ee=r.div`
    padding: 32px;
    background: ${t=>t.theme.cardBackground};
    border: 1px solid ${t=>t.theme.cardBorderColor};
    border-radius: 6px;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        bottom: -1px;
        inset-inline-end: -1px;
        width: 14px;
        height: 14px;
        border-bottom: 2px solid ${t=>t.theme.accentColor};
        border-inline-end: 2px solid ${t=>t.theme.accentColor};
        border-radius: 0 0 6px 0;
    }
`,x=r.label`
    display: block;
    font-family: var(--font-mono);
    font-size: 0.68rem;
    font-weight: 600;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: ${t=>t.theme.accentColor};
    margin-bottom: 8px;
    opacity: 0.9;
    text-align: start;
`,P=t=>`
    width: 100%;
    background: ${t.background};
    border: 1px solid ${t.cardBorderColor};
    border-radius: 4px;
    padding: 12px 14px;
    font-family: var(--font-main);
    font-size: 0.9rem;
    color: ${t.color};
    outline: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
    box-sizing: border-box;

    &:focus {
        border-color: ${t.accentColor}60;
        box-shadow: 0 0 0 3px ${t.accentColor}12;
    }

    &::placeholder {
        color: ${t.color}44;
    }
`,b=r.input`
    ${t=>P(t.$theme)}
`,te=r.textarea`
    ${t=>P(t.$theme)}
    resize: vertical;
    min-height: 130px;
`,h=r.div`
    margin-bottom: 20px;
`,oe=r.button`
    width: 100%;
    padding: 13px 24px;
    background: ${t=>t.$disabled?t.$accent+"66":t.$accent};
    color: #fff;
    border: none;
    border-radius: 4px;
    font-family: var(--font-mono);
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    cursor: ${t=>t.$disabled?"not-allowed":"pointer"};
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 8px;

    &:hover:not(:disabled) {
        filter: brightness(1.1);
        transform: translateY(-1px);
    }
`,re=r.div`
    padding: 16px 20px;
    background: rgba(0, 230, 118, 0.08);
    border: 1px solid rgba(0, 230, 118, 0.3);
    border-radius: 6px;
    font-family: var(--font-mono);
    font-size: 0.82rem;
    color: #00e676;
    text-align: center;
    margin-top: 16px;
`,ne=r.div`
    padding: 16px 20px;
    background: rgba(255, 80, 80, 0.08);
    border: 1px solid rgba(255, 80, 80, 0.3);
    border-radius: 6px;
    font-family: var(--font-mono);
    font-size: 0.82rem;
    color: #ff5050;
    text-align: center;
    margin-top: 16px;
`;T`
    to { transform: rotate(360deg); }
`;function xe(t){var w,k,z,S;const{t:o}=E(),i=g.useContext(G),{header:j}=t,a=o("resSocial:social",{returnObjects:!0}),y=((k=(w=a==null?void 0:a.find(n=>n.network==="email"))==null?void 0:w.href)==null?void 0:k.replace("mailto:",""))||"",$=((z=a==null?void 0:a.find(n=>n.network==="linkedin"))==null?void 0:z.href)||"",C=((S=a==null?void 0:a.find(n=>n.network==="github"))==null?void 0:S.href)||"",[s,v]=g.useState({name:"",email:"",subject:"",message:""}),[u,m]=g.useState("idle"),p=n=>{v({...s,[n.target.name]:n.target.value})},A=async n=>{n.preventDefault(),m("sending");try{(await fetch(`https://formspree.io/f/${V.formspreeId}`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(s)})).ok?(m("success"),v({name:"",email:"",subject:"",message:""})):m("error")}catch{m("error")}},f=u==="sending";return e.jsxs(e.Fragment,{children:[e.jsxs(R,{children:[e.jsxs("title",{children:[j||o("layout:sections.contact",{defaultValue:"Contact"})," | Amin Abbasi"]}),e.jsx("meta",{name:"description",content:"Reach out to Amin Abbasi for Lead Backend and Architecture roles."})]}),e.jsx(_,{title:j||o("layout:sections.contact",{defaultValue:"Contact"})}),e.jsx(L,{children:e.jsx(J,{style:{maxWidth:"1200px",padding:"0 24px"},children:e.jsx(X,{direction:"up",triggerOnce:!0,duration:700,children:e.jsxs(N,{children:[e.jsxs(W,{children:[e.jsx(B,{children:o("layout:contact.init")}),e.jsx(I,{children:o("layout:contact.title")}),e.jsx(Y,{children:o("layout:contact.subtitle")}),e.jsxs(c,{href:`mailto:${y}`,children:[e.jsx(l,{children:e.jsx(F,{size:16})}),e.jsx(d,{children:e.jsx("span",{children:y})})]}),e.jsxs(c,{href:$,target:"_blank",rel:"noopener noreferrer",children:[e.jsx(l,{children:e.jsx(M,{size:16})}),e.jsx(d,{children:e.jsx("span",{children:$})})]}),e.jsxs(c,{href:C,target:"_blank",rel:"noopener noreferrer",children:[e.jsx(l,{children:e.jsx(q,{size:16})}),e.jsx(d,{children:e.jsx("span",{children:C})})]}),e.jsxs(c,{as:"div",children:[e.jsx(l,{children:e.jsx(H,{size:16})}),e.jsx(d,{children:e.jsx("span",{children:o("layout:contact.location")})})]}),e.jsxs(c,{as:"div",children:[e.jsx(l,{children:e.jsx(O,{size:16})}),e.jsx(d,{children:e.jsx("span",{children:o("layout:contact.timezone")})})]}),e.jsxs(K,{children:[e.jsx(U,{}),e.jsx(Z,{children:o("layout:contact.status")})]})]}),e.jsxs(ee,{children:[e.jsx(B,{children:o("layout:contact.sendInit")}),e.jsx(I,{style:{marginBottom:"1.5rem"},children:o("layout:contact.sendTitle")}),e.jsxs("form",{onSubmit:A,children:[e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"20px"},children:[e.jsxs(h,{children:[e.jsx(x,{htmlFor:"contact-name",children:o("layout:contact.form.name")}),e.jsx(b,{id:"contact-name",$theme:i,type:"text",name:"name",value:s.name,onChange:p,placeholder:o("layout:contact.form.namePlaceholder"),required:!0})]}),e.jsxs(h,{children:[e.jsx(x,{htmlFor:"contact-email",children:o("layout:contact.form.email")}),e.jsx(b,{id:"contact-email",$theme:i,type:"email",name:"email",value:s.email,onChange:p,placeholder:o("layout:contact.form.emailPlaceholder"),required:!0})]})]}),e.jsxs(h,{children:[e.jsx(x,{htmlFor:"contact-subject",children:o("layout:contact.form.subject")}),e.jsx(b,{id:"contact-subject",$theme:i,type:"text",name:"subject",value:s.subject,onChange:p,placeholder:o("layout:contact.form.subjectPlaceholder"),required:!0})]}),e.jsxs(h,{children:[e.jsx(x,{htmlFor:"contact-message",children:o("layout:contact.form.message")}),e.jsx(te,{id:"contact-message",$theme:i,name:"message",value:s.message,onChange:p,placeholder:o("layout:contact.form.messagePlaceholder"),required:!0})]}),e.jsx(oe,{type:"submit",$accent:i.accentColor,$disabled:f,disabled:f,children:f?e.jsxs(e.Fragment,{children:[e.jsx(D,{size:14,style:{animation:"${S.spin} 1.2s linear infinite"}}),o("layout:contact.form.sending")]}):e.jsxs(e.Fragment,{children:[e.jsx(F,{size:14}),o("layout:contact.form.submit")]})}),u==="success"&&e.jsx(re,{children:o("layout:contact.success")}),u==="error"&&e.jsx(ne,{children:o("layout:contact.error")})]})]})]})})})})]})}export{xe as default};
