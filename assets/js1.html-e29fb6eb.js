import{_ as n,r as l,o as s,c as r,b as e,d as i,e as t,a}from"./app-b1fe8d4e.js";const c={},o=e("div",{class:"custom-container tip"},[e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("circle",{cx:"12",cy:"12",r:"9"}),e("path",{d:"M12 8h.01"}),e("path",{d:"M11 12h1v4h1"})])]),e("p",{class:"custom-container-title"},"什么是JavaScript"),e("p",null,"JavaScript 是一门跨平台、面向对象的脚本语言，它能使网页可交互（例如拥有复杂的动画，可点击的按钮，通俗的菜单等）。另外还有高级的服务端 Javascript 版本，例如 Node.js，它可以让你在网页上添加更多功能，不仅仅是下载文件（例如在多台电脑之间的协同合作）。在宿主环境（例如 web 浏览器）中，JavaScript 能够通过其所连接的环境提供的编程接口进行控制。")],-1),u=a(`<h2 id="helloworld" tabindex="-1"><a class="header-anchor" href="#helloworld" aria-hidden="true">#</a> HelloWorld!</h2><p>js 代码需要编写在 <code>&lt;script&gt;</code> 标签中。<br> 打开网页, F12调出开发者工具, 切换到Console, 就能看到运行结果了。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
  console.log(&quot;HelloWorld!&quot;);
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们也可以通过创建 <code>.js</code> 文件, 并在html文件中引用, 来实现同样的效果。</p><p>1.js</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>console.log(&quot;HelloWorld!&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>1.html</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script src=&quot;./1.js&quot;&gt;&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="基本语法" tabindex="-1"><a class="header-anchor" href="#基本语法" aria-hidden="true">#</a> 基本语法</h2><h3 id="规范" tabindex="-1"><a class="header-anchor" href="#规范" aria-hidden="true">#</a> 规范</h3><ol><li>注释:</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 单行注释 只对后面有效果
/**
  多行注释 对中间编写的内容都有效
 */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>JS 中严格区分大小写</li><li>建议每一条语句中都以<code>;</code>结尾, 不写浏览器会自动添加, 不报错, 但最好写上。</li></ol><h3 id="变量声明" tabindex="-1"><a class="header-anchor" href="#变量声明" aria-hidden="true">#</a> 变量声明</h3><p>js 中使用 <code>var</code>、<code>const</code>、<code>let</code> 来声明变量, 其中不建议使用 <code>var</code>, <code>const</code> 声明的值为只读, <code>let</code> 声明的值可读可写。<br> js中不需要我们去声明变量类型, 会根据赋值自动判断类型</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let a = 0;
const b = 1;
a = 1; √
b = 2; ×
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="标识符" tabindex="-1"><a class="header-anchor" href="#标识符" aria-hidden="true">#</a> 标识符</h3><p>js中所有的可以由我们自主命名的都可以被称为标识符: 变量名、函数名、属性名。 遵循如下规则:</p><ol><li>可以含有字母、数字、_、$</li><li>不能以数字开头</li><li>不能是关键字或保留字</li><li>一般采用驼峰命名法</li></ol><ul><li>小驼峰: 首字母小写、后面每个单词的首字母大写其余小写 helloWorld</li><li>大驼峰: 每个单词的首字母大写其余小写 HelloWorld</li></ul><ol start="5"><li>不建议用中文</li><li>命名应通俗易懂</li></ol><h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h2><h3 id="字符串-string" tabindex="-1"><a class="header-anchor" href="#字符串-string" aria-hidden="true">#</a> 字符串 string</h3><p>字符串需要用单引号或双引号引起来, 但是引号不能嵌套( 双引号里不能用双引号、单引号里面不能有单引号 )。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let str = &quot;123&quot;;
console.log(&quot;123&quot;);
console.log(&quot;我说: &quot;今天天气真好&quot;。&quot;); ×
console.log(&quot;我说: &#39;今天天气真好&#39;。&quot;); √
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果非要用需要在前面加上 <code>\\</code> 转义 <code>\\&quot;</code>、<code>\\&#39;</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>console.log(&quot;我说: \\&quot;今天天气真好\\&quot;。&quot;); 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>字符串可以用 + 拼接在一起</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let a = &quot;1&quot;;
let b = &quot;2&quot;;
console.log(a + b); // 12
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数值-number" tabindex="-1"><a class="header-anchor" href="#数值-number" aria-hidden="true">#</a> 数值 number</h3><p>js 中所有数值都是Number类型, 包括整数和浮点数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let a = 1;
let b = 2;
console.log(a + b); // 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let a = Infinity; //正无穷
let b = NaN; // not a number
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>0.1 + 0.2 != 0.3 问题</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let a = 0.1;
let b = 0.2;
console.log(a + b); //0.30000000000000004
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果用js进行浮点运算, 可能会得到一个不精确的结果, 因此不要用 js 进行对精确度比较高的运算。 解决办法(非要用的话)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let a = 0.1;
let b = 0.2;
console.log((a*10 + b*10) / 100);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="布尔值-boolean" tabindex="-1"><a class="header-anchor" href="#布尔值-boolean" aria-hidden="true">#</a> 布尔值 boolean</h3><p>布尔值只有两个 true 和 false 用来做逻辑判断。</p><h3 id="空值-null-未定义-undefined" tabindex="-1"><a class="header-anchor" href="#空值-null-未定义-undefined" aria-hidden="true">#</a> 空值 null 未定义 undefined</h3><p>null类型的值只有一个, 即 <code>null</code>, 专门用来表示空对象。<br> undefined, 即 <code>undefined</code>, 专门用来表示声明了但是没有赋值的变量。</p><h3 id="对象-object-后续涉及" tabindex="-1"><a class="header-anchor" href="#对象-object-后续涉及" aria-hidden="true">#</a> 对象 object (后续涉及)</h3><h3 id="类型检查" tabindex="-1"><a class="header-anchor" href="#类型检查" aria-hidden="true">#</a> 类型检查</h3><p>js 中我们可以通过 <code>typeof</code> 检查变量类型。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let a = &quot;1&quot;;
let b = 1;
console.log(a); // 1
console.log(b); // 1
// 在控制台中我们输出看不出来类型, 通过 typeof 检查
console.log(typeof a); // string
console.log(typeof b); // number
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="强制类型转换" tabindex="-1"><a class="header-anchor" href="#强制类型转换" aria-hidden="true">#</a> 强制类型转换</h3><p>指将一个数据类型强制转换为其他的数据类型。<br> 主要指将其他的数据类型转换为 String Number Boolean。<br> 转换为 String :</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let a = 123;
// 1.调用 a 的 toString() 方法
console.log(a.toString); // 有局限性(null、undefined不能用)
// 2.调用 String() 函数
console.log(String(a));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>转换为 Number :</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let a = &quot;123&quot;;
// 1.调用 Number() 函数
console.log(Number(a)); 
// 纯数字字符串直接转换为数字
// 有非数字内容或 undefined 转化为 NaN
// 字符串为空或空格则转化为 0
// true 转 1 , false 转 0
// 2.调用 parseInt() 函数, 将字符串中的有效整数内容取出
let b = &quot;123px&quot;;
let c = &quot;123px456&quot;
console.log(Number(a)); // NaN
console.log(parseInt(b)); // 123
console.log(parseInt(c)); // 123
// 3.调用 parseFloat() 函数, 将字符串中的有效小数内容取出
let d = &quot;0.1a&quot;;
console.log(parseInt(d)); // 0
console.log(parseFloat(d)); // 0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>转换为Boolean:</p><ol><li>调用 Boolean() 函数 <ul><li>数值: 除了 0 和 NaN 都是 true</li><li>字符串: 除了空串都是 true</li><li>null 和 undefined 都是 false</li></ul></li></ol><h2 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h2><p>通过运算符可以对一个或多个值进行运算并获得运算结果。</p><h3 id="算数运算符" tabindex="-1"><a class="header-anchor" href="#算数运算符" aria-hidden="true">#</a> 算数运算符</h3><p><code>+ - * /</code></p><h3 id="一元运算符" tabindex="-1"><a class="header-anchor" href="#一元运算符" aria-hidden="true">#</a> 一元运算符</h3><p><code>+</code> 正号、<code>-</code> 负号</p><h3 id="自增自减" tabindex="-1"><a class="header-anchor" href="#自增自减" aria-hidden="true">#</a> 自增自减</h3><p>使变量在自身的基础上增加、减少 1</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let a = 0;
a ++;
++ a;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>a ++</code> 和 <code>++ a</code>都会立即使变量立即加 1<br> 但是<code>a ++</code>等于原值 <code>++ a</code>等于自增后的值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let a = 10;
a ++;
console.log(a ++); // 11
console.log(a); // 12
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="逻辑运算符" tabindex="-1"><a class="header-anchor" href="#逻辑运算符" aria-hidden="true">#</a> 逻辑运算符</h3><p>js 为我们提供了三种运算符 <code>!</code>非 <code>&amp;&amp;</code>与 <code>||</code>或。</p><ol><li>非 取反</li><li>与 两边都为true, 结果才为true</li><li>或 两边都为false, 结果才为false</li></ol><h3 id="赋值运算符" tabindex="-1"><a class="header-anchor" href="#赋值运算符" aria-hidden="true">#</a> 赋值运算符</h3><p><code>=</code> <code>+=</code> <code>-=</code> <code>*=</code> <code>/*</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let a = 10;
a += 1; // 11
a -= 1; // 10
a *= 2; // 20
a /= 2; // 10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="关系运算符" tabindex="-1"><a class="header-anchor" href="#关系运算符" aria-hidden="true">#</a> 关系运算符</h3><p>通过关系运算符可以比较两个值的大小关系。<br><code>&gt;</code> <code>&lt;</code> <code>&lt;=</code> <code>&gt;=</code></p><h3 id="相等运算符" tabindex="-1"><a class="header-anchor" href="#相等运算符" aria-hidden="true">#</a> 相等运算符</h3><p><code>==</code> <code>===</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let a = 10;
console.log(a == &quot;10&quot;); //true
console.log(a === &quot;10&quot;); //false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="条件运算符" tabindex="-1"><a class="header-anchor" href="#条件运算符" aria-hidden="true">#</a> 条件运算符</h3><p>表达式?语句1:语句2;<br> 对表达式进行判断, 值为true执行语句1, 值为false执行语句2。</p><h3 id="运算符优先级" tabindex="-1"><a class="header-anchor" href="#运算符优先级" aria-hidden="true">#</a> 运算符优先级</h3>`,77),v=e("br",null,null,-1),b={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_precedence",target:"_blank",rel:"noopener noreferrer"},h=a(`<h2 id="if-语句" tabindex="-1"><a class="header-anchor" href="#if-语句" aria-hidden="true">#</a> if 语句</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if(条件表达式1) {
  语句1;
} else if(条件表达式2) {
  语句2;
} else {
  语句3;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="switch-语句" tabindex="-1"><a class="header-anchor" href="#switch-语句" aria-hidden="true">#</a> switch 语句</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>switch(条件表达式) {
  case 表达式1:
    语句1;
    break;
  case 表达式2：:
    语句2;
    break;
  default:
    语句3;
    break;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="while-循环" tabindex="-1"><a class="header-anchor" href="#while-循环" aria-hidden="true">#</a> while 循环</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>while(条件表达式) {

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="for-循环" tabindex="-1"><a class="header-anchor" href="#for-循环" aria-hidden="true">#</a> for 循环</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>for(let i = 0; i &lt; 10; i ++) {
  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function m(p,g){const d=l("ExternalLinkIcon");return s(),r("div",null,[o,u,e("p",null,[i("高优先级先计算, 同优先级从左往右运算。"),v,i(" 参考"),e("a",b,[i("优先级表"),t(d)])]),h])}const f=n(c,[["render",m],["__file","js1.html.vue"]]);export{f as default};
