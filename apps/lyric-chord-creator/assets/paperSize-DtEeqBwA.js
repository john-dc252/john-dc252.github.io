import{M as e,O as t,P as n,S as r,T as i,_ as a,b as o,g as s,i as c,k as l,n as u,o as d,p as f,r as p,s as m}from"./web-Cz_YMZoq.js";var h=`@title: I Know
@artist: Liveloud
@empty_line

[Intro x2]
@chord_sequence: E   A   C#m   A - B
@empty_line

[Verse 1]
@empty_line
{E}I {Esus4}know You’ve given all I need  {A}
I know Your blessings never {C#m}end
I know that Your love is for{A}e---{B}ver

[Verse 2]
@empty_line
{E}I know that You are all I have  {A}
The only reason that I {C#m}live
The only reason that I f{A}ollow... o{B}hooh.

[Pre-Chorus]
@empty_line
{C#m}You capture{A}d me today, Je{B}sus
{C#m}You complete{A}d all my days,{B} ohooh.

@column_break

[Chorus x2]
@empty_line
{E}It’s You that I am living for {A}
For You Lord I will worship {C#m}more
I will raise my hands and wors{A}hip, wo{B}rship You

[Intro]
[Verse 1]
[Verse 2]
[Chorus x2]
[Intro]

[Bridge x2]
@empty_line
{C#m}I am thank{A}ful for Your kindne{E}ss Lord  {B}
{C#m}I am thank{A}ful for You are bount{E}iful  {B}

[Pre-Chorus]
[Chorus x2]
[Intro x2]

@page_break

@title: I Know
@artist: Liveloud
@empty_line

[Intro x2]
@chord_sequence: E   A   C#m   A - B
@empty_line

[Verse 1]
@empty_line
{E}I {Esus4}know You’ve given all I need  {A}
I know Your blessings never {C#m}end
I know that Your love is for{A}e---{B}ver

[Verse 2]
@empty_line
{E}I know that You are all I have  {A}
The only reason that I {C#m}live
The only reason that I f{A}ollow... o{B}hooh.

[Pre-Chorus]
@empty_line
{C#m}You capture{A}d me today, Je{B}sus
{C#m}You complete{A}d all my days,{B} ohooh.

[Chorus x2]
@empty_line
{E}It’s You that I am living for {A}
For You Lord I will worship {C#m}more
I will raise my hands and wors{A}hip, wo{B}rship You

[Intro]
[Verse 1]
[Verse 2]
[Chorus x2]
[Intro]

[Bridge x2]
@empty_line
{C#m}I am thank{A}ful for Your kindne{E}ss Lord  {B}
{C#m}I am thank{A}ful for You are bount{E}iful  {B}

[Pre-Chorus]
[Chorus x2]
[Intro x2]
`,g=r(`<br>`),_=r(`<div class=column-break>`),v=r(`<div class=title>`),y=r(`<div class=artist>`),b=r(`<div class=section-label>[<!>]`),x=r(`<div class="chord sequence">`),S=r(`<span class=chord>`),C=r(`<div class=line>`),w=r(`<div>`),ee=r(`<div class=title>Empty Chord Guide`),T=r(`<div class=line>Type template syntax to start...`),E=class{regexp;captureName;renderJsx;extractValue;constructor(e,t,n=e=>e,r){this.regexp=e,this.captureName=t,this.renderJsx=n,this.extractValue=r||((e,t)=>{let n=t.regexp.exec(e);if(!n)return null;if(!t.captureName)return t.renderJsx(e);let r=n.groups?.[t.captureName];return r===void 0?null:t.renderJsx(r)})}tryIntoJsx(e){return this.extractValue(e,this)}},D=new E(/@empty_line/,void 0,()=>g()),O=`@page_break`,k=[D,new E(/@page_break/,void 0,()=>null),new E(/@column_break/,void 0,()=>_()),new E(/@title:\s*(?<title>[^\n]+)/,`title`,e=>(()=>{var t=v();return f(t,()=>e.trim()),t})()),new E(/@artist:\s*(?<artist>[^\n]+)/,`artist`,e=>(()=>{var t=y();return f(t,()=>e.trim()),t})()),new E(/\[(?<label_str>[^\]\n]+)]/,`label_str`,e=>(()=>{var t=b(),n=t.firstChild.nextSibling;return n.nextSibling,f(t,()=>e.trim(),n),t})()),new E(/@chord_sequence:\s*(?<chord_sequence>[^\n]+)/,`chord_sequence`,e=>(()=>{var t=x();return f(t,()=>e.trim()),t})()),new E(/\{(?<chord_str>[^}]+)}|(?<text>[^{]+)/g,``,void 0,(e,t)=>{let n=function*(e){for(let n=t.regexp.exec(e);n!==null;n=t.regexp.exec(e))yield n}(e).map(t=>{if(t.groups?.chord_str){var n=S();return f(n,()=>t.groups?.chord_str),n}let r=t.groups?.text;return r||console.error(`Unexpected match without chord or text from string:`,e),r}).toArray();var r=C();return f(r,n),r})];function A(e){return Iterator.from(k).map(t=>t.tryIntoJsx(e)).find(e=>e!=null)??(()=>{var t=C();return f(t,e),t})()}function j(e){return Iterator.from(e.split(`
`)).map(e=>e.trim()).find(e=>e.startsWith(`@title:`))?.replace(/^@title:\s*/,``).trim()||`Untitled Song`}function M(e){return!e||e.trim().length===0?[{lines:[]}]:e.split(O).map(e=>({lines:Iterator.from(e.split(`
`)).map(e=>e.trim()).filter(e=>e.length>0).toArray()}))}function N(n){let r=e(()=>M(n.template),{name:`chord_guide_pages`});return l(i,{get each(){return r()},children:e=>(()=>{var r=w();return f(r,l(t,{get when(){return e.lines.length>0},get fallback(){return[ee(),T()]},get children(){return l(i,{get each(){return e.lines},children:e=>A(e)})}})),m(()=>[`page`,n.class],(e,t)=>{c(r,e,t)}),r})()})}var P=`scgt_theme`;function F(){if(typeof window>`u`)return`dark`;try{let e=localStorage.getItem(P);if(e===`light`||e===`dark`)return e;if(window.matchMedia&&window.matchMedia(`(prefers-color-scheme: dark)`).matches)return`dark`}catch(e){console.error(`Failed to read theme preference:`,e)}return`dark`}var I=F(),[L,R]=n(I,{name:`app_theme`});function z(e){R(e),typeof document<`u`&&(e===`dark`?document.documentElement.classList.add(`dark`):document.documentElement.classList.remove(`dark`));try{localStorage.setItem(P,e)}catch(e){console.error(`Failed to persist theme preference:`,e)}}function B(){z(L()===`dark`?`light`:`dark`)}typeof document<`u`&&(I===`dark`?document.documentElement.classList.add(`dark`):document.documentElement.classList.remove(`dark`));var V=r(`<header class="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-40 shadow-sm transition-colors"><div class="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6"><div class="flex items-center justify-between h-14"><div class="flex items-center gap-4"><a href=/ class="flex items-center gap-2.5 group no-underline"><div class="w-8 h-8 rounded-lg bg-sky-600 dark:bg-sky-500 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform shrink-0"><svg class="w-5 h-5 text-white"viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2.2 stroke-linecap=round stroke-linejoin=round><path d="M9 18V5l11-2v13"></path><path d="M9 9l11-2"></path><circle cx=6 cy=18 r=3 fill=currentColor></circle><circle cx=17 cy=16 r=3 fill=currentColor></circle></svg></div><div class="flex flex-col"><span class="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-tight">Lyric-Chord Creator</span><span class="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Template Editor & Previewer</span></div></a><nav class="hidden md:flex items-center gap-1 ml-4 border-l border-slate-200 dark:border-slate-700 pl-4"><a href=/ class="px-2.5 py-1 rounded-md text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">Editor</a><a href=/about class="px-2.5 py-1 rounded-md text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1"><span>ℹ️</span><span>About</span></a></nav></div><div class="flex items-center gap-2"><a href=/about class="md:hidden p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs"title="About &amp; Syntax Guide">ℹ️</a><input type=file accept=.txt,.scgt,.lcct.txt class=hidden><button type=button class="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-2.5 sm:px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"title="Import *.lcct.txt template file"><span>📂</span><span class="hidden sm:inline">Import</span></button><button type=button class="inline-flex items-center gap-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white px-3 py-1.5 text-xs font-semibold shadow-sm transition-colors"title="Export Template File (*.lcct.txt)"><span>💾</span><span>Export</span></button><button type=button class="p-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 shadow-sm transition-colors">`);function H(e){let t,n=t=>`${j(e.template).toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/^-+|-+$/g,``)||`song-chord-guide`}.${t}`,r=()=>{let t=n(`lcct.txt`),r=new Blob([e.template],{type:`text/plain;charset=utf-8`}),i=URL.createObjectURL(r),a=document.createElement(`a`);a.href=i,a.download=t,document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(i)},i=t=>{let n=t.target,r=n.files?.[0];if(r){let t=new FileReader;t.onload=t=>{let n=t.target?.result;n&&e.onImportTemplate(n,r.name)},t.readAsText(r),n.value=``}};var s=V(),c=s.firstChild.firstChild.firstChild,l=c.firstChild,d=l.nextSibling.firstChild,h=d.nextSibling,g=c.nextSibling.firstChild,_=g.nextSibling,v=_.nextSibling,y=v.nextSibling,b=y.nextSibling;return p(l),p(d),p(h),p(g),_.addEventListener(`change`,i),a(()=>e=>t=e,_),v.$$click=()=>t?.click(),y.$$click=r,u(b,`click`,B,!0),f(b,()=>L()===`dark`?`☀️`:`🌙`),m(()=>`Switch to ${L()===`dark`?`Light`:`Dark`} Mode`,e=>{o(b,`title`,e)}),s}d([`click`]);var U=r(`<span class="text-amber-600 dark:text-amber-400 font-bold">`),W=r(`<span class="text-sky-600 dark:text-sky-300 font-semibold underline">`),G=r(`<span class="text-purple-600 dark:text-purple-300 font-semibold">`),K=r(`<span class="text-emerald-600 dark:text-emerald-400 font-bold">`),q=r(`<span class="text-rose-600 dark:text-rose-400 font-bold bg-rose-100 dark:bg-rose-500/15">`),J=r(`<span class="text-indigo-600 dark:text-indigo-400 font-bold bg-indigo-100 dark:bg-indigo-500/15">`),Y=r(`<span class="text-slate-400 dark:text-slate-500">&#123;`),X=r(`<span class="text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-100 dark:bg-emerald-500/15">`),Z=r(`<span class="text-slate-400 dark:text-slate-500">&#125;`),Q=r(`<span class="text-slate-800 dark:text-slate-200">`),$=class{regexp;render;constructor(e,t){this.regexp=e,this.render=t}tryRender(e){let t=e.match(this.regexp);return t?this.render(e,t):null}};function te(e){let t=[],n=/\{([^}]+)\}/g,r=0,i;for(;(i=n.exec(e))!==null;)i.index>r&&t.push({isChord:!1,text:e.substring(r,i.index)}),t.push({isChord:!0,text:i[1]}),r=n.lastIndex;return r<e.length&&t.push({isChord:!1,text:e.substring(r)}),t}var ne=[new $(/^(@title:)(.*)$/,(e,t)=>[(()=>{var e=U();return f(e,()=>t[1]),e})(),(()=>{var e=W();return f(e,()=>t[2]),e})()]),new $(/^(@artist:)(.*)$/,(e,t)=>[(()=>{var e=U();return f(e,()=>t[1]),e})(),(()=>{var e=G();return f(e,()=>t[2]),e})()]),new $(/^(@chord_sequence:)(.*)$/,(e,t)=>[(()=>{var e=U();return f(e,()=>t[1]),e})(),(()=>{var e=K();return f(e,()=>t[2]),e})()]),new $(/^@(page_break|column_break|empty_line|break)\b/,e=>(()=>{var t=q();return f(t,e),t})()),new $(/^\[(.*?)\]$/,e=>(()=>{var t=J();return f(t,e),t})()),new $(/.*/,e=>{let t=te(e);return l(i,{each:t,children:e=>e.isChord?[Y(),(()=>{var t=X();return f(t,()=>e.text),t})(),Z()]:(()=>{var t=Q();return f(t,()=>e.text),t})()})})];function re(e){return Iterator.from(ne).map(t=>t.tryRender(e)).find(e=>e!=null)??e}function ie(n){let r=e(()=>n.code.split(`
`),{name:`syntax_lines`});return[l(i,{get each(){return r()},children:(e,t)=>[s(()=>t()>0?`
`:``),s(()=>re(e))]}),l(t,{get when(){return n.code.endsWith(`
`)},children:` `})]}var ae={letter:{label:`Letter`,width:8.5,height:11,unit:`in`,description:`8.5 × 11 inches (Standard)`},legal:{label:`Legal`,width:8.5,height:14,unit:`in`,description:`8.5 × 14 inches`},a4:{label:`A4`,width:21,height:29.7,unit:`cm`,description:`21 × 29.7 cm (International)`}},oe={preset:`letter`,width:8.5,height:11,unit:`in`};function se(e,t){return`${e}${t}`}export{H as a,h as c,ie as i,ae as n,N as o,se as r,j as s,oe as t};