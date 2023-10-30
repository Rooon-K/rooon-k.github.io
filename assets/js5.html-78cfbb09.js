import{_ as e,o as i,c as l,a as n}from"./app-b1fe8d4e.js";const d={},t=n(`<h2 id="节点详解" tabindex="-1"><a class="header-anchor" href="#节点详解" aria-hidden="true">#</a> 节点详解</h2><p>一般来说节点至少拥有nodeType( 节点类型 )、nodeName( 节点名称 )、nodeValue( 节点值 )三个基本属性。</p><ul><li>元素节点, nodeType 为 1</li><li>属性节点, nodeType 为 2</li><li>文本节点, nodeType 为 3</li></ul><p>在实际开发中, 节点操作主要操作的是元素节点, 开发者可以根据 nodeType 的值来判断是否为元素节点。</p><h2 id="节点层级" tabindex="-1"><a class="header-anchor" href="#节点层级" aria-hidden="true">#</a> 节点层级</h2><h3 id="层级关系" tabindex="-1"><a class="header-anchor" href="#层级关系" aria-hidden="true">#</a> 层级关系</h3><p>DOM 中将 HTML 文档视为树结构, 一个 HTML 文档可以看做所有元素组成的一个节点树, 各个元素节点有级别划分。</p><ul><li>根节点: <code>&lt;HTML&gt;</code> 标签是整个文档的根节点, 有且仅有一个。</li><li>父节点: 指的是某个节点的上级节点</li><li>子节点: 指的是某个节点的下级节点</li><li>兄弟节点: 两个节点同属一个父节点则为兄弟节点</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div class=&quot;demo&quot;&gt;
	&lt;div class=&quot;box&quot;&gt;
		&lt;span class=&quot;child&quot;&gt;span元素&lt;/span&gt;
	&lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取父节点" tabindex="-1"><a class="header-anchor" href="#获取父节点" aria-hidden="true">#</a> 获取父节点</h3><p>使用 <code>parentNode</code> 属性还获取里当前元素最近的父节点, 若找不到返回 null, 语法: obj.parentNode</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
  let child = document.querySelector(&quot;.child&quot;);
  console.log(child.parentNode);
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取子节点" tabindex="-1"><a class="header-anchor" href="#获取子节点" aria-hidden="true">#</a> 获取子节点</h3><p>( 1 ) 使用 <code>childNodes</code> 属性来获取当前元素的所有子节点的集合, 若找不到返回 null, 语法: obj.childNodes</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
  let parent = document.querySelector(&quot;.box&quot;);
  console.log(parent.childNodes);
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行后发现 childNodes 属性返回的是 NodeList 对象的集合。返回值里面包含了元素节点、文本节点等其他类型的节点。 想要获取元素节点, 需要做一下专门处理, 在节点详解中我们提到, 元素节点的 nodeType 属性的值为 1 ,我们可以通过这个来判断元素节点</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
  let parent = document.querySelector(&quot;.box&quot;);
  console.log(parent.childNodes);
  for(let i = 0; i &lt; parent.childNodes.length; i ++) {
    console.log(parent.childNodes[i].nodeType === 1);
  }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>( 2 ) 使用 <code>children</code> 属性, <code>children</code> 属性只返回元素节点, 其余节点不返回。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
  let parent = document.querySelector(&quot;.box&quot;);
  console.log(parent.children);
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上两种方式, 若只进行元素节点操作, 推荐使用第二种办法。</p><p>( 3 ) 获取子节点 firstChild 属性和 lastChild 属性<br> firstChild 属性和 lastChild 属性, 前者返回第一个子节点, 后者返回的是最后一个子节点, 如果找不到则返回 null。需要注意的是, 它们的返回值包括文本节点和元素节点等。</p><p>( 4 ) 获取子元素节点 firstElementChild 属性和 lastElementChild 属性<br> firstElementChild 属性和 lastElementChild 属性, 前者返回第一个子元素节点, 后者返回最后一个子元素节点, 如果找不到则返回 null。</p><p>虽然( 4 )这个方法在 IE9 以上才支持, 但是随着 IE 时代的终结, 现在正常情况下是没事的。</p><h3 id="获取兄弟节点" tabindex="-1"><a class="header-anchor" href="#获取兄弟节点" aria-hidden="true">#</a> 获取兄弟节点</h3><p>在 JavaScript 中, 可以使用 nextSibling 属性来获得下一个兄弟节点, 使用previousSibling 属性来获得上一个兄弟节点。它们的返回值包含元素节点或者文本节点等。如果找不到, 就返回 null。<br> 如果想要获得兄弟元素节点, 则可以使用 nextElementSibling 返回当前元素的下一个兄弟元素节点, 使用 previousElementSibling 属性返回当前元素的上一个兄弟元素节点。如果找不到则返回 null。</p><h3 id="案例-下拉菜单" tabindex="-1"><a class="header-anchor" href="#案例-下拉菜单" aria-hidden="true">#</a> 案例: 下拉菜单</h3><p>鼠标指针经过下拉菜单时, 显示当前下拉框中的内容, 并隐藏其他下拉菜单内容。具体实现步骤如下。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;body&gt;
  &lt;ul class=&quot;nav&quot;&gt;
    &lt;li&gt;
      &lt;a href=&quot;#&quot;&gt;微博&lt;/a&gt;
      &lt;ul&gt;
        &lt;li&gt;&lt;a href=&quot;&quot;&gt; 私信&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href=&quot;&quot;&gt; 评论&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href=&quot;&quot;&gt;@ 我&lt;/a&gt;&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;a href=&quot;#&quot;&gt;微博&lt;/a&gt;
      &lt;ul&gt;
        &lt;li&gt;&lt;a href=&quot;&quot;&gt; 私信&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href=&quot;&quot;&gt; 评论&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href=&quot;&quot;&gt;@ 我&lt;/a&gt;&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/li&gt;
  &lt;/ul&gt;

  &lt;script&gt;
    let nav = document.querySelector(&#39;.nav&#39;);
    let lis = nav.children;
    for (var i = 0; i &lt; lis.length; i++) {
      lis[i].onmouseover = function () {
        this.children[1].style.display = &#39;block&#39;;
      };
      lis[i].onmouseout = function () {
        this.children[1].style.display = &#39;none&#39;;
      };
    }
  &lt;/script&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建节点" tabindex="-1"><a class="header-anchor" href="#创建节点" aria-hidden="true">#</a> 创建节点</h2><p>( 1 ) document.write(), 不推荐使用, 不介绍。</p><p>( 2 ) element.innerHTML(), 用于直接将内容写入某个节点。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;body&gt;
  &lt;div&gt;aaa&lt;/div&gt;

  &lt;script&gt;
    let ele = document.querySelector(&quot;div&quot;);
    ele.innerHTML = \`&lt;p&gt;111&lt;/p&gt;\`
  &lt;/script&gt;
&lt;/body&gt;

// f12 查看实际页面结构
&lt;div&gt;
  &lt;p&gt;111&lt;/p&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>( 3 ) document.createElement() 不直接使用, 一般配合节点添加使用<br> document.createElement() 创建多个元素时效率稍微低一点, 但是结构更加清晰。</p><h2 id="节点添加、删除" tabindex="-1"><a class="header-anchor" href="#节点添加、删除" aria-hidden="true">#</a> 节点添加、删除</h2><h3 id="_1-appendchild" tabindex="-1"><a class="header-anchor" href="#_1-appendchild" aria-hidden="true">#</a> ( 1 ) appendChild()</h3><p>将一个节点添加到指定父节点的子节点列表末尾, 类似于 CSS 中的 after 伪元素。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;body&gt;
  &lt;div&gt;aaa&lt;/div&gt;

  &lt;script&gt;
    let ele = document.querySelector(&quot;div&quot;);
    let p = document.createElement(&#39;p&#39;);
    p.innerHTML = \`&lt;p&gt;1&lt;/p&gt;\`
    ele.appendChild(p);
  &lt;/script&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-insertbefore" tabindex="-1"><a class="header-anchor" href="#_2-insertbefore" aria-hidden="true">#</a> ( 2 ) insertBefore()</h3><p>将一个节点添加到父节点的指定子节点前面, 类似于 CSS 中的 before 伪元素。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;body&gt;
  &lt;div&gt;aaa&lt;/div&gt;

  &lt;script&gt;
    let ele = document.querySelector(&quot;div&quot;);
    let p = document.createElement(&#39;p&#39;);
    p.innerHTML = \`&lt;p&gt;2&lt;/p&gt;\`
    ele.insertBefore(p, ele.children[0]);
  &lt;/script&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-removechild" tabindex="-1"><a class="header-anchor" href="#_3-removechild" aria-hidden="true">#</a> ( 3 ) removeChild()</h3><p>用于删除节点, 该方法从 DOM 中删除一个子节点, 返回删除的节点。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;body&gt;
  &lt;div&gt;aaa&lt;/div&gt;

  &lt;script&gt;
    let ele = document.querySelector(&quot;div&quot;);
    let p = document.createElement(&#39;p&#39;);
    p.innerHTML = \`&lt;p&gt;2&lt;/p&gt;\`
    ele.insertBefore(p, ele.children[0]);
    let pNode = document.querySelector(&#39;p&#39;);
    ele.removeChild(pNode);
  &lt;/script&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="案例-留言板" tabindex="-1"><a class="header-anchor" href="#案例-留言板" aria-hidden="true">#</a> 案例: 留言板</h3><p>案例：将利用节点的创建、添加和删除相关知识完成一个简易的留言板功能。在页面中实现单击 “ 发布 ” 按钮动态创建一个 li, 添加到 ul 里面。具体实现步骤如下。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;body&gt;
  &lt;input&gt;&lt;/input&gt;
  &lt;button&gt;发布&lt;/button&gt;
  &lt;ul&gt;&lt;/ul&gt;

  &lt;script&gt;
    let btn = document.querySelector(&#39;button&#39;);
    let ul = document.querySelector(&#39;ul&#39;);

    btn.onclick = function () {
      let text = document.querySelector(&#39;input&#39;);
      if (text.value === &quot;&quot;) {
        alert(&#39;您没有输人内容&#39;);
        return false;
      } else {
        let li = document.createElement(&#39;li&#39;);
        li.innerHTML = text.value + &#39;&lt;a href=&quot;javascript:;&quot;&gt;删除&lt;/a&gt;&#39;;
        ul.insertBefore(li, ul.children[0]);
        let as = document.querySelectorAll(&#39;a&#39;);
        for (let i = 0; i &lt; as.length; i++) {
          as[i].onclick = function () {
            ul.removeChild(this.parentNode);
          };
        }
      }
    };
  &lt;/script&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,46),s=[t];function a(r,c){return i(),l("div",null,s)}const u=e(d,[["render",a],["__file","js5.html.vue"]]);export{u as default};
