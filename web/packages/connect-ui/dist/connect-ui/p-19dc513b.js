import{C as e,p as o,w as n,a as t,d as s,N as r}from"./p-be80f801.js";const a="undefined"!=typeof Deno,c=!(a||"undefined"==typeof global||"function"!=typeof require||!global.process||"string"!=typeof __filename||global.origin&&"string"==typeof global.origin),p=(a&&Deno,c?process:a&&Deno,c?process:a&&Deno,()=>e&&e.supports&&e.supports("color","var(--c)")?t():__sc_import_connect_ui("./p-24fc4ba9.js").then(()=>(o.o=n.__cssshim)?(!1).i():0)),i=()=>{o.o=n.__cssshim;const e=Array.from(s.querySelectorAll("script")).find(e=>RegExp(`/${r}(\\.esm)?\\.js($|\\?|#)`).test(e.src)||e.getAttribute("data-stencil-namespace")===r),a=e["data-opts"]||{};return"onbeforeload"in e&&!history.scrollRestoration?{then(){}}:(a.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,n.location.href)).href,l(a.resourcesUrl,e),n.customElements?t(a):__sc_import_connect_ui("./p-46109683.js").then(()=>a))},l=(e,o)=>{const t="__sc_import_"+r.replace(/\s|-/g,"_");try{n[t]=Function("w","return import(w);//"+Math.random())}catch(a){const r=new Map;n[t]=a=>{const c=new URL(a,e).href;let p=r.get(c);if(!p){const e=s.createElement("script");e.type="module",e.crossOrigin=o.crossOrigin,e.src=URL.createObjectURL(new Blob([`import * as m from '${c}'; window.${t}.m = m;`],{type:"application/javascript"})),p=new Promise(o=>{e.onload=()=>{o(n[t].m),e.remove()}}),r.set(c,p),s.head.appendChild(e)}return p}}};export{p as a,i as p}