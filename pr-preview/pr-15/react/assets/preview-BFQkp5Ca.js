const n={"Finn light":"finn-no","Finn dark":"finn-no-dark","Tori light":"tori-fi","Tori dark":"tori-fi-dark","DBA light":"dba-dk","DBA dark":"dba-dk-dark","Blocket light":"blocket-se","Blocket dark":"blocket-se-dark"},s=t=>{[document,...Array.from(document.querySelectorAll("*")).filter(e=>!!e.shadowRoot).map(e=>e.shadowRoot)].forEach(e=>{e.querySelectorAll('link[rel="stylesheet"][href*="/@warp-ds/css/"]').forEach(a=>{a.setAttribute("href",`https://assets.finn.no/pkg/@warp-ds/css/v2/tokens/${t}.css`)})})},c={brand:{name:"Brand Theme",description:"Select a design system brand",defaultValue:"finn-no",toolbar:{icon:"globe",items:Object.entries(n).map(([t,o])=>({value:o,title:t,right:o.includes("dark")?"🌙":"☀️"}))}}},d=[(t,o)=>{const e=o.globals.brand;return localStorage.setItem("warpTheme",e),s(e),t()}],r=typeof window<"u"&&localStorage.getItem("warpTheme");r&&s(r);const i={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}}}};export{d as decorators,i as default,c as globalTypes,s as rewriteStylesheets,n as themes};
