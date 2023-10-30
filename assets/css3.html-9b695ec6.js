import{_ as i}from"./margin-ffb75277.js";import{_ as n,o as a,c as t,a as d,b as e}from"./app-b1fe8d4e.js";const l={},s=d(`<h2 id="八、边距属性" tabindex="-1"><a class="header-anchor" href="#八、边距属性" aria-hidden="true">#</a> 八、边距属性</h2><p>CSS的边距属性包括内边距和外边距。</p><h3 id="_1-内边距" tabindex="-1"><a class="header-anchor" href="#_1-内边距" aria-hidden="true">#</a> 1.内边距</h3><p>内边距指的是元素内容与边框之间的距离。<br> 在CSS中我们通过padding属性来设置内边距, 相关设置方法如下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>padding: 上下左右方向边距相同
padding-top: 上边距
padding-bottom: 下边距
padding-right: 右边距
padding-left: 左边距
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的设置中, padding的相关取值可以为<code>auto</code>、百分比、像素值<code>px</code>。 使用<code>padding</code>定义内边距时, 按顺时针顺序采用值复制</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>padding: 10px; //四方向内边距都为10px
padding: 10px 20px; //上下内边距为10px, 左右内边距为20px
padding: 10px 20px 30px; //上内边距为10px, 左右内边距为20px, 下内边距为30px
padding: 10px 20px 30px 40px; //上内边距为10px, 右内边距为20px, 下内边距为30px, 左内边距为40px
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),r=e("div",{class:"custom-container warning"},[e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("circle",{cx:"12",cy:"12",r:"9"}),e("path",{d:"M12 8v4"}),e("path",{d:"M12 16h.01"})])]),e("p",{class:"custom-container-title"},"注意"),e("p",null,"如果内边距设置为百分比, 都是相对于父元素的 width 值的百分比, 和高度 hight 无关")],-1),c=d(`<h3 id="_2-外边距" tabindex="-1"><a class="header-anchor" href="#_2-外边距" aria-hidden="true">#</a> 2.外边距</h3><p>外边距指的是元素边框与相邻元素之间的距离。<br> 其用法和<code>padding</code>相同</p><h2 id="九、外边距重叠" tabindex="-1"><a class="header-anchor" href="#九、外边距重叠" aria-hidden="true">#</a> 九、外边距重叠</h2><p>块的上下边距有时会合并为单个边距, 其大小为单个边距的最大值, 这种行为被称为 <strong>边距折叠</strong> 。<br> 注意: 只有 <strong>块元素</strong> 会发生外边距重叠, <strong>行内元素</strong> 和 <strong>行内块元素</strong> 都不会发生外边距重叠问题。 外边距重叠算法:</p><p>有三种情况会形成外边距折叠:</p><h3 id="_1-同一层相邻元素之间" tabindex="-1"><a class="header-anchor" href="#_1-同一层相邻元素之间" aria-hidden="true">#</a> 1.同一层相邻元素之间</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;style&gt;
p:nth-child(1){
  margin-bottom: 13px;
}
p:nth-child(2){
  margin-top: 87px;
}
&lt;/style&gt;

&lt;p&gt;下边界范围会...&lt;/p&gt;
&lt;p&gt;...会跟这个元素的上边界范围重叠。&lt;/p&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果没有边距折叠的话上下两个p元素中间应该会间隔100px, 但实际为87px。</p><h3 id="_2-没有内容将父元素和后代元素分开" tabindex="-1"><a class="header-anchor" href="#_2-没有内容将父元素和后代元素分开" aria-hidden="true">#</a> 2.没有内容将父元素和后代元素分开</h3><p>举个例子:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div id=&quot;box1&quot;&gt;
  &lt;div id=&quot;box2&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;style&gt;
#box1{
  width: 200px;
  height:200px;
  background:red;
} 
#box2{
  width: 100px;
  height:100px;
  background:yellow;
  margin-top:100px;
} 
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从代码中我们的目的是让子元素距离父元素的顶部100px, 但结果是父级会和子级一起移动距离顶部100px。 <img src="`+i+`" alt=""></p><h3 id="_3-空的块级元素" tabindex="-1"><a class="header-anchor" href="#_3-空的块级元素" aria-hidden="true">#</a> 3. 空的块级元素</h3><p>当一个块级元素的上边界贴到下边界的时候也会发生边界折叠。<br> 这种情况发生在一个块元素完全没有设定边框<code>border</code>、内边距<code>padding</code>、高度<code>hight</code>、最小高度<code>min-hight</code>、最大高度<code>max-hight</code>、内用设定为<code>inline</code>或是加上<code>clear-fix</code>的时候。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;p&gt;下边界范围是 87 ...&lt;/p&gt;
&lt;div&gt;&lt;/div&gt;
&lt;p&gt;... 上边界范围是 87&lt;/p&gt;
&lt;style&gt;
  p {
    margin: 0;
  }
  div {
    margin-top: 13px;
    margin-bottom: 87px;
  }
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>边距重叠算法:</p><ol><li>两个正数取最大值。</li><li>两个负数取绝对值最大值。</li><li>一正一负取两者之和。</li></ol><h2 id="十、防止外边距重叠的方法" tabindex="-1"><a class="header-anchor" href="#十、防止外边距重叠的方法" aria-hidden="true">#</a> 十、防止外边距重叠的方法</h2><ul><li>对容器使用<code>overflow: auto</code>, 防止内部元素的外边距和容器外部的外边距重叠。</li><li>在连外边距之间加上边框或内边距。</li><li>设置容器为浮动元素<code>float</code>、内联块<code>display: inline;</code>、绝对定位<code>position: absolute;</code>、固定定位<code>position: fixed;</code>。</li><li>使用<code>flex</code>布局。</li></ul><h2 id="十一、box-shadow-盒子阴影效果" tabindex="-1"><a class="header-anchor" href="#十一、box-shadow-盒子阴影效果" aria-hidden="true">#</a> 十一、box-shadow 盒子阴影效果</h2><table><thead><tr><th>参数值</th><th>说明</th></tr></thead><tbody><tr><td>像素值1</td><td>表示元素水平阴影位置, 可以为负值( 必选 )。</td></tr><tr><td>像素值2</td><td>表示元素垂直阴影位置, 可以为负值( 必选 )。</td></tr><tr><td>像素值3</td><td>阴影的模糊半径( 可选 )。</td></tr><tr><td>像素值4</td><td>阴影扩展半径( 可选 )。</td></tr><tr><td>颜色值</td><td>阴影颜色( 可选 )。</td></tr><tr><td>阴影类型</td><td>内阴影( inset ) / 外阴影( 默认 ) ( 可选 )</td></tr></tbody></table><h2 id="十二、opacity-透明度" tabindex="-1"><a class="header-anchor" href="#十二、opacity-透明度" aria-hidden="true">#</a> 十二、opacity 透明度</h2><p>在 CSS 中, 使用 <code>opacity</code> 属性能使任何元素呈现出透明效果。 语法格式:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>opacity: opacityValue;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参数 <code>opacityValue</code> 表示不透明度的值, 介于 0 ~ 1 之间, 其中 0 表示完全透明, 1 表示完全不透明。</p>`,25),o=[s,r,c];function v(p,u){return a(),t("div",null,o)}const m=n(l,[["render",v],["__file","css3.html.vue"]]);export{m as default};
