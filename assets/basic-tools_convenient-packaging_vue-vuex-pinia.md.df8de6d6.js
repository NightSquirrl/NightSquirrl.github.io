import{_ as s,o as a,c as n,S as p}from"./chunks/framework.7245853a.js";const u=JSON.parse('{"title":"🪤 Vue 状态管理","description":"","frontmatter":{"sticky":2,"title":"🪤 Vue 状态管理","tag":["Vue","vuex","pinia"],"top":2,"sidebar":true},"headers":[],"relativePath":"basic-tools/convenient-packaging/vue-vuex-pinia.md","filePath":"basic-tools/convenient-packaging/vue-vuex-pinia.md","lastUpdated":null}'),l={name:"basic-tools/convenient-packaging/vue-vuex-pinia.md"},e=p(`<p><img src="https://pinia.vuejs.org/logo.svg" alt="pinia.svg"></p><h1 id="vue-状态管理-vuex-pinia" tabindex="-1">Vue 状态管理 vuex pinia <a class="header-anchor" href="#vue-状态管理-vuex-pinia" aria-label="Permalink to &quot;Vue 状态管理 vuex pinia&quot;">​</a></h1><h2 id="vuex" tabindex="-1">Vuex <a class="header-anchor" href="#vuex" aria-label="Permalink to &quot;Vuex&quot;">​</a></h2><h3 id="_4" tabindex="-1">@4 <a class="header-anchor" href="#_4" aria-label="Permalink to &quot;@4&quot;">​</a></h3><p><a href="https://vuex.vuejs.org/guide/" target="_blank" rel="noreferrer">官方教程</a></p><p>简单的使用 -- 创建</p><div class="language-Plain"><button title="Copy Code" class="copy"></button><span class="lang">Plain</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">import { createApp } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#babed8;">    import { createStore } from &#39;vuex&#39;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    // 创建一个新的 store 实例</span></span>
<span class="line"><span style="color:#babed8;">    const store = createStore({</span></span>
<span class="line"><span style="color:#babed8;">      state () {</span></span>
<span class="line"><span style="color:#babed8;">        return {</span></span>
<span class="line"><span style="color:#babed8;">          count: 0</span></span>
<span class="line"><span style="color:#babed8;">        }</span></span>
<span class="line"><span style="color:#babed8;">      },</span></span>
<span class="line"><span style="color:#babed8;">      mutations: {</span></span>
<span class="line"><span style="color:#babed8;">        increment (state,val) {</span></span>
<span class="line"><span style="color:#babed8;">          state.count++</span></span>
<span class="line"><span style="color:#babed8;">        }</span></span>
<span class="line"><span style="color:#babed8;">      }</span></span>
<span class="line"><span style="color:#babed8;">    })</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    const app = createApp({ /* 根组件 */ })</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    // 将 store 实例作为插件安装</span></span>
<span class="line"><span style="color:#babed8;">    app.use(store)</span></span></code></pre></div><p>现在，你可以通过 <code>store.state</code> 来获取状态对象，并通过 <code>store.commit</code> 方法触发状态变更：</p><div class="language-Plain"><button title="Copy Code" class="copy"></button><span class="lang">Plain</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">import {useStore} from &quot;vuex&quot;</span></span>
<span class="line"><span style="color:#babed8;">    const store = useStore()</span></span>
<span class="line"><span style="color:#babed8;">        &lt;button @click=&quot;store.commit(&#39;increment&#39;)&quot;&gt;vuex increment&lt;/button&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    store.commit(&#39;increment&#39;,&quot;xxxx&quot;)</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    console.log(store.state.count) // -&gt; 1</span></span></code></pre></div><p>在 Vue 组件中， 可以通过 <code>this.$store</code> 访问 store 实例。现在我们可以从组件的方法提交一个变更：</p><div class="language-JavaScript"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">methods</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">increment</span><span style="color:#F07178;">() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">$store</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">commit</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">increment</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">$store</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">state</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">count</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="增加模块的概念" tabindex="-1">增加模块的概念 <a class="header-anchor" href="#增加模块的概念" aria-label="Permalink to &quot;增加模块的概念&quot;">​</a></h3><p>单个:</p><div class="language-Plain"><button title="Copy Code" class="copy"></button><span class="lang">Plain</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">// 用户</span></span>
<span class="line"><span style="color:#babed8;">    export default {</span></span>
<span class="line"><span style="color:#babed8;">      // 开启命名空间</span></span>
<span class="line"><span style="color:#babed8;">      namespaced: true,</span></span>
<span class="line"><span style="color:#babed8;">      state: {</span></span>
<span class="line"><span style="color:#babed8;">        info: {</span></span>
<span class="line"><span style="color:#babed8;">          uname: &#39;Leo&#39;,</span></span>
<span class="line"><span style="color:#babed8;">          age: 21</span></span>
<span class="line"><span style="color:#babed8;">        }</span></span>
<span class="line"><span style="color:#babed8;">      },</span></span>
<span class="line"><span style="color:#babed8;">      mutations: {</span></span>
<span class="line"><span style="color:#babed8;">        updateUname(state, val) {</span></span>
<span class="line"><span style="color:#babed8;">          state.info.uname = val</span></span>
<span class="line"><span style="color:#babed8;">        },</span></span>
<span class="line"><span style="color:#babed8;">        updateAge(state, val) {</span></span>
<span class="line"><span style="color:#babed8;">          state.info.age = val</span></span>
<span class="line"><span style="color:#babed8;">        }</span></span>
<span class="line"><span style="color:#babed8;">      },</span></span>
<span class="line"><span style="color:#babed8;">      actions: {</span></span>
<span class="line"><span style="color:#babed8;">        asyncUpdate(store, val) {</span></span>
<span class="line"><span style="color:#babed8;">          setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">            store.commit(&#39;updateAge&#39;, val)</span></span>
<span class="line"><span style="color:#babed8;">          }, 2000)</span></span>
<span class="line"><span style="color:#babed8;">        }</span></span>
<span class="line"><span style="color:#babed8;">      },</span></span>
<span class="line"><span style="color:#babed8;">      getters: {</span></span>
<span class="line"><span style="color:#babed8;">        format(state) {</span></span>
<span class="line"><span style="color:#babed8;">          return state.info.uname + &#39;,nice to meet you~&#39;</span></span>
<span class="line"><span style="color:#babed8;">        }</span></span>
<span class="line"><span style="color:#babed8;">      }</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span></code></pre></div><p>整合:</p><div class="language-Plain"><button title="Copy Code" class="copy"></button><span class="lang">Plain</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">import { createStore } from &#39;vuex&#39;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    import global from &#39;./modules/global.js&#39;</span></span>
<span class="line"><span style="color:#babed8;">    import user from &#39;./modules/user.js&#39;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    export default createStore({</span></span>
<span class="line"><span style="color:#babed8;">      // 公共模板直接在这里展开就可以</span></span>
<span class="line"><span style="color:#babed8;">      ...global,</span></span>
<span class="line"><span style="color:#babed8;">      modules: {</span></span>
<span class="line"><span style="color:#babed8;">        user</span></span>
<span class="line"><span style="color:#babed8;">      }</span></span>
<span class="line"><span style="color:#babed8;">    })</span></span></code></pre></div><h2 id="pinia" tabindex="-1">Pinia <a class="header-anchor" href="#pinia" aria-label="Permalink to &quot;Pinia&quot;">​</a></h2><h3 id="vue3" tabindex="-1">vue3 <a class="header-anchor" href="#vue3" aria-label="Permalink to &quot;vue3&quot;">​</a></h3><pre><code>安装
</code></pre><div class="language-Vue"><button title="Copy Code" class="copy"></button><span class="lang">Vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">import { createApp } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#BABED8;">    import { createPinia } from &#39;pinia&#39;</span></span>
<span class="line"><span style="color:#BABED8;">    import App from &#39;./App.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">    const pinia = createPinia()</span></span>
<span class="line"><span style="color:#BABED8;">    const app = createApp(App)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">    app.use(pinia)</span></span>
<span class="line"><span style="color:#BABED8;">    app.mount(&#39;#app&#39;)</span></span>
<span class="line"><span style="color:#BABED8;">    \`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">    Option Store</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">    \`\`\`TypeScript</span></span>
<span class="line"><span style="color:#BABED8;">    export const useCounterStore = defineStore(&#39;counter&#39;, {</span></span>
<span class="line"><span style="color:#BABED8;">      state: () =&gt; ({ count: 0 }),</span></span>
<span class="line"><span style="color:#BABED8;">      getters: {</span></span>
<span class="line"><span style="color:#BABED8;">        double: (state) =&gt; state.count * 2,</span></span>
<span class="line"><span style="color:#BABED8;">      },</span></span>
<span class="line"><span style="color:#BABED8;">      actions: {</span></span>
<span class="line"><span style="color:#BABED8;">        increment() {</span></span>
<span class="line"><span style="color:#BABED8;">          this.count++</span></span>
<span class="line"><span style="color:#BABED8;">        },</span></span>
<span class="line"><span style="color:#BABED8;">      },</span></span>
<span class="line"><span style="color:#BABED8;">    })</span></span></code></pre></div><p>Setup Store</p><div class="language-TypeScript"><button title="Copy Code" class="copy"></button><span class="lang">TypeScript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> useCounterStore </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">defineStore</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">counter</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">count</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">increment</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#BABED8;">count</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">value</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">count</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">increment</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span></span></code></pre></div><p>数据的使用</p><div class="language-TypeScript"><button title="Copy Code" class="copy"></button><span class="lang">TypeScript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> usexxx </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> xxx </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">usexxx</span><span style="color:#BABED8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//使用</span></span>
<span class="line"><span style="color:#BABED8;">    xxx</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">yyy</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//</span></span></code></pre></div><p>重置 state</p><div class="language-TypeScript"><button title="Copy Code" class="copy"></button><span class="lang">TypeScript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> store </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">useStore</span><span style="color:#BABED8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">    store</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">$reset</span><span style="color:#BABED8;">()</span></span></code></pre></div><p>storeToRefs -- 解决结构丢失响应式</p><h4 id="pinia-持久化" tabindex="-1">pinia 持久化 <a class="header-anchor" href="#pinia-持久化" aria-label="Permalink to &quot;pinia 持久化&quot;">​</a></h4><p><a href="https://prazdevs.github.io/pinia-plugin-persistedstate/zh/guide/" target="_blank" rel="noreferrer">https://prazdevs.github.io/pinia-plugin-persistedstate/zh/guide/</a></p><p>安装</p><div class="language-Plain"><button title="Copy Code" class="copy"></button><span class="lang">Plain</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">yarn add pinia-plugin-persistedstate</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    import { createPinia } from &#39;pinia&#39;</span></span>
<span class="line"><span style="color:#babed8;">    import piniaPluginPersistedstate from &#39;pinia-plugin-persistedstate&#39;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    const pinia = createPinia()</span></span>
<span class="line"><span style="color:#babed8;">    pinia.use(piniaPluginPersistedstate)</span></span></code></pre></div><p>使用</p><div class="language-Plain"><button title="Copy Code" class="copy"></button><span class="lang">Plain</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">import { defineStore } from &#39;pinia&#39;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    export const useStore = defineStore(</span></span>
<span class="line"><span style="color:#babed8;">      &#39;main&#39;,</span></span>
<span class="line"><span style="color:#babed8;">      () =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">        const someState = ref(&#39;你好 pinia&#39;)</span></span>
<span class="line"><span style="color:#babed8;">        return { someState }</span></span>
<span class="line"><span style="color:#babed8;">      },</span></span>
<span class="line"><span style="color:#babed8;">      {</span></span>
<span class="line"><span style="color:#babed8;">        persist: true,</span></span>
<span class="line"><span style="color:#babed8;">        key:&quot;xxxx&quot;</span></span>
<span class="line"><span style="color:#babed8;">      }</span></span>
<span class="line"><span style="color:#babed8;">    )</span></span></code></pre></div><h3 id="vue2" tabindex="-1">vue2 <a class="header-anchor" href="#vue2" aria-label="Permalink to &quot;vue2&quot;">​</a></h3><p>安装</p><div class="language-TypeScript"><button title="Copy Code" class="copy"></button><span class="lang">TypeScript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">createPinia</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">PiniaVuePlugin</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pinia</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">    Vue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#BABED8;">(PiniaVuePlugin)</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> pinia </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">createPinia</span><span style="color:#BABED8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">new</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">Vue</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#F07178;">el</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#app</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// 其他配置...</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// 请注意，同一个\`pinia&#39;实例</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// 可以在同一个页面的多个 Vue 应用中使用。</span></span>
<span class="line"><span style="color:#BABED8;">      pinia</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span></span></code></pre></div>`,36),o=[e];function t(c,r,i,y,b,d){return a(),n("div",null,o)}const F=s(l,[["render",t]]);export{u as __pageData,F as default};
