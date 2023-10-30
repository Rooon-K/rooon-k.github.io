import{_ as n,r as a,o,c,b as e,d,e as l,a as r}from"./app-b1fe8d4e.js";const t="/go/1.png",s="/go/2.png",m={},u=e("h2",{id:"下载和安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#下载和安装","aria-hidden":"true"},"#"),d(" 下载和安装")],-1),v={href:"https://golang.google.cn/dl/",target:"_blank",rel:"noopener noreferrer"},h=r('<h2 id="idea-配置-go-环境" tabindex="-1"><a class="header-anchor" href="#idea-配置-go-环境" aria-hidden="true">#</a> IDEA 配置 GO 环境</h2><p>下载插件 GO、GO Template</p><h2 id="第一个-go-程序" tabindex="-1"><a class="header-anchor" href="#第一个-go-程序" aria-hidden="true">#</a> 第一个 GO 程序</h2><p>在 IDEA 中创建一个 go 项目。 <img src="'+t+`" alt=""></p><p>编写一个 <code>Hello World!</code> go 程序。<br> 创建一个 <code>1.go</code> 文件并编写以下代码。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package main
import &quot;fmt&quot;

func main() {
	fmt.Printf(&quot;Hello World!&quot;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>点击右上角的运行按钮, 下方终端中即可看到输出的文本 <code>Hello World!</code><img src="`+s+`" alt=""></p><h2 id="代码解析" tabindex="-1"><a class="header-anchor" href="#代码解析" aria-hidden="true">#</a> 代码解析</h2><ol><li>第一行内容为 <code>package main</code>, 他表示这个源文件属于 <code>main</code> 包。<code>main</code> 包是每个 <code>Go</code> 应用程序都包含的包, 有且只有一个, 可以对应 C 语言中的 <code>main.c</code> 文件。</li><li>第二行内容为 <code>import &quot;fmt&quot;</code>, 他的作用是导入名为 <code>fmt</code> 的包, 目的在于后面使用 <code>fmt</code> 报提供的能力, 导入的包必须被使用。</li><li>第四行开始到最后是 <code>main</code> 函数, 对应 C 语言中的 <code>main</code> 函数, 它是 <code>Go</code> 程序的入口函数, 是程序运行的起点, 这个函数必须存在且只能存在一个, 且必须声明在 <code>main</code> 包中。任何一个 <code>Go</code> 函数都要求使用成对的大括号将函数包裹起来。</li><li>第五行调用了 <code>fmt</code> 包中的 <code>Printf()</code> 函数, 这个函数的作用是将特定的内容输出到控制台上。</li><li>第六航是 <code>main()</code> 函数的结束。</li></ol><h2 id="添加注释" tabindex="-1"><a class="header-anchor" href="#添加注释" aria-hidden="true">#</a> 添加注释</h2><h3 id="单行注释" tabindex="-1"><a class="header-anchor" href="#单行注释" aria-hidden="true">#</a> 单行注释</h3><p>单行注释也称为行注释, 格式为以双斜杠 <code>//</code> 作为开头的一行。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package main
import &quot;fmt&quot;

func main(){
  //输出&quot;Hello World!&quot;文字
  fmt.Printf(&quot;Hello World!&quot;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多行注释" tabindex="-1"><a class="header-anchor" href="#多行注释" aria-hidden="true">#</a> 多行注释</h3><p>多行注释也称为块注释, 格式为以 <code>/*</code> 为开头, 以 <code>*/</code> 为结束的一行或多行。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package main
import &quot;fmt&quot;

/*
这一个块注释
包裹在其中的内容都不会被执行
*/
func main() {
	fmt.Printf(&quot;Hello World!&quot;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function p(b,g){const i=a("ExternalLinkIcon");return o(),c("div",null,[u,e("p",null,[d("点击链接选择对应操作系统版本根据导引指示进行安装"),e("a",v,[d("下载链接"),l(i)])]),h])}const x=n(m,[["render",p],["__file","go1.html.vue"]]);export{x as default};
