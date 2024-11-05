import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,a as t}from"./app-jzX7c5DY.js";const p={},e=t(`<h1 id="数组的相关算法" tabindex="-1"><a class="header-anchor" href="#数组的相关算法"><span>数组的相关算法</span></a></h1><h2 id="reduce" tabindex="-1"><a class="header-anchor" href="#reduce"><span>Reduce</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>array<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">accumulator<span class="token punctuation">,</span> currentValue<span class="token punctuation">,</span>currentIndex<span class="token punctuation">,</span>array</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// accumulator:累加器 就是上一次 return 的值,初始值,第二个参数为空的时候就是数组的第一个值</span>
    <span class="token comment">// currentValue:当前值</span>
    <span class="token comment">// currentIndex:当前索引</span>
    <span class="token comment">// array:数组</span>
    
<span class="token punctuation">}</span><span class="token punctuation">,</span> initialValue<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="demo" tabindex="-1"><a class="header-anchor" href="#demo"><span>Demo</span></a></h3><h4 id="数组中所有值的和" tabindex="-1"><a class="header-anchor" href="#数组中所有值的和"><span>数组中所有值的和</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 数组中所有值的和</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span>
arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">accumulator<span class="token punctuation">,</span>currentValue</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> accumulator <span class="token operator">+</span> currentValue
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="累加对象数组里面的值" tabindex="-1"><a class="header-anchor" href="#累加对象数组里面的值"><span>累加对象数组里面的值</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 累加对象数组里面的值</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">accumulator<span class="token punctuation">,</span>currentValue</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> accumulator <span class="token operator">+</span> currentValue<span class="token punctuation">.</span>a
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="展平嵌套数组" tabindex="-1"><a class="header-anchor" href="#展平嵌套数组"><span>展平嵌套数组</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 展平嵌套数组</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">accumulator<span class="token punctuation">,</span>currentValue</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> accumulator<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>currentValue<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="统计对象中值的出现次数" tabindex="-1"><a class="header-anchor" href="#统计对象中值的出现次数"><span>统计对象中值的出现次数</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 统计对象中值的出现次数</span>
<span class="token keyword">const</span> names <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Bob&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Tiff&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Bruce&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> countedNames <span class="token operator">=</span> names<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">allNames<span class="token punctuation">,</span> name</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> currCount <span class="token operator">=</span> allNames<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">??</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span>allNames<span class="token punctuation">,</span>
        <span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token operator">:</span> currCount <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// countedNames 的值是：</span>
<span class="token comment">// { &#39;Alice&#39;: 2, &#39;Bob&#39;: 1, &#39;Tiff&#39;: 1, &#39;Bruce&#39;: 1 }</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="按属性对对象进行分组" tabindex="-1"><a class="header-anchor" href="#按属性对对象进行分组"><span>按属性对对象进行分组</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> people <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">21</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Max&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Jane&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">groupBy</span><span class="token punctuation">(</span><span class="token parameter">objectArray<span class="token punctuation">,</span> property</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> objectArray<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> obj</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> key <span class="token operator">=</span> obj<span class="token punctuation">[</span>property<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> curGroup <span class="token operator">=</span> acc<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">??</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>acc<span class="token punctuation">,</span> <span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span>curGroup<span class="token punctuation">,</span> obj<span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> groupedPeople <span class="token operator">=</span> <span class="token function">groupBy</span><span class="token punctuation">(</span>people<span class="token punctuation">,</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>groupedPeople<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// {</span>
<span class="token comment">//   20: [</span>
<span class="token comment">//     { name: &#39;Max&#39;, age: 20 },</span>
<span class="token comment">//     { name: &#39;Jane&#39;, age: 20 }</span>
<span class="token comment">//   ],</span>
<span class="token comment">//   21: [{ name: &#39;Alice&#39;, age: 21 }]</span>
<span class="token comment">// }</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="数组去重" tabindex="-1"><a class="header-anchor" href="#数组去重"><span>数组去重</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> myArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;e&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;e&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;d&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;d&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;d&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;d&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> myArrayWithNoDuplicates <span class="token operator">=</span> myArray<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">accumulator<span class="token punctuation">,</span> currentValue</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>accumulator<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>currentValue<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span>accumulator<span class="token punctuation">,</span> currentValue<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> accumulator<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myArrayWithNoDuplicates<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="按顺序运行-promise" tabindex="-1"><a class="header-anchor" href="#按顺序运行-promise"><span>按顺序运行 Promise</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 链接一系列 Promise 处理程序。
 *
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>array<span class="token punctuation">}</span></span> <span class="token parameter">arr</span> ——一个 Promise 处理程序列表，每个处理程序接收前一个处理程序解决的结果并返回另一个 Promise。
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">input</span> ——开始调用 Promise 链的初始值
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> ——由一系列 Promise 链接而成的 Promise
 */</span>
<span class="token comment">// promiseChain.then(currentFunction)  </span>
<span class="token comment">// 第一个参数是  Promise.resolve(input) 也就是 10</span>
<span class="token keyword">function</span> <span class="token function">runPromiseInSequence</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> input</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token parameter">promiseChain<span class="token punctuation">,</span> currentFunction</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> promiseChain<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>currentFunction<span class="token punctuation">)</span><span class="token punctuation">,</span>
    Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Promise 函数 1</span>
<span class="token keyword">function</span> <span class="token function">p1</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span>a <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Promise 函数 2</span>
<span class="token keyword">function</span> <span class="token function">p2</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span>a <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 函数 3——将由 \`.then()\` 包装在已解决的 Promise 中</span>
<span class="token keyword">function</span> <span class="token function">f3</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Promise 函数 4</span>
<span class="token keyword">function</span> <span class="token function">p4</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span>a <span class="token operator">*</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> promiseArr <span class="token operator">=</span> <span class="token punctuation">[</span>p1<span class="token punctuation">,</span> p2<span class="token punctuation">,</span> f3<span class="token punctuation">,</span> p4<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token function">runPromiseInSequence</span><span class="token punctuation">(</span>promiseArr<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1200</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),o=[e];function c(u,l){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","Array.html.vue"]]),d=JSON.parse('{"path":"/web/common/Array.html","title":"数组的相关算法","lang":"zh-CN","frontmatter":{"title":"数组的相关算法","tag":["Array","算法"],"description":"数组的相关算法 Reduce Demo 数组中所有值的和 累加对象数组里面的值 展平嵌套数组 统计对象中值的出现次数 按属性对对象进行分组 数组去重 按顺序运行 Promise","head":[["meta",{"property":"og:url","content":"https://soft-vault.com/web/common/Array.html"}],["meta",{"property":"og:site_name","content":"Night.Soul"}],["meta",{"property":"og:title","content":"数组的相关算法"}],["meta",{"property":"og:description","content":"数组的相关算法 Reduce Demo 数组中所有值的和 累加对象数组里面的值 展平嵌套数组 统计对象中值的出现次数 按属性对对象进行分组 数组去重 按顺序运行 Promise"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-11T16:41:41.000Z"}],["meta",{"property":"article:author","content":"Night.Soul"}],["meta",{"property":"article:tag","content":"Array"}],["meta",{"property":"article:tag","content":"算法"}],["meta",{"property":"article:modified_time","content":"2024-05-11T16:41:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数组的相关算法\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-11T16:41:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Night.Soul\\",\\"url\\":\\"https://github.com/NightSquirrl\\"}]}"]]},"headers":[{"level":2,"title":"Reduce","slug":"reduce","link":"#reduce","children":[{"level":3,"title":"Demo","slug":"demo","link":"#demo","children":[]}]}],"git":{"createdTime":1699094106000,"updatedTime":1715445701000,"contributors":[{"name":"nightsoul","email":"w1083670160@163.com","commits":1}]},"readingTime":{"minutes":1.81,"words":543},"filePathRelative":"web/common/Array.md","localizedDate":"2023年11月4日","excerpt":"\\n<h2>Reduce</h2>\\n<div class=\\"language-javascript\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"language-javascript\\"><code>array<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">reduce</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">accumulator<span class=\\"token punctuation\\">,</span> currentValue<span class=\\"token punctuation\\">,</span>currentIndex<span class=\\"token punctuation\\">,</span>array</span><span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token comment\\">// accumulator:累加器 就是上一次 return 的值,初始值,第二个参数为空的时候就是数组的第一个值</span>\\n    <span class=\\"token comment\\">// currentValue:当前值</span>\\n    <span class=\\"token comment\\">// currentIndex:当前索引</span>\\n    <span class=\\"token comment\\">// array:数组</span>\\n    \\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span> initialValue<span class=\\"token punctuation\\">)</span>\\n</code></pre></div>","autoDesc":true}');export{k as comp,d as data};