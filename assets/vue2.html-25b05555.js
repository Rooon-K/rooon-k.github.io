import{_ as d,o as t,c as l,a as n,b as e,d as i}from"./app-b1fe8d4e.js";const a={},s=n(`<h2 id="计算属性" tabindex="-1"><a class="header-anchor" href="#计算属性" aria-hidden="true">#</a> 计算属性</h2><p>模板中的表达式虽然方便, 但也只能用来做简单的操作。如果在模板中写太多逻辑, 会让模板变得臃肿, 难以维护。我们可以通过计算属性来描述这些复杂逻辑, 使其简单化、可重复利用。</p><p>语法:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const 变量名 = computed(() =&gt; {
  return 返回值
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>改造示例:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script setup&gt;
import { ref, computed } from &#39;vue&#39;;

const score = ref(100);

const computedScore = computed(() =&gt; {
  return score.value === 100 ? &#39;满分&#39; : (score.value &lt; 60 ? &#39;不及格&#39; : score.value);
});
&lt;/script&gt;

&lt;template&gt;
  &lt;p&gt;你的分数是: {{ score === 100 ? &#39;满分&#39; : (score &lt; 60 ? &#39;不及格&#39; : score) }}&lt;/p&gt;
  &lt;p&gt;你的分数是: {{ computedScore }}&lt;/p&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="事件处理" tabindex="-1"><a class="header-anchor" href="#事件处理" aria-hidden="true">#</a> 事件处理</h2><p>我们可以通过使用 <code>v-on</code> 或简写 <code>@</code> 来监听 DOM 事件, 并在事件触发时执行对应的 JS 语句。</p><p>如:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;button @click=&quot;count++&quot;&gt;Add 1&lt;/button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="表单输入绑定" tabindex="-1"><a class="header-anchor" href="#表单输入绑定" aria-hidden="true">#</a> 表单输入绑定</h2><p>在处理表单时, 我们常常需要将表单输入的内容同步给 <code>JS</code> 中相应的变量。要做到这个通常需要监听值的变化, 去修改, 这一过程可能会很麻烦。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;input type=&quot;text&quot; :value=&quot;score&quot;&gt; // input 内容变化 p 标签中的内容不会变化
&lt;input type=&quot;text&quot; :value=&quot;score&quot; @input=&quot;e =&gt; score = e.target.value&quot;&gt; // input 中内容变化, 触发 input 事件, 进行手动赋值, p标签中内容变化
&lt;p&gt;{{ score }}&lt;/p&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h3><p>Vue 中 <code>v-model</code> 指令很好的简化了这个过程。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;input v-model=&quot;score&quot;&gt; // 自动完成监听赋值操作
&lt;p&gt;{{ score }}&lt;/p&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,16),c=e("div",{class:"custom-container tip"},[e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("circle",{cx:"12",cy:"12",r:"9"}),e("path",{d:"M12 8h.01"}),e("path",{d:"M11 12h1v4h1"})])]),e("p",{class:"custom-container-title"},"TIP"),e("p",null,[e("code",null,"v-model"),i(" 会忽略任何表单元素上初始的 "),e("code",null,"value"),i("、"),e("code",null,"checked"),i(" 或 "),e("code",null,"selected"),i(" attribute。它将始终将当前绑定的 JavaScript 状态视为数据的正确来源。")])],-1),r=n(`<h4 id="文本-input" tabindex="-1"><a class="header-anchor" href="#文本-input" aria-hidden="true">#</a> 文本 input</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;p&gt;Message is: {{ message }}&lt;/p&gt;
&lt;input v-model=&quot;message&quot; placeholder=&quot;edit me&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="多行文本-textarea" tabindex="-1"><a class="header-anchor" href="#多行文本-textarea" aria-hidden="true">#</a> 多行文本 textarea</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;span&gt;Multiline message is:&lt;/span&gt;
&lt;p style=&quot;white-space: pre-line;&quot;&gt;{{ message }}&lt;/p&gt;
&lt;textarea v-model=&quot;message&quot; placeholder=&quot;add multiple lines&quot;&gt;&lt;/textarea&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="复选框-checkbox" tabindex="-1"><a class="header-anchor" href="#复选框-checkbox" aria-hidden="true">#</a> 复选框 checkbox</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;input type=&quot;checkbox&quot; id=&quot;checkbox&quot; v-model=&quot;checked&quot; /&gt;
&lt;label for=&quot;checkbox&quot;&gt;{{ checked }}&lt;/label&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="单选按钮-radio" tabindex="-1"><a class="header-anchor" href="#单选按钮-radio" aria-hidden="true">#</a> 单选按钮 radio</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div&gt;Picked: {{ picked }}&lt;/div&gt;

&lt;input type=&quot;radio&quot; id=&quot;one&quot; value=&quot;One&quot; v-model=&quot;picked&quot; /&gt;
&lt;label for=&quot;one&quot;&gt;One&lt;/label&gt;

&lt;input type=&quot;radio&quot; id=&quot;two&quot; value=&quot;Two&quot; v-model=&quot;picked&quot; /&gt;
&lt;label for=&quot;two&quot;&gt;Two&lt;/label&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="选择器-select" tabindex="-1"><a class="header-anchor" href="#选择器-select" aria-hidden="true">#</a> 选择器 select</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div&gt;Selected: {{ selected }}&lt;/div&gt;

&lt;select v-model=&quot;selected&quot;&gt;
  &lt;option disabled value=&quot;&quot;&gt;Please select one&lt;/option&gt;
  &lt;option&gt;A&lt;/option&gt;
  &lt;option&gt;B&lt;/option&gt;
  &lt;option&gt;C&lt;/option&gt;
&lt;/select&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="值绑定" tabindex="-1"><a class="header-anchor" href="#值绑定" aria-hidden="true">#</a> 值绑定</h3><p>对于单选按钮, 复选框和选择器选项, v-model 绑定的值通常是静态的字符串 (或者对复选框是布尔值)</p><p>但有时我们可能希望将该值绑定到当前组件实例上的动态数据。这可以通过使用 <code>v-bind</code> 来实现。此外, 使用 <code>v-bind</code> 还使我们可以将选项值绑定为非字符串的数据类型。</p><h4 id="单选按钮-radio-1" tabindex="-1"><a class="header-anchor" href="#单选按钮-radio-1" aria-hidden="true">#</a> 单选按钮 radio</h4><p><code>pick</code> 会在第一个按钮选中时被设为 <code>first</code>, 在第二个按钮选中时被设为 <code>second</code>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;input type=&quot;radio&quot; v-model=&quot;pick&quot; :value=&quot;first&quot; /&gt;
&lt;input type=&quot;radio&quot; v-model=&quot;pick&quot; :value=&quot;second&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="选择器选项" tabindex="-1"><a class="header-anchor" href="#选择器选项" aria-hidden="true">#</a> 选择器选项</h4><p><code>v-model</code> 同样也支持非字符串类型的值绑定。在上面这个例子中, 当某个选项被选中, <code>selected</code> 会被设为该对象字面量值 <code>{ number: 123 }</code>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;select v-model=&quot;selected&quot;&gt;
  &lt;!-- 内联对象字面量 --&gt;
  &lt;option :value=&quot;{ number: 123 }&quot;&gt;123&lt;/option&gt;
&lt;/select&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="侦听器" tabindex="-1"><a class="header-anchor" href="#侦听器" aria-hidden="true">#</a> 侦听器</h2><p>计算属性允许我们声明性地计算衍生值。然而在有些情况下, 我们需要在状态变化时执行一些&quot;副作用&quot;: 例如更改 DOM, 或是根据异步操作的结果去修改另一处的状态。</p><p>我们可以通过 <code>watch</code> 函数在每次响应式状态发生变化时触发回调函数。</p><h3 id="基本用法-1" tabindex="-1"><a class="header-anchor" href="#基本用法-1" aria-hidden="true">#</a> 基本用法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const obj = reactive({ count: 0 });
// obj 为被监听对象
watch(obj, (newValue, oldValue) =&gt; {
  // 逻辑操作
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script setup lang=&quot;ts&quot;&gt;
import { ref, watch } from &#39;vue&#39;;

const question = ref(&#39;&#39;);
const answer = ref(&#39;问题需要以问号结尾. ;-)&#39;);

// 可以直接侦听一个 ref
watch(question, async (newQuestion, oldQuestion) =&gt; {
  if (newQuestion.indexOf(&#39;?&#39;) &gt; -1) {
    answer.value = &#39;思考中...&#39;;
    try {
      const res = await fetch(&#39;https://yesno.wtf/api&#39;);
      answer.value = (await res.json()).answer;
    } catch (error) {
      answer.value = &#39;请求 API 错误&#39; + error;
    }
  } else {
    answer.value = &#39;问题需要以问号结尾. ;-)&#39;;
  }
})
&lt;/script&gt;

&lt;template&gt;
  &lt;p&gt;
    问一个答案为 是 或 否 的问题:
    &lt;input v-model=&quot;question&quot; /&gt;
  &lt;/p&gt;
  &lt;p&gt;{{ answer }}&lt;/p&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="侦听数据源类型" tabindex="-1"><a class="header-anchor" href="#侦听数据源类型" aria-hidden="true">#</a> 侦听数据源类型</h3><p><code>watch</code> 的第一个参数可以是不同形式的数据源: 一个ref(包括计算属性)、一个响应式对象、一个<code>getter</code>函数或多个数据源组成的数组。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const x = ref(0);
const y = ref(0);
const obj = reactive({ count: 0 });

// 单个 ref
watch(x, (newX) =&gt; {
  console.log(\`x is \${newX}\`);
});

// getter 函数
watch(
  () =&gt; x.value + y.value,
  (sum) =&gt; {
    console.log(\`sum of x + y is: \${sum}\`);
  }
);

// 多个来源组成的数组
watch([x, () =&gt; y.value], ([newX, newY]) =&gt; {
  console.log(\`x is \${newX} and y is \${newY}\`);
});

// 响应式对象(不能直接侦听响应式对象的属性值, 需通过返回该属性的 getter 函数)
watch(
  () =&gt; obj.count,
  (count) =&gt; {
    console.log(\`count is: \${count}\`);
  }
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="深层监听" tabindex="-1"><a class="header-anchor" href="#深层监听" aria-hidden="true">#</a> 深层监听</h3><p>直接给 <code>watch()</code> 传入一个响应式对象, 会隐式地创建一个深层侦听器——该回调函数在所有嵌套的变更时都会被触发</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const obj = reactive({
  count: 0, 
  score: {
    math: &quot;1&quot;
  }
});

watch(obj, (newValue, oldValue) =&gt; {
  // 在嵌套的属性变更时触发
  // 注意：\`newValue\` 此处和 \`oldValue\` 是相等的
  // 因为它们是同一个对象！
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相比之下, 一个返回响应式对象的 <code>getter</code> 函数, 只有在返回不同的对象时, 才会触发回调</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>watch(
  () =&gt; obj.count,
  () =&gt; {
    // 仅当 obj.count 被替换时触发
  }
)

watch(
  () =&gt; obj.score,
  () =&gt; {
    // 仅当 obj.score 被替换时触发 (修改obj.score.math 不会触发)
  }
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你也可以给上面这个例子显式地加上 <code>deep</code> 选项, 强制转成深层侦听器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>watch(
  () =&gt; obj.score,
  (newValue, oldValue) =&gt; {
    // 注意：\`newValue\` 此处和 \`oldValue\` 是相等的
    // *除非* obj.score 被整个替换了
  },
  { deep: true }
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="即时回调的侦听器" tabindex="-1"><a class="header-anchor" href="#即时回调的侦听器" aria-hidden="true">#</a> 即时回调的侦听器</h3><p><code>watch</code> 默认是懒执行的: 仅当数据源变化时, 才会执行回调。但在某些场景中, 我们希望在创建侦听器时, 立即执行一遍回调。</p><p>我们可以通过传入 <code>immediate: true</code> 选项来强制侦听器的回调立即执行:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>watch(source, (newValue, oldValue) =&gt; {
  // 立即执行，且当 \`source\` 改变时再次执行
}, { immediate: true })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,40),u=[s,c,r];function v(o,m){return t(),l("div",null,u)}const g=d(a,[["render",v],["__file","vue2.html.vue"]]);export{g as default};
