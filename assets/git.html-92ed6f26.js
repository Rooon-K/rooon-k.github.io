import{_ as n,r,o as s,c as o,b as t,d as e,e as c,f as g,a as i}from"./app-b1fe8d4e.js";const d="/git/1.png",l="/git/2.png",h="/git/3.png",p="/git/4.png",m="/git/5.png",_="/git/6.png",u="/git/7.png",b="/git/8.png",f="/git/9.png",x="/git/10.png",v="/git/11.png",G="/git/12.png",B="/git/13.png",k="/git/14.png",N={},V=i('<h2 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> git</h2><h3 id="什么是git" tabindex="-1"><a class="header-anchor" href="#什么是git" aria-hidden="true">#</a> 什么是git</h3><p>git是一个分布式版本控制<code>工具</code>, 通常用来对软件开发过程中的源代码文件进行管理。</p><h3 id="git的安装" tabindex="-1"><a class="header-anchor" href="#git的安装" aria-hidden="true">#</a> git的安装</h3>',4),q={href:"https://mirrors.tuna.tsinghua.edu.cn/github-release/git-for-windows/git/LatestRelease/Git-2.42.0.2-32-bit.exe",target:"_blank",rel:"noopener noreferrer"},w=t("li",null,"默认选项不动一直点下一步即可。",-1),H=t("li",null,[e("右键桌面, 点击显示更多选项, 出现"),t("code",null,"Git GUI Here"),e("和"),t("code",null,"Git Bash Here"),e("即代表安装成功。 "),t("img",{src:d,alt:""}),t("img",{src:l,alt:""})],-1),E=i(`<h3 id="配置基本信息" tabindex="-1"><a class="header-anchor" href="#配置基本信息" aria-hidden="true">#</a> 配置基本信息</h3><p>点击刚才的<code>Git Bash Here</code>选项, 打开git控制终端, 输入以下两个命令, 配置用户名、邮箱作为身份标识</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git config --global user.name &quot;你的用户名&quot;
git config --global user.email &quot;你的邮箱&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>之后再输入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git config --list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看是否配置成功(最后两行) <img src="`+h+'" alt=""></p><h3 id="git的命令" tabindex="-1"><a class="header-anchor" href="#git的命令" aria-hidden="true">#</a> git的命令</h3><p>在终端输入<code>git --help</code>可查看git的所有命令及简介。 <img src="'+p+'" alt=""></p>',8),I=i('<h2 id="gitlab" tabindex="-1"><a class="header-anchor" href="#gitlab" aria-hidden="true">#</a> gitlab</h2><p>gitlab是一个开源的仓库管理软件, 使用Git作为代码管理工具, 并在此基础上搭建起来的Web服务。<br> 访问gitlab.orangestudio.cn即可进入橙果自建gitlab仓库。 <img src="'+m+'" alt=""></p><h3 id="注册" tabindex="-1"><a class="header-anchor" href="#注册" aria-hidden="true">#</a> 注册</h3><p>点击 <code>立即注册</code> 前往注册页面。<br> 填写真实姓名, 自定义用户名、密码、邮箱。 <img src="'+_+'" alt=""> 点击注册后, 你的邮箱将会收到一封确认邮件, 点击确认后, 等待管理员审批, 通过后将收到审批通过的邮件, 就可以进行登录了。 <img src="'+u+'" alt=""></p><h3 id="创建一个新项目" tabindex="-1"><a class="header-anchor" href="#创建一个新项目" aria-hidden="true">#</a> 创建一个新项目</h3><p>登录成功后, 点击右上角新建项目。 <img src="'+b+'" alt=""> 创建空白项目。 <img src="'+f+'" alt=""> 填写项目名称(不要有中文)、选择群组或用户空间、可见性级别(建议非私有化项目选择内部), 然后点击新建项目, 项目便创建好了。 <img src="'+x+'" alt=""></p><h3 id="将项目代码传到gitlab" tabindex="-1"><a class="header-anchor" href="#将项目代码传到gitlab" aria-hidden="true">#</a> 将项目代码传到gitlab</h3><p>点击<code>克隆</code>, 复制链接 <img src="'+v+'" alt=""> 在桌面右键, 点击 <code>Git Bash Here</code> 或 <code>Open in Terminal</code> 进入终端。 <img src="'+G+'" alt=""> 输入<code>git clone 刚才复制的链接</code> 回车。(第一次使用可能需要输入用户名密码) <img src="'+B+'" alt=""> 项目便被克隆到桌面上了。 <img src="'+k+'" alt=""></p>',8);function L(C,T){const a=r("ExternalLinkIcon");return s(),o("div",null,[V,t("ol",null,[t("li",null,[e("下载安装包"),t("a",q,[e("点击下载"),c(a)]),e("。")]),w,H]),E,g(` 1. git init
2. git clone
3. git add
4. git mv
5. git restore
6. git rm
7. git bisect
8. git diff
9. git grep
10. git log
11. git show
12. git status
13. git branch
14. git commit
15. git merge
16. git rebase
17. git reset
18. git switch
19. git tag
20. git fetch
21. git pull
22. git push `),I])}const R=n(N,[["render",L],["__file","git.html.vue"]]);export{R as default};
