import{_ as n,o as s,c as a,e}from"./app-6e895db1.js";const t="/assets/1-1bff6903.png",i={},l=e(`<h2 id="state" tabindex="-1"><a class="header-anchor" href="#state" aria-hidden="true">#</a> state</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class App extends Component {
  constructor (props) {
    super(props)
  
    this.state = {
      lists: [&#39;ab&#39;, &#39;asd&#39;, &#39;dasd&#39;]
    }
  }

  addList = () =&gt; {
    console.log(123)
    this.setState({
      lists: [...this.state.lists, \`reco\${Math.random()}\`]
    })
  }
  render () {
    return (
      &lt;div&gt; 
        &lt;ul
          renderHeader={() =&gt; &#39;列表&#39;}&gt;
          {
            this.state.lists.map(item =&gt; &lt;li key={item}&gt;{item}&lt;/li&gt;)
          }
        &lt;/ul&gt;
        &lt;button type=&quot;primary&quot; onClick={ this.addList }&gt;add&lt;/button&gt;
      &lt;/div&gt;
    )
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>按照ES7的提议，去掉constructor，state初始化可以不写在constructor里</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class App extends Component {
  state = {
    lists: [&#39;ab&#39;, &#39;asd&#39;, &#39;dasd&#39;]
  }

  addList = () =&gt; {
    console.log(123)
    this.setState({
      lists: [...this.state.lists, \`reco\${Math.random()}\`]
    })
  }
  render () {
    return (
      &lt;div&gt; 
        &lt;ul
          renderHeader={() =&gt; &#39;列表&#39;}&gt;
          {
            this.state.lists.map(item =&gt; &lt;li key={item}&gt;{item}&lt;/li&gt;)
          }
        &lt;/ul&gt;
        &lt;button type=&quot;primary&quot; onClick={ this.addList }&gt;add&lt;/button&gt;
      &lt;/div&gt;
    )
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> props</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class App extends Component {
  render () {
    return &lt;GetProps name=&quot;reco_luan&quot;&gt;&lt;/GetProps&gt;
  }
}

// 当然这里可以使用class来定义函数
function GetProps (props) {
  return &lt;div&gt;{props.name}&lt;/div&gt;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="事件的上下文" tabindex="-1"><a class="header-anchor" href="#事件的上下文" aria-hidden="true">#</a> 事件的上下文</h2><ul><li>方法一</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class App extends Component {
  constructor (props) {
    super(props)
    
    this.clickFun = this.clickFun.bind(this)
  }
  	
  clickFun () {
  	 console.log(&#39;click&#39;)
  }
  
  render () {
    return &lt;button onClick={ this.clickFun }&gt;&lt;/button&gt;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>方法二</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class App extends Component {
  	
  clickFun () {
  	 console.log(&#39;click&#39;)
  }
  
  render () {
    return &lt;button onClick={ () =&gt; this.clickFun() }&gt;&lt;/button&gt;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>方法三</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class App extends Component {
  constructor (props) {
    super(props)
    
    this.clickFun = this.clickFun.bind(this)
  }
  	
  clickFun = () =&gt; {
  	 console.log(&#39;click&#39;)
  }
  
  render () {
    return &lt;button onClick={ this.clickFun }&gt;&lt;/button&gt;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css-module" tabindex="-1"><a class="header-anchor" href="#css-module" aria-hidden="true">#</a> CSS Module</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Styles <span class="token keyword">from</span> <span class="token string">&#39;./page2.scss&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Page1</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token punctuation">{</span>Styles<span class="token punctuation">.</span>component<span class="token punctuation">}</span><span class="token operator">&gt;</span>bbb<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组件更新机制" tabindex="-1"><a class="header-anchor" href="#组件更新机制" aria-hidden="true">#</a> 组件更新机制</h2><ol><li><p>react没个组件就是返回一个对象，这个对象里包括 ref、type等参数，每次更新，通过diff将需要删除、需要新增、需要修改的分别记录在不同的数组里来进行处理。</p></li><li><p>有四种情况会出发组件的更新，首次加载、伏组件加载或更新、this.setState()、this.forceUpdate()，其中<code>shouldComponentUpdate()</code> 这个钩子如果返回true将继续向下运行，如果返回false将停止运行，在这里通过选择性地组织运行，就可以就行优化处理。</p></li></ol><p><img src="`+t+`" alt="image"></p><ol><li><p><code>shouldComponentUpdate(nextProps, nextState)</code> 我们可以通过nextProps和nextState来获取变化后的state和props，通过一些判断来选择性的返回 true和false，比如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">AddNum</span> <span class="token keyword">extends</span> <span class="token class-name">ReactComponent</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">num</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token function">shouldComponentUpdate</span> <span class="token punctuation">(</span><span class="token parameter">nextProps<span class="token punctuation">,</span> nextState</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 只有在是5的倍数时才会触发</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>nextState<span class="token punctuation">.</span>num <span class="token operator">%</span> <span class="token number">5</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>setState会生成一个队列，也就是说异步的；初始化state时不要使用 this.state.a = 1；不要在render函数里触发setState，因为setState会触发render，这样会形成循环（除非有自己定制的shouldComponentUpdate）。</p></li></ol><h2 id="父组件直接调用子组件方法" tabindex="-1"><a class="header-anchor" href="#父组件直接调用子组件方法" aria-hidden="true">#</a> 父组件直接调用子组件方法</h2><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span>Component<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Parent</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Child</span></span> <span class="token attr-name">onRef</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onRef<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>click<span class="token punctuation">}</span></span> <span class="token punctuation">&gt;</span></span><span class="token plain-text">click</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function-variable function">onRef</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">ref</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>child <span class="token operator">=</span> ref
    <span class="token punctuation">}</span>

    <span class="token function-variable function">click</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>child<span class="token punctuation">.</span><span class="token function">myName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Child</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
    <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">onRef</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function-variable function">myName</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;xiaohesong&#39;</span><span class="token punctuation">)</span>

    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token string">&#39;woqu&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="react组件中的constructor和super小知识" tabindex="-1"><a class="header-anchor" href="#react组件中的constructor和super小知识" aria-hidden="true">#</a> react组件中的constructor和super小知识</h2><blockquote><p>参考：https://www.cnblogs.com/faith3/p/9219446.html</p></blockquote><p>如果constructor中不通过super来接收props，在其他生命周期，</p><p>诸如componentWillMount、componentDidMount、render中能直接使用this.props吗？？</p><p>结论：可以的，react在除了constructor之外的生命周期已经传入了this.props了，完全不受super(props)的影响。</p><p>所以super中的props是否接收，只能影响constructor生命周期能否使用this.props，其他的生命周期已默认存在this.props</p>`,27),p=[l];function c(o,d){return s(),a("div",null,p)}const r=n(i,[["render",c],["__file","032801.html.vue"]]);export{r as default};
