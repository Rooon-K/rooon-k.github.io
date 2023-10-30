import{_ as n,a as e,b as l,c as d,d as i,e as s}from"./float6-bb5e737d.js";import{_ as v,o as t,c as a,a as r}from"./app-b1fe8d4e.js";const c={},b=r(`<h2 id="十三、float-浮动" tabindex="-1"><a class="header-anchor" href="#十三、float-浮动" aria-hidden="true">#</a> 十三、float 浮动</h2><p>在 CSS 中, 通过 float 属性来定义浮动, 元素的浮动是指设置了移动属性的元素会脱离标注文档流的控制, 移动到其父元素中指定位置的过程。<br> 其语法格式为:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>选择器 {
  float: 属性值;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>float 的常用属性值:</p><table><thead><tr><th>属性值</th><th>描述</th></tr></thead><tbody><tr><td>left</td><td>元素向左浮动</td></tr><tr><td>right</td><td>元素向右浮动</td></tr><tr><td>none</td><td>元素不浮动( 默认值 )</td></tr></tbody></table><p>案例:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!doctype html&gt;
&lt;html&gt;

&lt;head&gt;
  &lt;meta charset=&quot;utf-8&quot;&gt;
  &lt;title&gt;元素的浮动&lt;/title&gt;
  &lt;style type=&quot;text/css&quot;&gt;
    .father {
      background: #ccc;
      /*定义父元素的样式*/
      border: 1px dashed #999;

    }

    .box01,
    .box02,
    .box03 {
      /*定义 box01、 box02、 box03 三个盒子的样式*/
      height: 50px;
      width: 50px;
      background: #FF9;
      border: 1px solid #F33;
      margin: 15px;
      padding: 0px 10px;
    }

    p {
      /*定义段落文本的样式*/
      background: #FCF;
      border: 1px dashed #F33;
      padding: 0px 10px;
    }
  &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;

  &lt;div class=&quot;father&quot;&gt;
    &lt;div class=&quot;box01&quot;&gt;box01&lt;/div&gt;
    &lt;div class=&quot;box02&quot;&gt;box02&lt;/div&gt;
    &lt;div class=&quot;box03&quot;&gt;box03&lt;/div&gt;
  &lt;/div&gt;

  &lt;p&gt;12&lt;/p&gt;

  &lt;!--不定义float属性, float属性值都为其默认值 none--&gt;

&lt;/body&gt;

&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+n+`" alt=""></p><p>为box1 2 3添加 <code>float: left</code>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!doctype html&gt;
&lt;html&gt;

&lt;head&gt;
  &lt;meta charset=&quot;utf-8&quot;&gt;
  &lt;title&gt;元素的浮动&lt;/title&gt;
  &lt;style type=&quot;text/css&quot;&gt;
    .father {
      background: #ccc;
      /*定义父元素的样式*/
      border: 1px dashed #999;

    }

    .box01,
    .box02,
    .box03 {
      /*定义 box01、 box02、 box03 三个盒子的样式*/
      height: 50px;
      width: 50px;
      background: #FF9;
      border: 1px solid #F33;
      margin: 15px;
      padding: 0px 10px;
    }

    p {
      /*定义段落文本的样式*/
      background: #FCF;
      border: 1px dashed #F33;
      padding: 0px 10px;
    }

    .box01,
    .box02,
    .box03 {
      /*定义box01、box02、box03左浮动*/
      float: left;
    }
  &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;

  &lt;div class=&quot;father&quot;&gt;
    &lt;div class=&quot;box01&quot;&gt;box01&lt;/div&gt;
    &lt;div class=&quot;box02&quot;&gt;box02&lt;/div&gt;
    &lt;div class=&quot;box03&quot;&gt;box03&lt;/div&gt;
  &lt;/div&gt;

  &lt;p&gt;12&lt;/p&gt;

  &lt;!--不定义float属性, float属性值都为其默认值 none--&gt;

&lt;/body&gt;

&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+e+`" alt=""></p><h2 id="十四、清除浮动" tabindex="-1"><a class="header-anchor" href="#十四、清除浮动" aria-hidden="true">#</a> 十四、清除浮动</h2><p>由于浮动元素不在占用原文档流的位置, 使用浮动会影响后面相邻元素的固定元素。<br> 例如上面案例 p 元素受到浮动影响, 产生了位置上的变化, 此时要避免浮动对其他元素的影响, 就需要清楚浮动。在 CSS 中使用 clear 属性清楚浮动, 其基本语法为:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>选择器 {
  clear: 属性值;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>clear 的常用属性值:</p><table><thead><tr><th>属性值</th><th>描述</th></tr></thead><tbody><tr><td>left</td><td>清除左侧浮动的影响</td></tr><tr><td>right</td><td>清除右侧浮动的影响</td></tr><tr><td>both</td><td>清楚两侧浮动的影响</td></tr></tbody></table><p>案例:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!doctype html&gt;
&lt;html&gt;

&lt;head&gt;
  &lt;meta charset=&quot;utf-8&quot;&gt;
  &lt;title&gt;清除元素的左浮动&lt;/title&gt;
  &lt;style type=&quot;text/css&quot;&gt;
    .father {
      /*定义父元素的样式*/
      background: #ccc;
      border: 1px dashed #999;
    }

    .box01,
    .box02,
    .box03 {
      /*定义box01、box02、box03三个盒子的样式*/
      height: 50px;
      line-height: 50px;
      background: #FF9;
      border: 1px solid #F33;
      margin: 15px;
      padding: 0px 10px;
      float: left;
      /*定义box01、box02、box03 左浮动*/
    }

    p {
      /*定义段落文本的样式*/
      background: #FCF;
      border: 1px dashed #F33;
      margin: 15px;
      padding: 0px 10px;
      clear: left;
      /*清除左浮动*/
      /*上一行代码用于清除段落文本左侧浮动元素的影响*/
    }
  &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;

  &lt;div class=&quot;father&quot;&gt;
    &lt;div class=&quot;box01&quot;&gt;box01&lt;/div&gt;
    &lt;div class=&quot;box02&quot;&gt;box02&lt;/div&gt;
    &lt;div class=&quot;box03&quot;&gt;box03&lt;/d1v&gt;
      &lt;p&gt;111&lt;/p&gt;
    &lt;/div&gt;

&lt;/body&gt;

&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+l+`" alt=""> 运行后可以看出, 清除段落文本左侧的浮动后, 段落文本不再受到浮动元素的影响, 而是按照元素自身的默认排列方式, 独占一行, 排列在浮动元素 box01、 box02、box03的下面。 <strong>需要注意的是, clear 属性只能清除元素左右两侧浮动的影响。</strong><br> 然而在制作网页时, 经常会遇到一些特殊的浮动影响。<br> 例如, 对子元素设置浮动时, 如果不对其父元素定义高度, 则子元素的浮动会对父元素产生影响。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!doctype html&gt;
&lt;html&gt;

&lt;head&gt;
  &lt;meta charset=&quot;utf-8&quot;&gt;
  &lt;title&gt;清除浮动&lt;/title&gt;
  &lt;style type=&quot;text/css&quot;&gt;
    .father {
      /*没有给父元素定义高度*/
      background: #ccc;
      border: 1px dashed #999;
    }

    .box01,
    .box02,
    .box03 {
      height: 50px;
      line-height: 50px;
      background: #f9c;
      border: 1px dashed #999;
      margin: 15px;
      padding: 0px 10px;
      float: left;
      /*定义box01、box02、box03三个盒子左浮动*/
    }
  &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;

  &lt;div class=&quot;father&quot;&gt;
    &lt;div class=&quot;box01&quot;&gt;box01&lt;/div&gt;
    &lt;div class=&quot;box02&quot;&gt;box02&lt;/div&gt;
    &lt;div class=&quot;box03&quot;&gt;box03&lt;/div&gt;
  &lt;/div&gt;

&lt;/body&gt;

&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+d+`" alt=""> 上面这个例子中, 给 box1 2 3 三个盒子定义左浮动, 同时不给其父元素设置高度。<br> 运行后由于受到子元素浮动的影响, 没有设置高度的父元素变成了一条直线, 即父元素不能自适应子元素的高度。</p><p>由于父元素和子元素为嵌套关系, 不存在左右位置, 所以使用 clear 属性并不能清除子元素浮动对父元素的影响。对于这种情况有以下三种方法:</p><h3 id="_1-使用空标记清除浮动" tabindex="-1"><a class="header-anchor" href="#_1-使用空标记清除浮动" aria-hidden="true">#</a> 1. 使用空标记清除浮动</h3><p>在浮动元素之后添加一个空标签, 并对该标签使用 <code>clear: both</code> 样式, 即可清除元素浮动所产生的影响。 案例:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!doctype html&gt;
&lt;html&gt;

&lt;head&gt;
  &lt;meta charset=&quot;utf-8&quot;&gt;
  &lt;title&gt;空标记清除浮动&lt;/title&gt;
  &lt;style type=&quot;text/css&quot;&gt;
    .father {
      /*没有给父元素定义高度*/
      background: #ccc;
      border: lpx dashed #999;
    }

    .box01,
    .box02,
    .box03 {
      height: 50px;
      line-height: 50px;
      background: #f9c;
      border: 1px dashed 999;
      margin: 15px;
      padding: 0px 10px;
      float: left;
      /*定义box01、box02、box03三个盒子左浮动*/
    }

    .box04 {
      clear: both;
    }

    /*对空标记应用clear:both;*/
  &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;

  &lt;div class=&quot;father&quot;&gt;
    &lt;div class=&quot;box01&quot;&gt;box01&lt;/div&gt;
    &lt;div class=&quot;box02&quot;&gt;box02&lt;/div&gt;
    &lt;div class=&quot;box03&quot;&gt;box03&lt;/div&gt;
    &lt;div class=&quot;box04&quot;&gt;&lt;/div&gt;
    &lt;!--在浮动元素后添加空标记--&gt;
  &lt;/div&gt;

&lt;/body&gt;

&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+i+`" alt=""> 在浮动元素 box1 2 3 之后添加 class 为 box4 的空 div , 然后对 box4 应用 <code>clear: both</code> , 父元素被其子元素撑开, 即消除浮动对父元素的影响。<br> 注意: 此方法虽然可以清除浮动但无形中增加了无意义的结构元素, 因此不建议使用。</p><h3 id="_2-使用-overflow-属性清除浮动" tabindex="-1"><a class="header-anchor" href="#_2-使用-overflow-属性清除浮动" aria-hidden="true">#</a> 2. 使用 <code>overflow</code> 属性清除浮动</h3><p>对元素应用 <code>overflow: hidden;</code> 也可以清除浮动对元素的影响, 该方法弥补了方法一的不足。<br> 案例:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!doctype html&gt;
&lt;html&gt;

&lt;head&gt;
  &lt;meta charset=&quot;utf-8&quot;&gt;
  &lt;title&gt;overflow属性清除浮动&lt;/title&gt;
  &lt;style type=&quot;text/css&quot;&gt;
    /*没有给父元素定义高度*/
    .father {
      background: #ccc;
      border: 1px dashed #999;
      overflow: hidden;
      /*对父元素应用overflow:hidden;*/
    }

    .box01,
    .box02,
    .box03 {
      height: 50px;
      line-height: 50px;
      background: #f9c;
      border: 1px dashed #999;
      margin: 15px;
      padding: 0px 10px;
      float: left;
      /*定义box01、box02、box03三个盒子左浮动*/
    }
  &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;

  &lt;div class=&quot;father&quot;&gt;
    &lt;div class=&quot;box01&quot;&gt;box01&lt;/div&gt;
    &lt;div class=&quot;box02&quot;&gt;box02&lt;/div&gt;
    &lt;div class=&quot;box03&quot;&gt;box03&lt;/div&gt;
  &lt;/div&gt;

&lt;/body&gt;

&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+i+`" alt=""></p><h3 id="_3-使用-after-伪元素清除浮动" tabindex="-1"><a class="header-anchor" href="#_3-使用-after-伪元素清除浮动" aria-hidden="true">#</a> 3. 使用 <code>after</code> 伪元素清除浮动</h3><p>使用 <code>after</code> 伪元素也可以清除浮动, 该方法只适用于 IE8+ 和非 IE 浏览器。<br> 使用 <code>after</code> 伪元素清除浮动的时候要注意:</p><ol><li>必须为需要清除浮动的伪元素设置 <code>hight: ();</code> 样式, 否则该元素会比实际高度高出若干元素。</li><li>必须在伪元素中设置 <code>content</code> 属性, 属性值可以为空, 如 <code>content: &quot;&quot;</code>;</li></ol><p>案例:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!doctype html&gt;
&lt;html&gt;

&lt;head&gt;
  &lt;meta charset=&quot;utf-8&quot;&gt;
  &lt;title&gt;使用after伪对象清除浮动&lt;/title&gt;
  &lt;style type=&quot;text/css&quot;&gt;
    .father {
      /*没有给父元素定义高度*/
      background: #ccc;
      border: 1px dashed #999;
    }

    .father:after {
      /*对父元素应用after伪对象样式*/
      display: block;
      clear: both;
      content: &quot;&quot;;
      visibility: hidden;
      height: 0;
    }

    .box01,
    .box02,
    .box03 {
      height: 50px;
      line-height: 50px;
      background: #f9c;
      border: 1px dashed #999;
      margin: 15px;
      padding: 0px 10px;
      float: left;
      /*定义box01、box02、box03三个盒子左浮动*/
    }
  &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;

  &lt;div class=&quot;father&quot;&gt;
    &lt;div class=&quot;box01&quot;&gt;box01&lt;/div&gt;
    &lt;div class=&quot;box02&quot;&gt;box02&lt;/div&gt;
    &lt;div class=&quot;box03&quot;&gt;box03&lt;/div&gt;
  &lt;/div&gt;

&lt;/body&gt;

&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+i+`" alt=""></p><h2 id="十五、overflow-属性" tabindex="-1"><a class="header-anchor" href="#十五、overflow-属性" aria-hidden="true">#</a> 十五、<code>overflow</code> 属性</h2><p>当盒子内的元素超出盒子自身大小的时候, 内容就很溢出, 如果想要规范溢出内容的显示方式, 就需要使用 <code>overflow</code> 属性。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>选择器 {
  overflow: 属性值;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>常用属性值:</p><table><thead><tr><th>属性值</th><th>描述</th></tr></thead><tbody><tr><td>visible</td><td>内容不会被修剪, 会呈现在元素框之外(默认值)</td></tr><tr><td>hidden</td><td>溢出内容会被修剪, 且被修剪内容不可见</td></tr><tr><td>auto</td><td>在需要时产生滚动条, 即自适应所要显示的内容</td></tr><tr><td>scroll</td><td>溢出内容会被修剪, 且浏览器会时钟显示滚动条</td></tr><tr><td>案例:</td><td></td></tr></tbody></table><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!doctype html&gt;
&lt;html&gt;

&lt;head&gt;
  &lt;meta charset=&quot;utf-8&quot;&gt;
  &lt;title&gt;overflow属性&lt;/title&gt;
  &lt;style type=&quot;text/css&quot;&gt;

    .a {
    width: 100px;
    height: 140px;
    background: red;
    overflow: visible; /*溢出内容呈现在元素框之外*/
    float: left;
    }
    .b {
    width: 100px;
    height: 140px;
    background: yellow;
    overflow: hidden; /*溢出内容会被修剪，并且被修剪的内容是不可见的*/
    float: left;
    }
    .c {
    width: 100px;
    height: 140px;
    background: blue;
    overflow: auto; /*在需要时产生滚动条，即自适应所要显示的内容*/
    float: left;
    }
    .d {
    width: 100px;
    height: 140px;
    background: green;
    overflow: scroll; /*溢出内容会被修剪，且浏览器会始终显示滚动条*/
    float: left;
    }

    &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;

  &lt;div class=&quot;a&quot;&gt;
    当盒子内的元素超出盒子自身的大小时, 内容就会滥出, 如果想要规范後出内容的显示方式, 就需要使用overflow属性, 它用于规范元素中溢出内容的显示方式。
  &lt;/div&gt;
  &lt;div class=&quot;b&quot;&gt;
    当盒子内的元素超出盒子自身的大小时, 内容就会滥出, 如果想要规范後出内容的显示方式, 就需要使用overflow属性, 它用于规范元素中溢出内容的显示方式。
  &lt;/div&gt;
  &lt;div class=&quot;c&quot;&gt;
    当盒子内的元素超出盒子自身的大小时, 内容就会滥出, 如果想要规范後出内容的显示方式, 就需要使用overflow属性, 它用于规范元素中溢出内容的显示方式。
  &lt;/div&gt;
  &lt;div class=&quot;d&quot;&gt;
    当盒子内的元素超出盒子自身的大小时, 内容就会滥出, 如果想要规范後出内容的显示方式, 就需要使用overflow属性, 它用于规范元素中溢出内容的显示方式。
  &lt;/div&gt;

&lt;/body&gt;

&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+s+'" alt=""></p>',43),u=[b];function m(o,g){return t(),a("div",null,u)}const p=v(c,[["render",m],["__file","css4.html.vue"]]);export{p as default};
