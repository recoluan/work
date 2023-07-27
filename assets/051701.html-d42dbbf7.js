import{_ as a,o as e,c as n,e as d,a as t}from"./app-6e895db1.js";const r={},s=d(`<h2 id="box-shadow" tabindex="-1"><a class="header-anchor" href="#box-shadow" aria-hidden="true">#</a> box-shadow</h2><p>box-shadow 属性应用于阴影文本。</p><p><strong>注意</strong>： box-shadow属性连接一个或更多的阴影文本。属性是阴影，指定的每2或3个长度值和一个可选的颜色值用逗号分隔开来。已失时效的长度为0。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">box-shadow</span><span class="token punctuation">:</span> h-shadow v-shadow blur spread color inset<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>Value</th><th>Description</th></tr></thead><tbody><tr><td>h-shadow</td><td>必需。水平阴影的位置。允许负值。</td></tr><tr><td>v-shadow</td><td>必需。垂直阴影的位置。允许负值。</td></tr><tr><td>blur</td><td>可选。模糊的距离。</td></tr><tr><td>spread</td><td>可选。阴影的大小</td></tr><tr><td>color</td><td>可选。阴影的颜色。</td></tr><tr><td>inset</td><td>可选。从外层的阴影（开始时）改变阴影内侧阴影</td></tr></tbody></table><h2 id="background" tabindex="-1"><a class="header-anchor" href="#background" aria-hidden="true">#</a> background</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background</span><span class="token punctuation">:</span>bg-color bg-image position/bg-size bg-repeat bg-origin bg-clip bg-attachment initial|inherit<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>Value</th><th>Description</th></tr></thead><tbody><tr><td>background-position</td><td>背景图像的位置</td></tr><tr><td>background-size</td><td>背景图片的大小</td></tr><tr><td>background-origin</td><td>指定background-position属性应该是相对位置。</td></tr><tr><td>background-clip</td><td>背景图像的绘画区域</td></tr><tr><td>background-attachment</td><td>景图像是否固定或者随着页面的其余部分滚动。</td></tr></tbody></table><h3 id="background-position" tabindex="-1"><a class="header-anchor" href="#background-position" aria-hidden="true">#</a> background-position</h3><table><thead><tr><th>Value</th><th>Description</th></tr></thead><tbody><tr><td>left top<br>left center<br>left bottom<br>right top<br>right bottom<br>right center<br>center top<br>center bottom<br>center center</td><td>如果仅指定一个关键字，其他值将会是&quot;center&quot;</td></tr><tr><td>x% y%</td><td>第一个值是水平位置，第二个值是垂直。<br>左上角是0％ 0％。右下角是100％ 100％。<br>如果仅指定了一个值，其他值将是50％。 <br>默认值为：0％ 0％。</td></tr><tr><td>xposypos</td><td>第一个值是水平位置，第二个值是垂直。<br>左上角是0。单位可以是像素（0px0px）或任何其他 CSS单位。<br>如果仅指定了一个值，其他值将是50％。<br>你可以混合使用％和positions</td></tr><tr><td>inherit</td><td>指定background-position属性设置应该从父元素继承</td></tr></tbody></table><h3 id="background-position-1" tabindex="-1"><a class="header-anchor" href="#background-position-1" aria-hidden="true">#</a> background-position</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-size</span><span class="token punctuation">:</span> length|percentage|cover|contain<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>Value</th><th>Description</th></tr></thead><tbody><tr><td>length</td><td>设置背景图片高度和宽度。第一个值设置宽度，第二个值设置的高度。如果只给出一个值，第二个是设置为 auto(自动)</td></tr><tr><td>percentage</td><td>将计算相对于背景定位区域的百分比。第一个值设置宽度，第二个值设置的高度。如果只给出一个值，第二个是设置为&quot;auto(自动)&quot;</td></tr><tr><td>cover</td><td>此时会保持图像的纵横比并将图像缩放成将完全覆盖背景定位区域的最小大小。</td></tr><tr><td>contain</td><td>此时会保持图像的纵横比并将图像缩放成将适合背景定位区域的最大大小。</td></tr></tbody></table><h3 id="background-origin" tabindex="-1"><a class="header-anchor" href="#background-origin" aria-hidden="true">#</a> background-origin</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-origin</span><span class="token punctuation">:</span> padding-box|border-box|content-box<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>Value</th><th>Description</th></tr></thead><tbody><tr><td>padding-box</td><td>背景图像填充框的相对位置</td></tr><tr><td>border-box</td><td>背景图像边界框的相对位置</td></tr><tr><td>content-box</td><td>背景图像的相对位置的内容框</td></tr></tbody></table><h3 id="background-clip" tabindex="-1"><a class="header-anchor" href="#background-clip" aria-hidden="true">#</a> background-clip</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-clip</span><span class="token punctuation">:</span> padding-box|border-box|content-box<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>Value</th><th>Description</th></tr></thead><tbody><tr><td>padding-box</td><td>默认值。背景绘制在边框方框内（剪切成边框方框）。</td></tr><tr><td>border-box</td><td>背景绘制在衬距方框内（剪切成衬距方框）。</td></tr><tr><td>content-box</td><td>背景绘制在内容方框内（剪切成内容方框）。</td></tr></tbody></table><h3 id="区分-origin-clip" tabindex="-1"><a class="header-anchor" href="#区分-origin-clip" aria-hidden="true">#</a> 区分 origin/clip</h3>`,20),o=t("div",{class:"custom-container tip"},[t("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[t("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[t("circle",{cx:"12",cy:"12",r:"9"}),t("path",{d:"M12 8h.01"}),t("path",{d:"M11 12h1v4h1"})])]),t("p",{class:"custom-container-title"},"TIP"),t("p",null,[t("strong",null,"background-clip：border|padding|content")]),t("p",null,"该属性指定了背景在哪些区域可以显示，但与背景开始绘制的位置无关，背景的绘制的位置可以出现在不显示背景的区域，这时就相当于背景图片被不显示背景的区域裁剪了一部分一样。"),t("p",null,[t("strong",null,"background-origin：padding|border|content")]),t("p",null,"该属性指定了背景从哪个区域(边框、补白或内容)开始绘制,但也仅仅能控制背景开始绘制的位置，你可以用这个属性在边框上绘制背景，但边框上的背景显不显示出来那就要由background-clip来决定了")],-1),i=d(`<h3 id="background-attachment" tabindex="-1"><a class="header-anchor" href="#background-attachment" aria-hidden="true">#</a> background-attachment</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-attachment</span><span class="token punctuation">:</span> scroll|fixed|inherit<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>Value</th><th>Description</th></tr></thead><tbody><tr><td>scroll</td><td>默认。背景图片随页面的其余部分滚动。</td></tr><tr><td>fixed</td><td>背景图像是固定的</td></tr><tr><td>inherit</td><td>继承</td></tr></tbody></table>`,3),c=[s,o,i];function l(h,p){return e(),n("div",null,c)}const u=a(r,[["render",l],["__file","051701.html.vue"]]);export{u as default};