import{_ as n,o as s,c as a,e as t}from"./app-6e895db1.js";const p={},e=t(`<h2 id="redux-reco" tabindex="-1"><a class="header-anchor" href="#redux-reco" aria-hidden="true">#</a> redux-reco</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token parameter">reducer<span class="token punctuation">,</span> enhancer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>enhancer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">enhancer</span><span class="token punctuation">(</span>createStore<span class="token punctuation">)</span><span class="token punctuation">(</span>reducer<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> currentState <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">let</span> currentListeners <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  
  <span class="token comment">// 获取当前的咋混改</span>
  <span class="token keyword">function</span> <span class="token function">getState</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> currentState
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 监听方法</span>
  <span class="token keyword">function</span> <span class="token function">subscribe</span> <span class="token punctuation">(</span><span class="token parameter">listener</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    currentListeners<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>listener<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 触发状态改变的方法</span>
  <span class="token keyword">function</span> <span class="token function">dispatch</span> <span class="token punctuation">(</span><span class="token parameter">action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    currentState <span class="token operator">=</span> <span class="token function">reducer</span><span class="token punctuation">(</span>currentState<span class="token punctuation">,</span> action<span class="token punctuation">)</span>
    currentListeners<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">v</span> <span class="token operator">=&gt;</span> v<span class="token punctuation">)</span>
    <span class="token keyword">return</span> currentState
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 初始化，为了触发 reducer 里的 default</span>
  <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;@@RECO-REDUX&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  
  <span class="token keyword">return</span> <span class="token punctuation">{</span> getState<span class="token punctuation">,</span> subscribe<span class="token punctuation">,</span> dispatch <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">bindActionCreator</span> <span class="token punctuation">(</span><span class="token parameter">creator<span class="token punctuation">,</span> dispatch</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token function">creator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 给方法绑定 dispatch</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">bindActionCreators</span> <span class="token punctuation">(</span><span class="token parameter">creaters<span class="token punctuation">,</span> dispatch</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> bound <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>creaters<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">v</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> creator <span class="token operator">=</span> creators<span class="token punctuation">[</span>v<span class="token punctuation">]</span>
    bound<span class="token punctuation">[</span>v<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">bindActionCreator</span><span class="token punctuation">(</span>creator<span class="token punctuation">,</span> dispatch<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> bound
<span class="token punctuation">}</span>

<span class="token comment">// bindActionCreators 也可以这么写</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">bindActionCreators</span> <span class="token punctuation">(</span><span class="token parameter">creaters<span class="token punctuation">,</span> dispatch</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>creaters<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">ret<span class="token punctuation">,</span> item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    ret<span class="token punctuation">[</span>item<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">bindActionCreator</span><span class="token punctuation">(</span>creaters<span class="token punctuation">[</span>item<span class="token punctuation">]</span><span class="token punctuation">,</span> dispatch<span class="token punctuation">)</span>
    <span class="token keyword">return</span> ret
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">compose</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>funcs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>funcs<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token parameter">arg</span> <span class="token operator">=&gt;</span> arg
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>funcs<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> funcs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> funcs<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">ret<span class="token punctuation">,</span> item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">ret</span><span class="token punctuation">(</span><span class="token function">item</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 中间件</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">applyMiddleware</span> <span class="token punctuation">(</span><span class="token parameter">middleware</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token parameter">createStore</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token operator">...</span>arg<span class="token punctuation">)</span>
    <span class="token keyword">let</span> dispatch <span class="token operator">=</span> store<span class="token punctuation">.</span>dispatch
    
    <span class="token keyword">const</span> midApi <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">getState</span><span class="token operator">:</span> store<span class="token punctuation">.</span>getState<span class="token punctuation">,</span>
      <span class="token function-variable function">dispatch</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    dispatch <span class="token operator">=</span> <span class="token function">middleware</span><span class="token punctuation">(</span>midApi<span class="token punctuation">)</span><span class="token punctuation">(</span>dispatch<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span>store<span class="token punctuation">,</span>
      dispatch
    <span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 处理多个中间件</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">applyMiddleware</span> <span class="token punctuation">(</span><span class="token parameter">middlewares</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token parameter">createStore</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>
    <span class="token keyword">let</span> dispatch <span class="token operator">=</span> store<span class="token punctuation">.</span>dispatch
    
    <span class="token keyword">const</span> midApi <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">getState</span><span class="token operator">:</span> store<span class="token punctuation">.</span>getState<span class="token punctuation">,</span>
      <span class="token function-variable function">dispatch</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> middlewareChain <span class="token operator">=</span> middlewares<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">middleware</span> <span class="token operator">=&gt;</span> <span class="token function">middleware</span><span class="token punctuation">(</span>midApi<span class="token punctuation">)</span><span class="token punctuation">)</span>
    dispatch <span class="token operator">=</span> <span class="token function">compose</span><span class="token punctuation">(</span><span class="token operator">...</span>middlewareChain<span class="token punctuation">)</span><span class="token punctuation">(</span>dispatch<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span>store<span class="token punctuation">,</span>
      dispatch
    <span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="react-redux-reco" tabindex="-1"><a class="header-anchor" href="#react-redux-reco" aria-hidden="true">#</a> react-redux-reco</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1. connect 负责链接组件，给到redux里的数据，放到组件的属性里</span>
<span class="token comment">// 1-1 负责接受一个组件，把state里的一些水晶放进去，返回一个组件</span>
<span class="token comment">// 1-2 数据变化的时候，能够通知组件</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> PropsTypes <span class="token keyword">from</span> <span class="token string">&#39;prop-types&#39;</span>
<span class="token comment">// 在自己定义的redux中引入 bindActionCreators</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> bindActionCreators <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;redux-reco&#39;</span>

<span class="token comment">// 参数为箭头函数的模式，是为了不传参数时报错</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">connect</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token function-variable function">mapStateToProps</span> <span class="token operator">=</span> <span class="token parameter">state</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">,</span> mapDispatchToProps <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token parameter">WrapConnect</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">class</span> <span class="token class-name">ConnectComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> contextTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">store</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>object
    <span class="token punctuation">}</span>
  
  	<span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> context<span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  
  	<span class="token function">componentDidMount</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> store <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>context
      store<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  
  	<span class="token function">update</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 获取 mapStateToProps 和 mapDispatchToProps 放到 this.props</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> store <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>context
      <span class="token keyword">const</span> stateProps <span class="token operator">=</span> <span class="token function">mapStateToProps</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      
      <span class="token comment">// 方法不能直接给，因为需要dispatch</span>
      <span class="token keyword">const</span> dispatchProps <span class="token operator">=</span> <span class="token function">bindActionCreators</span><span class="token punctuation">(</span>mapDispatchToProps<span class="token punctuation">,</span> store<span class="token punctuation">.</span>dispatch<span class="token punctuation">)</span>
      
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>props<span class="token punctuation">,</span>
          <span class="token operator">...</span>stateProps<span class="token punctuation">,</span>
          <span class="token operator">...</span>dispatchProps
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  
  	<span class="token function">render</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token operator">&lt;</span>WrapComponent <span class="token punctuation">{</span> <span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>props <span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>WrapComponent<span class="token operator">&gt;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 2. Provider组件 把store放到context里，所有的子元素可以直接取到store</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Provider</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> childContextTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">store</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>object
  <span class="token punctuation">}</span>

  <span class="token function">getChildContext</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">store</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>store <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

	<span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> context<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>store <span class="token operator">=</span> props<span class="token punctuation">.</span>store
  <span class="token punctuation">}</span>

	<span class="token function">render</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="中间件-redux-chunk-reco" tabindex="-1"><a class="header-anchor" href="#中间件-redux-chunk-reco" aria-hidden="true">#</a> 中间件 redux-chunk-reco</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">thunk</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>dispatch<span class="token punctuation">,</span> getState<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token parameter">next</span> <span class="token operator">=&gt;</span> <span class="token parameter">action</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span>（<span class="token keyword">typeof</span> action <span class="token operator">==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">action</span><span class="token punctuation">(</span>dispatch<span class="token punctuation">,</span> getState<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 什么都没干</span>
  <span class="token keyword">return</span> <span class="token function">next</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> chunk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以出发一个数组</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">arrayThunk</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>dispatch<span class="token punctuation">,</span> getState<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token parameter">next</span> <span class="token operator">=&gt;</span> <span class="token parameter">action</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 符合要求，重新调用 dispatch</span>
  <span class="token comment">// 不符合，直接调用下一个中间件，使用 next</span>
  <span class="token keyword">if</span>（Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> action<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">v</span> <span class="token operator">=&gt;</span> <span class="token function">dispatch</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 什么都没干</span>
  <span class="token keyword">return</span> <span class="token function">next</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> arrayThunk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="高阶组件的写法" tabindex="-1"><a class="header-anchor" href="#高阶组件的写法" aria-hidden="true">#</a> 高阶组件的写法</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">connect</span> <span class="token punctuation">(</span><span class="token parameter">mapStateToProps<span class="token punctuation">,</span> mapDispatchToProps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">WrapConnect</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">class</span> <span class="token class-name">ConnectComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
      
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 更简单的写法</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">connect</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token function-variable function">mapStateToProps</span> <span class="token operator">=</span> <span class="token parameter">state</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">,</span> mapDispatchToProps <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token parameter">WrapConnect</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">class</span> <span class="token class-name">ConnectComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
      
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="context" tabindex="-1"><a class="header-anchor" href="#context" aria-hidden="true">#</a> context</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 原始传递数据</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>

<span class="token keyword">class</span> <span class="token class-name">Sidebar</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
    	<span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      	<span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>侧标栏<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      	<span class="token operator">&lt;</span>Navbar<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>Navbar<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Navbar</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>yser<span class="token punctuation">}</span>的导航栏<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Page</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token string">&#39;reco&#39;</span>
    <span class="token function">retuen</span> <span class="token punctuation">(</span>
    	<span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      	<span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>我是<span class="token punctuation">{</span>user<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      	<span class="token operator">&lt;</span>Sidebar<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>Sidebar<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// context传递数据 全局，所有子元素可以直接获取</span>
<span class="token comment">// 如果要使用context，就必须使用 PropTypes</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> PropTypes <span class="token keyword">from</span> <span class="token string">&#39;prop-types&#39;</span>

<span class="token keyword">class</span> <span class="token class-name">Sidebar</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
    	<span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      	<span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>侧标栏<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      	<span class="token operator">&lt;</span>Navbar<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>Navbar<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Navbar</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> contextTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">user</span><span class="token operator">:</span> propTypes<span class="token punctuation">.</span>string
  <span class="token punctuation">}</span>
  <span class="token function">render</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">.</span>user<span class="token punctuation">}</span>的导航栏<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Page</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> childContextTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">user</span><span class="token operator">:</span> propTypes<span class="token punctuation">.</span>string
  <span class="token punctuation">}</span>
  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token string">&quot;reco&quot;</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">getChildContext</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state
  <span class="token punctuation">}</span>
  <span class="token function">render</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token string">&#39;reco&#39;</span>
    <span class="token function">retuen</span> <span class="token punctuation">(</span>
    	<span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      	<span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>我是<span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>user<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      	<span class="token operator">&lt;</span>Sidebar user<span class="token operator">=</span><span class="token punctuation">{</span>user<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>Sidebar<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","071601.html.vue"]]);export{r as default};
