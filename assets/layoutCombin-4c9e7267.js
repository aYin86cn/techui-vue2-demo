import{n,_ as o}from"./index-2766203e.js";const i={name:"dashboardB",props:["state"],mixins:[],components:{echartsRadar:()=>o(()=>import("./echarts-radar-4b9fdfc9.js"),["assets/echarts-radar-4b9fdfc9.js","assets/themeChart-df325d8f.js","assets/index-2766203e.js","assets/index-ff56af40.css"]),echartsGaugeTriple:()=>o(()=>import("./gaugeTriple-group-37ae0d2f.js"),["assets/gaugeTriple-group-37ae0d2f.js","assets/index-2766203e.js","assets/index-ff56af40.css","assets/gaugeTriple-group-09c91c53.css"]),echartScatter:()=>o(()=>import("./echarts-scatter-ef5bb941.js"),["assets/echarts-scatter-ef5bb941.js","assets/themeChart-df325d8f.js","assets/index-2766203e.js","assets/index-ff56af40.css"]),echartsBarB:()=>o(()=>import("./echarts-barB-21aaaad8.js"),["assets/echarts-barB-21aaaad8.js","assets/themeChart-df325d8f.js","assets/index-2766203e.js","assets/index-ff56af40.css"]),echartsLineB:()=>o(()=>import("./echarts-lineB-ded90afc.js"),["assets/echarts-lineB-ded90afc.js","assets/themeChart-df325d8f.js","assets/index-2766203e.js","assets/index-ff56af40.css"])},data(){return{panelTitleConfig:{width:180},portlets:[{title:"异常特征分布",component:"echartsRadar",border:"DVBorderBox2"},{title:"重点监控告警",component:"echartsGaugeTriple",border:"DVBorderBox1",hideTitle:!0},{title:"散点分布图",component:"echartScatter",border:"DVBorderBox2"},{title:"echartsBarB",component:"echartsBarB",border:"DVBorderBox2"},{title:"echartsLineB",component:"echartsLineB",border:"DVBorderBox2"}]}},computed:{},methods:{getConfig(a){return{title:a.title,ani:!1,opacity:.7}}},mounted(){this.state.init++},destroyed(){}};var s=function(){var t=this,r=t._self._c;return r("div",{staticClass:"dashboardB dashboardSub",attrs:{id:"dashboardB"}},t._l(t.portlets,function(e,l){return r("div",{staticClass:"portlet-wrapper"},[r(e.border,{tag:"component",attrs:{config:t.getConfig(e)}},[e.hideTitle?t._e():r("panelTitleA1",{attrs:{config:t.panelTitleConfig}},[t._v(t._s(e.title))]),r(e.component,{tag:"component",class:e.class}),r("i",[t._v(t._s(e.component))])],1)],1)}),0)},_=[],d=n(i,s,_,!1,null,null,null,null);const p=d.exports;export{p as default};