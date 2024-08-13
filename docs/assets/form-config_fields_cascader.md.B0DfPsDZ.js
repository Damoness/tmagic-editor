import{ax as n,ah as i,q as d,U as c,O as o,t as e,S as a,p as r}from"./chunks/framework.C60Cdrhl.js";const N=JSON.parse('{"title":"Cascader 级联选择器","description":"","frontmatter":{},"headers":[],"relativePath":"form-config/fields/cascader.md","filePath":"form-config/fields/cascader.md"}'),t={name:"form-config/fields/cascader.md"},s=e("h1",{id:"cascader-级联选择器",tabindex:"-1"},[a("Cascader 级联选择器 "),e("a",{class:"header-anchor",href:"#cascader-级联选择器","aria-label":'Permalink to "Cascader 级联选择器"'},"​")],-1),u=e("p",null,"当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。",-1),h=e("h2",{id:"基础用法",tabindex:"-1"},[a("基础用法 "),e("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),b=e("p",null,"有两种触发子菜单的方式",-1),p=e("p",null,"type为'cascader'",-1),v=e("h2",{id:"禁用选项",tabindex:"-1"},[a("禁用选项 "),e("a",{class:"header-anchor",href:"#禁用选项","aria-label":'Permalink to "禁用选项"'},"​")],-1),_=e("p",null,"通过在数据源中设置 disabled 字段来声明该选项是禁用的",-1),m=e("p",null," 本例中，options 指定的数组中的第一个元素含有 disabled: true 键值对，因此是禁用的。在默认情况下，Cascader 会检查数据中每一项的 disabled 字段是否为 true ，如果你的数据中表示禁用含义的字段名不为 disabled ，可以通过 disabled 属性来指定（详见下方 API 表格）。当然， value 、 label 和 children 这三个字段名也可以通过同样的方式指定。 ",-1),f=e("h2",{id:"多选",tabindex:"-1"},[a("多选 "),e("a",{class:"header-anchor",href:"#多选","aria-label":'Permalink to "多选"'},"​")],-1),g=e("p",null,[a("可通过 "),e("code",null,"multiple = true"),a(" 来开启多选模式")],-1),x=e("p",null," 在开启多选模式后，默认情况下会展示所有已选中的选项的Tag ",-1);function y(k,z,C,P,j,B){const l=i("demo-block");return r(),d("div",null,[s,u,h,b,c(l,{type:"form",config:[{type:"cascader",name:"cascader",text:"选项",placeholder:"请选择",options:[{value:"zhinan",label:"指南",children:[{value:"shejiyuanze",label:"设计原则",children:[{value:"yizhi",label:"一致"},{value:"fankui",label:"反馈"}]},{value:"daohang",label:"导航",children:[{value:"cexiangdaohang",label:"侧向导航"},{value:"dingbudaohang",label:"顶部导航"}]}]},{value:"zujian",label:"组件",children:[{value:"basic",label:"Basic",children:[{value:"layout",label:"Layout 布局"},{value:"color",label:"Color 色彩"}]},{value:"form",label:"Form",children:[{value:"checkbox",label:"Checkbox 多选框"},{value:"input",label:"Input 输入框"}]}]}]}]},{source:o(()=>[p]),_:1}),v,_,c(l,{type:"form",config:[{type:"cascader",name:"cascader",text:"选项",placeholder:"请选择",disabled:!0,options:[]},{type:"cascader",name:"cascader1",text:"选项2",placeholder:"请选择",options:[{value:"zhinan",label:"指南",disabled:!0,children:[{value:"shejiyuanze",label:"设计原则",children:[{value:"yizhi",label:"一致"},{value:"fankui",label:"反馈"}]},{value:"daohang",label:"导航",children:[{value:"cexiangdaohang",label:"侧向导航"},{value:"dingbudaohang",label:"顶部导航"}]}]},{value:"zujian",label:"组件",children:[{value:"basic",label:"Basic",disabled:!0,children:[{value:"layout",label:"Layout 布局"},{value:"color",label:"Color 色彩"}]},{value:"form",label:"Form",children:[{value:"checkbox",label:"Checkbox 多选框"},{value:"input",disabled:!0,label:"Input 输入框"}]}]}]}]},{source:o(()=>[m]),_:1}),f,g,c(l,{type:"form",config:[{type:"cascader",name:"cascader",text:"选项",multiple:!0,placeholder:"请选择",options:[{value:"zhinan",label:"指南",children:[{value:"shejiyuanze",label:"设计原则",children:[{value:"yizhi",label:"一致"},{value:"fankui",label:"反馈"}]},{value:"daohang",label:"导航",children:[{value:"cexiangdaohang",label:"侧向导航"},{value:"dingbudaohang",label:"顶部导航"}]}]},{value:"zujian",label:"组件",children:[{value:"basic",label:"Basic",children:[{value:"layout",label:"Layout 布局"},{value:"color",label:"Color 色彩"}]},{value:"form",label:"Form",children:[{value:"checkbox",label:"Checkbox 多选框"},{value:"input",label:"Input 输入框"}]}]}]}]},{source:o(()=>[x]),_:1})])}const $=n(t,[["render",y]]);export{N as __pageData,$ as default};
