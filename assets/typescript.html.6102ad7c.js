import{r as a,o as i,c as p,a as s,b as e,w as c,F as l,e as o,d as n}from"./app.ba8a48bd.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const d={},h=o(`<h1 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h1><h2 id="syntax-highlighting" tabindex="-1"><a class="header-anchor" href="#syntax-highlighting" aria-hidden="true">#</a> Syntax highlighting</h2><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>TSInstall typescript
<span class="token punctuation">:</span>TSInstall tsx
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="supported-language-servers" tabindex="-1"><a class="header-anchor" href="#supported-language-servers" aria-hidden="true">#</a> Supported language servers</h2><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>typescript <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;angularls&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;denols&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ember&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;eslint&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;eslintls&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;rome&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;stylelint_lsp&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;tailwindcss&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;tsserver&quot;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,5),g=n("Only "),_=s("code",null,"tsserver",-1),k=n(" is enabled by default and the other servers need to be "),m=n("manually configured"),f=n("."),v=s("h3",{id:"typescript-standalone-server-tsserver",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#typescript-standalone-server-tsserver","aria-hidden":"true"},"#"),n(" TypeScript standalone server (tsserver)")],-1),b=s("code",null,"tsserver",-1),q=n(" requires one of the following files/folders : "),y=s("code",null,"package.json",-1),x=n(", "),S={href:"https://www.typescriptlang.org/docs/handbook/tsconfig-json.html",target:"_blank",rel:"noopener noreferrer"},w=s("code",null,"tsconfig.json",-1),j=n(", "),T={href:"https://code.visualstudio.com/docs/languages/jsconfig",target:"_blank",rel:"noopener noreferrer"},I=s("code",null,"jsconfig.json",-1),L=n(" or "),N=s("code",null,".git.",-1),V=n(" in the root directory of the project"),B=n("See "),E={href:"https://github.com/neovim/nvim-lspconfig/blob/master/doc/server_configurations.md#tsserver",target:"_blank",rel:"noopener noreferrer"},C=n("nvim-lspconfig"),F=n(" for more information about the tsserver language server configuration options."),R=o(`<h2 id="supported-formatters" tabindex="-1"><a class="header-anchor" href="#supported-formatters" aria-hidden="true">#</a> Supported formatters</h2><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>typescript <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;deno&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;eslint&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;eslint_d&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;prettier&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;prettier_d_slim&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;prettierd&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;rustywind&quot;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>The configured formatter(s) must be installed separately.</p><h2 id="supported-linters" tabindex="-1"><a class="header-anchor" href="#supported-linters" aria-hidden="true">#</a> Supported linters</h2><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>typescript <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;eslint&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;eslint_d&quot;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>The configured linter(s) must be installed separately.</p>`,6);function O(z,A){const r=a("RouterLink"),t=a("ExternalLinkIcon");return i(),p(l,null,[h,s("p",null,[g,_,k,e(r,{to:"/languages/#manually-configured-servers"},{default:c(()=>[m]),_:1}),f]),v,s("p",null,[b,q,y,x,s("a",S,[w,e(t)]),j,s("a",T,[I,e(t)]),L,N,V]),s("p",null,[B,s("a",E,[C,e(t)]),F]),R],64)}var H=u(d,[["render",O]]);export{H as default};
