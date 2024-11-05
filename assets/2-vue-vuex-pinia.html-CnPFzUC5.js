import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as i,c as l,b as n,d as e,e as t,a as s}from"./app-jzX7c5DY.js";const c={},r=s(`<figure><img src="https://pinia.vuejs.org/logo.svg" alt="pinia.svg" tabindex="0" loading="lazy"><figcaption>pinia.svg</figcaption></figure><h1 id="vue-状态管理-vuex-pinia" tabindex="-1"><a class="header-anchor" href="#vue-状态管理-vuex-pinia"><span>Vue 状态管理 vuex pinia</span></a></h1><h2 id="vuex" tabindex="-1"><a class="header-anchor" href="#vuex"><span>Vuex</span></a></h2><h3 id="vue2-选项式-api" tabindex="-1"><a class="header-anchor" href="#vue2-选项式-api"><span>Vue2 选项式 API</span></a></h3><blockquote><p>状态管理 - 在 src 中创建文件夹 store，创建 index.js 文件</p></blockquote><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code>import Vue from &#39;vue&#39;
import Vuex from &#39;vuex&#39;

Vue.use(Vuex) // 把 Vuex 注册到Vue 上

export default new Vuex.Store({
    // 在开发环境开启严格模式 这样修改数据 就必须通过 mutation 来处理
    strict:products.env.NODE_ENV !== &#39;production&#39;,
    // 状态
    state: {
    },
    // 用来处理状态
    mutations: {
    },
    // 用于异步处理
    actions: {
    },
    // 用来挂载模块
    modules: {
    }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>要使用 store 就在把 store 挂载到 Vue 中</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span>

Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>productionTip <span class="token operator">=</span> <span class="token boolean">false</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 挂载到vue 中</span>
  store<span class="token punctuation">,</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="vuex-基础使用" tabindex="-1"><a class="header-anchor" href="#vuex-基础使用"><span>vuex 基础使用</span></a></h4><h5 id="_1-state" tabindex="-1"><a class="header-anchor" href="#_1-state"><span>1.state</span></a></h5><blockquote><p>在 state 中添加数据</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">/* src/store/index.js */</span>

<span class="token comment">// 导入 Vue</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token comment">// 导入 Vuex 插件</span>
<span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

<span class="token comment">// 把 Vuex 注册到Vue 上</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">21</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>State 数据的使用</p></blockquote><ol><li>直接使用 <code>this.$store.state[属性]</code> ，（<code>this</code> 可以省略）</li></ol><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;app&quot;</span><span class="token operator">&gt;</span>
    <span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>name <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>age <span class="token punctuation">}</span><span class="token punctuation">}</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>使用 mapState</li></ol><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;app&quot;</span><span class="token operator">&gt;</span>
    <span class="token punctuation">{</span><span class="token punctuation">{</span> name <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token punctuation">{</span><span class="token punctuation">{</span> age <span class="token punctuation">}</span><span class="token punctuation">}</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>

<span class="token comment">// 从 Vuex 中导入 mapState</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> mapState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 将 store 映射到当前组件的计算属性</span>
    <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style  scoped<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意 maopState 的别名</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// name2 和 age2 都是别名</span>
    <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name2</span><span class="token operator">:</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age2</span><span class="token operator">:</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-mutation" tabindex="-1"><a class="header-anchor" href="#_2-mutation"><span>2.Mutation</span></a></h5><p><code>Store</code> 中的状态不能直接对其进行操作，我们得使用 <code>Mutation</code> 来对 <code>Store</code> 中的状态进行修改，虽然看起来有些繁琐，但是方便集中监控数据的变化</p><p><code>state</code> 的更新必须是 <code>Mutation</code> 来处理</p><blockquote><p>我们现在 mutaions 里定义个方法</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">/* src/store/index.js */</span>

<span class="token comment">// 导入 Vue</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token comment">// 导入 Vuex 插件</span>
<span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

<span class="token comment">// 把 Vuex 注册到Vue 上</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">21</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 在这里定义 方法</span>
    <span class="token doc-comment comment">/**
     *
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">state</span> 第一个参数是 Store 中的状态(必须传递)
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">newName</span> 传入的参数 后面是多个
     */</span>
    <span class="token function">changeName</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> newName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 这里简单举个例子 修改个名字</span>
      state<span class="token punctuation">.</span>name <span class="token operator">=</span> newName
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在组件中使用 mutations 中的方法</p></blockquote><p>同样有两种方法在组件触发 <code>mutations</code> 中的方法</p><ol><li>this.$store.commit() 触发</li></ol><p>在 <code>methods</code> 中定义一个方法，在这个方法里面进行触发 <code>mutations</code> 中的方法</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;app&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;handleClick&quot;</span><span class="token operator">&gt;</span>方式<span class="token number">1</span> 按钮使用 mutation 中方法<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token punctuation">{</span><span class="token punctuation">{</span> name <span class="token punctuation">}</span><span class="token punctuation">}</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>

<span class="token comment">// 从 Vuex 中导入 mapState</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> mapState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 将 store 映射到当前组件的计算属性</span>
    <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 触发 mutations 中的 changeName</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;changeName&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;小浪&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style  scoped<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>使用 mapMutations</li></ol><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;app&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;changeName(&#39;小浪&#39;)&quot;</span><span class="token operator">&gt;</span>方式<span class="token number">2</span> 按钮使用 mutation 中方法<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token punctuation">{</span><span class="token punctuation">{</span> name <span class="token punctuation">}</span><span class="token punctuation">}</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>

<span class="token comment">// 从 Vuex 中导入 mapState</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> mapState<span class="token punctuation">,</span> mapMutations <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 将 store 映射到当前组件的计算属性</span>
    <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	<span class="token comment">// 将 mutations 中的 changeName 方法映射到 methods 中，就能直接使用了 changeName 了</span>
    <span class="token operator">...</span><span class="token function">mapMutations</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;changeName&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style  scoped<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-action" tabindex="-1"><a class="header-anchor" href="#_3-action"><span>3.Action</span></a></h5><blockquote><p><code>Action</code> 和 <code>Mutation</code> 区别</p></blockquote><p><code>Action</code> 同样也是用来处理任务，不过它处理的是异步任务，异步任务必须要使用 <code>Action</code>，通过 <code>Action</code> 触发 <code>Mutation</code> 间接改变状态，不能直接使用 <code>Mutation</code> 直接对异步任务进行修改</p><blockquote><p>先在 <code>Action</code> 中定义一个异步方法来调用 <code>Mutation</code> 中的方法</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">/* src/store/index.js */</span>

<span class="token comment">// 导入 Vue</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token comment">// 导入 Vuex 插件</span>
<span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

<span class="token comment">// 把 Vuex 注册到Vue 上</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">21</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 在这里定义 方法</span>
    <span class="token doc-comment comment">/**
     *
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">state</span> 第一个参数是 Store 中的状态(必须传递)
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">newName</span> 传入的参数 后面是多个
     */</span>
    <span class="token function">changeName</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> newName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 这里简单举个例子 修改个名字</span>
      state<span class="token punctuation">.</span>name <span class="token operator">=</span> newName
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     *
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">context</span> 上下文默认传递的参数
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">newName</span> 自己传递的参数
     */</span>
    <span class="token comment">// 定义一个异步的方法 context是 store</span>
    <span class="token function">changeNameAsync</span><span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> newName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 这里用 setTimeout 模拟异步</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// 在这里调用 mutations 中的处理方法</span>
        context<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;changeName&#39;</span><span class="token punctuation">,</span> newName<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在组件中是 Action 中的异步方法也是有两种方式</p></blockquote><ol><li>this.$store.dispatch()</li></ol><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;app&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;changeName2(&#39;小浪&#39;)&quot;</span><span class="token operator">&gt;</span>方式<span class="token number">1</span> 按钮使用 action 中方法<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token punctuation">{</span><span class="token punctuation">{</span> name <span class="token punctuation">}</span><span class="token punctuation">}</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>

<span class="token comment">// 从 Vuex 中导入 mapState mapMutations</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> mapState<span class="token punctuation">,</span> mapMutations <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 将 store 映射到当前组件的计算属性</span>
    <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">changeName2</span><span class="token punctuation">(</span><span class="token parameter">newName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 使用 dispatch 来调用 actions 中的方法</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;changeNameAsync&#39;</span><span class="token punctuation">,</span> newName<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style  scoped<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>使用 mapActions</li></ol><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;app&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;changeNameAsync(&#39;小浪&#39;)&quot;</span><span class="token operator">&gt;</span>
      方式<span class="token number">2</span> 按钮使用 action 中方法
    <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token punctuation">{</span><span class="token punctuation">{</span> name <span class="token punctuation">}</span><span class="token punctuation">}</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>

<span class="token comment">// 从 Vuex 中导入 mapState mapMutations mapActions</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> mapState<span class="token punctuation">,</span> mapMutations<span class="token punctuation">,</span> mapActions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 将 store 映射到当前组件的计算属性</span>
    <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 映射 actions 中的指定方法 到 methods中，就可以在该组件直接使用</span>
    <span class="token operator">...</span><span class="token function">mapActions</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;changeNameAsync&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style  scoped<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-getter" tabindex="-1"><a class="header-anchor" href="#_4-getter"><span>4.Getter</span></a></h5><blockquote><p>简介</p></blockquote><p><code>Getter</code> 类似于计算属性，但是我们的数据来源是 <code>Vuex</code> 中的 <code>state</code> ,所以就使用 <code>Vuex</code> 中的 <code>Getter</code> 来完成</p><blockquote><p>应用场景</p></blockquote><p>需要对 <code>state</code> 做一些包装简单性处理 展示到视图当中</p><blockquote><p>先来写个 Getter</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">/* src/store/index.js */</span>

<span class="token comment">// 导入 Vue</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token comment">// 导入 Vuex 插件</span>
<span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

<span class="token comment">// 把 Vuex 注册到Vue 上</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">21</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 在这里对 状态 进行包装</span>
    <span class="token doc-comment comment">/**
     *
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">state</span> 状态 如果要使用 state 里面的数据，第一个参数默认就是 state ，名字随便取
     * <span class="token keyword">@returns</span>
     */</span>
    <span class="token function">decorationName</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">大家好我的名字叫</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>state<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">今年</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>state<span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">岁</span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>this.$store.getters[名称]</li></ol><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;app&quot;</span><span class="token operator">&gt;</span>
    <span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>getters<span class="token punctuation">.</span>decorationName <span class="token punctuation">}</span><span class="token punctuation">}</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>使用 mapGetters</li></ol><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;app&quot;</span><span class="token operator">&gt;</span>
    <span class="token punctuation">{</span><span class="token punctuation">{</span> decorationName <span class="token punctuation">}</span><span class="token punctuation">}</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>

<span class="token comment">// 从 Vuex 中导入 mapGetters</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> mapGetters <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 将 getter 映射到当前组件的计算属性</span>
    <span class="token operator">...</span><span class="token function">mapGetters</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;decorationName&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li><h5 id="module" tabindex="-1"><a class="header-anchor" href="#module"><span>Module</span></a></h5></li></ol><p>为了避免在一个复杂的项目 <code>state</code> 中的数据变得臃肿，<code>Vuex</code> 允许将 <code>Store</code> 分成不同的模块，每个模块都有属于自己的 <code>state</code>，<code>getter</code>，<code>action</code>，<code>mutation</code></p><blockquote><p>我们这里新建一个 <code>animal.js</code> 文件</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">/* animal.js */</span>

<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">animalName</span><span class="token operator">:</span> <span class="token string">&#39;狮子&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> mutations <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">setName</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> newName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    state<span class="token punctuation">.</span>animalName <span class="token operator">=</span> newName
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">//导出</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  state<span class="token punctuation">,</span>
  mutations<span class="token punctuation">,</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在 <code>store/index.js</code>中的 <code>modules</code> 进行挂载这个模块</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">/* src/store/index.js */</span>

<span class="token comment">// 导入 Vue</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token comment">// 导入 Vuex 插件</span>
<span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
<span class="token comment">// 引入模块</span>
<span class="token keyword">import</span> animal <span class="token keyword">from</span> <span class="token string">&#39;./animal&#39;</span>

<span class="token comment">// 把 Vuex 注册到Vue 上</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    animal<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>然后我们就可以在组件中使用了</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;app&quot;</span><span class="token operator">&gt;</span>
    <span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>animal<span class="token punctuation">.</span>animalName <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;$store.commit(&#39;setName&#39;, &#39;老虎&#39;)&quot;</span><span class="token operator">&gt;</span>改名<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue3-组合式-api-4" tabindex="-1"><a class="header-anchor" href="#vue3-组合式-api-4"><span>Vue3 组合式 API @4</span></a></h3>`,61),u={href:"https://vuex.vuejs.org/guide/",target:"_blank",rel:"noopener noreferrer"},d=s(`<p>简单的使用 -- 创建</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

<span class="token comment">// 创建一个新的 store 实例</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">state</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">increment</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span>val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>count<span class="token operator">++</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token comment">/* 根组件 */</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 将 store 实例作为插件安装</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，你可以通过 <code>store.state</code> 来获取状态对象，并通过 <code>store.commit</code> 方法触发状态变更：</p><div class="language-Plain line-numbers-mode" data-ext="Plain" data-title="Plain"><pre class="language-Plain"><code>    import {useStore} from &quot;vuex&quot;
    const store = useStore()
        &lt;button @click=&quot;store.commit(&#39;increment&#39;)&quot;&gt;vuex increment&lt;/button&gt;


    store.commit(&#39;increment&#39;,&quot;xxxx&quot;)

    console.log(store.state.count) // -&gt; 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 Vue 组件中， 可以通过 <code>this.$store</code> 访问 store 实例。现在我们可以从组件的方法提交一个变更：</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code>    methods: {
      increment() {
        this.$store.commit(&#39;increment&#39;)
        console.log(this.$store.state.count)
      }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="增加模块的概念" tabindex="-1"><a class="header-anchor" href="#增加模块的概念"><span>增加模块的概念</span></a></h3><p>单个:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>    <span class="token comment">// 用户</span>
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
      <span class="token comment">// 开启命名空间</span>
      <span class="token literal-property property">namespaced</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">info</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">uname</span><span class="token operator">:</span> <span class="token string">&#39;Leo&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">21</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">updateUname</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          state<span class="token punctuation">.</span>info<span class="token punctuation">.</span>uname <span class="token operator">=</span> val
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">updateAge</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          state<span class="token punctuation">.</span>info<span class="token punctuation">.</span>age <span class="token operator">=</span> val
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">asyncUpdate</span><span class="token punctuation">(</span><span class="token parameter">store<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;updateAge&#39;</span><span class="token punctuation">,</span> val<span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">format</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> state<span class="token punctuation">.</span>info<span class="token punctuation">.</span>uname <span class="token operator">+</span> <span class="token string">&#39;,nice to meet you~&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>整合:</p><div class="language-Plain line-numbers-mode" data-ext="Plain" data-title="Plain"><pre class="language-Plain"><code>    import { createStore } from &#39;vuex&#39;

    import global from &#39;./modules/global.js&#39;
    import user from &#39;./modules/user.js&#39;

    export default createStore({
      // 公共模板直接在这里展开就可以
      ...global,
      modules: {
        user
      }
    })


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pinia" tabindex="-1"><a class="header-anchor" href="#pinia"><span>Pinia</span></a></h2><h3 id="vue3" tabindex="-1"><a class="header-anchor" href="#vue3"><span>vue3</span></a></h3><pre><code>安装
</code></pre><div class="language-Vue line-numbers-mode" data-ext="Vue" data-title="Vue"><pre class="language-Vue"><code>    import { createApp } from &#39;vue&#39;
    import { createPinia } from &#39;pinia&#39;
    import App from &#39;./App.vue&#39;

    const pinia = createPinia()
    const app = createApp(App)

    app.use(pinia)
    app.mount(&#39;#app&#39;)
    \`\`\`

    Option Store

    \`\`\`TypeScript
    export const useCounterStore = defineStore(&#39;counter&#39;, {
      state: () =&gt; ({ count: 0 }),
      getters: {
        double: (state) =&gt; state.count * 2,
      },
      actions: {
        increment() {
          this.count++
        },
      },
    })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Setup Store</p><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>    export const useCounterStore = defineStore(&#39;counter&#39;, () =&gt; {
      const count = ref(0)
      function increment() {
        count.value++
      }

      return { count, increment }
    })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>数据的使用</p><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>    import usexxx from &quot;&quot;

    const xxx = usexxx()

    //使用
    xxx.yyy

    //

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重置 state</p><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>    const store = useStore()

    store.$reset()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>storeToRefs -- 解决结构丢失响应式</p><h4 id="pinia-持久化" tabindex="-1"><a class="header-anchor" href="#pinia-持久化"><span>pinia 持久化</span></a></h4>`,23),v={href:"https://prazdevs.github.io/pinia-plugin-persistedstate/zh/guide/",target:"_blank",rel:"noopener noreferrer"},k=s(`<p>安装</p><div class="language-Plain line-numbers-mode" data-ext="Plain" data-title="Plain"><pre class="language-Plain"><code>    yarn add pinia-plugin-persistedstate

    import { createPinia } from &#39;pinia&#39;
    import piniaPluginPersistedstate from &#39;pinia-plugin-persistedstate&#39;

    const pinia = createPinia()
    pinia.use(piniaPluginPersistedstate)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用</p><div class="language-Plain line-numbers-mode" data-ext="Plain" data-title="Plain"><pre class="language-Plain"><code>    import { defineStore } from &#39;pinia&#39;

    export const useStore = defineStore(
      &#39;main&#39;,
      () =&gt; {
        const someState = ref(&#39;你好 pinia&#39;)
        return { someState }
      },
      {
        persist: true,
        key:&quot;xxxx&quot;
      }
    )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue2" tabindex="-1"><a class="header-anchor" href="#vue2"><span>vue2</span></a></h3><p>安装</p><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>    import { createPinia, PiniaVuePlugin } from &#39;pinia&#39;

    Vue.use(PiniaVuePlugin)
    const pinia = createPinia()

    new Vue({
      el: &#39;#app&#39;,
      // 其他配置...
      // ...
      // 请注意，同一个\`pinia&#39;实例
      // 可以在同一个页面的多个 Vue 应用中使用。
      pinia,
    })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function m(b,g){const a=o("ExternalLinkIcon");return i(),l("div",null,[r,n("p",null,[n("a",u,[e("官方教程"),t(a)])]),d,n("p",null,[n("a",v,[e("https://prazdevs.github.io/pinia-plugin-persistedstate/zh/guide/"),t(a)])]),k])}const x=p(c,[["render",m],["__file","2-vue-vuex-pinia.html.vue"]]),f=JSON.parse(`{"path":"/web/learn-vue/2-vue-vuex-pinia.html","title":"🪤 2. Vue 状态管理","lang":"zh-CN","frontmatter":{"title":"🪤 2. Vue 状态管理","tag":["Vue","vuex","pinia"],"description":"pinia.svgpinia.svg Vue 状态管理 vuex pinia Vuex Vue2 选项式 API 状态管理 - 在 src 中创建文件夹 store，创建 index.js 文件 要使用 store 就在把 store 挂载到 Vue 中 vuex 基础使用 1.state 在 state 中添加数据 State 数据的使用 直接使用 ...","head":[["meta",{"property":"og:url","content":"https://soft-vault.com/web/learn-vue/2-vue-vuex-pinia.html"}],["meta",{"property":"og:site_name","content":"Night.Soul"}],["meta",{"property":"og:title","content":"🪤 2. Vue 状态管理"}],["meta",{"property":"og:description","content":"pinia.svgpinia.svg Vue 状态管理 vuex pinia Vuex Vue2 选项式 API 状态管理 - 在 src 中创建文件夹 store，创建 index.js 文件 要使用 store 就在把 store 挂载到 Vue 中 vuex 基础使用 1.state 在 state 中添加数据 State 数据的使用 直接使用 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://pinia.vuejs.org/logo.svg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-10T12:14:59.000Z"}],["meta",{"property":"article:author","content":"Night.Soul"}],["meta",{"property":"article:tag","content":"Vue"}],["meta",{"property":"article:tag","content":"vuex"}],["meta",{"property":"article:tag","content":"pinia"}],["meta",{"property":"article:modified_time","content":"2024-06-10T12:14:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"🪤 2. Vue 状态管理\\",\\"image\\":[\\"https://pinia.vuejs.org/logo.svg\\"],\\"dateModified\\":\\"2024-06-10T12:14:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Night.Soul\\",\\"url\\":\\"https://github.com/NightSquirrl\\"}]}"]]},"headers":[{"level":2,"title":"Vuex","slug":"vuex","link":"#vuex","children":[{"level":3,"title":"Vue2 选项式 API","slug":"vue2-选项式-api","link":"#vue2-选项式-api","children":[]},{"level":3,"title":"Vue3 组合式 API @4","slug":"vue3-组合式-api-4","link":"#vue3-组合式-api-4","children":[]},{"level":3,"title":"增加模块的概念","slug":"增加模块的概念","link":"#增加模块的概念","children":[]}]},{"level":2,"title":"Pinia","slug":"pinia","link":"#pinia","children":[{"level":3,"title":"vue3","slug":"vue3","link":"#vue3","children":[]},{"level":3,"title":"vue2","slug":"vue2","link":"#vue2","children":[]}]}],"git":{"createdTime":1699094106000,"updatedTime":1718021699000,"contributors":[{"name":"NightSoul","email":"w1083670160@163.com","commits":1}]},"readingTime":{"minutes":6.96,"words":2087},"filePathRelative":"web/learn-vue/2-vue-vuex-pinia.md","localizedDate":"2023年11月4日","excerpt":"<figure><img src=\\"https://pinia.vuejs.org/logo.svg\\" alt=\\"pinia.svg\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>pinia.svg</figcaption></figure>\\n<h1>Vue 状态管理 vuex pinia</h1>\\n<h2>Vuex</h2>\\n<h3>Vue2 选项式 API</h3>\\n<blockquote>\\n<p>状态管理 - 在 src 中创建文件夹 store，创建 index.js 文件</p>\\n</blockquote>\\n<div class=\\"language-JavaScript\\" data-ext=\\"JavaScript\\" data-title=\\"JavaScript\\"><pre class=\\"language-JavaScript\\"><code>import Vue from 'vue'\\nimport Vuex from 'vuex'\\n\\nVue.use(Vuex) // 把 Vuex 注册到Vue 上\\n\\nexport default new Vuex.Store({\\n    // 在开发环境开启严格模式 这样修改数据 就必须通过 mutation 来处理\\n    strict:products.env.NODE_ENV !== 'production',\\n    // 状态\\n    state: {\\n    },\\n    // 用来处理状态\\n    mutations: {\\n    },\\n    // 用于异步处理\\n    actions: {\\n    },\\n    // 用来挂载模块\\n    modules: {\\n    }\\n})\\n</code></pre></div>","autoDesc":true}`);export{x as comp,f as data};
