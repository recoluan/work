import{_ as n,o as s,c as a,e as t}from"./app-6e895db1.js";const p={},e=t(`<h2 id="js-判断滚动行为停止" tabindex="-1"><a class="header-anchor" href="#js-判断滚动行为停止" aria-hidden="true">#</a> JS 判断滚动行为停止</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> t1 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> t2 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token comment">// 定时器</span>
<span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> 

<span class="token comment">// scroll监听</span>
document<span class="token punctuation">.</span><span class="token function-variable function">onscroll</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
  t1 <span class="token operator">=</span> <span class="token function">getScrollTop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>isScrollEnd<span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">isScrollEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;ceshi&#39;</span><span class="token punctuation">)</span>
  t2 <span class="token operator">=</span> <span class="token function">getScrollTop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>t2 <span class="token operator">===</span> t1<span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;滚动结束了&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getScrollTop</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop <span class="token operator">|</span>document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollTop<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="防抖" tabindex="-1"><a class="header-anchor" href="#防抖" aria-hidden="true">#</a> 防抖</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 将会包装事件的 debounce 函数</span>
<span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 维护一个 timer</span>
  <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token comment">// 不可以在这计时器，因为 debounce 函数只执行</span>
  <span class="token comment">// clearTimeout(timer);</span>

  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 通过 &#39;this&#39; 和 &#39;arguments&#39; 获取函数的作用域和变量</span>
    <span class="token keyword">let</span> context <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> args <span class="token operator">=</span> arguments<span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span>

    <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 当用户滚动时被调用的函数</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;You are scrolling!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// scroll监听</span>
document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;scroll&#39;</span><span class="token punctuation">,</span> <span class="token function">debounce</span><span class="token punctuation">(</span>foo<span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更进一步，我们不希望非要等到事件停止触发后才执行，我希望立刻执行函数，然后等到停止触发 n 秒后，才可以重新触发执行。 这里增加一个immediate参数来设置是否要立即执行：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 将会包装事件的 debounce 函数</span>
<span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span>delay<span class="token punctuation">,</span>immediate</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> context <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> args <span class="token operator">=</span> arguments<span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>immediate<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token comment">// 根据距离上次触发操作的时间是否到达delay来决定是否要现在执行函数</span>
      <span class="token comment">// timer 是注册 Timeout 的次数</span>
      <span class="token keyword">let</span> doNow <span class="token operator">=</span> <span class="token operator">!</span>timer<span class="token punctuation">;</span>
      
      <span class="token comment">// 每一次都重新设置timer，就是要保证每一次执行的至少delay秒后才可以执行</span>
      timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        timer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>delay<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 立即执行</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>doNow<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
      timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>delay<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 当用户滚动时被调用的函数</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;You are scrolling!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// scroll监听</span>
document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;scroll&#39;</span><span class="token punctuation">,</span> <span class="token function">debounce</span><span class="token punctuation">(</span>foo<span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="节流" tabindex="-1"><a class="header-anchor" href="#节流" aria-hidden="true">#</a> 节流</h2><p><strong>时间戳实现：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">throttle</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span>delay</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">let</span> prev <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> context <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> args <span class="token operator">=</span> arguments<span class="token punctuation">;</span>
    <span class="token keyword">let</span> now <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>now<span class="token operator">-</span>prev<span class="token operator">&gt;=</span>delay<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
      prev <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 当用户滚动时被调用的函数</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;You are scrolling!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// scroll监听</span>
document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;scroll&#39;</span><span class="token punctuation">,</span> <span class="token function">throttle</span><span class="token punctuation">(</span>foo<span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>定时器实现：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">throttle</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> context <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> args <span class="token operator">=</span> arguments<span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>timer<span class="token punctuation">)</span><span class="token punctuation">{</span>
      timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
        timer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 当用户滚动时被调用的函数</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;You are scrolling!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// scroll监听</span>
document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;scroll&#39;</span><span class="token punctuation">,</span> <span class="token function">throttle</span><span class="token punctuation">(</span>foo<span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>可以综合使用时间戳与定时器，完成一个事件触发时立即执行，触发完毕还能执行一次的节流函数：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">throttle</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span>delay</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> startTime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> curTime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> remaining <span class="token operator">=</span> delay<span class="token operator">-</span><span class="token punctuation">(</span>curTime<span class="token operator">-</span>startTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> context <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> args <span class="token operator">=</span> arguments<span class="token punctuation">;</span>

    <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>remaining<span class="token operator">&lt;=</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
      startTime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
      timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>func<span class="token punctuation">,</span>remaining<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 当用户滚动时被调用的函数</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;You are scrolling!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// scroll监听</span>
document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;scroll&#39;</span><span class="token punctuation">,</span> <span class="token function">throttle</span><span class="token punctuation">(</span>foo<span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>防止一个事件频繁触发回调函数的方式：</p><ul><li>防抖动：将几次操作合并为一此操作进行。原理是维护一个计时器，规定在delay时间后触发函数，但是在delay时间内再次触发的话，就会取消之前的计时器而重新设置。这样一来，只有最后一次操作能被触发。</li><li>节流：使得一定时间内只触发一次函数。 它和防抖动最大的区别就是，节流函数不管事件触发有多频繁，都会保证在规定时间内一定会执行一次真正的事件处理函数，而防抖动只是在最后一次事件后才触发一次函数。 原理是通过判断是否到达一定时间来触发函数，若没到规定时间则使用计时器延后，而下一次事件则会重新设定计时器。</li></ul>`,16),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","070101.html.vue"]]);export{k as default};
