import{n,_ as r}from"./index-beda625d.js";const a={mixins:[],components:{rankingBoard:()=>r(()=>import("./rankingBoard-c0ef6e15.js"),["assets/rankingBoard-c0ef6e15.js","assets/index-beda625d.js","assets/index-c2c9ef50.css","assets/rankingBoard-63a54d10.css"]),counterGrid:()=>r(()=>import("./counter-grid-66f4cf0f.js"),["assets/counter-grid-66f4cf0f.js","assets/index-beda625d.js","assets/index-c2c9ef50.css","assets/counter-grid-77c90104.css"]),echartsLine1:()=>r(()=>import("./echarts-line1-1d77b9ba.js"),["assets/echarts-line1-1d77b9ba.js","assets/themeChart-df325d8f.js","assets/index-beda625d.js","assets/index-c2c9ef50.css"]),echartsBar2:()=>r(()=>import("./echarts-Bar2-6ba07898.js"),["assets/echarts-Bar2-6ba07898.js","assets/themeChart-df325d8f.js","assets/index-beda625d.js","assets/index-c2c9ef50.css"]),echartsBarLine1:()=>r(()=>import("./echarts-BarLine1-c7b07693.js"),["assets/echarts-BarLine1-c7b07693.js","assets/themeChart-df325d8f.js","assets/index-beda625d.js","assets/index-c2c9ef50.css"]),echartsPie1:()=>r(()=>import("./echarts-pie1-45c948fa.js"),["assets/echarts-pie1-45c948fa.js","assets/themeChart-df325d8f.js","assets/index-beda625d.js","assets/index-c2c9ef50.css","assets/echarts-pie1-6d20dea8.css"]),scrollBoardTable:()=>r(()=>import("./scrollBoard-Table-cbdcb8b3.js"),["assets/scrollBoard-Table-cbdcb8b3.js","assets/index-beda625d.js","assets/index-c2c9ef50.css","assets/scrollBoard-Table-f32307bf.css"])},data(){return{panelTitleConfig:{width:180},portlets:[{id:"t1",title:"统计模块",component:"counterGrid",border:"blank",hideTitle:!0},{id:"t2",title:"重点信息看板",component:"echartsBarLine1",border:"DVBorderBox1",hideTitle:!0},{id:"t3",title:"销售排行榜Top10",component:"rankingBoard",border:"aYinTechBorderB4"},{id:"b1",title:"回款变动推送",component:"scrollBoardTable",border:"aYinTechBorderB4"},{id:"b2",title:"回款与开票统计",component:"echartsLine1",border:"aYinTechBorderB1"},{id:"b3",title:"净利润环比",component:"echartsBar2",border:"aYinTechBorderB1"},{id:"b4",title:"合同类型占比",component:"echartsPie1",border:"aYinTechBorderB4"}]}},computed:{},methods:{getConfig(i){let e={title:this.$t(`dashboardE.PTitle.${i.id}`),titleWidth:220,ani:!1,opacity:.6},t={decorationAlt:!0,titleWidth:160,rotate:"y"};return i.border=="aYinTechBorderA1"&&(e=_.assign(e,t)),i.border=="aYinTechBorderB1"&&(e.decoration=!1),e}},mounted(){},destroyed(){}};var d=function(){var e=this,t=e._self._c;return t("div",{staticClass:"dashboard1080E"},[e._l(e.portlets,function(o,s){return t("div",{staticClass:"portlet-wrapper"},[t(o.border,{tag:"component",attrs:{config:e.getConfig(o)}},[o.hideTitle?e._e():t("panelTitleA1",{attrs:{config:e.panelTitleConfig}},[e._v(e._s(e.$t(`dashboardE.PTitle.${o.id}`)))]),t(o.component,{tag:"component"}),t("i",[e._v(e._s(o.component))])],1)],1)}),t("systemTitleA3")],2)},l=[],c=n(a,d,l,!1,null,null,null,null);const u=c.exports;export{u as default};