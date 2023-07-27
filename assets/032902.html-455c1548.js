import{_ as n,o as s,c as a,e as t}from"./app-6e895db1.js";const p={},e=t(`<h1 id="redux" tabindex="-1"><a class="header-anchor" href="#redux" aria-hidden="true">#</a> redux</h1><ol><li>基本使用</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;redux&#39;</span>

<span class="token keyword">function</span> <span class="token function">counter</span> <span class="token punctuation">(</span><span class="token parameter">state <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&#39;加&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token operator">++</span>state
    <span class="token keyword">case</span> <span class="token string">&#39;减&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token operator">--</span>state
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token number">10</span>    
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>counter<span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">listener</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> init <span class="token operator">=</span> store<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>init<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

store<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>listener<span class="token punctuation">)</span>

store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;加&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>异步借助“redux-thunk”</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createStore<span class="token punctuation">,</span> applyMiddleware <span class="token punctuation">}</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> counter<span class="token punctuation">,</span> add<span class="token punctuation">,</span> cut<span class="token punctuation">,</span> addAsync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./index.redux&#39;</span>

<span class="token comment">// 生成store</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>counter<span class="token punctuation">,</span> <span class="token function">applyMiddleware</span><span class="token punctuation">(</span>thunk<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// action</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">add</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token constant">ADD</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// action（异步）</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">addAsync</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token parameter">dispatch</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token constant">ADD</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>并且subscribe就不需要了，直接渲染即可</p><ol start="3"><li>浏览器插件（Redux DevTools）</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 配合redux使用</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createStore<span class="token punctuation">,</span> applyMiddleware<span class="token punctuation">,</span> compose <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;redux&#39;</span>
<span class="token keyword">import</span> thunk <span class="token keyword">from</span> <span class="token string">&#39;redux-thunk&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> counter<span class="token punctuation">,</span> add<span class="token punctuation">,</span> cut<span class="token punctuation">,</span> addAsync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./index.redux&#39;</span>

<span class="token keyword">const</span> reduxDevTools <span class="token operator">=</span> window<span class="token punctuation">.</span>devToolsExtension <span class="token operator">?</span> window<span class="token punctuation">.</span><span class="token function">devToolsExtension</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
 
<span class="token comment">// 生成store</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>counter<span class="token punctuation">,</span> <span class="token function">compose</span><span class="token punctuation">(</span>
  <span class="token function">applyMiddleware</span><span class="token punctuation">(</span>thunk<span class="token punctuation">)</span><span class="token punctuation">,</span>
  reduxDevTools
<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li><p>react-redux</p><p>Provider、connect、修饰器</p><p>修饰器借助：babel-plugin-transform-decorators-legacy</p><p>babel7已经内置，所以不需要安装，使用以下配置即可</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token punctuation">[</span><span class="token string">&quot;@babel/plugin-proposal-decorators&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token property">&quot;legacy&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 原来这么些的地方</span>
App <span class="token operator">=</span> <span class="token function">connect</span><span class="token punctuation">(</span>
  	<span class="token comment">// 你需要那些状态</span>
  	<span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    	<span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">num</span><span class="token operator">:</span> state <span class="token punctuation">}</span>
  	<span class="token punctuation">}</span><span class="token punctuation">,</span>
  	<span class="token comment">// 你需要那些方法</span>
  <span class="token punctuation">{</span> add<span class="token punctuation">,</span> cut<span class="token punctuation">,</span> addAsync <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>

<span class="token comment">// 现在可以提到前面去</span>
@<span class="token function">connect</span><span class="token punctuation">(</span>
  <span class="token comment">// 你需要那些状态</span>
  <span class="token parameter">state</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">num</span><span class="token operator">:</span> state <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 你需要那些方法</span>
  <span class="token punctuation">{</span> add<span class="token punctuation">,</span> cut<span class="token punctuation">,</span> addAsync <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>reducer合并</p></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> combineReducers <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;redux&#39;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> counter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./index.redux&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> loger <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./Auth.redux&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">combineReducers</span><span class="token punctuation">(</span><span class="token punctuation">{</span> counter<span class="token punctuation">,</span> loger <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","032902.html.vue"]]);export{r as default};
