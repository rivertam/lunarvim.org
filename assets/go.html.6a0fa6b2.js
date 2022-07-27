import{r as t,o as e,c as o,a as s,b as c,F as l,e as a,d as n}from"./app.ba8a48bd.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const r={},i=a(`<h1 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go</h1><h2 id="install-syntax-highlighting" tabindex="-1"><a class="header-anchor" href="#install-syntax-highlighting" aria-hidden="true">#</a> Install Syntax Highlighting</h2><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>TSInstall <span class="token keyword">go</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="supported-language-servers" tabindex="-1"><a class="header-anchor" href="#supported-language-servers" aria-hidden="true">#</a> Supported language servers</h2><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>go <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;gopls&quot;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="supported-formatters" tabindex="-1"><a class="header-anchor" href="#supported-formatters" aria-hidden="true">#</a> Supported formatters</h2><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>go <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;gofmt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;gofumpt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;goimports&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;golines&quot;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="lsp-settings" tabindex="-1"><a class="header-anchor" href="#lsp-settings" aria-hidden="true">#</a> LSP Settings</h2><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>LspSettings gopls
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Configure <code>json</code> to use auto-completion</p><h2 id="debugger" tabindex="-1"><a class="header-anchor" href="#debugger" aria-hidden="true">#</a> Debugger</h2><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>DIInstall go_delve
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Using delve directly:</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token comment">-- ~/.config/lvim/ftplugin/go.lua</span>
<span class="token keyword">local</span> dap_install <span class="token operator">=</span> require <span class="token string">&quot;dap-install&quot;</span>
dap_install<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token string">&quot;go_delve&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,14),k=n("Using the "),d={href:"https://github.com/mfussenegger/nvim-dap/wiki/Debug-Adapter-installation#go",target:"_blank",rel:"noopener noreferrer"},g=n("vscode-go debug adapter"),b=n(":"),m=a(`<div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token keyword">local</span> dap <span class="token operator">=</span> require <span class="token string">&quot;dap&quot;</span>
dap<span class="token punctuation">.</span>adapters<span class="token punctuation">.</span>go <span class="token operator">=</span> <span class="token punctuation">{</span>
  type <span class="token operator">=</span> <span class="token string">&#39;executable&#39;</span><span class="token punctuation">;</span>
  command <span class="token operator">=</span> <span class="token string">&#39;node&#39;</span><span class="token punctuation">;</span>
  args <span class="token operator">=</span> <span class="token punctuation">{</span>os<span class="token punctuation">.</span><span class="token function">getenv</span><span class="token punctuation">(</span><span class="token string">&#39;HOME&#39;</span><span class="token punctuation">)</span> <span class="token operator">..</span> <span class="token string">&#39;/vscode-go/dist/debugAdapter.js&#39;</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">-- specify the path to the adapter</span>
<span class="token punctuation">}</span>
dap<span class="token punctuation">.</span>configurations<span class="token punctuation">.</span>go <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">{</span>
    type <span class="token operator">=</span> <span class="token string">&quot;go&quot;</span><span class="token punctuation">,</span>
    name <span class="token operator">=</span> <span class="token string">&quot;Attach&quot;</span><span class="token punctuation">,</span>
    request <span class="token operator">=</span> <span class="token string">&quot;attach&quot;</span><span class="token punctuation">,</span>
    processId <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;dap.utils&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>pick_process<span class="token punctuation">,</span>
    program <span class="token operator">=</span> <span class="token string">&quot;\${workspaceFolder}&quot;</span><span class="token punctuation">,</span>
    dlvToolPath <span class="token operator">=</span> vim<span class="token punctuation">.</span>fn<span class="token punctuation">.</span><span class="token function">exepath</span><span class="token punctuation">(</span><span class="token string">&#39;dlv&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    type <span class="token operator">=</span> <span class="token string">&quot;go&quot;</span><span class="token punctuation">,</span>
    name <span class="token operator">=</span> <span class="token string">&quot;Debug curr file&quot;</span><span class="token punctuation">,</span>
    request <span class="token operator">=</span> <span class="token string">&quot;launch&quot;</span><span class="token punctuation">,</span>
    program <span class="token operator">=</span> <span class="token string">&quot;\${file}&quot;</span><span class="token punctuation">,</span>
    dlvToolPath <span class="token operator">=</span> vim<span class="token punctuation">.</span>fn<span class="token punctuation">.</span><span class="token function">exepath</span><span class="token punctuation">(</span><span class="token string">&#39;dlv&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    type <span class="token operator">=</span> <span class="token string">&quot;go&quot;</span><span class="token punctuation">,</span>
    name <span class="token operator">=</span> <span class="token string">&quot;Debug&quot;</span><span class="token punctuation">,</span>
    request <span class="token operator">=</span> <span class="token string">&quot;launch&quot;</span><span class="token punctuation">,</span>
    program <span class="token operator">=</span> <span class="token string">&quot;\${workspaceFolder}&quot;</span><span class="token punctuation">,</span>
    dlvToolPath <span class="token operator">=</span> vim<span class="token punctuation">.</span>fn<span class="token punctuation">.</span><span class="token function">exepath</span><span class="token punctuation">(</span><span class="token string">&#39;dlv&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    type <span class="token operator">=</span> <span class="token string">&quot;go&quot;</span><span class="token punctuation">,</span>
    name <span class="token operator">=</span> <span class="token string">&quot;Debug curr test&quot;</span><span class="token punctuation">,</span>
    request <span class="token operator">=</span> <span class="token string">&quot;launch&quot;</span><span class="token punctuation">,</span>
    mode <span class="token operator">=</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span>
    program <span class="token operator">=</span> <span class="token string">&quot;\${file}&quot;</span><span class="token punctuation">,</span>
    dlvToolPath <span class="token operator">=</span> vim<span class="token punctuation">.</span>fn<span class="token punctuation">.</span><span class="token function">exepath</span><span class="token punctuation">(</span><span class="token string">&#39;dlv&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    type <span class="token operator">=</span> <span class="token string">&quot;go&quot;</span><span class="token punctuation">,</span>
    name <span class="token operator">=</span> <span class="token string">&quot;Debug test&quot;</span><span class="token punctuation">,</span>
    request <span class="token operator">=</span> <span class="token string">&quot;launch&quot;</span><span class="token punctuation">,</span>
    mode <span class="token operator">=</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span>
    program <span class="token operator">=</span> <span class="token string">&quot;\${workspaceFolder}&quot;</span><span class="token punctuation">,</span>
    dlvToolPath <span class="token operator">=</span> vim<span class="token punctuation">.</span>fn<span class="token punctuation">.</span><span class="token function">exepath</span><span class="token punctuation">(</span><span class="token string">&#39;dlv&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div>`,1);function h(q,v){const p=t("ExternalLinkIcon");return e(),o(l,null,[i,s("p",null,[k,s("a",d,[g,c(p)]),b]),m],64)}var x=u(r,[["render",h]]);export{x as default};
