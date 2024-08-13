import{ax as e,q as t,p as r,aS as a}from"./chunks/framework.C60Cdrhl.js";const b=JSON.parse('{"title":"editorService事件","description":"","frontmatter":{},"headers":[],"relativePath":"api/editor/editorServiceEvents.md","filePath":"api/editor/editorServiceEvents.md"}'),o={name:"api/editor/editorServiceEvents.md"},i=a('<h1 id="editorservice事件" tabindex="-1">editorService事件 <a class="header-anchor" href="#editorservice事件" aria-label="Permalink to &quot;editorService事件&quot;">​</a></h1><h2 id="root-change" tabindex="-1">root-change <a class="header-anchor" href="#root-change" aria-label="Permalink to &quot;root-change&quot;">​</a></h2><ul><li><p><strong>详情：</strong> dsl跟节点发生变化，<a href="./editorServiceMethods.html#set">editorService.set(&#39;root&#39;, {})</a>后触发</p></li><li><p><strong>回调函数：</strong> (value: <a href="https://github.com/Tencent/tmagic-editor/blob/239b5d3efeae916a8cf3e3566d88063ecccc0553/packages/schema/src/index.ts?plain=1#L66-L73" target="_blank" rel="noreferrer">MApp</a>, preValue: <a href="https://github.com/Tencent/tmagic-editor/blob/239b5d3efeae916a8cf3e3566d88063ecccc0553/packages/schema/src/index.ts?plain=1#L66-L73" target="_blank" rel="noreferrer">MApp</a>) =&gt; void</p></li></ul><h2 id="select" tabindex="-1">select <a class="header-anchor" href="#select" aria-label="Permalink to &quot;select&quot;">​</a></h2><ul><li><p><strong>详情：</strong> 选中组件，<a href="./editorServiceMethods.html#select">editorService.select()</a>后触发</p></li><li><p><strong>回调函数：</strong> (node: <a href="https://github.com/Tencent/tmagic-editor/blob/c143a5f7670ae61d80c1a2cfcc780cfb5259849d/packages/schema/src/index.ts#L99" target="_blank" rel="noreferrer">MNode</a>) =&gt; void</p></li></ul><h2 id="add" tabindex="-1">add <a class="header-anchor" href="#add" aria-label="Permalink to &quot;add&quot;">​</a></h2><ul><li><p><strong>详情：</strong> 选中组件，<a href="./editorServiceMethods.html#add">editorService.add()</a>后触发</p></li><li><p><strong>回调函数：</strong> (node: <a href="https://github.com/Tencent/tmagic-editor/blob/c143a5f7670ae61d80c1a2cfcc780cfb5259849d/packages/schema/src/index.ts#L99" target="_blank" rel="noreferrer">MNode</a>[]) =&gt; void</p></li></ul><h2 id="remove" tabindex="-1">remove <a class="header-anchor" href="#remove" aria-label="Permalink to &quot;remove&quot;">​</a></h2><ul><li><p><strong>详情：</strong> 选中组件，<a href="./editorServiceMethods.html#remove">editorService.remove()</a>后触发</p></li><li><p><strong>回调函数：</strong> (node: <a href="https://github.com/Tencent/tmagic-editor/blob/c143a5f7670ae61d80c1a2cfcc780cfb5259849d/packages/schema/src/index.ts#L99" target="_blank" rel="noreferrer">MNode</a>[]) =&gt; void</p></li></ul><h2 id="update" tabindex="-1">update <a class="header-anchor" href="#update" aria-label="Permalink to &quot;update&quot;">​</a></h2><ul><li><p><strong>详情：</strong> 选中组件，<a href="./editorServiceMethods.html#update">editorService.update()</a>后触发</p></li><li><p><strong>回调函数：</strong> (node: <a href="https://github.com/Tencent/tmagic-editor/blob/c143a5f7670ae61d80c1a2cfcc780cfb5259849d/packages/schema/src/index.ts#L99" target="_blank" rel="noreferrer">MNode</a>[]) =&gt; void</p></li></ul><h2 id="history-change" tabindex="-1">history-change <a class="header-anchor" href="#history-change" aria-label="Permalink to &quot;history-change&quot;">​</a></h2><ul><li><p><strong>详情：</strong> 历史记录改变，<a href="./editorServiceMethods.html#undo">editorService.redo()，editorService.undo()</a>后触发</p></li><li><p><strong>回调函数：</strong> (node: <a href="https://github.com/Tencent/tmagic-editor/blob/c143a5f7670ae61d80c1a2cfcc780cfb5259849d/packages/schema/src/index.ts#L99" target="_blank" rel="noreferrer">MNode</a>) =&gt; void</p></li></ul>',13),c=[i];function d(n,s,l,h,g,p){return r(),t("div",null,c)}const m=e(o,[["render",d]]);export{b as __pageData,m as default};
