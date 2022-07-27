import{r as i,o as r,c,a as e,b as a,w as o,F as d,d as n,e as t}from"./app.ba8a48bd.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";const u={},h=e("h1",{id:"install",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#install","aria-hidden":"true"},"#"),n(" Install")],-1),m=e("p",null,[n("If you already have an "),e("code",null,"nvim"),n(" directory under "),e("code",null,"~/.config"),n(", don't worry, LunarVim will not overwrite it. Your LunarVim config will be located in "),e("code",null,"~/.config/lvim"),n(".")],-1),b=n("If you want to update an existing LunarVim install, follow the procedures "),g=n("here"),f=n(". If you run the following install script with an existing "),v=e("code",null,"~/.local/share/lunarvim",-1),_=n(" directory, the script will exit and ask you to move it (e.g. "),k=e("code",null,"mv /old /new",-1),y=n(")."),w=e("h2",{id:"prepare",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#prepare","aria-hidden":"true"},"#"),n(" Prepare")],-1),x=e("h3",{id:"install-the-neovim-v0-5-0-and-git-packages",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#install-the-neovim-v0-5-0-and-git-packages","aria-hidden":"true"},"#"),n(" Install the "),e("code",null,"neovim"),n(" (>= v0.5.0) and "),e("code",null,"git"),n(" packages")],-1),I=n("If you want to compile "),L=e("code",null,"neovim",-1),j=n(" from source and install, see "),V=n("here"),S=n("."),T=t('<h3 id="install-pip" tabindex="-1"><a class="header-anchor" href="#install-pip" aria-hidden="true">#</a> Install <code>pip</code></h3><table><thead><tr><th>OS</th><th>Command</th></tr></thead><tbody><tr><td>Mac</td><td>sudo curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py</td></tr><tr><td></td><td>python3 get-pip.py</td></tr><tr><td></td><td>rm get-pip.py</td></tr><tr><td>Ubuntu</td><td>sudo apt install python3-pip &gt;/dev/null</td></tr><tr><td>Arch</td><td>sudo pacman -S python-pip</td></tr><tr><td>Fedora</td><td>sudo dnf install -y pip &gt;/dev/null</td></tr><tr><td>Gentoo</td><td>sudo emerge -avn dev-python/pip</td></tr><tr><td>Termux</td><td>apt install python</td></tr></tbody></table>',2),A={id:"install-fnm-or-another-node-version-manager",tabindex:"-1"},C=e("a",{class:"header-anchor",href:"#install-fnm-or-another-node-version-manager","aria-hidden":"true"},"#",-1),z=n(" Install "),P={href:"https://github.com/Schniz/fnm",target:"_blank",rel:"noopener noreferrer"},E=n("fnm"),M=n(" or another "),U={href:"https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally",target:"_blank",rel:"noopener noreferrer"},N=n("node version manager"),R=t("LunarVim requires a globally-installed <code>npm</code> package called <code>tree-sitter-cli</code>. Installing global <code>npm</code> packages on Linux is not always straightforward, so we recommend using a node version manager (hereafter, nvm) to handle your <code>nodejs</code> and <code>npm</code> versions. You can use an nvm in conjunction with your distribution&#39;s official <code>nodejs</code> and <code>npm</code> packages, but you may find it simpler to just use an nvm by itself and not install <code>nodejs</code> and <code>npm</code> through your package manager at all. We recommend an ",19),B={href:"https://www.youtube.com/watch?v=ClrXIi8qTtI",target:"_blank",rel:"noopener noreferrer"},q=n("nvm called fnm"),H=n(". Users who do not use an nvm to install global "),Y=e("code",null,"npm",-1),F=n(" packages may get an error when the LunarVim install script runs."),W=t(`<h3 id="install-nodejs-and-npm" tabindex="-1"><a class="header-anchor" href="#install-nodejs-and-npm" aria-hidden="true">#</a> Install <code>nodejs</code> and <code>npm</code></h3><p>Your nvm will have a way to install versions of <code>nodejs</code> and <code>npm</code>. With <code>fnm</code> the command to install the LTS version of <code>nodejs</code> (which will include <code>npm</code>) is <code>fnm install --lts</code>. After installing <code>nodejs</code> you should not have any difficulty globally-installing <code>npm</code> packages.</p><h3 id="prepare-path-for-neovim-remote" tabindex="-1"><a class="header-anchor" href="#prepare-path-for-neovim-remote" aria-hidden="true">#</a> Prepare PATH for <code>neovim-remote</code></h3><p>LunarVim also requires a python package called <code>neovim-remote</code>. Upon installation, it will warn that it needs to be added to your PATH environment variable. Add this line to your <code>.bashrc</code> or other shell config file to prevent the warning:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/home/<span class="token environment constant">$USER</span>/.local/bin:<span class="token environment constant">$PATH</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Close and reopen your shell window or run <code>source ~/.bashrc</code> (or other shell config file) to effectuate the changes.</p><p>With the manual prep out of the way, we are ready to install LunarVim!</p><h2 id="run-one-of-the-following-commands" tabindex="-1"><a class="header-anchor" href="#run-one-of-the-following-commands" aria-hidden="true">#</a> Run one of the following commands</h2><h3 id="stable-master-branch" tabindex="-1"><a class="header-anchor" href="#stable-master-branch" aria-hidden="true">#</a> Stable (master branch)</h3><p>No alarms and no surprises:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">bash</span> <span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token function">curl</span> -s https://raw.githubusercontent.com/lunarvim/lunarvim/master/utils/installer/install.sh<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="unstable-rolling-branch" tabindex="-1"><a class="header-anchor" href="#unstable-rolling-branch" aria-hidden="true">#</a> Unstable (rolling branch)</h3><p>All the new features with all the new bugs:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">LVBRANCH</span><span class="token operator">=</span>rolling <span class="token function">bash</span> <span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token function">curl</span> -s https://raw.githubusercontent.com/lunarvim/lunarvim/rolling/utils/installer/install.sh<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,14),G=n("That's it! Please continue on to "),O=n("Quick Start"),Q=n("!"),X=t(`<h2 id="troubleshooting-installation-problems" tabindex="-1"><a class="header-anchor" href="#troubleshooting-installation-problems" aria-hidden="true">#</a> Troubleshooting installation problems</h2><p>If you encounter problems with the installation check the following:</p><ol><li><p>Make sure you have at least version 0.5.0 of <code>neovim</code>. There were some breaking changes in the development of 0.5.0 so upgrade to the newest available version to rule out incompatibilities.</p></li><li><p>Make sure <code>neovim</code> was compiled with <code>luajit</code>:</p></li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># The output of version information should include a line for: LuaJIT</span>
nvim -v
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,4),$={start:"3"},D=n("Make sure all the dependencies listed in "),J=n("Manual Install"),K=n(" are actually installed on your system. Your distribution's package manager will have a way to inspect what you have installed."),Z=n("Make sure you have followed the procedures in "),nn=n("Quick Start"),en=n(" to install and update your plugins."),an=e("li",null,[e("p",null,[n("If you're upgrading your install, sometimes an old "),e("code",null,"packer"),n(" compiled file can cause errors at runtime. Remove the plugin folder with "),e("code",null,"rm -rf ~/.config/lvim/plugin"),n(" and run "),e("code",null,":PackerSync"),n(".")])],-1),sn=n("If you got an EACCES "),on=e("code",null,"npm",-1),tn=n(" error you need to be sure you can install global "),ln=e("code",null,"npm",-1),rn=n(" packages without "),cn=e("code",null,"sudo",-1),dn=n(" as described "),pn={href:"https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally",target:"_blank",rel:"noopener noreferrer"},un=n("here"),hn=n("."),mn=t(`<h2 id="uninstall" tabindex="-1"><a class="header-anchor" href="#uninstall" aria-hidden="true">#</a> Uninstall</h2><p>You can remove LunarVim entirely (while preserving <code>neovim</code>) by running the following commands:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rm</span> -rf ~/.local/share/lunarvim

<span class="token function">sudo</span> <span class="token function">rm</span> /usr/local/bin/lvim

<span class="token function">rm</span> -rf ~/.local/share/applications/lvim.desktop
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="manual-install" tabindex="-1"><a class="header-anchor" href="#manual-install" aria-hidden="true">#</a> Manual Install</h2><p>Install <code>xclip</code>, <code>python3</code>, <code>ripgrep</code> and <code>fzf</code> with the package manager for your distribution:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Ubuntu</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> xclip ripgrep fzf libjpeg8-dev zlib1g-dev python-dev python3-dev libxtst-dev

<span class="token comment"># Arch</span>
<span class="token function">sudo</span> pacman -S xclip python ripgrep fzf

<span class="token comment"># Fedora</span>
<span class="token function">sudo</span> dnf groupinstall <span class="token string">&quot;X Software Development&quot;</span>
<span class="token function">sudo</span> dnf <span class="token function">install</span> -y xclip python3-devel ripgrep fzf
pip3 <span class="token function">install</span> wheel

<span class="token comment"># Gentoo</span>
<span class="token function">sudo</span> emerge -avn sys-apps/ripgrep app-shells/fzf app-misc/dev-python/neovim-remote virtual/jpeg sys-libs/zlib
<span class="token comment"># Optional.   Enable npm USE flag with flaggie</span>
<span class="token function">sudo</span> flaggie net-libs/nodejs +npm
<span class="token function">sudo</span> emerge -avnN net-libs/nodejs

<span class="token comment"># Mac</span>
brew <span class="token function">install</span> lua ripgrep fzf

<span class="token comment"># Termux</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> ripgrep fzf xclip python
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>Install the <code>neovim</code> and <code>tree-sitter-cli</code> packages globally with <code>npm</code>:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -g neovim tree-sitter-cli
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Install the <code>neovim</code>, <code>neovim-remote</code> and <code>pynvim</code> packages with <code>pip3</code>:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pip3 <span class="token function">install</span> neovim neovim-remote pynvim --user
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Clone plugins:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> -p ~/.local/share/lunarvim/site/pack/packer/start/
<span class="token builtin class-name">cd</span> ~/.local/share/lunarvim/site/pack/packer/start/
<span class="token function">git</span> clone https://github.com/wbthomason/packer.nvim.git
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Clone LunarVim:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#Rolling Branch</span>
<span class="token function">git</span> clone --branch rolling https://github.com/LunarVim/lunarvim.git ~/.local/share/lunarvim/lvim

<span class="token comment">#Stable Branch</span>
<span class="token function">git</span> clone --branch master https://github.com/LunarVim/lunarvim.git ~/.local/share/lunarvim/lvim
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Create your configuration file:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> -p ~/.config/lvim
<span class="token function">cp</span> ~/.local/share/lunarvim/lvim/utils/installer/config.example.lua ~/.config/lvim/config.lua
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Install plugins</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#launch LunarVim</span>
lvim

<span class="token comment"># Type this command</span>
:PackerSync
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,18);function bn(gn,fn){const s=i("RouterLink"),l=i("ExternalLinkIcon");return r(),c(d,null,[h,m,e("p",null,[b,a(s,{to:"/drafts/03-updating.html"},{default:o(()=>[g]),_:1}),f,v,_,k,y]),w,x,e("p",null,[I,L,j,a(s,{to:"/drafts/dev/#compiling-neovim-from-source"},{default:o(()=>[V]),_:1}),S]),T,e("h3",A,[C,z,e("a",P,[E,a(l)]),M,e("a",U,[N,a(l)])]),e("p",null,[R,e("a",B,[q,a(l)]),H,Y,F]),W,e("p",null,[G,a(s,{to:"/drafts/02-after-install.html"},{default:o(()=>[O]),_:1}),Q]),X,e("ol",$,[e("li",null,[e("p",null,[D,a(s,{to:"/drafts/dev/#manual-install"},{default:o(()=>[J]),_:1}),K])]),e("li",null,[e("p",null,[Z,a(s,{to:"/drafts/02-after-install.html"},{default:o(()=>[nn]),_:1}),en])]),an,e("li",null,[e("p",null,[sn,on,tn,ln,rn,cn,dn,e("a",pn,[un,a(l)]),hn])])]),mn],64)}var kn=p(u,[["render",bn]]);export{kn as default};
