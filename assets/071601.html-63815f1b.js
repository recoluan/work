import{_ as e,o as n,c as s,e as i}from"./app-6e895db1.js";const d={},l=i(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const express = require(&#39;express&#39;)

const app = express()

app.get(&#39;/&#39;, function (req, res) {
  res.send(&#39;&lt;h1&gt;hello, world!&lt;/h1&gt;&#39;)
})

app.get(&#39;/data&#39;, function (req, res) {
  res.json({name: &#39;reco&#39;, age: 26})
})

app.listen(9093, function () {
  console.log(&#39;express success！&#39;)
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>修改或新增接口后需要中断项目，重新启动，为了开发方便，使用nodemon代替node</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//原来
node server.js


// 改为
nodemon server.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>mongodb指定数据库路径</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mongod --dbpath /Users/reco/workSpace/git/personal/react-boss/server/mongodb/data/db
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5),a=[l];function r(c,t){return n(),s("div",null,a)}const o=e(d,[["render",r],["__file","071601.html.vue"]]);export{o as default};
