import{_ as n,o as t,c as s,e as a}from"./app-6e895db1.js";const p={},e=a(`<h2 id="伪类-pseudo-class" tabindex="-1"><a class="header-anchor" href="#伪类-pseudo-class" aria-hidden="true">#</a> 伪类（Pseudo-class）</h2><p>一个 CSS 伪类（pseudo-class） 是一个以冒号(:)作为前缀，被添加到一个选择器末尾的关键字，当你希望样式在特定状态下才被呈现到指定的元素时，你可以往元素的选择器后面加上对应的伪类（pseudo-class）。你可能希望某个元素在处于某种状态下呈现另一种样式，例如当鼠标悬停在元素上面时，或者当一个复选框被禁用或被勾选时，又或者当一个元素是它在 DOM 树中父元素的第一个子元素时。</p><table><thead><tr><th>Selector</th><th>Meaning</th><th>CSS</th></tr></thead><tbody><tr><td>:active</td><td>选择正在被激活的元素</td><td>1</td></tr><tr><td>:hover</td><td>选择被鼠标悬浮着元素</td><td>1</td></tr><tr><td>:link</td><td>选择未被访问的元素</td><td>1</td></tr><tr><td>:visited</td><td>选择已被访问的元素</td><td>1</td></tr><tr><td>:first-child</td><td>选择满足是其父元素的第一个子元素的元素</td><td>2</td></tr><tr><td>:lang</td><td>选择带有指定 lang 属性的元素</td><td>2</td></tr><tr><td>:focus</td><td>选择拥有键盘输入焦点的元素</td><td>2</td></tr><tr><td>:enable</td><td>选择每个已启动的元素</td><td>3</td></tr><tr><td>:disable</td><td>选择每个已禁止的元素</td><td>3</td></tr><tr><td>:checked</td><td>选择每个被选中的元素</td><td>3</td></tr><tr><td>:target</td><td>选择当前的锚点元素</td><td>3</td></tr><tr><td>:first-of-type</td><td>选择满足是其父元素的第一个某类型子元素的元素</td><td>3</td></tr><tr><td>:last-of-type</td><td>选择满足是其父元素的最后一个某类型子元素的元素</td><td>3</td></tr><tr><td>:only-of-type</td><td>选择满足是其父元素的唯一一个某类型子元素的元素</td><td>3</td></tr><tr><td>:nth-of-type(n)</td><td>选择满足是其父元素的第n个某类型子元素的元素</td><td>3</td></tr><tr><td>:nth-last-of-type(n)</td><td>选择满足是其父元素的倒数第n个某类型的元素</td><td>3</td></tr><tr><td>:only-child</td><td>选择满足是其父元素的唯一一个子元素的元素</td><td>3</td></tr><tr><td>:last-child</td><td>选择满足是其父元素的最后一个元素的元素</td><td>3</td></tr><tr><td>:nth-child(n)</td><td>选择满足是其父元素的第n个子元素的元素</td><td>3</td></tr><tr><td>:nth-last-child(n)</td><td>选择满足是其父元素的倒数第n个子元素的元素</td><td>3</td></tr><tr><td>:empty</td><td>选择满足没有子元素的元素</td><td>3</td></tr><tr><td>:in-range</td><td>选择满足值在指定范围内的元素</td><td>3</td></tr><tr><td>:out-of-range</td><td>选择值不在指定范围内的元素</td><td>3</td></tr><tr><td>:invalid</td><td>选择满足值为无效值的元素</td><td>3</td></tr><tr><td>:valid</td><td>选择满足值为有效值的元素</td><td>3</td></tr><tr><td>:not(selector)</td><td>选择不满足selector的元素</td><td>3</td></tr><tr><td>:optional</td><td>选择为可选项的表单元素，即没有“required”属性</td><td>3</td></tr><tr><td>:read-only</td><td>选择有&quot;readonly&quot;的表单元素</td><td>3</td></tr><tr><td>:read-write</td><td>选择没有&quot;readonly&quot;的表单元素</td><td>3</td></tr><tr><td>:root</td><td>选择根元素</td><td>3</td></tr><tr><td>:any()</td><td>处理嵌套</td><td>4</td></tr><tr><td>:default</td><td>默认样式</td><td>3</td></tr><tr><td>:dir()</td><td></td><td>4</td></tr></tbody></table><p><strong>其他草案中的伪类</strong></p><ul><li>:any</li><li>:default</li><li>:dir()</li><li>:disabled</li><li>:enabled</li><li>:fullscreen</li><li>:indeterminate</li><li>:in-range</li><li>:invalid</li><li>:left</li></ul><h2 id="伪元素" tabindex="-1"><a class="header-anchor" href="#伪元素" aria-hidden="true">#</a> 伪元素</h2><p>伪元素（Pseudo-element）跟伪类很像，但它们又有不同的地方。它们都是关键字，但这次伪元素前缀是两个冒号 (:😃 ， 同样是添加到选择器后面去选择某个元素的某个部分。</p><table><thead><tr><th>Selector</th><th>Meaning</th><th>CSS</th></tr></thead><tbody><tr><td>::first-letter</td><td>选择指定元素的第一个单词</td><td>1</td></tr><tr><td>::first-line</td><td>选择指定元素的第一行</td><td>1</td></tr><tr><td>::after</td><td>在指定元素的内容前面插入内容</td><td>2</td></tr><tr><td>::before</td><td>在指定元素的内容后面插入内容</td><td>2</td></tr><tr><td>::selection</td><td>选择指定元素中被用户选中的内容</td><td>3</td></tr><tr><td>::backdrop</td><td>控制全屏的内容</td><td>3，还没有被推广就被废弃，现出现在4级提案中</td></tr></tbody></table><p><strong><code>::backdrop</code> 的小案例</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ie=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>三栏布局<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">body::backdrop</span> <span class="token punctuation">{</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>js控制页面的全屏展示和退出全屏显示<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">language</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>JavaScript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;btn&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> elem <span class="token operator">=</span> document<span class="token punctuation">.</span>body
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>elem<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">requestFullScreen</span><span class="token punctuation">(</span>elem<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">requestFullScreen</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> requestMethod <span class="token operator">=</span> element<span class="token punctuation">.</span>requestFullScreen <span class="token operator">||</span> element<span class="token punctuation">.</span>webkitRequestFullScreen <span class="token operator">||</span> element<span class="token punctuation">.</span>mozRequestFullScreen <span class="token operator">||</span> element<span class="token punctuation">.</span>msRequestFullScreen<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>requestMethod<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">requestMethod</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> window<span class="token punctuation">.</span>ActiveXObject <span class="token operator">!==</span> <span class="token string">&quot;undefined&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> wscript <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ActiveXObject</span><span class="token punctuation">(</span><span class="token string">&quot;WScript.Shell&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>wscript <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          wscript<span class="token punctuation">.</span><span class="token function">SendKeys</span><span class="token punctuation">(</span><span class="token string">&quot;{F11}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>    
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>:before 和 :after 两伪元素，平时都是使用双冒号还是单冒号？有什么区别？以及它们的作用</strong></p><ul><li>单冒号(:)用于CSS3 伪类，双冒号(::)用于 CSS3 伪元素。（伪元素由双冒号和伪元素名称组成） ;</li><li>双冒号是在当前规范中引入的，用于区分伪类和伪元素。不过浏览器需要同时支持旧的已经存在的伪元素写法，比如:first-line、:first-letter、:before、:after 等， 而新的在 CSS3 中引入的伪元素则不允许再支持旧的单冒号的写法;</li><li>想让插入的内容出现在其它内容前，使用::before，之后则使用::after ； 在代码顺序上，::after生成的内容也比::before 生成的内容靠后。 如果按堆栈视角，::after 生成的内容会在::before 生成的内容之上。</li></ul>`,12),o=[e];function l(c,d){return t(),s("div",null,o)}const i=n(p,[["render",l],["__file","032201.html.vue"]]);export{i as default};
