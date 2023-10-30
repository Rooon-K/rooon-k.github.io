import{_ as i,o as e,c as l,a as n}from"./app-b1fe8d4e.js";const t={},d=n(`<h2 id="操作元素样式" tabindex="-1"><a class="header-anchor" href="#操作元素样式" aria-hidden="true">#</a> 操作元素样式</h2><p>js除了可以操作元素内容和属性外, 还可以操作元素样式。<br> 我们通过 元素对象.style.样式属性名 的方式操作。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div id=&quot;box&quot;&gt;aaa&lt;/div&gt;

&lt;script&gt;
	const ele = document.querySelector(&#39;#box&#39;);
	ele.style.width = &#39;100px&#39;;
	ele.style.height = &#39;100px&#39;;
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果等效于</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#box {
	width: 100px;
	height: 100px;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们也可以通过修改类名的方式更改元素样式: 元素对象.className</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div id=&quot;box&quot; class=&quot;first&quot;&gt;aaa&lt;/div&gt;

&lt;style&gt;
.first {
  background-color: red;
}
.second {
  background-color: blue;
}
&lt;/style&gt;

&lt;script&gt;
	const ele = document.querySelector(&#39;#box&#39;);
	ele.onclick = function() {
    ele.className = &#39;second&#39;
  }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="小练习1" tabindex="-1"><a class="header-anchor" href="#小练习1" aria-hidden="true">#</a> 小练习1</h3><p>要求: 为一个文本框添加提示文本。当单击文本框时, 里面的默认提示文字( 手机 )会隐藏, 鼠标指针离开文本框, 里面的文字会显示出来。</p><p>具体实现步骤如下:</p><ol><li>为元素绑定获取文本框焦点事件 onfocus 和失去焦点事件 onblur。</li><li>如果获取焦点时, 文字颜色改为 blue, 需要判断表单里面的内容是否为默认文字, 如果是默认文字, 就清空表单内容。</li><li>如果失去焦点, 文字颜色改为 red, 需要判断表单内容是否为空；如果为空, 则表单里边的内容改为默认文字。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;body&gt;
  &lt;input type=&quot;text&quot; value=&quot;手机&quot; style=&quot;color:red&quot;&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="小练习2" tabindex="-1"><a class="header-anchor" href="#小练习2" aria-hidden="true">#</a> 小练习2</h3><p>编写 JavaScript 代码, 实现单击按钮, 改变当前按钮背景色效果( 当前按钮背景色变为粉色, 其他按钮背景色还原 )</p><p>具体实现步骤如下:</p><ol><li>获取所有按钮元素</li><li>for 循环遍历每一个按钮元素</li><li>给每个按钮元素添加 onclick 事件,</li><li>先 for循环 把所有按钮背景颜色去掉</li><li>在设置当前元素背景颜色</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;button&gt;按钮1&lt;/button&gt;
&lt;button&gt;按钮2&lt;/button&gt;
&lt;button&gt;按钮3&lt;/button&gt;
&lt;button&gt;按钮4&lt;/button&gt;
&lt;button&gt;按钮5&lt;/button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="小练习3" tabindex="-1"><a class="header-anchor" href="#小练习3" aria-hidden="true">#</a> 小练习3</h3><p>编写 JavaScript 代码, 实现点击li展示对应内容, 并高亮。</p><p>具体实现步骤如下:</p><ol><li>获取所有 li 元素</li><li>for 循环遍历每一个 li 元素</li><li>给每个 li 元素添加 onclick 事件</li><li>for循环 把所有 li 背景颜色, 所有item的 className 改为 item</li><li>在设置当前 li 元素 className 为 current, 设置对应 item 的className 为 item active</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;

&lt;head&gt;
  &lt;meta charset=&quot;UTF-8&quot;&gt;
  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
  &lt;title&gt;Document&lt;/title&gt;

  &lt;style&gt;
    .item {
      display: none;
      background-color: yellow;
    }
    .active {
      display: block;
    }
    .current {
      color: red;
    }
  &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;
  &lt;div class=&quot;tab&quot;&gt;
    &lt;div class=&quot;tab_list&quot;&gt;
      &lt;ul&gt;
        &lt;li class=&quot;current&quot;&gt;商品介绍&lt;/li&gt;
        &lt;li&gt;规格与包装&lt;/li&gt;
        &lt;li&gt;售后保障&lt;/li&gt;
        &lt;li&gt;商品评价(50000)&lt;/li&gt;
        &lt;li&gt;手机社区&lt;/li&gt;
        &lt;/u1&gt;
    &lt;/div&gt;
    &lt;div class=&quot;tab_con&quot;&gt;
      &lt;div class=&quot;item active&quot;&gt;商品介绍模块内容&lt;/div&gt;
      &lt;div class=&quot;item&quot;&gt;规格与包装模块内容&lt;/div&gt;
      &lt;div class=&quot;item&quot;&gt;售后保障模块内容&lt;/div&gt;
      &lt;div class=&quot;item&quot;&gt;商品评价(50000)模块内容&lt;/div&gt;
      &lt;div class=&quot;item&quot;&gt;手机社区模块内容&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;

&lt;/body&gt;

&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),s=[d];function a(v,c){return e(),l("div",null,s)}const r=i(t,[["render",a],["__file","js4.html.vue"]]);export{r as default};
