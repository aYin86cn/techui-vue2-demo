import{n as r,_ as o}from"./index-e5c47b2c.js";const d={mixins:[],data(){return{config:{desc:"图表加载中，请稍后",show:!0},dvs:[{title:"dvScrollBoard1",component:"dvScrollBoard1"},{title:"dvScrollBoard2",component:"dvScrollBoard2"},{title:"dvScrollRankingBoard1",component:"dvScrollRankingBoard1"},{title:"dvScrollRankingBoard2",component:"dvScrollRankingBoard2"},{title:"dvPercentPond",component:"dvPercentPond"},{title:"dvWaterLevelPond",component:"dvWaterLevelPond"},{title:"dvDigitalFlop",component:"dvDigitalFlop"},{title:"dvDecoration",component:"dvDecoration"}]}},components:{dvDecoration:()=>o(()=>import("./dvDecoration-2707e759.js"),["assets/dvDecoration-2707e759.js","assets/index-e5c47b2c.js","assets/index-ff56af40.css","assets/dvDecoration-527b0178.css"]),dvDigitalFlop:()=>o(()=>import("./dvDigitalFlop-df5f16bd.js"),["assets/dvDigitalFlop-df5f16bd.js","assets/index-e5c47b2c.js","assets/index-ff56af40.css","assets/dvDigitalFlop-c46fee6f.css"]),dvPercentPond:()=>o(()=>import("./dvPercentPond-0d2641d8.js"),["assets/dvPercentPond-0d2641d8.js","assets/index-e5c47b2c.js","assets/index-ff56af40.css","assets/dvPercentPond-d516ecc7.css"]),dvWaterLevelPond:()=>o(()=>import("./dvWaterLevelPond-7d4ff628.js"),["assets/dvWaterLevelPond-7d4ff628.js","assets/index-e5c47b2c.js","assets/index-ff56af40.css","assets/dvWaterLevelPond-9a08f6bf.css"]),dvScrollBoard1:()=>o(()=>import("./dvScrollBoard1-f6e72871.js"),["assets/dvScrollBoard1-f6e72871.js","assets/index-e5c47b2c.js","assets/index-ff56af40.css","assets/dvScrollBoard1-6837ee0c.css"]),dvScrollBoard2:()=>o(()=>import("./dvScrollBoard2-cb309645.js"),["assets/dvScrollBoard2-cb309645.js","assets/index-e5c47b2c.js","assets/index-ff56af40.css","assets/dvScrollBoard2-9c9ce1ac.css"]),dvScrollRankingBoard1:()=>o(()=>import("./dvScrollRankingBoard1-b14b8193.js"),["assets/dvScrollRankingBoard1-b14b8193.js","assets/index-e5c47b2c.js","assets/index-ff56af40.css","assets/dvScrollRankingBoard1-140b8c8d.css"]),dvScrollRankingBoard2:()=>o(()=>import("./dvScrollRankingBoard2-a06dc811.js"),["assets/dvScrollRankingBoard2-a06dc811.js","assets/index-e5c47b2c.js","assets/index-ff56af40.css","assets/dvScrollRankingBoard2-456821bb.css"])},computed:{},methods:{},mounted(){this.$timer("areaLoading",()=>{this.config.show=!1},2e3)}};var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"dataV-demo-wrap"},[e("loadingArea",{attrs:{text:t.config.desc,show:t.config.show}}),t._l(t.dvs,function(n,c){return e("div",{staticClass:"comps-group"},[e("div",{staticClass:"title"},[t._v(t._s(n.title))]),e(n.component,{tag:"component"}),e("div",{staticClass:"bdTechBottom"})],1)})],2)},_=[],a=r(d,i,_,!1,null,null,null,null);const s=a.exports;export{s as default};
