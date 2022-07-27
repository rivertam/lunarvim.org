import{e as n}from"./app.ba8a48bd.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const s={},t=n(`<h1 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h1><p>You can configure LunarVim by using the configuration file located in <code>~/.config/lvim/config.lua</code>.</p><p>To get started quickly, copy the sample configuration file</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cp</span> ~/.local/share/lunarvim/lvim/utils/installer/config.example.lua ~/.config/lvim/config.lua
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Many LunarVim internal settings are exposed through the <code>lvim</code> global object. To see a list of all available settings, run this command from either <code>~/.config/lvim/</code> or <code>~/.local/share/lunarvim/lvim</code> to generate an lv-settings.lua file.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>lvim --headless +<span class="token string">&#39;lua require(&quot;lvim.utils&quot;).generate_settings()&#39;</span> +qa <span class="token operator">&amp;&amp;</span> <span class="token function">sort</span> -o lv-settings.lua<span class="token punctuation">{</span>,<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Here is a sample of the output.</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>lvim<span class="token punctuation">.</span>builtin<span class="token punctuation">.</span>telescope<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>initial_mode <span class="token operator">=</span> <span class="token string">&quot;insert&quot;</span>
lvim<span class="token punctuation">.</span>builtin<span class="token punctuation">.</span>telescope<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>layout_config<span class="token punctuation">.</span>horizontal<span class="token punctuation">.</span>mirror <span class="token operator">=</span> <span class="token keyword">false</span>
lvim<span class="token punctuation">.</span>builtin<span class="token punctuation">.</span>telescope<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>layout_config<span class="token punctuation">.</span>preview_cutoff <span class="token operator">=</span> <span class="token number">120</span>
lvim<span class="token punctuation">.</span>builtin<span class="token punctuation">.</span>telescope<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>layout_config<span class="token punctuation">.</span>prompt_position <span class="token operator">=</span> <span class="token string">&quot;bottom&quot;</span>
lvim<span class="token punctuation">.</span>builtin<span class="token punctuation">.</span>telescope<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>layout_config<span class="token punctuation">.</span>vertical<span class="token punctuation">.</span>mirror <span class="token operator">=</span> <span class="token keyword">false</span>
lvim<span class="token punctuation">.</span>builtin<span class="token punctuation">.</span>telescope<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>layout_config<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token number">0.75</span>
lvim<span class="token punctuation">.</span>builtin<span class="token punctuation">.</span>telescope<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>layout_strategy <span class="token operator">=</span> <span class="token string">&quot;horizontal&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>If you want to keep launching LunarVim with the nvim command, add an alias entry to your shell&#39;s config file: <code>alias nvim=lvim</code>. To temporarily revert to the default nvim prefix it with a backslash <code>\\nvim</code>. If you create this alias, you may also want to explicitly set your editor as well <code>export EDITOR=&#39;lvim&#39;</code>. This will tell command line tools like git to use LunarVim as your editor.</p>`,9);function e(o,p){return t}var c=a(s,[["render",e]]);export{c as default};
