import{P as e,S as t,T as n,k as r,o as i,p as a,r as o}from"./web-Cz_YMZoq.js";import{n as s}from"./virtual_solid-ssr-entry-client-DmOWEhnH.js";import{a as c,c as l,i as u,o as d,t as f}from"./paperSize-DtEeqBwA.js";var p=t(`<div class="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors"><!><main class="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-8"><section class="mb-10 border-b border-slate-200 dark:border-slate-800 pb-10"><div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 text-xs font-semibold mb-3"><span>ℹ️</span><span>About Lyric-Chord Creator</span></div><h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">About Lyric-Chord Creator</h1><div class="mt-4 space-y-3 text-base text-slate-700 dark:text-slate-300 leading-relaxed max-w-4xl"><p class=mb-4><strong>Lyric-Chord Creator</strong> is designed to make creating clean, printable lyric-and-chord sheets fast, flexible, and effortless using an intuitive plain-text template syntax.</p><p>Traditional chord sheets often break or require tedious reformatting when switching between paper sizes or devices. Lyric-Chord Creator solves this by automatically adjusting and balancing content across standard paper formats (such as US Letter, A4, and Legal) while keeping every chord strictly anchored above its exact syllable. You can also bundle multiple songs or full setlists into a single template with seamless page and column flow.</p></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6"><div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs flex flex-col"><div class="w-9 h-9 rounded-lg bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center text-lg mb-3 shrink-0">📐</div><h3 class="font-bold text-sm text-slate-900 dark:text-white mb-1.5">Adaptive Layout for Any Paper</h3><p class="text-xs text-slate-600 dark:text-slate-400 leading-normal">Fits seamlessly on Letter, A4, Legal, or custom sizes. Automatically flows lines in a balanced 2-column layout to maximize paper space.</p></div><div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs flex flex-col"><div class="w-9 h-9 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-lg mb-3 shrink-0">🎯</div><h3 class="font-bold text-sm text-slate-900 dark:text-white mb-1.5">Exact Lyric & Chord Alignment</h3><p class="text-xs text-slate-600 dark:text-slate-400 leading-normal">Chords stay anchored directly above their specific syllables without spacebar guesswork or alignment drifting across screen and print sizes.</p></div><div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs flex flex-col sm:col-span-2 lg:col-span-1"><div class="w-9 h-9 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-lg mb-3 shrink-0">📚</div><h3 class="font-bold text-sm text-slate-900 dark:text-white mb-1.5">Multiple Songs per Template</h3><p class="text-xs text-slate-600 dark:text-slate-400 leading-normal">Bundle entire setlists or multi-song binders in one master template file with simple page and column breaks.</p></div></div><div class="mt-6 flex flex-wrap items-center gap-3"><a href=/ class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs shadow-xs transition-colors no-underline"><span>← Open Editor</span></a><a href=#syntax-guide class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold text-xs transition-colors no-underline"><span>View Syntax Guide ↓</span></a></div></section><section id=syntax-guide class="mb-10 scroll-mt-20"><div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold mb-3"><span>📖</span><span>Syntax Reference</span></div><h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">Template Syntax Guide</h2><p class="text-sm text-slate-600 dark:text-slate-400 mb-6">The <code class="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 font-mono text-xs">.lcct.txt</code> format is a simple, human-readable plain-text template syntax for creating clean, printable 2-column lyric-chord sheets.</p><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm"><div class="flex items-center justify-between mb-2"><span class="font-mono text-sm font-bold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded border border-amber-200 dark:border-amber-900/50">@title: &lt;Song Title&gt;</span><span class="text-xs text-slate-500">Metadata</span></div><p class="text-xs text-slate-600 dark:text-slate-400 mb-2">Sets the song title. Rendered as bold, underlined text.</p><div class="bg-slate-100 dark:bg-slate-950 p-2.5 rounded-lg font-mono text-xs whitespace-pre-wrap"></div></div><div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm"><div class="flex items-center justify-between mb-2"><span class="font-mono text-sm font-bold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded border border-amber-200 dark:border-amber-900/50">@artist: &lt;Artist Name&gt;</span><span class="text-xs text-slate-500">Metadata</span></div><p class="text-xs text-slate-600 dark:text-slate-400 mb-2">Sets the artist / author name. Rendered as bold text.</p><div class="bg-slate-100 dark:bg-slate-950 p-2.5 rounded-lg font-mono text-xs whitespace-pre-wrap"></div></div><div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm"><div class="flex items-center justify-between mb-2"><span class="font-mono text-sm font-bold text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-200 dark:border-indigo-900/50">[&lt;Section Name&gt;]</span><span class="text-xs text-slate-500">Structure</span></div><p class="text-xs text-slate-600 dark:text-slate-400 mb-2">Defines a section header (e.g. <code>[Intro x2]</code>, <code>[Verse 1]</code>, <code>[Chorus]</code>, <code>[Bridge]</code>, <code>[Outro]</code>).</p><div class="bg-slate-100 dark:bg-slate-950 p-2.5 rounded-lg font-mono text-xs whitespace-pre-wrap"></div></div><div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm"><div class="flex items-center justify-between mb-2"><span class="font-mono text-sm font-bold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded border border-amber-200 dark:border-amber-900/50">@chord_sequence: &lt;Chords...&gt;</span><span class="text-xs text-slate-500">Chords</span></div><p class="text-xs text-slate-600 dark:text-slate-400 mb-2">Displays chord progression in a standalone line without lyric text, perfect for instrumental intros/solos.</p><div class="bg-slate-100 dark:bg-slate-950 p-2.5 rounded-lg font-mono text-xs whitespace-pre-wrap"></div></div><div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm"><div class="flex items-center justify-between mb-2"><span class="font-mono text-sm font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-900/50">&#123;&lt;Chord&gt;&#125;</span><span class="text-xs text-slate-500">Lyrics Chord</span></div><p class="text-xs text-slate-600 dark:text-slate-400 mb-2">Embeds a chord directly before or inside a syllable in the lyric line. The chord is placed directly above the text.</p><div class="bg-slate-100 dark:bg-slate-950 p-2.5 rounded-lg font-mono text-xs whitespace-pre-wrap"></div></div><div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm"><div class="flex items-center justify-between mb-2"><span class="font-mono text-sm font-bold text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 px-2 py-0.5 rounded border border-rose-200 dark:border-rose-900/50">@empty_line</span><span class="text-xs text-slate-500">Spacing</span></div><p class="text-xs text-slate-600 dark:text-slate-400 mb-2">Inserts a blank line between song lines or sections.</p><div class="bg-slate-100 dark:bg-slate-950 p-2.5 rounded-lg font-mono text-xs whitespace-pre-wrap"></div></div><div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm"><div class="flex items-center justify-between mb-2"><span class="font-mono text-sm font-bold text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 px-2 py-0.5 rounded border border-rose-200 dark:border-rose-900/50">@column_break</span><span class="text-xs text-slate-500">Layout Flow</span></div><p class="text-xs text-slate-600 dark:text-slate-400 mb-2">Forces content after this directive to break and continue at the top of the next column.</p><div class="bg-slate-100 dark:bg-slate-950 p-2.5 rounded-lg font-mono text-xs whitespace-pre-wrap"></div></div><div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm"><div class="flex items-center justify-between mb-2"><span class="font-mono text-sm font-bold text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 px-2 py-0.5 rounded border border-rose-200 dark:border-rose-900/50">@page_break</span><span class="text-xs text-slate-500">Layout Flow</span></div><p class="text-xs text-slate-600 dark:text-slate-400 mb-2">Splits the chord guide into a new paper page, creating multi-page sheets or separate songs.</p><div class="bg-slate-100 dark:bg-slate-950 p-2.5 rounded-lg font-mono text-xs whitespace-pre-wrap"></div></div></div></section><section class=mb-10><h2 class="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2"><span>💡</span><span>Example Templates</span></h2><div class="flex flex-col gap-6"></div></section><section class="p-6 rounded-xl bg-gradient-to-br from-sky-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 border border-sky-200 dark:border-slate-700"><h3 class="font-bold text-base text-slate-900 dark:text-white mb-3 flex items-center gap-2"><span>💡</span><span>Formatting Tips for Best Results</span></h3><ul class="flex flex-col gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 list-disc list-inside"><li><strong>Header Metadata:</strong> Use <code class="px-1 py-0.5 rounded bg-white/70 dark:bg-slate-800 font-mono text-xs">@title: &lt;Title&gt;</code> and <code class="px-1 py-0.5 rounded bg-white/70 dark:bg-slate-800 font-mono text-xs">@artist: &lt;Artist&gt;</code> at the top of your sheet for standardized headers.</li><li><strong>2-Column Balancing & Column Breaks:</strong> Each page automatically flows in 2 equal-width columns. Insert <code class="px-1 py-0.5 rounded bg-white/70 dark:bg-slate-800 font-mono text-xs">@column_break</code> to force subsequent sections to start at the top of the second column.</li><li><strong>Multi-Page & Multiple Songs:</strong> Use <code class="px-1 py-0.5 rounded bg-white/70 dark:bg-slate-800 font-mono text-xs">@page_break</code> to split long songs across multiple sheets or add additional songs to the same template.</li><li><strong>Vertical Spacing:</strong> Use <code class="px-1 py-0.5 rounded bg-white/70 dark:bg-slate-800 font-mono text-xs">@empty_line</code> for clean line breaks between verses or below section headers without disrupting column flow.</li><li><strong>In-Lyric Chord Placement:</strong> Embed chords like <code class="px-1 py-0.5 rounded bg-white/70 dark:bg-slate-800 font-mono text-xs">&#123;C#m7&#125;</code> directly in front of or inside syllables where chord changes occur.</li><li><strong>Instrumental Lines:</strong> Use <code class="px-1 py-0.5 rounded bg-white/70 dark:bg-slate-800 font-mono text-xs">@chord_sequence: &lt;Chords&gt;</code> for standalone chord progressions without lyrics (e.g. Intro, Outro, Solo).</li><li><strong>Section Headers:</strong> Put section titles inside brackets like <code class="px-1 py-0.5 rounded bg-white/70 dark:bg-slate-800 font-mono text-xs">[Chorus x2]</code>. These are styled bold with automatic break-avoidance so they stay with their lyrics.</li><li><strong>Paper Size & Print Customization:</strong> Configure your target paper size (Letter, Legal, A4, or Custom dimensions) from the paper size dropdown on the editor to adjust print and export layout.</li></ul></section></main><style>
        .guide-sheet-container .page {
          background: #ffffff;
          color: #000000;
          padding: 1.25rem;
          border-radius: 6px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.15), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
          column-count: 2;
          column-fill: auto;
          column-gap: 1.25rem;
          width: 100%;
          box-sizing: border-box;
          font-family: "monospace", monospace, "Courier New", Courier;
          font-size: 11px;
        }

        .guide-sheet-container .column-break {
          break-after: column;
        }

        .guide-sheet-container .title {
          font-weight: bold;
          text-decoration: underline;
        }

        .guide-sheet-container .artist {
          font-weight: bold;
        }

        .guide-sheet-container .section-label {
          line-height: 1.5rem;
          break-after: avoid;
          font-weight: bold;
        }

        .guide-sheet-container .line {
          position: relative;
          line-height: 2.8rem;
          break-inside: avoid-page;
          white-space: pre-wrap;
          word-break: break-word;
        }

        .guide-sheet-container .chord {
          font-weight: bold;
          position: absolute;
          line-height: 1em;
          color: #000;
        }

        .guide-sheet-container .chord.sequence {
          position: relative;
          transform: none;
          font-weight: bold;
        }
      `),m=t(`<div class="border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 overflow-hidden shadow-sm"><div class="flex flex-wrap items-center justify-between gap-2 px-4 py-3 bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800"><div><h3 class="font-bold text-sm text-slate-900 dark:text-white"></h3><p class="text-xs text-slate-500 dark:text-slate-400"></p></div><div class="flex items-center gap-2"><button type=button class="px-2.5 py-1 text-xs font-semibold rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 shadow-sm transition-colors"></button><button type=button class="px-2.5 py-1 text-xs font-semibold rounded-md bg-sky-600 hover:bg-sky-500 text-white shadow-sm transition-colors">🚀 Load in Editor</button></div></div><div class="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 dark:divide-slate-800"><div class="p-4 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-xs overflow-x-auto transition-colors"><div class="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 mb-2 select-none">Template Source (*.lcct.txt)</div><pre class="whitespace-pre-wrap leading-relaxed select-text font-mono"></pre></div><div class="p-4 bg-slate-200/60 dark:bg-slate-950 overflow-x-auto"><div class="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 mb-3 select-none">Rendered Chord Sheet Preview</div><div class="guide-sheet-container flex flex-col gap-4 font-mono text-xs select-text">`),h=[{title:`Basic Song with Artist & Columns`,description:`A standard song format showing title, artist, section header, and chords positioned within lyrics.`,code:`@title: Amazing Grace
@artist: John Newton
@empty_line

[Verse 1]
@empty_line
A{G}mazing grace, how {C}sweet the {G}sound
That saved a {D7}wretch like me
I {G}once was lost, but {C}now am {G}found
Was blind, but {D7}now I {G}see

@column_break

[Verse 2]
@empty_line
'Twas {G}grace that taught my {C}heart to {G}fear
And grace my {D7}fears relieved
How {G}precious did that {C}grace ap{G}pear
The hour I {D7}first be{G}lieved`},{title:`Inline Chords & Section Headers`,description:`Using @chord_sequence for instrumental sections like Intro, Interlude, or Solo.`,code:`@title: Hotel California
@artist: Eagles
@empty_line

[Intro]
@chord_sequence: Bm F#7 A E G D Em F#7
@empty_line

[Verse 1]
@empty_line
{Bm}On a dark desert highway, {F#7}cool wind in my hair
{A}Warm smell of colitas, {E}rising up through the air
{G}Up ahead in the distance, {D}I saw a shimmering light
{Em}My head grew heavy and my sight grew dim, {F#7}I had to stop for the night`},{title:`Multi-Page & Multiple Songs per Template`,description:`Using @empty_line, @column_break, and @page_break to cleanly lay out multi-page guides or multiple songs.`,code:`@title: I Know
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

@column_break

[Chorus x2]
@empty_line
{E}It’s You that I am living for {A}
For You Lord I will worship {C#m}more
I will raise my hands and wors{A}hip, wo{B}rship You

@page_break

@title: Mighty to Save
@artist: Hillsong Worship
@empty_line

[Intro]
@chord_sequence: D   A   F#m   E
@empty_line

[Verse 1]
@empty_line
{D}Everyone needs com{A}passion, love that's never {F#m}failing
Let {E}mercy fall on {D}me
{D}Everyone needs for{A}giveness, the kindness of a {F#m}Savior
The {E}Hope of nations`}];function g(){let[t,i]=e(null,{name:`copied_index`}),g=f,_=(e,t)=>{navigator.clipboard.writeText(e).then(()=>{i(t),setTimeout(()=>i(null),2e3)})},v=e=>{try{localStorage.setItem(`scgt_current_template`,e),window.location.href=`/`}catch(e){console.error(`Failed to store example:`,e),window.location.href=`/`}};var y=p(),b=y.firstChild,x=b.nextSibling.firstChild,S=x.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.firstChild,C=S.nextSibling,w=x.nextSibling,T=w.firstChild.nextSibling.nextSibling.nextSibling.firstChild,E=T.firstChild.nextSibling.nextSibling,D=T.nextSibling,O=D.firstChild.nextSibling.nextSibling,k=D.nextSibling,A=k.firstChild.nextSibling.nextSibling,j=k.nextSibling,M=j.firstChild.nextSibling.nextSibling,N=j.nextSibling,P=N.firstChild.nextSibling.nextSibling,F=N.nextSibling,I=F.firstChild.nextSibling.nextSibling,L=F.nextSibling,R=L.firstChild.nextSibling.nextSibling,z=L.nextSibling.firstChild.nextSibling.nextSibling,B=w.nextSibling.firstChild.nextSibling;return a(y,r(s,{children:`About - Lyric-Chord Creator`}),b),a(y,r(c,{template:l,paperConfig:g,onImportTemplate:e=>{try{localStorage.setItem(`scgt_current_template`,e),window.location.href=`/`}catch(e){console.error(`Failed to import:`,e)}}}),b.nextSibling),o(S),o(C),a(E,r(u,{code:`@title: I Know`})),a(O,r(u,{code:`@artist: Liveloud`})),a(A,r(u,{code:`[Chorus x2]`})),a(M,r(u,{code:`@chord_sequence: E   A   C#m   A - B`})),a(P,r(u,{code:`{E}I {Esus4}know You’ve given all I need`})),a(I,r(u,{code:`[Verse 1]

@empty_line

{E}I {Esus4}know You’ve given all I need  {A}`})),a(R,r(u,{code:`I know that Your love is for{A}e---{B}ver

@column_break

[Chorus x2]`})),a(z,r(u,{code:`I will raise my hands and wors{A}hip, wo{B}rship You

@page_break

@title: Mighty to Save`})),a(B,r(n,{each:h,children:(e,n)=>(()=>{var i=m(),o=i.firstChild,s=o.firstChild,c=s.firstChild,l=c.nextSibling,f=s.nextSibling.firstChild,p=f.nextSibling,h=o.nextSibling.firstChild,g=h.firstChild.nextSibling,y=h.nextSibling.firstChild.nextSibling;return a(c,()=>e.title),a(l,()=>e.description),f.$$click=()=>_(e.code,n()),a(f,()=>t()===n()?`✓ Copied!`:`📋 Copy`),p.$$click=()=>v(e.code),a(g,r(u,{get code(){return e.code}})),a(y,r(d,{get template(){return e.code}})),i})()})),y}i([`click`]);export{g as default};