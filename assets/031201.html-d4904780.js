import{_ as e,r as p,o as t,c as l,a as s,b as n,d as o,e as r}from"./app-6e895db1.js";const c={},i=r(`<blockquote><p>学习资料：http://www.cnblogs.com/wuqun/p/10131483.html</p></blockquote><h2 id="sass" tabindex="-1"><a class="header-anchor" href="#sass" aria-hidden="true">#</a> sass</h2><p>create-react-app 脚手架中已经添加了 sass-loader 的支持，所以只需要安装 node-sass 插件即可。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">npm</span> <span class="token function">install</span> node-sass --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="less" tabindex="-1"><a class="header-anchor" href="#less" aria-hidden="true">#</a> less</h2><ol><li>显示隐藏文件</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run <span class="token function">eject</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>修改 <code>webpack.config.js</code></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 添加 less 解析规则</span>
<span class="token keyword">const</span> lessRegex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
<span class="token keyword">const</span> lessModuleRegex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.module\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>


<span class="token comment">// Less 解析配置</span>
<span class="token punctuation">{</span>
    <span class="token literal-property property">test</span><span class="token operator">:</span> lessRegex<span class="token punctuation">,</span>
    <span class="token literal-property property">exclude</span><span class="token operator">:</span> lessModuleRegex<span class="token punctuation">,</span>
    <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token function">getStyleLoaders</span><span class="token punctuation">(</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">importLoaders</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token literal-property property">sourceMap</span><span class="token operator">:</span> isEnvProduction <span class="token operator">&amp;&amp;</span> shouldUseSourceMap<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string">&#39;less-loader&#39;</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sideEffects</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">{</span>
    <span class="token literal-property property">test</span><span class="token operator">:</span> lessModuleRegex<span class="token punctuation">,</span>
    <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token function">getStyleLoaders</span><span class="token punctuation">(</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">importLoaders</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token literal-property property">sourceMap</span><span class="token operator">:</span> isEnvProduction <span class="token operator">&amp;&amp;</span> shouldUseSourceMap<span class="token punctuation">,</span>
            <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">getLocalIdent</span><span class="token operator">:</span> getCSSModuleLocalIdent<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string">&#39;less-loader&#39;</span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>安装less和less-loader</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token function">less</span> less-loader <span class="token parameter variable">--save</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,11),d={href:"https://www.cnblogs.com/wuqun/p/10131483.html",target:"_blank",rel:"noopener noreferrer"};function u(k,v){const a=p("ExternalLinkIcon");return t(),l("div",null,[i,s("blockquote",null,[s("p",null,[n("参考："),s("a",d,[n("create-react-app新旧版中使用less和antd并修改主题颜色"),o(a)])])])])}const b=e(c,[["render",u],["__file","031201.html.vue"]]);export{b as default};
