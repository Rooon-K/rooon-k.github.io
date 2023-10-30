import{_ as e,o as i,c as d,a}from"./app-b1fe8d4e.js";const n="/vue1.png",t="/vue2.png",s="/vue3.png",l="/vue4.png",r={},c=a(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>Vue 是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript 构建, 并提供了一套声明式的、组件化的编程模型, 帮助你高效地开发用户界面。无论是简单还是复杂的界面, Vue 都可以胜任。</p><h2 id="创建一个-vue-应用" tabindex="-1"><a class="header-anchor" href="#创建一个-vue-应用" aria-hidden="true">#</a> 创建一个 Vue 应用</h2><p>Vue 官方给我们提供了创建应用的快捷指令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm init vue@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这一指令将会安装并执行 create-vue, 它是 Vue 官方的项目脚手架工具。你将会看到一些诸如 TypeScript 和测试支持之类的可选功能提示:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>✔ Project name: … &lt;your-project-name&gt;
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit testing? … No / Yes
✔ Add an End-to-End Testing Solution? … No / Cypress / Playwright
✔ Add ESLint for code quality? … No / Yes
✔ Add Prettier for code formatting? … No / Yes

Scaffolding project in ./&lt;your-project-name&gt;...
Done.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果不确定是否要开启某个功能, 你可以直接按下回车键选择 No。在项目被创建后, 通过以下步骤安装依赖并启动开发服务器:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd &lt;your-project-name&gt;
npm install
npm run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你现在应该已经运行起来了你的第一个 Vue 项目！ <img src="`+n+'" alt=""></p><h2 id="项目结构解剖" tabindex="-1"><a class="header-anchor" href="#项目结构解剖" aria-hidden="true">#</a> 项目结构解剖</h2><p>下面是我们刚刚创建好的 vue 项目的文件结构 <img src="'+t+'" alt=""></p><h3 id="main-ts" tabindex="-1"><a class="header-anchor" href="#main-ts" aria-hidden="true">#</a> main.ts</h3><p>首先进到 <code>main.ts</code> 中, 可以看到如下代码: <img src="'+s+`" alt=""></p><p>每个 vue 应用都是通过 <code>createApp</code> 函数创建的一个新的应用实例, 我们传入 <code>createApp</code> 的对象实际上是一个组件, 每个应用都需要一个“根组件”, 其他组件将作为其子组件。</p><p>应用实例必须在调用了 <code>.mount()</code> 方法后才会渲染出来。该方法接收一个“容器”参数, 可以是一个实际的 DOM 元素或是一个 CSS 选择器字符串</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// index.html
&lt;div id=&quot;app&quot;&gt;&lt;/div&gt;
// main.ts
app.mount(&#39;#app&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="app-vue" tabindex="-1"><a class="header-anchor" href="#app-vue" aria-hidden="true">#</a> App.vue</h3><p>App.vue 一般作为我们页面的根组件</p><h3 id="components-文件夹" tabindex="-1"><a class="header-anchor" href="#components-文件夹" aria-hidden="true">#</a> components 文件夹</h3><p>该文件夹下一般存放各类组件</p><h3 id="实际项目中" tabindex="-1"><a class="header-anchor" href="#实际项目中" aria-hidden="true">#</a> 实际项目中</h3><p>在实际项目中, 我们还会创建不同文件夹来对不同功能的代码进行一个区分 <img src="`+l+`" alt=""></p><ul><li>api 文件夹下存放对请求的封装</li><li>components 文件夹下存放公共组件</li><li>config 文件夹下存放项目配置</li><li>hooks 文件夹下存放钩子函数</li><li>layout 文件夹下存放默认展示页面</li><li>router 文件夹下存放路由配置</li><li>store 文件夹下存放状态库配置</li><li>types 文件夹下存放ts类型</li><li>utils 文件夹下存放工具函数</li><li>views 文件夹下存放各个页面及其内部组件</li></ul><h2 id="模板语法" tabindex="-1"><a class="header-anchor" href="#模板语法" aria-hidden="true">#</a> 模板语法</h2><h3 id="文本插值" tabindex="-1"><a class="header-anchor" href="#文本插值" aria-hidden="true">#</a> 文本插值</h3><p>最基本的数据绑定形式是文本插值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;span&gt;count: {{ count }}&lt;/span&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>双大括号标签会被替换为相应组件实例中 msg 属性的值。同时每次 msg 属性更改时它也会同步更新。</p><p>此外, 双大括号内也可以写 js 表达式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{{ number + 1 }}
{{ ok ? &#39;YES&#39; : &#39;NO&#39; }}
{{ message.split(&#39;&#39;).reverse().join(&#39;&#39;) }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以进行函数的调用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{{ sum(1, 2) }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="v-bind" tabindex="-1"><a class="header-anchor" href="#v-bind" aria-hidden="true">#</a> v-bind</h3><p>双大括号不能在元素的属性中使用。要想响应式的绑定一个属性, 应该使用 <code>v-bind</code> 指令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div v-bind:id=&quot;eleId&quot;&gt;&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>因为 v-bind 非常常用, 官方提供了特定的简写语法:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div :id=&quot;eleId&quot;&gt;&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="属性绑定" tabindex="-1"><a class="header-anchor" href="#属性绑定" aria-hidden="true">#</a> 属性绑定</h3><p>若我们要动态的修改元素的属性值, 可以通过 <code>:</code> + <code>属性值</code> 的形式来进行修改。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;button :disabled=&quot;isButtonDisabled&quot;&gt;Button&lt;/button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此时 <code>&quot;&quot;</code>中要写的是js表达式</p><h2 id="响应式基础" tabindex="-1"><a class="header-anchor" href="#响应式基础" aria-hidden="true">#</a> 响应式基础</h2><h3 id="ref" tabindex="-1"><a class="header-anchor" href="#ref" aria-hidden="true">#</a> ref()</h3><p><code>ref()</code> 接收参数, 并将其包裹在一个带有 <code>.value</code> 属性的 <code>ref</code> 对象中返回:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const count = ref(0);

console.log(count); // { value: 0 }
console.log(count.value); // 0

count.value++;
console.log(count.value); // 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意, 在模板中使用 ref 时, 我们不需要附加 .value。为了方便起见, 当在模板中使用时, ref 会自动解包</p><h3 id="reactive" tabindex="-1"><a class="header-anchor" href="#reactive" aria-hidden="true">#</a> reactive()</h3><p>还有另一种声明响应式状态的方式, 即使用 reactive() API。与将内部值包装在特殊对象中的 ref 不同, reactive() 将使对象本身具有响应性:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { reactive } from &#39;vue&#39;;

const state = reactive({ count: 0 });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="reactive-的局限性" tabindex="-1"><a class="header-anchor" href="#reactive-的局限性" aria-hidden="true">#</a> reactive()的局限性</h3><ol><li>有限的值类型: 它只能用于对象类型 (对象、数组和如 Map、Set 这样的集合类型)。它不能持有如 string、number 或 boolean 这样的原始类型。</li><li>不能替换整个对象: 由于 Vue 的响应式跟踪是通过属性访问实现的, 因此我们必须始终保持对响应式对象的相同引用。这意味着我们不能轻易地“替换”响应式对象, 因为这样的话与第一个引用的响应性连接将丢失:</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let state = reactive({ count: 0 });

// 上面的 ({ count: 0 }) 引用将不再被追踪
// (响应性连接已丢失！)
state = reactive({ count: 1 });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>对解构操作不友好: 当我们将响应式对象的原始类型属性解构为本地变量时, 或者将该属性传递给函数时, 我们将丢失响应性连接:</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const state = reactive({ count: 0 });

// 当解构时，count 已经与 state.count 断开连接
let { count } = state;
// 不会影响原始的 state
count++;

// 该函数接收到的是一个普通的数字
// 并且无法追踪 state.count 的变化
// 我们必须传入整个对象以保持响应性
callSomeFunction(state.count);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于以上限制, vue官方推荐我们使用 <code>ref()</code> 作为声明响应式状态的主要 API</p><h2 id="条件渲染" tabindex="-1"><a class="header-anchor" href="#条件渲染" aria-hidden="true">#</a> 条件渲染</h2><h3 id="v-if" tabindex="-1"><a class="header-anchor" href="#v-if" aria-hidden="true">#</a> <code>v-if</code></h3><p>该指令由于条件性的渲染一块内容, 条件值为 true 时, 才会进行渲染</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;h1 v-if=&quot;ok&quot;&gt;Hello!&lt;/h1&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="v-show" tabindex="-1"><a class="header-anchor" href="#v-show" aria-hidden="true">#</a> <code>v-show</code></h3><p>该指令同 <code>v-if</code>, 不同的是, 他不能作用在 <code>&lt;template&gt;</code> 标签上, 同时, 该元素会在 DOM 中保留, 等效于 <code>display: none;</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;h1 v-show=&quot;ok&quot;&gt;Hello!&lt;/h1&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="列表渲染" tabindex="-1"><a class="header-anchor" href="#列表渲染" aria-hidden="true">#</a> 列表渲染</h2><h3 id="v-for" tabindex="-1"><a class="header-anchor" href="#v-for" aria-hidden="true">#</a> <code>v-for</code></h3><p>我们可以通过 <code>v-for</code> 指令, 基于一个数组来渲染一个列表, 其中 item 是迭代项的别名, index 是迭代项的位置索引, items 是数据源</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;li v-for=&quot;(item, index) in items&quot;&gt;
  {{ item.message }}
&lt;/li&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="v-for与对象" tabindex="-1"><a class="header-anchor" href="#v-for与对象" aria-hidden="true">#</a> <code>v-for与对象</code></h3><p>我们也可以使用 <code>v-for</code> 来遍历一个对象的所有属性。遍历的顺序会基于对该对象调用 <code>Object.keys()</code> 的返回值来决定。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const myObject = reactive({
  title: &#39;How to do lists in Vue&#39;,
  author: &#39;Jane Doe&#39;,
  publishedAt: &#39;2016-04-10&#39;
})

&lt;ul&gt;
  &lt;li v-for=&quot;(value, key, index) in myObject&quot;&gt;
    {{ index }}, {{ key }}: {{ value }}
  &lt;/li&gt;
&lt;/ul&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="v-for-与-v-if" tabindex="-1"><a class="header-anchor" href="#v-for-与-v-if" aria-hidden="true">#</a> <code>v-for</code> 与 <code>v-if</code></h3><p>不推荐同时使用 <code>v-for</code> 和 <code>v-if</code> !</p><p>当他们位于同一个节点上时, <code>v-if</code> 比 <code>v-for</code> 优先级更高</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!--
 这会抛出一个错误，因为属性 todo 此时
 没有在该实例上定义
--&gt;
&lt;li v-for=&quot;todo in todos&quot; v-if=&quot;!todo.isComplete&quot;&gt;
  {{ todo.name }}
&lt;/li&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在外新包装一层 <code>&lt;template&gt;</code> 再在其上使用 v-for 可以解决这个问题 (这也更加明显易读):</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template v-for=&quot;todo in todos&quot;&gt;
  &lt;li v-if=&quot;!todo.isComplete&quot;&gt;
    {{ todo.name }}
  &lt;/li&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,76),o=[c];function v(u,m){return i(),d("div",null,o)}const p=e(r,[["render",v],["__file","vue1.html.vue"]]);export{p as default};
