import{_ as e,o as i,c as n,a as l}from"./app-b1fe8d4e.js";const d="/vue5.png",t="/todo1.png",s="/todo2.png",v={},a=l(`<h2 id="模板引用" tabindex="-1"><a class="header-anchor" href="#模板引用" aria-hidden="true">#</a> 模板引用</h2><p>虽然 Vue 抽象了大部分对 DOM 的直接操作, 但在某些情况下, 我们还是希望能直接访问 DOM 元素, 要实现这点, 我们可以通过使用特殊的 <code>ref</code> 属性。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script setup lang=&quot;ts&quot;&gt;
import { ref } from &#39;vue&#39;;

// 声明一个 ref 来存放该元素的引用
// 必须和模板里的 ref 同名
const inputRef = ref(null); 
const log = () =&gt; {
  console.log(inputRef);
  console.log(inputRef.value); // 这样我们就拿到了同名 ref 元素的 DOM 
}
&lt;/script&gt;

&lt;template&gt;
  &lt;input ref=&quot;inputRef&quot; /&gt;
  &lt;button @click=&quot;log&quot;&gt;click&lt;/button&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组件基础" tabindex="-1"><a class="header-anchor" href="#组件基础" aria-hidden="true">#</a> 组件基础</h2><p>组件允许我们将 UI 划分为独立的、可重用的部分, 并且可以对每个部分进行单独的思考。在实际应用中, 组件常常被组织成层层嵌套的树状结构: <img src="`+d+`" alt=""></p><h3 id="定义一个组件" tabindex="-1"><a class="header-anchor" href="#定义一个组件" aria-hidden="true">#</a> 定义一个组件</h3><p>我们一般会将 Vue 组件定义在一个单独的 <code>.vue</code> 文件中, 这杯叫做单文件组件。</p><p>ButtonCounter.vue</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script setup&gt;
import { ref } from &#39;vue&#39;

const count = ref(0)
&lt;/script&gt;

&lt;template&gt;
  &lt;button @click=&quot;count++&quot;&gt;You clicked me {{ count }} times.&lt;/button&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用组件" tabindex="-1"><a class="header-anchor" href="#使用组件" aria-hidden="true">#</a> 使用组件</h3><p>要使用一个子组件, 我们需要在父组件中导入它。</p><p>App.vue</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script setup&gt;
import ButtonCounter from &#39;./ButtonCounter.vue&#39;
&lt;/script&gt;

&lt;template&gt;
  &lt;h1&gt;Here is a child component!&lt;/h1&gt;
  &lt;ButtonCounter /&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>组件可以被复用多次, 且各个组件之间相互独立, 复用的组件不会相互影响:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;h1&gt;Here is a child component!&lt;/h1&gt;
&lt;ButtonCounter /&gt;
&lt;ButtonCounter /&gt;
&lt;ButtonCounter /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="传递props" tabindex="-1"><a class="header-anchor" href="#传递props" aria-hidden="true">#</a> 传递props</h3><p>我们可以通过 props 属性来向组件传递数据, 要传递数据, 我们需要在组件的 props 列表上声明它:</p><p>BlogPost.vue</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script setup&gt;
const props = defineProps([&#39;title&#39;]);
console.log(props.title);
&lt;/script&gt;

&lt;template&gt;
  &lt;h4&gt;{{ title }}&lt;/h4&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当一个 props 被注册后, 可以像下面这样自定义属性的形式传递数据:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;BlogPost title=&quot;My journey with Vue&quot; /&gt;
&lt;BlogPost title=&quot;Blogging with Vue&quot; /&gt;
&lt;BlogPost title=&quot;Why Vue is so fun&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="监听事件" tabindex="-1"><a class="header-anchor" href="#监听事件" aria-hidden="true">#</a> 监听事件</h3><p>有时候子组件需要与父组件进行交互。 子组件可以通过调用内置的 <code>$emit</code> 方法, 通过传入事件名称来抛出一个事件:</p><p>因为有了 <code>@countPlus=&quot;count ++&quot;</code> 的监听, 父组件会接收这一事件, 从而更新 <code>count</code> 的值。</p><p>App.vue</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script setup lang=&quot;ts&quot;&gt;
import { ref } from &#39;vue&#39;;
import countBtn from &#39;./components/countBtn.vue&#39;;

const count = ref(0)
&lt;/script&gt;

&lt;template&gt;
  &lt;div&gt;
    &lt;p&gt;{{ count }}&lt;/p&gt;
    &lt;countBtn @countPlus=&quot;count ++&quot;/&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>countBtn.vue</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;button @click=&quot;$emit(&#39;countPlus&#39;)&quot;&gt;click&lt;/button&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="案例-todo-list" tabindex="-1"><a class="header-anchor" href="#案例-todo-list" aria-hidden="true">#</a> 案例 TODO List</h2><p>效果图: <img src="`+t+'" alt=""><img src="'+s+`" alt=""> App.vue</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script setup lang=&quot;ts&quot;&gt;
import { ref } from &#39;vue&#39;;
import todoHeader from &quot;@/components/todoHeader.vue&quot;;
import todoList from &#39;@/components/todoList.vue&#39;;
import todoFooter from &#39;@/components/todoFooter.vue&#39;;

interface todoItem {
  id: string,
  title: string,
  done: boolean
}
const todo = ref&lt;todoItem[]&gt;([])

const addTODO = (title: string) =&gt; {
  let obj = {
    id: String(todo.value.length + 1),
    title: title,
    done: false
  }
  todo.value.push(obj)
}

const deleteAll = () =&gt; {
  todo.value = todo.value.filter(item =&gt; {
    return item.done === false
  })
}

const checkTodo = (id: string) =&gt; {
  todo.value.forEach(item =&gt; {
    if (item.id === id) item.done = !item.done;
  });
}

const checkAllTodo = (done: boolean) =&gt; {
  todo.value.forEach((item) =&gt; {
    item.done = done;
  })
}

const deleteTodo = (id: string) =&gt; {
  if (confirm(&quot;确认删除吗?&quot;)) {
    todo.value = todo.value.filter(item =&gt; {
      return item.id !== id
    })
  }
}
&lt;/script&gt;

&lt;template&gt;
  &lt;div class=&quot;mainContainer&quot;&gt;
    &lt;todoHeader class=&quot;header&quot; :addTODO=&quot;addTODO&quot; /&gt;
    &lt;todoList class=&quot;list&quot; :todo=&quot;todo&quot; :checkTodo=&quot;checkTodo&quot; :deleteTodo=&quot;deleteTodo&quot; /&gt;
    &lt;todoFooter class=&quot;footer&quot; :todo=&quot;todo&quot; :deleteAll=&quot;deleteAll&quot; :checkAllTodo=&quot;checkAllTodo&quot; /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style scoped&gt;
.mainContainer {
  width: 400px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid grey;
  display: flex;
  flex-direction: column;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>todoHeader.vue</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script setup lang=&quot;ts&quot;&gt;

const props = defineProps([&quot;addTODO&quot;])
const addTODO = props.addTODO;

const add = (e: any) =&gt; {
  const title = e.target.value;
  if(!title.trim()) alert(&quot;输入不能为空&quot;);
  else addTODO(title);
  e.target.value = &quot;&quot;;
}

&lt;/script&gt;

&lt;template&gt;
  &lt;div&gt;
    &lt;input type=&quot;text&quot; placeholder=&quot;请输入你的任务名称, 按回车键确认&quot; @keyup.enter=&quot;add&quot; &gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style scoped&gt;
input {
  width: 400px;
  height: 25px;
}
div {
  display: flex;
  margin-top: 15px;
  margin-left: 15px;
  height: 25px;
  width: 370px;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>todoList.vue</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script setup lang=&quot;ts&quot;&gt;
import todoItem from &#39;@/components/todoItem.vue&#39;;

defineProps([&quot;todo&quot;, &quot;checkTodo&quot;, &quot;deleteTodo&quot;]);

&lt;/script&gt;

&lt;template&gt;
  &lt;div&gt;
    &lt;ul&gt;
      &lt;todoItem class=&quot;todoItem&quot; v-for=&quot;item in todo&quot; :key=&quot;item.id&quot; :data=&quot;item&quot; :checkTodo=&quot;checkTodo&quot;
        :deleteTodo=&quot;deleteTodo&quot; /&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style scoped&gt;
div {
  display: flex;
  margin-top: 15px;
  margin-bottom: 5px;
}

.todoItem {
  margin-bottom: 10px;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>todoItem.vue</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script setup lang=&quot;ts&quot;&gt;
const props = defineProps([&#39;data&#39;, &quot;checkTodo&quot;, &quot;deleteTodo&quot;]);
const checkTodo = props.checkTodo;
const deleteTodo = props.deleteTodo;

const handleCheck = (id: string) =&gt; {
  checkTodo(id);
}

const handelDelete = (id: string) =&gt; {
  deleteTodo(id);
}
&lt;/script&gt;

&lt;template&gt;
  &lt;li&gt;
    &lt;label&gt;
      &lt;input type=&quot;checkbox&quot; :checked=&quot;data.done&quot; @change=&quot;handleCheck(data.id)&quot;&gt;
      &lt;!-- &lt;input type=&quot;checkbox&quot; v-model=&quot;data.done&quot;&gt; --&gt;
      &lt;span&gt; {{ data.title }}&lt;/span&gt;
    &lt;/label&gt;
    &lt;button @click=&quot;handelDelete(data.id)&quot;&gt;删除&lt;/button&gt;
  &lt;/li&gt;
&lt;/template&gt;

&lt;style scoped&gt;
li {
  display: flex;
  justify-content: space-between;
  width: 320px;
}
input {
  margin-right: 10px;
}
button {
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  display: none;
}
li:hover button {
  display: block;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>todoFooter.vue</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script setup lang=&quot;ts&quot;&gt;
import { computed, ref } from &#39;vue&#39;;

const props = defineProps([&quot;todo&quot;, &quot;deleteAll&quot;, &quot;checkAllTodo&quot;]);
const footerTodo = computed(() =&gt; props.todo);
const deleteAll = props.deleteAll;
const checkAllTodo = props.checkAllTodo;

const deleteTODO = () =&gt; {
  deleteAll();
}

const doneTodos = computed(() =&gt; {
  return footerTodo.value.filter((item: any) =&gt; item.done === true).length;
})

const isAll = computed({
  get() {
    return doneTodos.value == footerTodo.value.length;
  },
  set(value) {
    checkAllTodo(value);
  }
})

&lt;/script&gt;

&lt;template&gt;
  &lt;div&gt;
    &lt;label v-show=&quot;todo.length&quot;&gt;
      &lt;input type=&quot;checkbox&quot; v-model=&quot;isAll&quot;&gt;
    &lt;/label&gt;
    &lt;span v-show=&quot;todo.length&quot;&gt;
      &lt;span&gt;已完成 {{ doneTodos }} &lt;/span&gt; / 全部 {{ todo.length }}
    &lt;/span&gt;
    &lt;button @click=&quot;deleteTODO&quot; v-show=&quot;doneTodos&quot;&gt;清除已完成任务&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style scoped&gt;
div {
  display: flex;
  margin-bottom: 15px;
  margin-left: 15px;
}

input {
  margin-right: 15px;
}

button {
  position: relative;
  right: -120px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,39),u=[a];function o(r,c){return i(),n("div",null,u)}const b=e(v,[["render",o],["__file","vue3.html.vue"]]);export{b as default};
