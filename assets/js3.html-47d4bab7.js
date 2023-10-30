import{_ as e,a as t}from"./node-dc58865b.js";import{_ as n,o as i,c as l,a as s}from"./app-b1fe8d4e.js";const a={},d=s(`<h2 id="this" tabindex="-1"><a class="header-anchor" href="#this" aria-hidden="true">#</a> this</h2><p>解析器在调用函数每次都会向函数内部传递一个隐含的参数, 这个隐含的参数就是this, this指向一个对象, 这个对象我们称为函数执行的上下文对象。</p><p>根据函数的调用方式的不同, this会指向不同的对象。</p><ol><li>以函数形式调用, this永远指向window对象。</li><li>以方法形式调用, this就是执行调用这个方法的对象。</li><li>箭头函数的this永远指向window对象。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function fun (a, b) {
  console.log(this);
}
const fun1 = (a, b) =&gt; {
  console.log(this);
}
fun(1, 2); // window
const obj = {
  name: &quot;lisi&quot;,
  sayName: fun,
  sayName1: fun1
}
obj.sayName(); // object
obj.sayName1(); // window
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dom操作" tabindex="-1"><a class="header-anchor" href="#dom操作" aria-hidden="true">#</a> DOM操作</h2><h3 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h3><p>DOM全称Document Object Model文档对象模型。</p><p>js通过DOM来对HTML文档进行操作, 只要理解了DOM就可以随心所欲的操作WEB页面。</p><p><img src="`+e+'" alt=""></p><h3 id="节点" tabindex="-1"><a class="header-anchor" href="#节点" aria-hidden="true">#</a> 节点</h3><p>节点是构成我们页面的最基本的组成部分, 网页中的没一个部分都可以成为是一个节点, 常用节点分为四类:</p><ul><li>文档节点: 整个HTML文档</li><li>元素节点: HTML文档中的HTML标签</li><li>属性节点: 元素的属性</li><li>文本节点: HTML标签中的文本内容</li></ul><p><img src="'+t+`" alt=""></p><h3 id="获取元素" tabindex="-1"><a class="header-anchor" href="#获取元素" aria-hidden="true">#</a> 获取元素</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;p id=&quot;pid1&quot; name=&quot;pname&quot; class=&quot;pclass&quot;&gt;这是文本1&lt;/p&gt;
&lt;p id=&quot;pid2&quot; name=&quot;pname&quot; class=&quot;pclass&quot;&gt;这是文本2&lt;/p&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>1、根据 id 获取元素</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>document.getElementById(&quot;目标元素的id&quot;);
console.log(document.getElementById(&quot;pid1&quot;)); // 文本1
console.log(document.getElementById(&quot;pid2&quot;)); // 文本2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、根据标签获取元素</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>document.getElementsByTagName(&quot;目标元素的标签名&quot;); // 返回一个数组
console.log(document.getElementsByTagName(&quot;p&quot;)[0]); // 文本1
console.log(document.getElementsByTagName(&quot;p&quot;)[1]); // 文本2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、根据 name 获取元素</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>document.getElementsByName(&quot;目标元素的name&quot;); // 返回一个数组
console.log(document.getElementsByName(&quot;pname&quot;)[0]); // 文本1
console.log(document.getElementsByName(&quot;pname&quot;)[1]); // 文本2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、根据类名 className 获取元素</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>document.getElementsByClassName(&quot;目标元素的className&quot;); // 返回一个数组
console.log(document.getElementsByClassName(&quot;pclass&quot;)[0]); // 文本1
console.log(document.getElementsByClassName(&quot;pclass&quot;)[1]); // 文本2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5、querySelector() 和 querySelectorAIl()</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>console.log(document.querySelector(&#39;.pclass&#39;)); // 获取class为pclass的第1个元素
console.log(document.querySelectorAll(&#39;.pclass&#39;)); // 获取class为pclass的元素集合
console.log(document.querySelectorAll(&#39;.pclass&#39;)[0]); // 文本1
console.log(document.querySelectorAll(&#39;.pclass&#39;)[1]); // 文本2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="小练习" tabindex="-1"><a class="header-anchor" href="#小练习" aria-hidden="true">#</a> 小练习</h3><p>编写index.js, 将以下代码中的两个 label 和 input 节点通过console.log打印在控制台中</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
  &lt;meta charset=&quot;UTF-8&quot;&gt;
  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
  &lt;title&gt;Document&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;div&gt;
    &lt;label for=&quot;&quot; name=&quot;username&quot;&gt;用户名&lt;/label&gt;
    &lt;input type=&quot;text&quot; id=&quot;username&quot;&gt;
    &lt;label for=&quot;&quot; name=&quot;password&quot;&gt;密码&lt;/label&gt;
    &lt;input type=&quot;text&quot; id=&quot;password&quot;&gt;
    &lt;button&gt;点击我&lt;/button&gt;
  &lt;/div&gt;
  &lt;script src=&quot;./index.js&quot;&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h2><h3 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h3><p>在获取到元素后, 如果需要为元素添加交互行为, 这就需要用到事件来实现。</p><p>例如, 当鼠标指针经过导航栏中的某一项时, 自动展开二级菜单, 或者在阅读文章时, 选中文本后自动弹出分享、复制等选项。</p><h3 id="事件三要素" tabindex="-1"><a class="header-anchor" href="#事件三要素" aria-hidden="true">#</a> 事件三要素</h3><ol><li>事件源</li><li>事件类型</li><li>事件处理程序</li></ol><p>以上三要素可以简单理解为&quot;谁触发了事件&quot;、&quot;触发了什么事件&quot;、&quot;触发事件以后要做什么&quot; 。</p><h3 id="绑定事件" tabindex="-1"><a class="header-anchor" href="#绑定事件" aria-hidden="true">#</a> 绑定事件</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;button id=&quot;btn&quot;&gt;我是一个按钮&lt;/button&gt;

const btn = document.getElementById(&#39;btn&#39;); // 获取元素

// 绑定事件
btn.onclick = function() {
  console.log(&quot;按钮被点击了&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="小练习-1" tabindex="-1"><a class="header-anchor" href="#小练习-1" aria-hidden="true">#</a> 小练习</h3><p>在index.js中编写代码, 实现点击按钮, 在控制台输出两个 input 中的内容。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
  &lt;meta charset=&quot;UTF-8&quot;&gt;
  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
  &lt;title&gt;Document&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;div&gt;
    &lt;label for=&quot;&quot; name=&quot;username&quot;&gt;用户名&lt;/label&gt;
    &lt;input type=&quot;text&quot; id=&quot;username&quot;&gt;
    &lt;label for=&quot;&quot; name=&quot;password&quot;&gt;密码&lt;/label&gt;
    &lt;input type=&quot;text&quot; id=&quot;password&quot;&gt;
    &lt;button&gt;点击我&lt;/button&gt;
  &lt;/div&gt;
  &lt;script src=&quot;./index.js&quot;&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,41),u=[d];function o(c,r){return i(),l("div",null,u)}const b=n(a,[["render",o],["__file","js3.html.vue"]]);export{b as default};
