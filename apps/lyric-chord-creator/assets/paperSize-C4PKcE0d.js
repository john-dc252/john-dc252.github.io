import{D as e,N as t,O as n,S as r,T as i,_ as a,b as o,i as s,j as c,n as l,o as u,p as d,r as f,s as p}from"./web-BEJQEV4C.js";var m=`@title: I Know
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
`,h=r(`<br>`),g=r(`<div class=column-break>`),_=r(`<div class=title>`),v=r(`<div class=artist>`),y=r(`<div class=section-label>[<!>]`),b=r(`<div class="chord sequence">`),x=r(`<span class=chord>`),S=r(`<div class=line>`),C=r(`<div>`),w=r(`<div class=title>Empty Chord Guide`),T=r(`<div class=line>Type template syntax to start...`),E=class{regexp;captureName;renderJsx;extractValue;constructor(e,t,n=e=>e,r){this.regexp=e,this.captureName=t,this.renderJsx=n,this.extractValue=r||((e,t)=>{let n=t.regexp.exec(e);if(!n)return null;if(!t.captureName)return t.renderJsx(e);let r=n.groups?.[t.captureName];return r===void 0?null:t.renderJsx(r)})}tryIntoJsx(e){return this.extractValue(e,this)}},D=new E(/@empty_line/,void 0,()=>h()),O=`@page_break`,k=[D,new E(/@page_break/,void 0,()=>null),new E(/@column_break/,void 0,()=>g()),new E(/@title:\s*(?<title>[^\n]+)/,`title`,e=>(()=>{var t=_();return d(t,()=>e.trim()),t})()),new E(/@artist:\s*(?<artist>[^\n]+)/,`artist`,e=>(()=>{var t=v();return d(t,()=>e.trim()),t})()),new E(/\[(?<label_str>[^\]\n]+)]/,`label_str`,e=>(()=>{var t=y(),n=t.firstChild.nextSibling;return n.nextSibling,d(t,()=>e.trim(),n),t})()),new E(/@chord_sequence:\s*(?<chord_sequence>[^\n]+)/,`chord_sequence`,e=>(()=>{var t=b();return d(t,()=>e.trim()),t})()),new E(/\{(?<chord_str>[^}]+)}|(?<text>[^{]+)/g,``,void 0,(e,t)=>{let n=function*(e){for(let n=t.regexp.exec(e);n!==null;n=t.regexp.exec(e))yield n}(e).map(t=>{if(t.groups?.chord_str){var n=x();return d(n,()=>t.groups?.chord_str),n}let r=t.groups?.text;return r||console.error(`Unexpected match without chord or text from string:`,e),r}).toArray();var r=S();return d(r,n),r})];function A(e){return Iterator.from(k).map(t=>t.tryIntoJsx(e)).find(e=>e!=null)??(()=>{var t=S();return d(t,e),t})()}function j(e){return Iterator.from(e.split(`
`)).map(e=>e.trim()).find(e=>e.startsWith(`@title:`))?.replace(/^@title:\s*/,``).trim()||`Untitled Song`}function M(e){return!e||e.trim().length===0?[{lines:[]}]:e.split(O).map(e=>({lines:Iterator.from(e.split(`
`)).map(e=>e.trim()).filter(e=>e.length>0).toArray()}))}function N(t){let r=c(()=>M(t.template),{name:`chord_guide_pages`});return n(i,{get each(){return r()},children:r=>(()=>{var a=C();return d(a,n(e,{get when(){return r.lines.length>0},get fallback(){return[w(),T()]},get children(){return n(i,{get each(){return r.lines},children:e=>A(e)})}})),p(()=>[`page`,t.class],(e,t)=>{s(a,e,t)}),a})()})}var P=`scgt_theme`;function F(){if(typeof window>`u`)return`dark`;try{let e=localStorage.getItem(P);if(e===`light`||e===`dark`)return e;if(window.matchMedia&&window.matchMedia(`(prefers-color-scheme: dark)`).matches)return`dark`}catch(e){console.error(`Failed to read theme preference:`,e)}return`dark`}var I=F(),[L,R]=t(I,{name:`app_theme`});function z(e){R(e),typeof document<`u`&&(e===`dark`?document.documentElement.classList.add(`dark`):document.documentElement.classList.remove(`dark`));try{localStorage.setItem(P,e)}catch(e){console.error(`Failed to persist theme preference:`,e)}}function B(){z(L()===`dark`?`light`:`dark`)}typeof document<`u`&&(I===`dark`?document.documentElement.classList.add(`dark`):document.documentElement.classList.remove(`dark`));var V=r(`<header class="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-40 shadow-sm transition-colors"><div class="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6"><div class="flex items-center justify-between h-14"><div class="flex items-center gap-4"><a href=/ class="flex items-center gap-2.5 group no-underline"><div class="w-8 h-8 rounded-lg bg-sky-600 dark:bg-sky-500 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform shrink-0"><svg class="w-5 h-5 text-white"viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2.2 stroke-linecap=round stroke-linejoin=round><path d="M9 18V5l11-2v13"></path><path d="M9 9l11-2"></path><circle cx=6 cy=18 r=3 fill=currentColor></circle><circle cx=17 cy=16 r=3 fill=currentColor></circle></svg></div><div class="flex flex-col"><span class="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-tight">Lyric-Chord Creator</span><span class="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Template Editor & Previewer</span></div></a><nav class="hidden md:flex items-center gap-1 ml-4 border-l border-slate-200 dark:border-slate-700 pl-4"><a href=/ class="px-2.5 py-1 rounded-md text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">Editor</a><a href=/about class="px-2.5 py-1 rounded-md text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1"><span>ℹ️</span><span>About</span></a></nav></div><div class="flex items-center gap-2"><a href=/about class="md:hidden p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs"title="About &amp; Syntax Guide">ℹ️</a><input type=file accept=.txt,.scgt,.lcct.txt class=hidden><button type=button class="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-2.5 sm:px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"title="Import *.lcct.txt template file"><span>📂</span><span class="hidden sm:inline">Import</span></button><button type=button class="inline-flex items-center gap-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white px-3 py-1.5 text-xs font-semibold shadow-sm transition-colors"title="Export Template File (*.lcct.txt)"><span>💾</span><span>Export</span></button><button type=button class="p-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 shadow-sm transition-colors">`);function H(e){let t,n=t=>`${j(e.template).toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/^-+|-+$/g,``)||`song-chord-guide`}.${t}`,r=()=>{let t=n(`lcct.txt`),r=new Blob([e.template],{type:`text/plain;charset=utf-8`}),i=URL.createObjectURL(r),a=document.createElement(`a`);a.href=i,a.download=t,document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(i)},i=t=>{let n=t.target,r=n.files?.[0];if(r){let t=new FileReader;t.onload=t=>{let n=t.target?.result;n&&e.onImportTemplate(n,r.name)},t.readAsText(r),n.value=``}};var s=V(),c=s.firstChild.firstChild.firstChild,u=c.firstChild,m=u.nextSibling.firstChild,h=m.nextSibling,g=c.nextSibling.firstChild,_=g.nextSibling,v=_.nextSibling,y=v.nextSibling,b=y.nextSibling;return f(u),f(m),f(h),f(g),_.addEventListener(`change`,i),a(()=>e=>t=e,_),v.$$click=()=>t?.click(),y.$$click=r,l(b,`click`,B,!0),d(b,()=>L()===`dark`?`☀️`:`🌙`),p(()=>`Switch to ${L()===`dark`?`Light`:`Dark`} Mode`,e=>{o(b,`title`,e)}),s}u([`click`]);var U={letter:{label:`Letter`,width:8.5,height:11,unit:`in`,description:`8.5 × 11 inches (Standard)`},legal:{label:`Legal`,width:8.5,height:14,unit:`in`,description:`8.5 × 14 inches`},a4:{label:`A4`,width:21,height:29.7,unit:`cm`,description:`21 × 29.7 cm (International)`}},W={preset:`letter`,width:8.5,height:11,unit:`in`};function G(e,t){return`${e}${t}`}export{L as a,m as c,H as i,U as n,N as o,G as r,j as s,W as t};