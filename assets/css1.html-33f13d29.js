import{_ as n,r as a,o as t,c as s,b as e,d,e as l,a as c}from"./app-b1fe8d4e.js";const r={},v=c(`<h2 id="一、初识css" tabindex="-1"><a class="header-anchor" href="#一、初识css" aria-hidden="true">#</a> 一、初识CSS</h2><h3 id="_1-概念" tabindex="-1"><a class="header-anchor" href="#_1-概念" aria-hidden="true">#</a> 1.概念</h3><p>CSS全称叫做Cascading Style Sheet 层叠样式表。</p><p>主要用于为HTML元素选择性的添加样式。</p><p>在前端三件套(HTML CSS JS)中扮演&quot;皮肉&quot;的角色。</p><p>同HTML一样, CSS也不是一门编程语言, 甚至不是标记语言, 他是一门样式表语言。</p><h3 id="_2-使用css" tabindex="-1"><a class="header-anchor" href="#_2-使用css" aria-hidden="true">#</a> 2.使用CSS</h3><p>在html中使用css有两种途径:</p><ol><li>在html文件内使用<code>&lt;style&gt;</code>元素。</li><li>新建一个以<code>.css</code>结尾的文件, 并通过<code>&lt;link&gt;</code>引入到html中。</li></ol><h3 id="_3-基础结构" tabindex="-1"><a class="header-anchor" href="#_3-基础结构" aria-hidden="true">#</a> 3.基础结构</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>p {
  color: red;
  width: 500px;
  border: 1px solid black;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中p我们称之为选择器(多个选择器用逗号隔开), 大括号包裹的每一条用分号隔开的我们称之为声明(color: red;), 声明由属性(color)和属性值(red)组成。</p><h2 id="二、选择器" tabindex="-1"><a class="header-anchor" href="#二、选择器" aria-hidden="true">#</a> 二、选择器</h2><p>前面提到, CSS可以为HTML元素有选择性的添加样式, 方式就是通过CSS的选择器。</p><h3 id="_1-通配符选择器" tabindex="-1"><a class="header-anchor" href="#_1-通配符选择器" aria-hidden="true">#</a> 1.通配符选择器</h3><p>应用于所有元素。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>* {

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-标签选择器" tabindex="-1"><a class="header-anchor" href="#_1-标签选择器" aria-hidden="true">#</a> 1.标签选择器</h3><p>顾名思义, 类型选择器通常是HTML页面中的元素名。</p><h3 id="_2-类选择器" tabindex="-1"><a class="header-anchor" href="#_2-类选择器" aria-hidden="true">#</a> 2.类选择器</h3><p>类选择器是选择元素的<code>class</code>属性, 单一页面中, 一个类可以对应多个元素。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;p class=&quot;red&quot;&gt;Hello world!&lt;/p&gt;

.red {
  color: red;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-id选择器" tabindex="-1"><a class="header-anchor" href="#_3-id选择器" aria-hidden="true">#</a> 3.id选择器</h3><p>id选择器是选择元素的<code>id</code>属性, 单一页面中, 一个id只能对应一个元素。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;p id=&quot;red&quot;&gt;Hello world!&lt;/p&gt;

#red {
  color: red;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-属性选择器" tabindex="-1"><a class="header-anchor" href="#_4-属性选择器" aria-hidden="true">#</a> 4.属性选择器</h3><p>标签属性选择器是选择拥有特定属性的元素。</p><ul><li><code>attr</code>: 指定属性的元素。</li><li><code>attr=val</code>: 属性等于值的元素。</li><li><code>attr*=val</code>: 属性包含指定值的元素。</li><li><code>attr^=val</code>: 属性以指定值开头的元素。</li><li><code>attr$=val</code>: 属性以指定值结尾的元素。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;p class=&quot;eat&quot;&gt;吃饭&lt;/p&gt;
&lt;h1 class=&quot;eat&quot;&gt;吃饭&lt;/p&gt;
&lt;span class=&quot;eat&quot;&gt;吃饭&lt;/p&gt;

.eat {
  color: red;
}
等价于
p[class=&quot;eat&quot;] {
  color: blue;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-组合选择器" tabindex="-1"><a class="header-anchor" href="#_5-组合选择器" aria-hidden="true">#</a> 5.组合选择器</h3><h4 id="后代选择器-a-b" tabindex="-1"><a class="header-anchor" href="#后代选择器-a-b" aria-hidden="true">#</a> 后代选择器: <code>A B</code></h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;head&gt;
  &lt;style&gt;
    div p {
      background: yellow;
    }
  &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;
  &lt;div&gt;
    &lt;p&gt;我是div的儿子p，被选中了，背景变成了黄色&lt;/p&gt;
    &lt;p&gt;我是div的儿子p，被选中了，背景变成了黄色&lt;/p&gt;
    &lt;span&gt;
      &lt;p&gt;我是div的孙子p，被选中了，背景变成了黄色&lt;/p&gt;
    &lt;/span&gt;
  &lt;/div&gt;
  &lt;p&gt;我不在div中，样式没变化&lt;/p&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="相邻兄弟选择器-a-b" tabindex="-1"><a class="header-anchor" href="#相邻兄弟选择器-a-b" aria-hidden="true">#</a> 相邻兄弟选择器: <code>A + B</code></h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;head&gt;
    &lt;style&gt;
        div+p{
            background: yellow;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;我是h1&lt;/h1&gt;
    &lt;p&gt;我是div前面的第一个p，样式没变化&lt;/p&gt;
    &lt;div&gt;
        &lt;h2&gt;我是h2&lt;/2&gt;
        &lt;p&gt;我是div的儿子p，样式没变化&lt;/p&gt;
    &lt;/div&gt;
    &lt;p&gt;我是div后面的第一个p，被选中了，背景变成了黄色&lt;/p&gt;
    &lt;p&gt;我是div后面的第二个p，样式没变化&lt;/p&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="普通兄弟选择器-a-b" tabindex="-1"><a class="header-anchor" href="#普通兄弟选择器-a-b" aria-hidden="true">#</a> 普通兄弟选择器: <code>A ~ B</code></h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;head&gt;
    &lt;style&gt;
        div~p{
            background: yellow;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;p&gt;我是div前面的p，样式没变化&lt;/p&gt;
    &lt;p&gt;我是div前面的p，样式没变化&lt;/p&gt;
    &lt;div&gt;
        &lt;p&gt;我是div里面的p，样式没变化&lt;/p&gt;
        &lt;p&gt;我是div里面的p，样式没变化&lt;/p&gt;
    &lt;/div&gt;
    &lt;p&gt;我是div后面的p，被选中了，背景变成了黄色&lt;/p&gt;
    &lt;p&gt;我是div后面的p，被选中了，背景变成了黄色&lt;/p&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="子代选择器-a-b" tabindex="-1"><a class="header-anchor" href="#子代选择器-a-b" aria-hidden="true">#</a> 子代选择器: <code>A &gt; B</code></h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;head&gt;
    &lt;style&gt;
        div&gt;p{
            background: yellow;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;我是h1&lt;/h1&gt;
    &lt;div&gt;
        &lt;h2&gt;我是h2&lt;/2&gt;
        &lt;p&gt;我是div直接包裹的儿子p，被选中了，背景变成了黄色&lt;/p&gt;
        &lt;p&gt;我是div直接包裹的儿子p，被选中了，背景变成了黄色&lt;/p&gt;
        &lt;span&gt;
            &lt;p&gt;我先被span包裹再被div包裹，是div的孙子p,没有被选中,样式没变化&lt;/p&gt;
        &lt;/span&gt;
    &lt;/div&gt;
    &lt;p&gt;我不在div中，样式没变化&lt;/p&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-伪类选择器" tabindex="-1"><a class="header-anchor" href="#_6-伪类选择器" aria-hidden="true">#</a> 6.伪类选择器</h3><p>伪类选择器是选择元素的特定行为, 如鼠标悬停。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;p&gt;Hello world!&lt;/p&gt;

p:hover {
  color: red;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="条件伪类" tabindex="-1"><a class="header-anchor" href="#条件伪类" aria-hidden="true">#</a> 条件伪类</h4><ul><li><code>:lang()</code>: 基于元素语言来匹配页面元素。</li><li><code>:dir()</code>: 匹配特定文字书写的方向。</li><li><code>:has()</code>: 匹配包含指定元素的元素。</li><li><code>:is()</code>: 匹配指定选择器列表里的元素。</li><li><code>:not()</code>: 皮诶不符合一组选择器的元素。</li></ul><h4 id="行为伪类" tabindex="-1"><a class="header-anchor" href="#行为伪类" aria-hidden="true">#</a> 行为伪类</h4><ul><li><code>:active</code>: 鼠标激活的元素。</li><li><code>:hover</code>: 鼠标悬浮的元素。</li><li><code>::selection</code>: 鼠标选中的元素。</li></ul><h4 id="状态伪类" tabindex="-1"><a class="header-anchor" href="#状态伪类" aria-hidden="true">#</a> 状态伪类</h4><ul><li><code>:target</code>: 当前锚点的元素。</li><li><code>:link</code>: 未访问的链接元素。</li><li><code>:visited</code>: 已访问的链接元素。</li><li><code>:focus</code>: 输入聚焦的表单元素。</li><li><code>:required</code>: 输入必填的表单元素。</li><li><code>:valid</code>: 输入合法的表单元素。</li><li><code>:invalid</code>: 输入非法的表单元素。</li><li><code>:in-range</code>: 输入范围以内的表单元素。</li><li><code>:out-of-range</code>: 输入范围以外的表单元素。</li><li><code>:checked</code>: 选项选中的表单元素。</li><li><code>:optional</code>: 选项可选的表单元素。</li><li><code>:enabled</code>: 事件启用的表单元素。</li><li><code>:disabled</code>: 事件禁用的表单元素。</li><li><code>:read-only</code>: 只读的表单元素。</li><li><code>:read-write</code>: 可读可写的表单元素。</li><li><code>:blank</code>: 输入为空的表单元素。</li><li><code>:current()</code>: 浏览中的元素。</li><li><code>:past()</code>: 已浏览的元素。</li><li><code>:future()</code>: 未浏览的元素。</li></ul><h4 id="结构伪类" tabindex="-1"><a class="header-anchor" href="#结构伪类" aria-hidden="true">#</a> 结构伪类</h4><ul><li><code>:root</code>: 文档的根元素。</li><li><code>:empty</code>: 无子元素的元素。</li><li><code>:first-letter</code>: 元素的首字母。</li><li><code>:first-line</code>: 元素的首行。</li><li><code>:nth-child(n)</code>: 元素中指定顺序索引的元素。</li><li><code>:nth-last-child(n)</code>: 元素中指定逆序索引的元素。</li><li><code>:first-child</code>: 元素中为首的元素。</li><li><code>:last-child</code>: 元素中为尾的元素。</li><li><code>:only-child</code>: 父元素仅有该元素的元素。</li><li><code>:nth-of-type(n)</code>: 标签中指定顺序索引的标签。</li><li><code>:nth-last-of-type(n)</code>: 标签中指定逆序索引的标签。</li><li><code>:first-of-type</code>: 标签中为首的标签。</li><li><code>:last-of-type</code>: 标签中为尾标签。</li><li><code>:only-of-type</code>: 父元素仅有该标签的标签。</li></ul><h4 id="伪元素" tabindex="-1"><a class="header-anchor" href="#伪元素" aria-hidden="true">#</a> 伪元素</h4><ul><li><code>::before</code>: 在元素前插入内容。</li><li><code>::after</code>: 在元素后插入内容</li></ul><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,52),o={href:"https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/CSS_basics",target:"_blank",rel:"noopener noreferrer"},u=e("br",null,null,-1),h={href:"https://juejin.cn/post/6941206439624966152",target:"_blank",rel:"noopener noreferrer"};function b(g,m){const i=a("ExternalLinkIcon");return t(),s("div",null,[v,e("p",null,[e("a",o,[d("CSS基础"),l(i)]),u,e("a",h,[d("稀土掘金:大海我来了"),l(i)])])])}const x=n(r,[["render",b],["__file","css1.html.vue"]]);export{x as default};
