import{n as a,_ as r}from"./index-beda625d.js";const n={name:"dashboardD",props:["state"],mixins:[],components:{echartsBarHoriA:()=>r(()=>import("./echarts-barHoriA-ded89684.js"),["assets/echarts-barHoriA-ded89684.js","assets/themeChart-df325d8f.js","assets/index-beda625d.js","assets/index-c2c9ef50.css"]),echartsBarHoriB:()=>r(()=>import("./echarts-barHoriB-d75ecb2f.js"),["assets/echarts-barHoriB-d75ecb2f.js","assets/themeChart-df325d8f.js","assets/index-beda625d.js","assets/index-c2c9ef50.css"]),echartsHitmapGroup:()=>r(()=>import("./hitmapCounter-group-e522399e.js"),["assets/hitmapCounter-group-e522399e.js","assets/index-beda625d.js","assets/index-c2c9ef50.css","assets/hitmapCounter-group-9d84e50a.css"]),echartsGaugeCounter:()=>r(()=>import("./gaugeCounter-group-f340a7db.js"),["assets/gaugeCounter-group-f340a7db.js","assets/index-beda625d.js","assets/index-c2c9ef50.css","assets/gaugeCounter-group-7c659288.css"]),echartsGaugeFour:()=>r(()=>import("./echarts-gaugeFour-ed5c1a9c.js"),["assets/echarts-gaugeFour-ed5c1a9c.js","assets/themeChart-df325d8f.js","assets/index-beda625d.js","assets/index-c2c9ef50.css"])},data(){return{panelTitleConfig:{width:180},portlets:[{id:"p1",title:"实时流速图",component:"echartsBarHoriA",border:"DVBorderBox2"},{id:"p2",title:"根源告警分布",component:"echartsHitmapGroup",border:"DVBorderBox1",hideTitle:!0},{id:"p3",title:"告警情况",component:"echartsGaugeCounter",border:"DVBorderBox2"},{id:"p4",title:"多组仪表范例",component:"echartsGaugeFour",border:"DVBorderBox2"},{id:"p5",title:"流量排行topN",component:"echartsBarHoriB",border:"DVBorderBox2"}]}},computed:{},methods:{getConfig(i){return{title:this.$t(`dashboard4x2D.PTitle.${i.id}`),ani:!1,titleWdith:250,opacity:.7}}},mounted(){this.state.init++},destroyed(){}};var d=function(){var t=this,e=t._self._c;return e("div",{staticClass:"dashboardD dashboardSub",attrs:{id:"dashboardD"}},t._l(t.portlets,function(o,p){return e("div",{staticClass:"portlet-wrapper"},[e(o.border,{tag:"component",attrs:{config:t.getConfig(o)}},[o.hideTitle?t._e():e("panelTitleA1",{attrs:{config:t.panelTitleConfig}},[t._v(t._s(t.$t(`dashboard4x2D.PTitle.${o.id}`)))]),e(o.component,{tag:"component"}),e("i",[t._v(t._s(o.component))])],1)],1)}),0)},s=[],_=a(n,d,s,!1,null,null,null,null);const c=_.exports;export{c as default};