import{_ as t,a as d,b as s,c as v,d as a,e as r,f as u,g as c,h as m,i as o,j as b,k as g,l as q}from"./align-self-974f786e.js";import{_ as h,r as x,o as p,c as f,b as i,d as e,e as l,a as w}from"./app-b1fe8d4e.js";const y={},_=i("h2",{id:"十八、元素的类型与转换",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#十八、元素的类型与转换","aria-hidden":"true"},"#"),e(" 十八、元素的类型与转换")],-1),k={href:"https://rooon-k.top/blogs/2023/liaojieHTML.html",target:"_blank",rel:"noopener noreferrer"},E=w('<p>如果我们希望行内元素具有块元素的某些特性, 如可以设置宽高, 或者需要块元素具有行内元素的某些特性, 如不独占一行排列, 可以使用 <code>display</code> 属性对元素的类型进行转换。</p><p><code>display</code> 属性常用的属性值及含义如下:</p><table><thead><tr><th>属性值</th><th>含义</th></tr></thead><tbody><tr><td>inline</td><td>将元素显示为行内元素( 默认 )</td></tr><tr><td>block</td><td>将元素显示为块元素</td></tr><tr><td>inline-block</td><td>将元素显示为行内块元素</td></tr><tr><td>none</td><td>隐藏元素</td></tr><tr><td>flex/inline-flex</td><td>将元素显示为 flex 容器</td></tr><tr><td>grid/inline-grid</td><td>将元素显示为 grid 容器</td></tr></tbody></table><h2 id="十九、flex-布局" tabindex="-1"><a class="header-anchor" href="#十九、flex-布局" aria-hidden="true">#</a> 十九、flex 布局</h2><h3 id="_1-基本概念" tabindex="-1"><a class="header-anchor" href="#_1-基本概念" aria-hidden="true">#</a> 1.基本概念</h3><p>Flexible Box 模型, 通常被称为 flexbox, 是一种一维的布局模型。它给 flexbox 的子元素之间提供了强大的空间分布和对齐能力。</p><p>学习 flex 布局需要明白 &quot;容器&quot; 和 &quot;轴&quot; 的概念, 采用 flex 布局的元素被称为 &quot;容器&quot;, 他包括外层的父容器 ( flex-container )和内层的子容器 (flex-item), 容器默认存在两根轴: 水平的主轴 ( main axis ) 和垂直的交叉轴 ( cross axis )。主轴的开始位置叫做 <code>main start</code>, 结束位置叫做 <code>main end</code>, 交叉轴的开始位置叫做 <code>cross start</code> 结束位置叫做 <code>cross end</code>。 <img src="'+t+'" alt="flex"></p><h3 id="_2-容器的属性" tabindex="-1"><a class="header-anchor" href="#_2-容器的属性" aria-hidden="true">#</a> 2.容器的属性</h3><p>flex 布局涉及 12 个 CSS 属性, 其中父容器、子容器各6个 <img src="'+d+`" alt="flex"></p><h3 id="_3-父容器的属性" tabindex="-1"><a class="header-anchor" href="#_3-父容器的属性" aria-hidden="true">#</a> 3.父容器的属性</h3><h4 id="_3-1-flex-direction" tabindex="-1"><a class="header-anchor" href="#_3-1-flex-direction" aria-hidden="true">#</a> 3.1 flex-direction</h4><p>flex-direction 属性决定主轴的方向</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>flex-direction:  row | row-reverse | column | column-reverse;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>row (默认值): 主轴为水平方向, 起点在左端。</li><li>row-reverse: 主轴为水平方向, 起点在右端。</li><li>column: 主轴为垂直方向, 起点在上沿。</li><li>column-reverse: 主轴为垂直方向, 起点在下沿。 <img src="`+s+`" alt="flex-direction"></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;

&lt;head&gt;
  &lt;meta charset=&quot;UTF-8&quot;&gt;
  &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
  &lt;title&gt;flex-direction&lt;/title&gt;
  &lt;style&gt;
    * {
      padding: 0;
      margin: 0;
    }

    .container {
      width: 200px;
      height: 200px;
      background-color: rgba(55, 55, 234, 0.729);
      float: left;
      margin: 40px 40px;
      display: flex;
    }

    .item {
      width: 50px;
      height: 50px;
      background-color: rgb(253, 62, 62);
    }

    .row {
      flex-direction: row;
    }

    .row-reverse {
      flex-direction: row-reverse;
    }

    .column {
      flex-direction: column;
    }

    .column-reverse {
      flex-direction: column-reverse;
    }
  &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;
  &lt;div class=&quot;container row&quot;&gt;
    &lt;div class=&quot;item&quot;&gt;1&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;2&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;3&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;container row-reverse&quot;&gt;
    &lt;div class=&quot;item&quot;&gt;1&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;2&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;3&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;container column&quot;&gt;
    &lt;div class=&quot;item&quot;&gt;1&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;2&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;3&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;container column-reverse&quot;&gt;
    &lt;div class=&quot;item&quot;&gt;1&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;2&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;3&lt;/div&gt;
  &lt;/div&gt;
&lt;/body&gt;

&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-2-flx-wrap" tabindex="-1"><a class="header-anchor" href="#_3-2-flx-wrap" aria-hidden="true">#</a> 3.2 flx-wrap</h4><p>flx-wrap 属性控制换行, 默认情况下, 项目都排在一条线上, 无论是否给定宽度, 都是不会主动换行的。 设定一个宽度为 500px 的父元素, 其中包含6个宽度为 100px 的子元素</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>flex-wrap:  nowrap | wrap | wrap-reverse;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果需要换行, 需要设置flex-wrap</p><ul><li>nowrap (默认值): 不换行。</li><li>wrap: 换行, 第一行在上方。</li><li>wrap-reverse: 换行, 第一行在下方。 <img src="`+v+'" alt="flex-wrap1"><img src="'+a+`" alt="flex-wrap2"></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;

&lt;head&gt;
  &lt;meta charset=&quot;UTF-8&quot;&gt;
  &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
  &lt;title&gt;flx-wrap&lt;/title&gt;
  &lt;style&gt;
    * {
      padding: 0;
      margin: 0;
    }
    .container {
      width: 500px;
      height: 200px;
      background-color: rgba(55, 55, 234, 0.729);
      float: left;
      margin: 40px 40px;
      display: flex;
    }
    .item {
      width: 100px;
      height: 100px;
      background-color: rgb(253, 62, 62);
    }
    .wrap {
      flex-wrap: wrap;
    }
    .wrap-reverse {
      flex-wrap: wrap-reverse;
    }
  &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;
  &lt;!-- 不换行 --&gt;
  &lt;div class=&quot;container&quot;&gt;
    &lt;div class=&quot;item&quot;&gt;1&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;2&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;3&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;4&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;5&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;6&lt;/div&gt;
  &lt;/div&gt;
  &lt;!-- 换行 --&gt;
  &lt;div class=&quot;container wrap&quot;&gt;
    &lt;div class=&quot;item&quot;&gt;1&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;2&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;3&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;4&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;5&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;6&lt;/div&gt;
  &lt;/div&gt;
  &lt;!-- 换行, 第一行在下方 --&gt;
  &lt;div class=&quot;container wrap-reverse&quot;&gt;
    &lt;div class=&quot;item&quot;&gt;1&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;2&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;3&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;4&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;5&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;6&lt;/div&gt;
  &lt;/div&gt;
&lt;/body&gt;

&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3-flex-flow" tabindex="-1"><a class="header-anchor" href="#_3-3-flex-flow" aria-hidden="true">#</a> 3.3 flex-flow</h4><p>flex-flow 属性是 flex-direction 属性和 flex-wrap 属性的简写形式, 默认值为 row nowrap</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>flex-flow:  &lt;flex-direction&gt; | &lt;flex-wrap&gt;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-4-justify-content" tabindex="-1"><a class="header-anchor" href="#_3-4-justify-content" aria-hidden="true">#</a> 3.4 justify-content</h4><p>justify-content 属性定义了项目在主轴上的对齐方式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>justify-content:  flex-start | flex-end | center | space-around | space-between | space-evenly;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>flex-start(默认值): 左对齐</li><li>flex-end: 右对齐</li><li>center: 居中</li><li>space-around: 每个项目两侧的间隔相等。</li><li>space-between: 两端对齐, 项目之间的间隔都相等。</li><li>space-evenly: 每个项目的间隔与项目和容器之间的间隔是相等的。 <img src="`+r+`" alt="justify-content"></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;

&lt;head&gt;
  &lt;meta charset=&quot;UTF-8&quot;&gt;
  &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
  &lt;title&gt;justify-content&lt;/title&gt;
  &lt;style&gt;
    * {
      padding: 0;
      margin: 0;
    }

    .container {
      width: 500px;
      height: 200px;
      background-color: rgba(55, 55, 234, 0.729);
      float: left;
      margin: 40px 40px;
      display: flex;
    }

    .item {
      width: 100px;
      height: 100px;
      background-color: rgb(253, 62, 62);
    }

    .flex-start {
      justify-content: flex-start;
    }

    .flex-end {
      justify-content: flex-end;
    }

    .center {
      justify-content: center;
    }

    .space-around {
      justify-content: space-around;
    }

    .space-between {
      justify-content: space-between;
    }

    .space-evenly {
      justify-content: space-evenly;
    }
  &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;
  &lt;div class=&quot;container flex-start&quot;&gt;
    &lt;div class=&quot;item&quot;&gt;1&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;2&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;3&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;container flex-end&quot;&gt;
    &lt;div class=&quot;item&quot;&gt;1&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;2&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;3&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;container center&quot;&gt;
    &lt;div class=&quot;item&quot;&gt;1&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;2&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;3&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;container space-around&quot;&gt;
    &lt;div class=&quot;item&quot;&gt;1&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;2&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;3&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;container space-between&quot;&gt;
    &lt;div class=&quot;item&quot;&gt;1&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;2&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;3&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;container space-evenly&quot;&gt;
    &lt;div class=&quot;item&quot;&gt;1&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;2&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;3&lt;/div&gt;
  &lt;/div&gt;
&lt;/body&gt;

&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-5-align-items" tabindex="-1"><a class="header-anchor" href="#_3-5-align-items" aria-hidden="true">#</a> 3.5 align-items</h4><p>align-items 属性定义项目在交叉轴上如何对齐</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>align-items:  flex-start | flex-end | center | baseline | stretch;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>flex-start: 交叉轴的起点对齐。</li><li>flex-end: 交叉轴的终点对齐。</li><li>center: 交叉轴的中点对齐。</li><li>baseline: 项目的第一行文字的基线对齐。</li><li>stretch(默认值): 如果项目未设置高度或设为auto, 将占满整个容器的高度。 <img src="`+u+`" alt="align-items"></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;

&lt;head&gt;
  &lt;meta charset=&quot;UTF-8&quot;&gt;
  &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
  &lt;title&gt;align-items&lt;/title&gt;
  &lt;style&gt;
    * {
      padding: 0;
      margin: 0;
    }

    .container {
      width: 500px;
      height: 200px;
      background-color: rgba(55, 55, 234, 0.729);
      float: left;
      margin: 40px 40px;
      display: flex;
    }

    .item {
      width: 100px;
      height: 100px;
      background-color: rgb(253, 62, 62);
    }

    .flex-start {
      align-items: flex-start;
    }

    .flex-end {
      align-items: flex-end;
    }
 
    .center {
      align-items: center;
    }

    .baseline {
      align-items: baseline;
    }

    .baseline .item:nth-child(1) {
      margin-top: 30px;
    }

    .baseline .item:nth-child(3) {
      padding-top: 30px;
    }

    .stretch {
      align-items: stretch;
    }

    .stretch div {
      align-items: stretch;
      height: auto;
    }
  &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;
  &lt;div class=&quot;container flex-start&quot;&gt;
    &lt;div class=&quot;item&quot;&gt;1&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;2&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;3&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;container flex-end&quot;&gt;
    &lt;div class=&quot;item&quot;&gt;1&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;2&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;3&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;container center&quot;&gt;
    &lt;div class=&quot;item&quot;&gt;1&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;2&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;3&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;container baseline&quot;&gt;
    &lt;div class=&quot;item&quot;&gt;1&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;2&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;3&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;container stretch&quot;&gt;
    &lt;div class=&quot;item&quot;&gt;1&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;2&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;3&lt;/div&gt;
  &lt;/div&gt;
&lt;/body&gt;

&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-6-align-content" tabindex="-1"><a class="header-anchor" href="#_3-6-align-content" aria-hidden="true">#</a> 3.6 align-content</h4><p>align-content 属性定义了多根轴线的对齐方式, <strong>前提是需要设置flex-wrap: wrap, 否则不会有效</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>align-content: flex-start | flex-end | center | space-between | space-around | stretch;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>flex-start: 与交叉轴的起点对齐。</li><li>flex-end: 与交叉轴的终点对齐。</li><li>center: 与交叉轴的中点对齐。</li><li>space-between: 与交叉轴两端对齐, 轴线之间的间隔平均分布。</li><li>space-around: 每根轴线两侧的间隔都相等。</li><li>stretch(默认值): 轴线占满整个交叉轴。 <img src="`+c+`" alt="align-content"></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;

&lt;head&gt;
  &lt;meta charset=&quot;UTF-8&quot;&gt;
  &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
  &lt;title&gt;align-content&lt;/title&gt;
  &lt;style&gt;
    * {
      padding: 0;
      margin: 0;
    }

    .container {
      width: 500px;
      height: 400px;
      background-color: rgba(55, 55, 234, 0.729);
      float: left;
      margin: 40px 40px;
      display: flex;
      flex-wrap: wrap;
    }

    .item {
      width: 100px;
      height: 100px;
      background-color: rgb(253, 62, 62);
    }

    .flex-start {
      align-content: flex-start;
    }
    .flex-end {
      align-content: flex-end;
    }
    .center {
      align-content: center;
    }
    .space-between {
      align-content: space-between;
    }
    .space-around {
      align-content: space-around;
    }
    .stretch {
      align-content: stretch;
    }
  &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;
  &lt;div class=&quot;container flex-start&quot;&gt;
    &lt;div class=&quot;item&quot;&gt;1&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;2&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;3&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;4&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;5&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;6&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;container flex-end&quot;&gt;
    &lt;div class=&quot;item&quot;&gt;1&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;2&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;3&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;4&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;5&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;6&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;container center&quot;&gt;
    &lt;div class=&quot;item&quot;&gt;1&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;2&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;3&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;4&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;5&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;6&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;container space-between&quot;&gt;
    &lt;div class=&quot;item&quot;&gt;1&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;2&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;3&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;4&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;5&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;6&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;container space-around&quot;&gt;
    &lt;div class=&quot;item&quot;&gt;1&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;2&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;3&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;4&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;5&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;6&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;container stretch&quot;&gt;
    &lt;div class=&quot;item&quot;&gt;1&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;2&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;3&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;4&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;5&lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt;6&lt;/div&gt;
  &lt;/div&gt;
&lt;/body&gt;

&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-子容器的属性" tabindex="-1"><a class="header-anchor" href="#_4-子容器的属性" aria-hidden="true">#</a> 4.子容器的属性</h3><h4 id="_4-1-order" tabindex="-1"><a class="header-anchor" href="#_4-1-order" aria-hidden="true">#</a> 4.1 order</h4><p>order 属性定义项目的排列顺序。数值越小, 排列越靠前, 默认为0, 可以是负数。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>order:  &lt;integer&gt;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+m+`" alt="order"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
  &lt;meta charset=&quot;UTF-8&quot;&gt;
  &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
  &lt;title&gt;order&lt;/title&gt;
  &lt;style&gt;
    * {
      padding: 0;
      margin: 0;
    }

    .container {
      width: 500px;
      height: 400px;
      background-color: rgba(55, 55, 234, 0.729);
      float: left;
      margin: 40px 40px;
      display: flex;
    }

    .item {
      width: 100px;
      height: 100px;
      background-color: rgb(253, 62, 62);
    }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;div class=&quot;container order1&quot;&gt;
    &lt;div class=&quot;item&quot; style=&quot;order: 1;&quot;&gt;1 order: 1&lt;/div&gt;
    &lt;div class=&quot;item&quot; style=&quot;order: 2;&quot;&gt;2 order: 2&lt;/div&gt;
    &lt;div class=&quot;item&quot; style=&quot;order: 3;&quot;&gt;3 order: 3&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;container order2&quot;&gt;
    &lt;div class=&quot;item&quot; style=&quot;order: 1;&quot;&gt;1 order: 1&lt;/div&gt;
    &lt;div class=&quot;item&quot; style=&quot;order: 0;&quot;&gt;2 order: 0&lt;/div&gt;
    &lt;div class=&quot;item&quot; style=&quot;order: -1;&quot;&gt;3 order: -1&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;container order3&quot;&gt;
    &lt;div class=&quot;item&quot; style=&quot;order: 1;&quot;&gt;1 order: 1&lt;/div&gt;
    &lt;div class=&quot;item&quot; style=&quot;order: 2;&quot;&gt;2 order: 2&lt;/div&gt;
    &lt;div class=&quot;item&quot; style=&quot;order: -1;&quot;&gt;3 order: -1&lt;/div&gt;
  &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-2-flex-grow" tabindex="-1"><a class="header-anchor" href="#_4-2-flex-grow" aria-hidden="true">#</a> 4.2 flex-grow</h4><p>flex-grow flex容器中剩余空间的多少应该分配给项目, 也称为扩展规则。最终的项目的宽度为: 自身宽度 + 容器剩余空间分配宽度, flex-grow最大值是1, 超过1按照1来扩展</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>flex-grow:  &lt;number&gt;; /* default 0 */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+o+`" alt="flex-grow"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;

&lt;head&gt;
  &lt;meta charset=&quot;UTF-8&quot;&gt;
  &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
  &lt;title&gt;flex-grow&lt;/title&gt;
  &lt;style&gt;
    * {
      padding: 0;
      margin: 0;
    }

    .container {
      width: 400px;
      height: 400px;
      background-color: rgba(55, 55, 234, 0.729);
      float: left;
      margin: 40px 40px;
      display: flex;
    }

    .item {
      width: 120px;
      height: 100px;
      background-color: rgb(253, 62, 62);
    }
  &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;

  &lt;div class=&quot;container&quot;&gt;
    &lt;div class=&quot;item&quot;&gt;1&lt;/div&gt;
    &lt;div class=&quot;item&quot; style=&quot;flex-grow: 0;&quot;&gt;2 flex-grow: 0&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;container&quot;&gt;
    &lt;div class=&quot;item&quot;&gt;1&lt;/div&gt;
    &lt;div class=&quot;item&quot; style=&quot;flex-grow: 0.5;&quot;&gt;2 flex-grow: 0.5&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;container&quot;&gt;
    &lt;div class=&quot;item&quot;&gt;1&lt;/div&gt;
    &lt;div class=&quot;item&quot; style=&quot;flex-grow: 1;&quot;&gt;2 flex-grow: 1&lt;/div&gt;
  &lt;/div&gt;
&lt;/body&gt;

&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-3-flex-shrink" tabindex="-1"><a class="header-anchor" href="#_4-3-flex-shrink" aria-hidden="true">#</a> 4.3 flex-shrink</h4><p>flex-shrink 属性指定了 flex 元素的收缩规则。flex 元素仅在默认宽度之和大于容器的时候才会发生收缩, 其收缩的大小是依据 flex-shrink 的值, 默认值是1, 0为不收缩</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>flex-shrink:  &lt;number&gt;;  /* default 1 */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+b+`" alt="flex-shrink"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;

&lt;head&gt;
  &lt;meta charset=&quot;UTF-8&quot;&gt;
  &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
  &lt;title&gt;flex-shrink&lt;/title&gt;
  &lt;style&gt;
    * {
      padding: 0;
      margin: 0;
    }

    .container {
      width: 400px;
      height: 400px;
      background-color: rgba(55, 55, 234, 0.729);
      float: left;
      margin: 40px 40px;
      display: flex;
    }

    .item1 {
      width: 200px;
      height: 200px;
      background-color: rgb(253, 62, 62);
    }
    .item2 {
      width: 300px;
      height: 200px;
      background-color: pink;
    }
  &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;
  &lt;div class=&quot;container&quot;&gt;
    &lt;div class=&quot;item1&quot;&gt;200px flex-shrink: 1;&lt;/div&gt;
    &lt;div class=&quot;item2&quot;&gt;300px flex-shrink: 1;&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;container&quot;&gt;
    &lt;div class=&quot;item1&quot; style=&quot;flex-shrink: 0;&quot;&gt;200px flex-shrink: 0;&lt;/div&gt;
    &lt;div class=&quot;item2&quot;&gt;300px flex-shrink: 1;&lt;/div&gt;
  &lt;/div&gt;
&lt;/body&gt;

&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>收缩后子容器宽度计算公式:</p><ol><li>(200+300)所有子项的宽度的和 - (400)容器的宽度 = (100)</li><li>第一个子项的宽度占比：2/5，第二个子项的宽度占比：3/5</li><li>则第一个子项的的宽度为：200 - 2/5 * 100 = 160，第二个子项的宽度为：300 - 3/5 * 100 = 240</li></ol><h4 id="_4-4-flex-basis" tabindex="-1"><a class="header-anchor" href="#_4-4-flex-basis" aria-hidden="true">#</a> 4.4 flex-basis</h4><p>flex-basis 指定了子项在容器主轴方向上的初始大小, 优先级高于自身的宽度width</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>flex-basis:  0 | 100% | auto | &lt;length&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+g+`" alt="flex-basis"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;

&lt;head&gt;
  &lt;meta charset=&quot;UTF-8&quot;&gt;
  &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
  &lt;title&gt;flex-basis&lt;/title&gt;
  &lt;style&gt;
    * {
      padding: 0;
      margin: 0;
    }

    .container {
      width: 400px;
      height: 400px;
      background-color: rgba(55, 55, 234, 0.729);
      float: left;
      margin: 40px 40px;
      display: flex;
    }

    .item {
      flex-basis: 300px;
      width: 200px;
      height: 200px;
      background-color: rgb(253, 62, 62);
    }
  &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;
  &lt;div class=&quot;container&quot;&gt;
    &lt;div class=&quot;item&quot;&gt;flex-basis: 300px;&lt;/div&gt;
  &lt;/div&gt;
&lt;/body&gt;

&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-5-flex" tabindex="-1"><a class="header-anchor" href="#_4-5-flex" aria-hidden="true">#</a> 4.5 flex</h4><p>flex 属性是 flex-grow , flex-shrink 和 flex-basis 的简写, 默认值为 0 1 auto 。后两个属性可选。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>flex:  none | [ &lt;&#39;flex-grow&#39;&gt; &lt;&#39;flex-shrink&#39;&gt;? &lt;&#39;flex-basis&#39;&gt;?]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_4-6-align-self" tabindex="-1"><a class="header-anchor" href="#_4-6-align-self" aria-hidden="true">#</a> 4.6 align-self</h4><p>align-self 属性允许单个项目有与其他项目不一样的对齐方式, 可覆盖 align-items 属性。默认值为 auto , 表示继承父元素的 align-items 属性, 如果没有父元素, 则等同于 stretch 。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>align-self:  auto | flex-start | flex-end | center | baseline | stretch;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+q+`" alt="align-self"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
  &lt;meta charset=&quot;UTF-8&quot;&gt;
  &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
  &lt;title&gt;align-self&lt;/title&gt;
  &lt;style&gt;
    * {
      padding: 0;
      margin: 0;
    }

    .container {
      width: 300px;
      height: 300px;
      background-color: rgba(55, 55, 234, 0.729);
      margin: 40px 40px;
      display: flex;
    }

    .item {
      width: 100px;
      height: 100px;
      background-color: rgb(253, 62, 62);
    }
    .container .flex-start {
      align-self: flex-start;
    }
    .container .center {
      align-self: center;
    }
    .container .flex-end {
      align-self: flex-end;
    }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;div class=&quot;container&quot;&gt;
    &lt;div class=&quot;item flex-start&quot;&gt;align-self: flex-start;&lt;/div&gt;
    &lt;div class=&quot;item center&quot;&gt;align-self: center;&lt;/div&gt;
    &lt;div class=&quot;item flex-end&quot;&gt;align-self: flex-end;&lt;/div&gt;
  &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="练习网站" tabindex="-1"><a class="header-anchor" href="#练习网站" aria-hidden="true">#</a> 练习网站</h3>`,71),C={href:"http://flexboxfroggy.com/#zh-cn",target:"_blank",rel:"noopener noreferrer"};function T(U,j){const n=x("ExternalLinkIcon");return p(),f("div",null,[_,i("p",null,[e("通过html的学习我们知道元素分为三类: 行内元素、块元素、行内块元素。"),i("a",k,[e("复习html"),l(n)])]),E,i("p",null,[i("a",C,[e("flex test"),l(n)])])])}const A=h(y,[["render",T],["__file","css6.html.vue"]]);export{A as default};
