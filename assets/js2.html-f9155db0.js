import{_ as e,a as n}from"./js2-2-cf57c6a6.js";import{_ as i,o as d,c as a,a as l}from"./app-b1fe8d4e.js";const s={},t=l(`<h2 id="对象" tabindex="-1"><a class="header-anchor" href="#对象" aria-hidden="true">#</a> 对象</h2><p>对象属于一种复合数据类型, 在对象中可以保存多种数据类型的属性。<br> 对象的分类:</p><ol><li>内建对象: 由 ES 标准中定义的对象, 在任何 ES 实现中都能使用。</li><li>宿主对象: 由 JS 运行环境提供的对象, 如 DOM BOM</li><li>自定义对象: 由开发人员自己创建的对象</li></ol><h3 id="创建对象" tabindex="-1"><a class="header-anchor" href="#创建对象" aria-hidden="true">#</a> 创建对象</h3><p>使用 <code>new</code> 关键字调用的函数, 是构造函数constructor<br> 构造函数是专门用来创建对象的函数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let girlfriend = new Object();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="添加属性" tabindex="-1"><a class="header-anchor" href="#添加属性" aria-hidden="true">#</a> 添加属性</h3><p>语法: 对象名.属性名(字符串) = 属性值;</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>girlfriend.name = &quot;xiaohong&quot;;
girlfriend.age = 18;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="读取属性" tabindex="-1"><a class="header-anchor" href="#读取属性" aria-hidden="true">#</a> 读取属性</h3><p>语法: 对象名.属性名(字符串);<br> 如果读取对象中没有的属性会返回undefined;</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>console.log(girlfriend.name); // xiaohong
console.log(girlfriend.sex); // undefined
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改属性" tabindex="-1"><a class="header-anchor" href="#修改属性" aria-hidden="true">#</a> 修改属性</h3><p>语法: 对象名.属性名(字符串) = 属性值;</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>girlfriend.name = &quot;lisi&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="删除属性" tabindex="-1"><a class="header-anchor" href="#删除属性" aria-hidden="true">#</a> 删除属性</h3><p>语法: delete 对象名.属性名(字符串)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>delete girlfriend.age;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="特殊的属性名-计算属性" tabindex="-1"><a class="header-anchor" href="#特殊的属性名-计算属性" aria-hidden="true">#</a> 特殊的属性名(计算属性)</h3><p>语法: 对象名[属性名(字符串)] = 属性值;</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>girlfriend.123 = &quot;456&quot;; // 报错
girlfriend[&quot;123&quot;] = &quot;456&quot;;
console.log(girlfriend[&quot;123&quot;]); // 456
// 动态属性
let a = &quot;123&quot;; 
console.log(girlfriend[a]); // 456
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="属性检查" tabindex="-1"><a class="header-anchor" href="#属性检查" aria-hidden="true">#</a> 属性检查</h3><p>检查一个对象中是否有某个属性, 有返回true, 无返回false。 语法: 属性名(字符串) in 对象;</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>console.log(&quot;name&quot; in girlfriend); // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="基本数据类型和引用数据类型" tabindex="-1"><a class="header-anchor" href="#基本数据类型和引用数据类型" aria-hidden="true">#</a> 基本数据类型和引用数据类型</h2><p>基本数据类型有: String Number Boolean Null Undefined<br> 引用数据类型有: Object</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let a = 10;
let b = a;
a ++;
console.log(a);
console.log(b);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let obj = new Object();
obj.name = &quot;zhangsan&quot;;
let obj2 = obj;
obj.name = &quot;lisi&quot;;
console.log(obj.name);
console.log(obj1.name);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由上面两个例子可以看出:<br> 基本数据类型的值直接存储在栈内存中, 值与值之间是相互独立的, 一个值的改变不会影响另一个值。<br> 对象是保存在堆内存中, 每创建一个对象就会在堆内存中开辟出一个新的空间, 变量保存的是对象的内存地址(对象的引用), 如果两个变量保存的是同一个对象引用, 当通过一个变量修改属性时, 另一个也会受到影响。 <img src="`+e+'" alt=""></p><p><img src="'+n+`" alt=""></p><h2 id="对象字面量" tabindex="-1"><a class="header-anchor" href="#对象字面量" aria-hidden="true">#</a> 对象字面量</h2><p>对象字面量是创建对象的另一种方式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let girlfriend = {
  name: &quot;xiaohong&quot;,
  age: 18
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2><ul><li>在 js 中, 函数也是个对象</li><li>函数可以封装一些功能, 在需要时可以执行这些功能</li><li>函数中可以保存一些代码在需要的时候调用</li><li>使用 typeof 检查一个函数对象时, 会返回 function</li></ul><h3 id="创建函数" tabindex="-1"><a class="header-anchor" href="#创建函数" aria-hidden="true">#</a> 创建函数</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function fun() {
  console.log(&quot;这是一个函数&quot;);
}
let fun = function() {
  console.log(&quot;这是一个函数&quot;);
}
let fun = () =&gt; {
  console.log(&quot;这是一个箭头函数&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>封装到函数中的代码不会立即执行, 会在调用的时候执行。</p><h3 id="调用函数" tabindex="-1"><a class="header-anchor" href="#调用函数" aria-hidden="true">#</a> 调用函数</h3><p>语法: 函数名();</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fun(); //这是一个函数
fun();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数传参" tabindex="-1"><a class="header-anchor" href="#函数传参" aria-hidden="true">#</a> 函数传参</h3><p>可以在函数的()中指定一个火多个形参, 多个形参之间用 <code>,</code> 隔开, 声明形参相当于在函数内部声明了对应的变量, 但是不赋值, 在调用函数时, 可以在()中指定实参, 实参将赋值给函数中对应的形参, 多余的实参不会被赋值, 缺失的实参, 值会为undefined</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function sum(num1, num2) {
  console.log(num1 + num2);
}
sum(1, 2); // 3
sum(1, 2, 3); // 3
sum(1); // NaN
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数返回值" tabindex="-1"><a class="header-anchor" href="#函数返回值" aria-hidden="true">#</a> 函数返回值</h3><p>可以使用 return 来设置函数的返回值。<br> 语法: return 值<br> return后的值将会作为函数的执行结果返回。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function sum(num1, num2) {
  return num1 + num2;
}
let result = sum(1, 2);
console.log(result); // 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="立即执行函数" tabindex="-1"><a class="header-anchor" href="#立即执行函数" aria-hidden="true">#</a> 立即执行函数</h3><p>用 <code>()</code> 包裹匿名函数并在后面加 <code>()</code> , 函数会立即执行, 这类函数往往只执行一次。<br> 可以在前面的括号中接收参数, 在后面的括号中传递参数。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(function(a, b) {
  console.log(a + b); // 579
})(123, 456);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h3><p>对象的属性值可以是任何的数据类型, 也可以是一个函数。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let obj = {};
obj.name = &quot;zhangsan&quot;;
obj.age = 22;
obj.sayName = function() {
  console.log(obj.name);
}
obj.sayName(); //zhangsan
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="for-in" tabindex="-1"><a class="header-anchor" href="#for-in" aria-hidden="true">#</a> for in</h3><p>我们可以通过 for in 来获取对象的属性名。<br> 语法:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let obj = {
  name: &quot;zhangsan&quot;,
  age: 18,
  sex: &quot;男&quot;
}
for(let n in obj) {
  console.log(n); // name age sex
  console.log(obj[n]); // zhangsan 18 男
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h2><p>语法: <code>数组[索引] = 值</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let a = [];
a[0] = 1;
a[1] = 2;
console.log(a[0]); // 1
console.log(a.length); // 获取数组长度 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Array的方法</p><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td>concat()</td><td>连接两个或更多的数组, 并返回结果。</td></tr><tr><td>join()</td><td>将数组的所有元素连接成一个字符串。</td></tr><tr><td>pop()</td><td>删除数组的最后一个元素, 并返回该元素。</td></tr><tr><td>push()</td><td>将新元素添加到数组的末尾, 并返回新的长度。</td></tr><tr><td>shift()</td><td>删除数组的第一个元素, 并返回该元素。</td></tr><tr><td>reverse()</td><td>反转数组中元素的顺序。</td></tr><tr><td>slice()</td><td>选择数组的一部分, 并返回新数组。</td></tr><tr><td>sort()</td><td>对数组的元素进行排序。</td></tr><tr><td>splice()</td><td>从数组中添加/删除元素。</td></tr><tr><td>toString()</td><td>将数组转换为字符串, 并返回结果。</td></tr><tr><td>includes()</td><td>检查数组是否包含指定的元素。</td></tr><tr><td>find()</td><td>返回数组中第一个通过测试的元素的值。</td></tr><tr><td>filter()</td><td>使用数组中通过测试的每个元素创建新数组。</td></tr><tr><td>map()</td><td>使用为每个数组元素调用函数的结果创建新数组。</td></tr></tbody></table>`,61),r=[t];function c(u,o){return d(),a("div",null,r)}const b=i(s,[["render",c],["__file","js2.html.vue"]]);export{b as default};
