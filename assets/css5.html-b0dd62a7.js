import{_ as i,a as n,b as e,c as l,d}from"./position4-6eda2d09.js";import{_ as s,o as t,c as v,a}from"./app-b1fe8d4e.js";const r={},c=a(`<h2 id="十六、元素的定位" tabindex="-1"><a class="header-anchor" href="#十六、元素的定位" aria-hidden="true">#</a> 十六、元素的定位</h2><p>浮动布局虽然灵活, 但是无法对元素的位置进行精确控制。在 CSS 中, 通过定位属性可以实现元素的精确定位。</p><h3 id="元素的定位属性" tabindex="-1"><a class="header-anchor" href="#元素的定位属性" aria-hidden="true">#</a> 元素的定位属性</h3><ol><li>定位模式</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>选择器 {
  position: 属性值;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>常用属性值:</p><table><thead><tr><th>值</th><th>描述</th></tr></thead><tbody><tr><td>static</td><td>静态定位(默认值)</td></tr><tr><td>relative</td><td>相对定位, 相对于其原文档流的位置进行定位</td></tr><tr><td>absolute</td><td>绝对定位, 相对于其上一个已经定位的父元素进行定位</td></tr><tr><td>fixed</td><td>固定定位, 相对于浏览器窗口进行定位</td></tr></tbody></table><ol start="2"><li>边偏移</li></ol><p>在 CSS 中通过边偏移属性 top、bottom、left、right 来精确定义元素的位置。<br> 边偏移设置方式:</p><table><thead><tr><th>属性</th><th>描述</th></tr></thead><tbody><tr><td>top</td><td>顶端偏移量, 定义元素相对于其父元素上边线的距离</td></tr><tr><td>bottom</td><td>底部偏移量, 定义元素相对于其父元素下边线的距离</td></tr><tr><td>left</td><td>左侧偏移量, 定义元素相对于其父元素左边线的距离</td></tr><tr><td>right</td><td>右偏移量, 定义元素相对于其父元素右边线的距离</td></tr></tbody></table><p>示例:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>position: relative; /* 相对定位 */
top: 50px; /* 距离顶部边线 50px */
left: 20px; /* 距离左边线 20px */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="static-静态定位" tabindex="-1"><a class="header-anchor" href="#static-静态定位" aria-hidden="true">#</a> static 静态定位</h3><p>静态定位是元素默认定位方式, 在静态定位状态下, 无法通过边偏移属性来改变元素的位置。</p><h3 id="relative-相对定位" tabindex="-1"><a class="header-anchor" href="#relative-相对定位" aria-hidden="true">#</a> relative 相对定位</h3><p>相对定位是将元素相对于他在标准文档流中的位置进行定位, 当 position 的取值为 relative 时, 可以将元素定位于相对位置。并可以通过边偏移属性改变元素的位置。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!doctype html&gt;
&lt;html&gt;

&lt;head&gt;
  &lt;meta charset=&quot;utf-8&quot;&gt;
  &lt;title&gt;元素的定位&lt;/title&gt;
  &lt;style type=&quot;text/css&quot;&gt;
    body {
      margin: 0px;
      padding: 0px;
      font-size: 18px;
      font-weight: bold;
    }

    .father {
      margin: 10px auto;
      width: 300px;
      height: 300px;
      padding: 10px;
      background: #ccc;
      border: 1px solid #000;
    }

    .child01,
    .child02,
    .child03 {
      width: 100px;
      height: 50px;
      line-height: 50px;
      background: #ff0;
      border: 1px solid #000;
      margin: 10px 0px;
      text-align: center;
    }

    .child02 {
      position: relative;
      /*相对定位*/
      left: 150px;
      /*距左边线150px*/
      top: 100px;
      /*距顶部边线100px*/
    }
  &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;
  &lt;div class=&quot;father&quot;&gt;
    &lt;div class=&quot;child01&quot;&gt;child-01&lt;/div&gt;
    &lt;div class=&quot;child02&quot;&gt;child-02&lt;/div&gt;
    &lt;div class=&quot;child03&quot;&gt;child-03&lt;/div&gt;
&lt;/body&gt;

&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+i+`" alt=""></p><h3 id="absolute-绝对定位" tabindex="-1"><a class="header-anchor" href="#absolute-绝对定位" aria-hidden="true">#</a> absolute 绝对定位</h3><p>绝对定位是将元素依据最近的已经定位的( 设置绝对、相对、固定定位 )父元素进行定位, 若所有父元素都没有定位, 则一句 body 元素进行定位。当 position 的取值为 absolute 时, 可以将元素的定位模式设置为绝对定位。<br> 将上面案例的 36 ~ 43 行替换为以下代码:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.child02 {
  position: absolute; /*绝对定位*/
  left: 150px; /*距左边线150px*/
  top: 100px; /*距项部边线100px*/
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码中, child02 被设置为绝对定位, 由于其所有父元素没有被设置定位, 因此他直接相对于 body 元素定位。<br> 若要让其相对父元素以绝对定位偏移, 可设置父元素 <code>position: relative;</code> 但不设置偏移量。<br> 案例:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!doctype html&gt;
&lt;html&gt;

&lt;head&gt;
  &lt;meta charset=&quot;utf-8&quot;&gt;
  &lt;title&gt;子元素相对于直接父元素定位&lt;/title&gt;
  &lt;style type=&quot;text/css&quot;&gt;
    .father {
      margin: 10px auto;
      width: 300px;
      height: 300px;
      padding: 10px;
      background: #ccc;
      border: 1px solid #000;
      position: relative;
      /*相对定位，但不设置偏移量。*/
    }

    .child01,
    .child02,
    .child03 {
      width: 100px;
      height: 50px;
      line-height: 50px;
      background: #ff0;
      border: 1px solid #000;
      margin: 10px 0px;
      text-align: center;
    }

    .child02 {
      position: absolute;
      /*绝对定位*/
      left: 150px;
      /*距左边线150px*/
      top: 100px;
      /*距顶部边线100px*/
    }
  &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;

  &lt;div class=&quot;father&quot;&gt;
    &lt;div class=&quot;child01&quot;&gt;child-01&lt;/div&gt;
    &lt;div class=&quot;child02&quot;&gt;child-02&lt;/div&gt;
    &lt;div class=&quot;child03&quot;&gt;child-03&lt;/div&gt;
  &lt;/div&gt;

&lt;/body&gt;

&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+n+`" alt=""> 在上述代码中, 第 15 行对父元素设置 position: relative; 但不设置偏移量, 同时 child02 依旧为绝对定位, 并通过偏移属性进行精确定位。</p><p>运行后子元素相对父元素进行偏移。</p><p>注意:</p><ol><li>如果仅设置绝对定位, 不设置偏移, 则元素位置不变, 但他会脱离文档流, 会与后续上移元素重叠。<br> 案例:</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!doctype html&gt;
&lt;html&gt;

&lt;head&gt;
  &lt;meta charset=&quot;utf-8&quot;&gt;
  &lt;title&gt;子元素相对于直接父元素定位&lt;/title&gt;
  &lt;style type=&quot;text/css&quot;&gt;
    .father {
      margin: 10px auto;
      width: 300px;
      height: 300px;
      padding: 10px;
      background: #ccc;
      border: 1px solid #000;
    }

    .child01,
    .child02,
    .child03 {
      width: 100px;
      height: 50px;
      line-height: 50px;
      background: #ff0;
      border: 1px solid #000;
      margin: 10px 0px;
      text-align: center;
    }

    .child02 {
      position: absolute; /* 不设置偏移量 */
    }
  &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;

  &lt;div class=&quot;father&quot;&gt;
    &lt;div class=&quot;child01&quot;&gt;child-01&lt;/div&gt;
    &lt;div class=&quot;child02&quot;&gt;child-02&lt;/div&gt;
    &lt;div class=&quot;child03&quot;&gt;child-03&lt;/div&gt;
  &lt;/div&gt;

&lt;/body&gt;

&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+e+`" alt=""> 2. 定义多个边偏移属性时, 如果 left 和 right 冲突, 以 left 为准, top 和 bottom 冲突, 以 top 为准。</p><h3 id="fixed-固定定位" tabindex="-1"><a class="header-anchor" href="#fixed-固定定位" aria-hidden="true">#</a> fixed 固定定位</h3><p>固定定位是绝对定位的一种特殊形式, 他以浏览器窗口作为参照物定义网页元素。当 position 的取值为 fixed 时, 即可将元素定位模式设置为固定定位。</p><h2 id="十七、z-index-层叠等级属性" tabindex="-1"><a class="header-anchor" href="#十七、z-index-层叠等级属性" aria-hidden="true">#</a> 十七、z-index 层叠等级属性</h2><p>当多个元素重叠时, 想要调整元素堆叠顺序, 可以对定位元素应用 z-index 层叠等级属性, 其取值可为正整数、负整数和 0 。默认值为 0 , 取值越大, 定位元素在层叠元素中越靠上。</p><p>注意: z-index 属性仅对定位元素生效。 案例:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!doctype html&gt;
&lt;html&gt;

&lt;head&gt;
  &lt;meta charset=&quot;utf-8&quot;&gt;
  &lt;title&gt;子元素相对于直接父元素定位&lt;/title&gt;
  &lt;style type=&quot;text/css&quot;&gt;
    .father {
      margin: 10px auto;
      width: 300px;
      height: 300px;
      padding: 10px;
      background: #ccc;
      border: 1px solid #000;
    }

    .child01,
    .child02,
    .child03 {
      width: 100px;
      height: 50px;
      line-height: 50px;
      background: #ff0;
      border: 1px solid #000;
      margin: 10px 0px;
      text-align: center;
    }

    .child02 {
      position: absolute; /* 不设置偏移量 */
    }

    .child03 {
      position: absolute; /* 设置定位 */
    }
  &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;

  &lt;div class=&quot;father&quot;&gt;
    &lt;div class=&quot;child01&quot;&gt;child-01&lt;/div&gt;
    &lt;div class=&quot;child02&quot;&gt;child-02&lt;/div&gt;
    &lt;div class=&quot;child03&quot;&gt;child-03&lt;/div&gt;
  &lt;/div&gt;

&lt;/body&gt;

&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+l+`" alt=""> 将 child02 的 z-index 设置为 1 。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!doctype html&gt;
&lt;html&gt;

&lt;head&gt;
  &lt;meta charset=&quot;utf-8&quot;&gt;
  &lt;title&gt;子元素相对于直接父元素定位&lt;/title&gt;
  &lt;style type=&quot;text/css&quot;&gt;
    .father {
      margin: 10px auto;
      width: 300px;
      height: 300px;
      padding: 10px;
      background: #ccc;
      border: 1px solid #000;
    }

    .child01,
    .child02,
    .child03 {
      width: 100px;
      height: 50px;
      line-height: 50px;
      background: #ff0;
      border: 1px solid #000;
      margin: 10px 0px;
      text-align: center;
    }

    .child02 {
      position: absolute; /* 不设置偏移量 */
      z-index: 1; /* 层级为 1 */
    }

    .child03 {
      position: absolute; /* 设置定位 */
    }
  &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;

  &lt;div class=&quot;father&quot;&gt;
    &lt;div class=&quot;child01&quot;&gt;child-01&lt;/div&gt;
    &lt;div class=&quot;child02&quot;&gt;child-02&lt;/div&gt;
    &lt;div class=&quot;child03&quot;&gt;child-03&lt;/div&gt;
  &lt;/div&gt;

&lt;/body&gt;

&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+d+'" alt=""></p>',38),u=[c];function b(m,o){return t(),v("div",null,u)}const p=s(r,[["render",b],["__file","css5.html.vue"]]);export{p as default};
