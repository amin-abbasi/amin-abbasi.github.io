import{j as d}from"./vendor-motion-CLxAPPWH.js";import{a as f}from"./vendor-icons-oi0yKthW.js";import{X as v,c as o,s as a}from"./app-D0qGozB9.js";function b(e){const{title:r}=e,t=f.useContext(v);return d.jsxs("div",{style:{textAlign:"center",marginBottom:"1rem",padding:"90px 16px 0"},children:[d.jsx("h2",{style:{fontFamily:"var(--font-mono)",fontSize:"clamp(1.8rem, 4vw, 2.6rem)",fontWeight:700,letterSpacing:"-0.03em",color:t.color,margin:"0 0 1rem"},children:r}),d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:12},children:[d.jsx("div",{style:{width:40,height:1,background:`linear-gradient(to right, transparent, ${t.accentColor})`}}),d.jsx("div",{style:{width:8,height:8,border:`1.5px solid ${t.accentColor}`,transform:"rotate(45deg)"}}),d.jsx("div",{style:{width:40,height:1,background:`linear-gradient(to left, transparent, ${t.accentColor})`}})]})]})}const S=o.section`
  padding: 4rem 0;
  background: transparent;
  color: ${e=>e.theme.color};
  position: relative;
  overflow: hidden;
`,u=o.div`
  width: 100%;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  margin-right: auto;
  margin-left: auto;
  max-width: 1320px;

  @media (max-width: 1400px) { max-width: 1140px; }
  @media (max-width: 1200px) { max-width: 960px; }
  @media (max-width: 992px) { max-width: 720px; }
  @media (max-width: 768px) { max-width: 540px; }
  @media (max-width: 576px) { max-width: 100%; }
`,y=o.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: ${e=>e.$noGutters?"0":"-1.5rem"};
  margin-left: ${e=>e.$noGutters?"0":"-1.5rem"};
`,j=o.div`
  position: relative;
  width: 100%;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  margin-bottom: 2.5rem;
  flex: 0 0 100%;
  max-width: 100%;
  order: ${e=>e.$order||0};

  ${e=>e.$sm&&a`
    @media (min-width: 576px) {
      flex: 0 0 ${e.$sm/12*100}%;
      max-width: ${e.$sm/12*100}%;
      order: ${e.$orderSm!==void 0?e.$orderSm:e.$order||0};
    }
  `}

  ${e=>e.$md&&a`
    @media (min-width: 768px) {
      flex: 0 0 ${e.$md/12*100}%;
      max-width: ${e.$md/12*100}%;
      order: ${e.$orderMd!==void 0?e.$orderMd:e.$orderSm!==void 0?e.$orderSm:e.$order||0};
    }
  `}

  ${e=>e.$lg&&a`
    @media (min-width: 992px) {
      flex: 0 0 ${e.$lg/12*100}%;
      max-width: ${e.$lg/12*100}%;
      order: ${e.$orderLg!==void 0?e.$orderLg:e.$orderMd!==void 0?e.$orderMd:e.$orderSm!==void 0?e.$orderSm:e.$order||0};
    }
  `}

  ${e=>e.$xl&&a`
    @media (min-width: 1200px) {
      flex: 0 0 ${e.$xl/12*100}%;
      max-width: ${e.$xl/12*100}%;
      order: ${e.$orderXl!==void 0?e.$orderXl:e.$orderLg!==void 0?e.$orderLg:e.$orderMd!==void 0?e.$orderMd:e.$orderSm!==void 0?e.$orderSm:e.$order||0};
    }
  `}
`;o.div`
  margin-bottom: 3rem;
  text-align: start;

  h2 {
    font-family: var(--font-mono);
    font-size: 1.75rem;
    font-weight: 700;
    color: ${e=>e.theme.accentColor};
    letter-spacing: -0.02em;
    margin: 0;
  }
`;const L=({children:e,className:r,id:t})=>d.jsx(S,{className:r,id:t,children:e}),X=({children:e,className:r,id:t,style:i})=>d.jsx(u,{className:r,id:t,style:i,children:e}),k=({children:e,className:r,id:t,noGutters:i})=>d.jsx(y,{className:r,id:t,$noGutters:i,children:e}),z=({children:e,className:r,id:t,style:i,xs:m,sm:n,md:$,lg:l,xl:x,order:h,orderSm:g,orderMd:c,orderLg:s,orderXl:w})=>d.jsx(j,{className:r,id:t,style:i,$xs:m,$sm:n,$md:$,$lg:l,$xl:x,$order:h,$orderSm:g,$orderMd:c,$orderLg:s,$orderXl:w,children:e});export{z as C,k as G,b as H,L as S,X as a};
