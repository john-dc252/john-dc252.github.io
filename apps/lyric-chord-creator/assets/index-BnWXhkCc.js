import{D as e,H as t,M as n,O as r,P as i,S as a,T as o,_ as s,b as c,g as l,i as u,j as d,k as f,o as p,p as m,s as h,x as g}from"./web-Cz_YMZoq.js";import{n as _}from"./virtual_solid-ssr-entry-client-DmOWEhnH.js";import{a as v,c as y,i as b,n as x,o as S,r as C,s as w,t as T}from"./paperSize-DtEeqBwA.js";var E=a(`<div class="fixed inset-0 z-40">`),D=a(`<div class="pt-2.5 border-t border-slate-200 dark:border-slate-700 flex flex-col gap-2.5"><div class="flex items-center justify-between"><span class="text-[11px] font-semibold text-slate-600 dark:text-slate-300">Measurement Unit:</span><div class="inline-flex rounded-md bg-slate-100 dark:bg-slate-900 p-0.5 border border-slate-200 dark:border-slate-700"><button type=button>Inches (in)</button><button type=button>Centimeters (cm)</button></div></div><div class="grid grid-cols-2 gap-2"><div><label class="block text-[10px] font-medium text-slate-500 dark:text-slate-400 mb-0.5">Width (<!>)</label><input type=number step=0.1 min=1 max=100 class="w-full px-2 py-1 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded text-xs text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-sky-500"></div><div><label class="block text-[10px] font-medium text-slate-500 dark:text-slate-400 mb-0.5">Height (<!>)</label><input type=number step=0.1 min=1 max=100 class="w-full px-2 py-1 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded text-xs text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-sky-500">`),O=a(`<div class="absolute left-0 mt-1.5 z-50 w-72 rounded-lg bg-white dark:bg-slate-800 shadow-2xl ring-1 ring-black/15 dark:ring-white/15 p-3 flex flex-col gap-3"><div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-700/60 pb-1.5"><span class="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Paper Size Presets</span><button type=button class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xs px-1">✕</button></div><div class="flex flex-col gap-1">`),k=a(`<div class="relative inline-block text-left text-xs"><button type=button class="inline-flex items-center gap-1.5 rounded-md bg-white dark:bg-slate-800 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 shadow-sm transition-colors cursor-pointer"title="Select Paper Size"><span>📄</span><span></span><svg class="h-3 w-3 text-slate-400 ml-0.5"xmlns=http://www.w3.org/2000/svg viewBox="0 0 20 20"fill=currentColor><path fill-rule=evenodd d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"clip-rule=evenodd>`),A=a(`<button type=button><div class="flex items-center gap-2"><span></span><span>`),j=a(`<span class="text-[10px] text-slate-400">`);function M(e){let[t,n]=i(!1,{name:`paper_menu_open`}),a=t=>{if(t===`custom`)e.onChange({preset:`custom`,width:e.value.width,height:e.value.height,unit:e.value.unit});else{let r=x[t];e.onChange({preset:t,width:r.width,height:r.height,unit:r.unit}),n(!1)}},s=t=>{let n=e.value.width,r=e.value.height;t===`cm`&&e.value.unit===`in`?(n=Number((e.value.width*2.54).toFixed(2)),r=Number((e.value.height*2.54).toFixed(2))):t===`in`&&e.value.unit===`cm`&&(n=Number((e.value.width/2.54).toFixed(2)),r=Number((e.value.height/2.54).toFixed(2))),e.onChange({...e.value,preset:`custom`,unit:t,width:n,height:r})},c=t=>{isNaN(t)||t<=0||e.onChange({...e.value,preset:`custom`,width:t})},d=t=>{isNaN(t)||t<=0||e.onChange({...e.value,preset:`custom`,height:t})},p=()=>e.value.preset===`custom`?`Custom (${e.value.width} × ${e.value.height} ${e.value.unit})`:x[e.value.preset]?.label||`Paper Size`;var g=k(),_=g.firstChild,v=_.firstChild.nextSibling;return _.$$click=()=>n(!t()),m(v,p),m(g,f(r,{get when(){return t()},get children(){return[(()=>{var e=E();return e.$$click=()=>n(!1),e})(),(()=>{var t=O(),i=t.firstChild,p=i.firstChild.nextSibling,g=i.nextSibling;return p.$$click=()=>n(!1),m(g,f(o,{each:[`letter`,`legal`,`a4`,`custom`],children:t=>{let n=x[t]??{label:`Custom`};var r=A(),i=r.firstChild.firstChild,o=i.nextSibling;return r.$$click=()=>a(t),m(o,()=>n.label),m(r,(()=>{var e=l(()=>!!n.description);return()=>e()?(()=>{var e=j();return m(e,()=>n.description),e})():n.description})(),null),h(()=>({e:[`w-full flex items-center justify-between px-2.5 py-1.5 rounded-md text-left text-xs transition-colors cursor-pointer`,{"bg-sky-50 dark:bg-sky-950/70 text-sky-700 dark:text-sky-300 font-semibold":e.value.preset===t,"text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/70":e.value.preset!==t}],t:[`w-2 h-2 rounded-full shrink-0`,{"bg-sky-600 dark:bg-sky-400":e.value.preset===t,"bg-transparent border border-slate-400":e.value.preset!==t}]}),({e,t},n)=>{u(r,e,n?.e),u(i,t,n?.t)}),r}})),m(t,f(r,{get when(){return e.value.preset===`custom`},get children(){var t=D(),n=t.firstChild,r=n.firstChild.nextSibling.firstChild,i=r.nextSibling,a=n.nextSibling.firstChild,o=a.firstChild,l=o.firstChild.nextSibling;l.nextSibling;var f=o.nextSibling,p=a.nextSibling.firstChild,g=p.firstChild.nextSibling;g.nextSibling;var _=p.nextSibling;return r.$$click=()=>s(`in`),i.$$click=()=>s(`cm`),m(o,()=>e.value.unit,l),f.$$input=e=>c(parseFloat(e.currentTarget.value)),m(p,()=>e.value.unit,g),_.$$input=e=>d(parseFloat(e.currentTarget.value)),h(()=>({e:[`px-2 py-0.5 rounded text-[10px] font-semibold transition-colors cursor-pointer`,e.value.unit===`in`?`bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-300 shadow-sm`:`text-slate-500 hover:text-slate-900 dark:hover:text-white`],t:[`px-2 py-0.5 rounded text-[10px] font-semibold transition-colors cursor-pointer`,e.value.unit===`cm`?`bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-300 shadow-sm`:`text-slate-500 hover:text-slate-900 dark:hover:text-white`],a:e.value.width,o:e.value.height}),({e,t,a:n,o:a},o)=>{u(r,e,o?.e),u(i,t,o?.t),f.value=n??``,_.value=a??``}),t}}),null),t})()]}}),null),g}p([`click`,`input`]);var N=a(`<div class="relative flex flex-col h-full w-full bg-slate-200/90 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg overflow-hidden shadow-sm"><div class="relative z-30 flex flex-wrap items-center justify-between gap-2 px-3 py-2 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300"><div class="flex items-center gap-2"><span class="font-bold tracking-wide uppercase text-[11px] text-slate-500 dark:text-slate-400">Preview</span><span class="text-slate-300 dark:text-slate-600">|</span></div><div class="flex items-center gap-2"><div class="flex items-center bg-white dark:bg-slate-700 rounded-md border border-slate-300 dark:border-slate-600 px-1.5 py-0.5 shadow-sm"><span class="text-[10px] text-slate-500 dark:text-slate-400 mr-1.5">Zoom:</span><button type=button>Fit</button><button type=button>75%</button><button type=button>100%</button></div><button type=button class="inline-flex items-center gap-1 rounded-md bg-white dark:bg-slate-700 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-600 shadow-sm transition-colors"title="Print Chord Sheet"><span>🖨️</span><span>Print</span></button></div></div><div class="relative flex-1 overflow-auto p-2 sm:p-4 md:p-6 bg-[#2d3238]"><div class="shrink-0 transition-[width,height] duration-150"><div class="transition-transform duration-150"style="transform-origin:0 0"><div id=chord-guide-paper-container class="flex flex-col gap-8 text-left select-text"></div></div></div></div><style>`);function P(e){let r,a,[o,c]=i(`fit`,{name:`preview_zoom`}),[l,d]=i(1,{name:`scale_factor`}),[p,_]=i(816,{name:`sheet_width`}),[v,y]=i(1056,{name:`sheet_height`}),b=e=>{if(!r||!a)return;let t=a.querySelector(`.page`)?.offsetWidth||a.offsetWidth||816,n=a.offsetHeight||1056;if(t>0&&_(t),n>0&&y(n),typeof e==`number`){d(e);return}if(e===`fit`){let e=window.innerWidth<640?16:32,n=r.clientWidth-e;if(t>0&&n>0){let e=Math.min(1,Math.max(.15,n/t));d(Number(e.toFixed(3)))}}};t(()=>{b(o());let e=new ResizeObserver(()=>{b(o())});r&&e.observe(r),a&&e.observe(a);let t=()=>{b(o())};return window.addEventListener(`resize`,t),()=>{e.disconnect(),window.removeEventListener(`resize`,t)}});let x=n(()=>C(e.paperConfig.width,e.paperConfig.unit),{name:`paper_width_css`}),T=n(()=>C(e.paperConfig.height,e.paperConfig.unit),{name:`paper_height_css`}),E=()=>{if(!a){window.print();return}let t=document.createElement(`iframe`);t.style.position=`fixed`,t.style.right=`0`,t.style.bottom=`0`,t.style.width=`0`,t.style.height=`0`,t.style.border=`0`,document.body.appendChild(t);let n=t.contentDocument||t.contentWindow?.document;if(!n){window.print();return}n.title=w(e.template);let r=n.createElement(`style`);r.textContent=`
      @page {
        size: ${x()} ${T()};
        margin: 0.5in;
      }
      * {
        box-sizing: border-box;
      }
      html, body {
        margin: 0;
        padding: 0;
        background: #fff;
        color: #000;
        font-family: "monospace", monospace, "Courier New", Courier;
        font-size: 10pt;
      }
      .page {
        width: 100%;
        min-height: 100%;
        background: #fff;
        color: #000;
        column-count: 2;
        column-fill: auto;
        column-gap: 0.2in;
        white-space: pre-wrap;
        page-break-after: always;
        break-after: page;
      }
      .column-break {
        break-after: column;
      }
      .title {
        font-weight: bold;
        text-decoration: underline;
      }
      .artist {
        font-weight: bold;
      }
      .section-label {
        line-height: 1.5rem;
        break-after: avoid;
        font-weight: bold;
      }
      .line {
        position: relative;
        line-height: 3rem;
        break-inside: avoid-page;
      }
      .chord {
        font-weight: bold;
        position: absolute;
        line-height: 1em;
        color: #000;
      }
      .chord.sequence {
        position: relative;
        transform: none;
        font-weight: bold;
      }
    `,n.head.appendChild(r);let i=a.cloneNode(!0);n.body.appendChild(i),t.contentWindow?.focus(),setTimeout(()=>{t.contentWindow?.print(),setTimeout(()=>{document.body.contains(t)&&document.body.removeChild(t)},1e3)},250)};var D=N(),O=D.firstChild,k=O.firstChild;k.firstChild.nextSibling;var A=k.nextSibling.firstChild,j=A.firstChild.nextSibling,P=j.nextSibling,F=P.nextSibling,I=A.nextSibling,L=O.nextSibling,R=L.firstChild,z=R.firstChild,B=z.firstChild,V=L.nextSibling;return m(k,f(M,{get value(){return e.paperConfig},onChange:t=>{e.onPaperConfigChange(t),setTimeout(()=>b(o()),50)}}),null),j.$$click=()=>{c(`fit`),b(`fit`)},P.$$click=()=>{c(.75),b(.75)},F.$$click=()=>{c(1),b(1)},I.$$click=E,s(()=>e=>r=e,L),s(()=>e=>a=e,B),m(B,f(S,{get template(){return e.template}})),m(V,()=>`
        #chord-guide-paper-container .page {
          width: ${x()};
          height: ${T()};
          padding: 0.5in;
          box-sizing: border-box;
          font-family: "monospace", monospace, "Courier New", Courier;
          font-size: 10pt;
          background: #fff;
          color: #000;
          column-count: 2;
          column-fill: auto;
          column-gap: 0.2in;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.3);
          border-radius: 2px;
          white-space: pre-wrap;
          break-after: page;
        }

        #chord-guide-paper-container .column-break {
          break-after: column;
        }

        #chord-guide-paper-container .title {
          font-weight: bold;
          text-decoration: underline;
        }

        #chord-guide-paper-container .artist {
          font-weight: bold;
        }

        #chord-guide-paper-container .section-label {
          line-height: 1.5rem;
          break-after: avoid;
          font-weight: bold;
        }

        #chord-guide-paper-container .line {
          position: relative;
          line-height: 3rem;
          break-inside: avoid-page;
        }

        #chord-guide-paper-container .chord {
          font-weight: bold;
          position: absolute;
          line-height: 1em;
          color: #000;
        }

        #chord-guide-paper-container .chord.sequence {
          position: relative;
          transform: none;
          font-weight: bold;
        }

        @media print {
          @page {
            size: ${x()} ${T()};
            margin: 0.5in;
          }
          body * {
            visibility: hidden !important;
          }
          #chord-guide-paper-container,
          #chord-guide-paper-container * {
            visibility: visible !important;
          }
          #chord-guide-paper-container {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            transform: none !important;
          }
          #chord-guide-paper-container .page {
            box-shadow: none !important;
            border-radius: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            height: auto !important;
            min-height: 100% !important;
            page-break-after: always !important;
            break-after: page !important;
          }
        }
      `),h(()=>({e:[`px-1.5 py-0.5 rounded text-[11px] transition-colors`,o()===`fit`?`bg-sky-500 text-white font-bold`:`text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-600`],t:[`px-1.5 py-0.5 rounded text-[11px] transition-colors`,o()===.75?`bg-sky-500 text-white font-bold`:`text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-600`],a:[`px-1.5 py-0.5 rounded text-[11px] transition-colors`,o()===1?`bg-sky-500 text-white font-bold`:`text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-600`],o:`${p()*l()}px`,i:`${v()*l()}px`,n:`scale(${l()})`,s:`${p()}px`}),({e,t,a:n,o:r,i,n:a,s:o},s)=>{u(j,e,s?.e),u(P,t,s?.t),u(F,n,s?.a),r!==s?.o&&g(R,`width`,r),i!==s?.i&&g(R,`height`,i),a!==s?.n&&g(z,`transform`,a),o!==s?.s&&g(z,`width`,o)}),D}p([`click`]);var F=a(`<div class="absolute inset-0 bg-sky-500/10 dark:bg-sky-500/20 backdrop-blur-sm flex items-center justify-center pointer-events-none z-10 border-2 border-dashed border-sky-500 rounded-lg"><div class="bg-white dark:bg-slate-800 px-4 py-2 rounded-lg shadow-lg text-sm font-semibold text-sky-600 dark:text-sky-400">📥 Drop *.lcct.txt template file here to load`),I=a(`<div><div class="flex flex-wrap items-center justify-between gap-2 px-3 py-2 bg-slate-100/80 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700/80 text-xs text-slate-600 dark:text-slate-300 select-none"><div class="flex items-center gap-2"><span class="font-bold tracking-wide uppercase text-[11px] text-slate-500 dark:text-slate-400">Editor</span><span class="text-slate-300 dark:text-slate-600">|</span><button type=button title="Toggle Soft Word Wrapping">Wrap: </button></div><div class="flex items-center gap-2.5 text-[11px]"><span title="Number of chords in template">🎵 <strong class="text-slate-800 dark:text-slate-200"></strong> chords</span><span title="Number of sections">🏷️ <strong class="text-slate-800 dark:text-slate-200"></strong> sections</span><span title="Number of column breaks (@column_break)">📑 <strong class="text-slate-800 dark:text-slate-200"></strong> col breaks</span><span title="Number of page breaks (@page_break)">📄 <strong class="text-slate-800 dark:text-slate-200"></strong> page breaks</span></div></div><div class="relative flex-1 flex min-h-0 overflow-hidden text-xs sm:text-sm"><div class="shrink-0 w-11 select-none bg-slate-50 dark:bg-slate-950/60 text-right text-slate-400 dark:text-slate-600 border-r border-slate-200 dark:border-slate-800/80 overflow-hidden editor-font py-3 pr-2"style=line-height:22px></div><div class="relative flex-1 min-w-0 h-full overflow-auto bg-white dark:bg-slate-900"><div class="relative min-w-full"style=min-height:100%><pre aria-hidden=true style=line-height:22px;box-sizing:border-box;min-height:100%></pre><textarea autocomplete=off autocapitalize=off placeholder="Type or paste your lyric-chord sheet template here..."style=line-height:22px;box-sizing:border-box></textarea></div></div></div><div class="flex items-center justify-between px-3 py-1 bg-slate-50 dark:bg-slate-950/80 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 select-none"><div class="flex items-center gap-2"><span>Ln <!>, Col <!></span><span>•</span><span> lines</span><span>•</span><span> chars</span></div><div><span>Tab = 2 spaces</span></div></div><style>
        .editor-font {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !important;
          font-size: 13px !important;
          line-height: 22px !important;
          letter-spacing: 0px !important;
          word-spacing: 0px !important;
          tab-size: 2 !important;
          font-variant-ligatures: none !important;
        }

        .editor-textarea {
          color: transparent !important;
          -webkit-text-fill-color: transparent !important;
          caret-color: #0284c7 !important;
        }

        .editor-textarea::selection {
          background-color: rgba(14, 165, 233, 0.3) !important;
          color: transparent !important;
          -webkit-text-fill-color: transparent !important;
        }

        .dark .editor-textarea {
          caret-color: #38bdf8 !important;
        }

        .dark .editor-textarea::selection {
          background-color: rgba(56, 189, 248, 0.35) !important;
        }
      `),L=a(`<div>`),R=`scgt_word_wrap`;function z(){if(typeof window<`u`)try{let e=localStorage.getItem(R);if(e!==null)return e===`true`}catch(e){console.error(`Failed to read word wrap preference:`,e)}return!0}function B(a){let o,c,l,[d,p]=i(z(),{name:`word_wrap`}),[g,_]=i(!1,{name:`drag_over`}),[v,y]=i({line:1,col:1},{name:`cursor_info`}),x=()=>{let e=!d();p(e);try{localStorage.setItem(R,String(e))}catch(e){console.error(`Failed to save word wrap preference:`,e)}},S=n(()=>a.value.split(`
`).length,{name:`line_count`}),C=n(()=>{let e=a.value;return{chords:(e.match(/\{[^}]+\}/g)||[]).length,sections:(e.match(/^\[.*?\]/gm)||[]).length,columnBreaks:(e.match(/@column_break\b/g)||[]).length,pageBreaks:(e.match(/@page_break\b/g)||[]).length,chars:e.length}},{name:`editor_stats`}),w=()=>{!l||!c||(c.scrollTop=l.scrollTop)},T=()=>{if(!o)return;let e=o.selectionStart||0,t=o.value.substring(0,e).split(`
`);y({line:t.length,col:t[t.length-1].length+1})},E=e=>{if(e.key===`Tab`){if(e.preventDefault(),!o)return;let t=o.selectionStart,n=o.selectionEnd,r=o.value,i=`${r.substring(0,t)}  ${r.substring(n)}`;a.onInput(i),requestAnimationFrame(()=>{o&&(o.selectionStart=o.selectionEnd=t+2,T())})}},D=e=>{e.preventDefault(),_(!0)},O=e=>{e.preventDefault(),_(!1)},k=e=>{e.preventDefault(),_(!1);let t=e.dataTransfer?.files[0];if(t){let e=new FileReader;e.onload=e=>{let n=e.target?.result;n&&(a.onInput(n),a.onFileDrop&&a.onFileDrop(n,t.name))},e.readAsText(t)}};t(()=>{w(),T()});var A=I(),j=A.firstChild,M=j.firstChild,N=M.firstChild.nextSibling.nextSibling;N.firstChild;var P=M.nextSibling.firstChild,B=P.firstChild.nextSibling,V=P.nextSibling,H=V.firstChild.nextSibling,U=V.nextSibling,W=U.firstChild.nextSibling,G=U.nextSibling.firstChild.nextSibling,K=j.nextSibling,q=K.firstChild,J=q.nextSibling,Y=J.firstChild.firstChild,X=Y.nextSibling,Z=K.nextSibling.firstChild.firstChild,ee=Z.firstChild.nextSibling,te=ee.nextSibling.nextSibling,Q=Z.nextSibling.nextSibling;Q.firstChild;var $=Q.nextSibling.nextSibling;return $.firstChild,A.addEventListener(`drop`,k),A.addEventListener(`dragleave`,O),A.addEventListener(`dragover`,D),N.$$click=x,m(N,()=>d()?`ON`:`OFF`,null),m(B,()=>C().chords),m(H,()=>C().sections),m(W,()=>C().columnBreaks),m(G,()=>C().pageBreaks),s(()=>e=>c=e,q),m(q,f(e,{get count(){return S()},children:e=>(()=>{var t=L();return m(t,e+1),h(()=>[`px-1`,{"text-sky-600 dark:text-sky-400 font-bold bg-sky-50 dark:bg-sky-950/50":v().line===e+1}],(e,n)=>{u(t,e,n)}),t})()})),J.addEventListener(`scroll`,w),s(()=>e=>l=e,J),m(Y,f(b,{get code(){return a.value}})),X.addEventListener(`select`,T),X.$$keyup=T,X.$$click=T,X.$$keydown=E,X.$$input=e=>{a.onInput(e.currentTarget.value),T()},s(()=>e=>o=e,X),m(J,f(r,{get when(){return g()},get children(){return F()}}),null),m(Z,()=>v().line,ee),m(Z,()=>v().col,te),m(Q,S,Q.firstChild),m($,()=>C().chars,$.firstChild),h(()=>({e:[`relative flex flex-col h-full w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden shadow-sm transition-colors`,{"ring-2 ring-sky-500 bg-sky-50/20":g()}],t:[`px-2 py-0.5 rounded text-[11px] font-semibold transition-colors border`,d()?`bg-sky-100 dark:bg-sky-950/70 border-sky-300 dark:border-sky-800 text-sky-700 dark:text-sky-300`:`bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50`],a:[`m-0 p-3 pointer-events-none text-slate-800 dark:text-slate-200 editor-font`,d()?`whitespace-pre-wrap break-words`:`whitespace-pre`],o:a.value,i:[`editor-textarea absolute inset-0 w-full h-full m-0 p-3 resize-none border-none outline-none bg-transparent overflow-hidden editor-font`,d()?`whitespace-pre-wrap break-words`:`whitespace-pre`]}),({e,t,a:n,o:r,i},a)=>{u(A,e,a?.e),u(N,t,a?.t),u(Y,n,a?.a),X.value=r??``,u(X,i,a?.i)}),A}p([`click`,`input`,`keydown`,`keyup`]);var V=a(`<div class="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-4 py-2.5 rounded-lg shadow-xl text-xs font-semibold border border-slate-700 dark:border-slate-200 animate-fade-in"><span>✨</span><span>`),H=a(`<div class="h-screen flex flex-col bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 overflow-hidden font-sans antialiased transition-colors"><!><div class="lg:hidden flex items-center justify-center p-2 bg-slate-200/80 dark:bg-slate-900/80 border-b border-slate-300 dark:border-slate-800 shrink-0"><div class="inline-flex rounded-lg bg-slate-300/80 dark:bg-slate-800 p-1 shadow-sm"role=tablist aria-label="Workspace views"><button type=button id=editor-tab role=tab aria-controls=editor-panel><span>📝</span><span>Editor</span></button><button type=button id=preview-tab role=tab aria-controls=preview-panel><span>👁️</span><span>Preview</span></button></div></div><main class="flex-1 min-h-0 p-2 sm:p-3 lg:p-4 grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4 overflow-hidden"><div id=editor-panel role=tabpanel aria-labelledby=editor-tab tabindex=0></div><div id=preview-panel role=tabpanel aria-labelledby=preview-tab tabindex=0></div></main><!>`),U=`scgt_current_template`,W=`scgt_paper_config`;function G(){if(typeof window<`u`)try{let e=localStorage.getItem(U);if(e&&e.trim().length>0)return e}catch(e){console.error(`Failed to load saved state from localStorage:`,e)}return y}function K(){if(typeof window<`u`)try{let e=localStorage.getItem(W);if(e)return JSON.parse(e)}catch(e){console.error(`Failed to load saved state from localStorage:`,e)}return T}function q(){let[e,t]=i(G(),{name:`editor_template`}),[n,a]=i(K(),{name:`app_paper_config`}),[o,s]=i(`editor`,{name:`mobile_active_tab`}),[p,g]=i(null,{name:`toast_message`}),b=e=>{g(e),setTimeout(()=>{g(null)},3e3)};d(()=>e(),e=>{try{localStorage.setItem(U,e)}catch(e){console.error(`Failed to persist template:`,e)}}),d(()=>n(),e=>{try{localStorage.setItem(W,JSON.stringify(e))}catch(e){console.error(`Failed to persist paper config:`,e)}});let x=e=>{t(e)},S=(e,n)=>{t(e),b(`Loaded "${n}" successfully!`)},C=()=>{confirm(`Reset template back to default sample? Any unsaved edits will be lost.`)&&(t(y),b(`Reset to default sample template.`))};var T=H(),E=T.firstChild,D=E.nextSibling,O=D.firstChild.firstChild,k=O.nextSibling,A=D.nextSibling,j=A.firstChild,M=j.nextSibling,N=A.nextSibling;return m(T,f(_,{get children(){return[l(()=>w(e())),` - Lyric-Chord Creator`]}}),E),m(T,f(v,{get template(){return e()},get paperConfig(){return n()},onImportTemplate:S,onResetToDefault:C}),E.nextSibling),O.$$click=()=>s(`editor`),k.$$click=()=>s(`preview`),m(j,f(B,{get value(){return e()},onInput:x,onFileDrop:S})),m(M,f(P,{get template(){return e()},get paperConfig(){return n()},onPaperConfigChange:a})),m(T,f(r,{get when(){return p()},get children(){var e=V(),t=e.firstChild.nextSibling;return m(t,p),e}}),N),h(()=>({e:(o()===`editor`).toString(),t:o()===`editor`?0:-1,a:[`flex items-center gap-1.5 px-4 py-1.5 rounded-md text-xs font-semibold transition-all`,o()===`editor`?`bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm`:`text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white`],o:(o()===`preview`).toString(),i:o()===`preview`?0:-1,n:[`flex items-center gap-1.5 px-4 py-1.5 rounded-md text-xs font-semibold transition-all`,o()===`preview`?`bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm`:`text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white`],s:[`h-full min-h-0 focus:outline-none`,o()===`editor`?`flex flex-col`:`hidden lg:flex lg:flex-col`],h:[`h-full min-h-0 focus:outline-none`,o()===`preview`?`flex flex-col`:`hidden lg:flex lg:flex-col`]}),({e,t,a:n,o:r,i,n:a,s:o,h:s},l)=>{e!==l?.e&&c(O,`aria-selected`,e),t!==l?.t&&c(O,`tabindex`,t),u(O,n,l?.a),r!==l?.o&&c(k,`aria-selected`,r),i!==l?.i&&c(k,`tabindex`,i),u(k,a,l?.n),u(j,o,l?.s),u(M,s,l?.h)}),T}p([`click`]);export{q as default};