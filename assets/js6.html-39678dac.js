import{_ as i,o as e,c as n,a as l}from"./app-b1fe8d4e.js";const t={},d=l(`<h2 id="定时器" tabindex="-1"><a class="header-anchor" href="#定时器" aria-hidden="true">#</a> 定时器</h2><p>定时器就是在指定时间后执行特定操作, 或者让程序代码每隔一段时间执行一次, 实现间歇操作。在 JavaScript 中, 提供了两组方法用于定时器的实现。</p><ol><li>setTimeout()、clearTimeout() 在指定的毫秒数后调用函数或执行一段代码</li><li>setInterval()、clearInterval() 按照指定的周期(以毫秒计)来调用函数成执行一段代码</li></ol><p>语法格式如下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>setTimeout(调用的函数，[延迟的毫秒数]);
setInterval(调用的函数，[延迟的毫秒数]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>例子: 创建定时任务</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 1 秒后打印111
setTimeout(function() {
  console.log(&quot;111&quot;);
}, 1000);

// 每秒打印一次111
setInterval(function() {
  console.log(&quot;111&quot;);
}, 1000);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>取消定时器: 在实际开发中, 一个网页可能会存在多个定时器, 我们可以通过一个变量来保存定时器的 id。若再定时器启动后, 想要取消该定时器操作, 可以将定时器 id 传递给 clearTimeout()。( clearInterval 同理 )</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const timer = setTimeout(fn, 3000);
clearTimeout(timer);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="案例-60秒内只能发送一次短信" tabindex="-1"><a class="header-anchor" href="#案例-60秒内只能发送一次短信" aria-hidden="true">#</a> 案例: 60秒内只能发送一次短信</h2><p>页面中有一个 input 和一个 button 在文本框中输入手机号, 点击发送按钮发送验证码, 要求编写 HTML 代码实现:</p><ol><li>点击发送按钮后, 该按钮 60 秒内不能再次点击 ( disabled 属性)</li><li>点击发送后, 按钮文字变成 &quot; x 秒后再次点击&quot;</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;body&gt;
  手机号码:&lt;input type=&quot;number&quot;&gt; &lt;button&gt;发送&lt;/button&gt;
  &lt;script&gt;
    let btn = document.querySelector(&#39;button&#39;);
    let time = 10;
    btn.onclick = function () {
      btn.disabled = true;
      btn.innerHTML = &#39; 还剩下 &#39; + time + &#39;秒&#39;;
      let timer = setInterval(function () {
        if (time &lt;= 1) {
          clearInterval(timer);
          btn.disabled = false;
          btn.innerHTML = &#39;发送&#39;;
        } else {
          btn.innerHTML = &#39; 还剩下 &#39; + (time - 1) + &#39;秒&#39;;
          time --;
        }
      }, 1000);
      setTimeout(function () {
        time = 10;
        clearInterval(timer);
      }, 3000);
    }
  &lt;/script&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="案例-轮播图" tabindex="-1"><a class="header-anchor" href="#案例-轮播图" aria-hidden="true">#</a> 案例: 轮播图</h2><p>编写 JavaScript 代码实现轮播图效果。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div id=&quot;wrap&quot;&gt;
  &lt;div class=&quot;picbox&quot;&gt;
    &lt;ul id=&quot;picbox&quot;&gt;
      &lt;li&gt;
        &lt;img src=&quot;img/float1.png&quot; alt=&quot;&quot;&gt;
      &lt;/li&gt;
      &lt;li&gt;
        &lt;img src=&quot;img/float2.png&quot; alt=&quot;&quot;&gt;
      &lt;/li&gt;
      &lt;li&gt;
        &lt;img src=&quot;img/float3.png&quot; alt=&quot;&quot;&gt;
      &lt;/li&gt;
      &lt;li&gt;
        &lt;img src=&quot;img/float4.png&quot; alt=&quot;&quot;&gt;
      &lt;/li&gt;
      &lt;li&gt;
        &lt;img src=&quot;img/float5.png&quot; alt=&quot;&quot;&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
  &lt;ul id=&quot;nav&quot;&gt;
    &lt;li class=&quot;active&quot;&gt;图片1&lt;/li&gt;
    &lt;li&gt;图片2&lt;/li&gt;
    &lt;li&gt;图片3&lt;/li&gt;
    &lt;li&gt;图片4&lt;/li&gt;
    &lt;li&gt;图片5&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),s=[d];function a(v,u){return e(),n("div",null,s)}const c=i(t,[["render",a],["__file","js6.html.vue"]]);export{c as default};
