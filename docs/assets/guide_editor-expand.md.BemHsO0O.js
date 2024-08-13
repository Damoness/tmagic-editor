import{ax as s,q as i,p as a,aS as e}from"./chunks/framework.C60Cdrhl.js";const t="/tmagic-editor/docs/layout.png",y=JSON.parse('{"title":"编辑器扩展","description":"","frontmatter":{},"headers":[],"relativePath":"guide/editor-expand.md","filePath":"guide/editor-expand.md"}'),n={name:"guide/editor-expand.md"},p=e('<h1 id="编辑器扩展" tabindex="-1">编辑器扩展 <a class="header-anchor" href="#编辑器扩展" aria-label="Permalink to &quot;编辑器扩展&quot;">​</a></h1><p>编辑器布局组成部分名称如下图，后续将直接使用图中名称指代其部分</p><img src="'+t+`" width="100%"><h2 id="ui扩展" tabindex="-1">UI扩展 <a class="header-anchor" href="#ui扩展" aria-label="Permalink to &quot;UI扩展&quot;">​</a></h2><h3 id="一、顶部菜单栏定制" tabindex="-1">一、顶部菜单栏定制 <a class="header-anchor" href="#一、顶部菜单栏定制" aria-label="Permalink to &quot;一、顶部菜单栏定制&quot;">​</a></h3><p>通常使用 <code>m-editor</code> 组件的 <a href="/tmagic-editor/docs/api/editor/props.html#menu">menu</a> <code>prop</code> 来对齐进行设置；</p><p>顶部菜单栏分为<code>左</code> <code>中</code> <code>右</code>三个部分组成，所以 <a href="/tmagic-editor/docs/api/editor/props.html#menu">menu</a> <code>prop</code>的数据格式如下：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{ </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [], </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">center</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [], </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">right</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [] }</span></span></code></pre></div><p>数组的内容可以有三种种形式：<code>内部定义好的字符串</code>、<code>其他字符串</code>、<code>MenuButton 或者 MenuComponent 对象</code></p><h4 id="_1-内部定义好的字符串" tabindex="-1">1. 内部定义好的字符串: <a class="header-anchor" href="#_1-内部定义好的字符串" aria-label="Permalink to &quot;1. 内部定义好的字符串:&quot;">​</a></h4><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;delete&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;undo&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;redo&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;zoom&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;zoom-in&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;zoom-out&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;guides&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;rule&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;scale-to-original&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;scale-to-fit&#39;</span></span></code></pre></div><p>是组件内部定义的可直接使用的内置功能，具体含义可以查看 <a href="/tmagic-editor/docs/api/editor/props.html#menu">menu</a></p><h4 id="_2-其他字符串" tabindex="-1">2. 其他字符串 <a class="header-anchor" href="#_2-其他字符串" aria-label="Permalink to &quot;2. 其他字符串&quot;">​</a></h4><p>除去<a href="#内部定义好的字符串">内部定好的字符串</a>的其他字符串，则会被当成普通文本直接显示</p><h4 id="_3-menubutton-或者-menucomponent-对象" tabindex="-1">3. <code>MenuButton</code> 或者 <code>MenuComponent</code> 对象 <a class="header-anchor" href="#_3-menubutton-或者-menucomponent-对象" aria-label="Permalink to &quot;3. \`MenuButton\` 或者 \`MenuComponent\` 对象&quot;">​</a></h4><p>MenuButton 的<a href="https://github.com/Tencent/tmagic-editor/blob/239b5d3efeae916a8cf3e3566d88063ecccc0553/packages/editor/src/type.ts#L168" target="_blank" rel="noreferrer">定义</a></p><p>用于自定义一个按钮，例如定义一个返回按钮可以由如下配置实现</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;buuton&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;返回&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  handler</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> window.history.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">back</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>如果需要更复杂的功能则可以使用 <code>MenuComponent</code>, 可以用于实现渲染任意一个Vue组件</p><p><code>MenuComponent</code> 的<a href="https://github.com/Tencent/tmagic-editor/blob/239b5d3efeae916a8cf3e3566d88063ecccc0553/packages/editor/src/type.ts#L197C18-L197C32" target="_blank" rel="noreferrer">定义</a></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>如果对内置的顶部菜单栏实现不满意还可以使用自定义的实现完全替换掉</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">m-editor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> #nav</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">your-nav</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">your-nav</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">m-editor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div></div><h3 id="二、左侧菜单栏" tabindex="-1">二、左侧菜单栏 <a class="header-anchor" href="#二、左侧菜单栏" aria-label="Permalink to &quot;二、左侧菜单栏&quot;">​</a></h3><h3 id="三、右侧属性配置栏" tabindex="-1">三、右侧属性配置栏 <a class="header-anchor" href="#三、右侧属性配置栏" aria-label="Permalink to &quot;三、右侧属性配置栏&quot;">​</a></h3><p>默认的属性配置栏会分为属性、样式、事件、高级4个tab分页，其中只有属性是在组件中的<code>formConfig</code>文件中定义，其他三个分页都是自动生成的，所有组件都是一样的。</p><p>默认的属性读取流程如下：</p><p>组件中定义<code>formConfig</code> -&gt; 通过<code>tamgic-cli</code>构建成 <code>runtime</code> 中 <code>/config/index.umd.cjs</code> -&gt; <code>m-editor</code>中加载然后配置到<a href="/tmagic-editor/docs/api/editor/props.html#propsconfigs">propsConfig</a> prop中 -&gt; <code>m-editor</code>保存到<code>propsService</code>中 -&gt; 选中组件时<code>editorService</code>会去<code>propsService</code>调用<code>getPropsConfig</code>中读取</p><p><code>propsService.getPropsConfig</code>会调取<code>propsService.fillConfig</code>添加样式、事件、高级3个tab分页</p><h4 id="_1-定制属性配置栏中顶部的属性、样式、事件、高级-tab分页" tabindex="-1">1. 定制属性配置栏中顶部的属性、样式、事件、高级 tab分页 <a class="header-anchor" href="#_1-定制属性配置栏中顶部的属性、样式、事件、高级-tab分页" aria-label="Permalink to &quot;1. 定制属性配置栏中顶部的属性、样式、事件、高级 tab分页&quot;">​</a></h4><p>可以通过干预<code>propsService.fillConfig</code>来实现自定义。例如：</p><p>实现去掉样式、事件、高级3个tab分页，直接显示组件内定义好的配置</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">propsService.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">usePlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * result为生成好的默认配置</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * config为组件中定义好的配置</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  afterFillConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">result</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">config</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> config</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h4 id="_2-定制属性配置栏中配置的来源" tabindex="-1">2. 定制属性配置栏中配置的来源 <a class="header-anchor" href="#_2-定制属性配置栏中配置的来源" aria-label="Permalink to &quot;2. 定制属性配置栏中配置的来源&quot;">​</a></h4><p>如果觉得上述属性读取流程不满足需要，可以通过干预<code>propsService.getPropsConfig</code>来实现自定义的流程</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">propsService.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">usePlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * result为生成好的默认配置</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * config为组件中定义好的配置</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  afterGetPropsConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">result</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 返回配置DSL即可</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> []</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h4 id="_3-自定义属性配置栏" tabindex="-1">3. 自定义属性配置栏 <a class="header-anchor" href="#_3-自定义属性配置栏" aria-label="Permalink to &quot;3. 自定义属性配置栏&quot;">​</a></h4><p>默认属性配置栏是是使用<code>@tmagic/form</code>来实现的，如果需要使用其他组件来实现可以使用<code>props-panel</code>slot来将其替换掉</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">m-editor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> #props-panel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">your-props-panel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">your-props-panel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">m-editor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="四、中间工作区域" tabindex="-1">四、中间工作区域 <a class="header-anchor" href="#四、中间工作区域" aria-label="Permalink to &quot;四、中间工作区域&quot;">​</a></h3><h2 id="行为扩展" tabindex="-1">行为扩展 <a class="header-anchor" href="#行为扩展" aria-label="Permalink to &quot;行为扩展&quot;">​</a></h2>`,39),h=[p];function l(k,d,r,o,c,E){return a(),i("div",null,h)}const u=s(n,[["render",l]]);export{y as __pageData,u as default};
