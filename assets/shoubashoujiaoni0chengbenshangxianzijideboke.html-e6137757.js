import{_ as d,r as t,o as r,c as l,b as e,d as i,e as s,a as n}from"./app-b1fe8d4e.js";const c={},o=e("div",{class:"custom-container tip"},[e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("circle",{cx:"12",cy:"12",r:"9"}),e("path",{d:"M12 8h.01"}),e("path",{d:"M11 12h1v4h1"})])]),e("p",{class:"custom-container-title"},"需求分析"),e("p",null,"学习过程中可以通过写博客来巩固自己学到的知识, 博客搭建需要购买服务器、域名等, 成本较高, 从0搭建时间长。")],-1),u=n('<h2 id="一、技术解决" tabindex="-1"><a class="header-anchor" href="#一、技术解决" aria-hidden="true">#</a> 一、技术解决</h2><ol><li>vuepress静态网站生成器</li><li>github pages静态网站部署</li><li>Netlify加速, 提升访问速度</li></ol><h2 id="二、实操开始" tabindex="-1"><a class="header-anchor" href="#二、实操开始" aria-hidden="true">#</a> 二、实操开始</h2><h3 id="_2-1-安装nodejs环境" tabindex="-1"><a class="header-anchor" href="#_2-1-安装nodejs环境" aria-hidden="true">#</a> 2.1 安装nodejs环境</h3>',4),v={href:"https://github.com/coreybutler/nvm-windows/releases",target:"_blank",rel:"noopener noreferrer"},h=n(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nvm install 16.17.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-2-安装并启动vuepress" tabindex="-1"><a class="header-anchor" href="#_2-2-安装并启动vuepress" aria-hidden="true">#</a> 2.2 安装并启动vuepress</h3><p>安装nodejs包管理工具 创建自己网站的目录。</p><p>安装vuepress及主题</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install -g @vuepress-reco/theme-cli@1.0.7
theme-cli init
npm install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>至此我们成功构建起了</p><h3 id="_2-3-安装git" tabindex="-1"><a class="header-anchor" href="#_2-3-安装git" aria-hidden="true">#</a> 2.3 安装git</h3><p>使用我发的安装包, 一直下一步。</p><p>配置git</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ git config --global user.name 用户名

$ git config --global user.password 密码

$ git config --global user.email 邮箱
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-创建github账号" tabindex="-1"><a class="header-anchor" href="#_2-4-创建github账号" aria-hidden="true">#</a> 2.4 创建github账号</h3>`,13),m={href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"},b=n(`<p>注册一个自己的账号。</p><p>创建github仓库, 仓库名为[username].github.io</p><p>修改build输出目录为dist 返回博客文件夹, 运行命令<code>npm run build</code></p><p>进入dist文件夹, 执行命令:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git init
git add -A
git commit -m &quot;deploy&quot;
git branch -M main
git remote add origin [git@github.com:Rooon-K/1.git]
git push -u origin main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时你的代码便传到了github仓库。</p><h3 id="_2-5-github-pages" tabindex="-1"><a class="header-anchor" href="#_2-5-github-pages" aria-hidden="true">#</a> 2.5 github Pages</h3><p>点击settings, 左侧菜单栏进去Pages。</p><h3 id="_2-6-netlify加速" tabindex="-1"><a class="header-anchor" href="#_2-6-netlify加速" aria-hidden="true">#</a> 2.6 Netlify加速</h3>`,9),p={href:"https://app.netlify.com/drop",target:"_blank",rel:"noopener noreferrer"},g=n(`<p>使用github账号登录。</p><p>导入仓库。</p><p>加速完成。</p><h3 id="_2-7自动化部署" tabindex="-1"><a class="header-anchor" href="#_2-7自动化部署" aria-hidden="true">#</a> 2.7自动化部署</h3><p>创建deploy.sh</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd ./.vuepress/dist

# 如果是发布到自定义域名
# echo &#39;rooon-k.top&#39; &gt; CNAME

git init
git add -A
git commit -m &quot;deploy&quot;
git branch -M main
git remote add origin [仓库链接]
git push -f origin main

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function x(_,f){const a=t("ExternalLinkIcon");return r(),l("div",null,[o,u,e("p",null,[i("下载nodejs版本管理工具"),e("a",v,[i("下载nvm"),s(a)])]),h,e("p",null,[i("访问"),e("a",m,[i("github官网"),s(a)])]),b,e("p",null,[i("访问"),e("a",p,[i("Netlify官网"),s(a)])]),g])}const w=d(c,[["render",x],["__file","shoubashoujiaoni0chengbenshangxianzijideboke.html.vue"]]);export{w as default};
