import{t as s}from"./themeChart-df325d8f.js";import{n}from"./index-e5c47b2c.js";const l={components:{},mixins:[s],data(){return{chartData:{name:"告警降噪比",value:45,colors:["#5c53de","#18c8ff"],pos:["50%","50%"]},chartOption:{}}},computed:{},methods:{processData(){const{getColor:t,chartData:e}=this,{colors:o}=e;let a=e;this.chartOption.series.push({name:"业务指标",type:"gauge",detail:{formatter:"{value}%"},data:[a],radius:"145%",center:["50%","90%"],startAngle:180,endAngle:0,axisLine:{lineStyle:{width:30,offset:0,color:[[a.value/100,new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:o[0]},{offset:1,color:o[1]}])],[1,$c.hsll(o[1],.15)]]}},axisLabel:{show:!1},axisTick:{lineStyle:{color:t("techDecoB")}},splitLine:{length:20,lineStyle:{width:1,color:t("lineAX")}},pointer:{show:!1,length:"80%",width:5},itemStyle:{color:$c.bll8},title:{show:!0,offsetCenter:[0,"-10%"],color:t("staFC"),fontSize:18},detail:{show:!0,offsetCenter:[0,"-40%"],color:t("staFC"),formatter:function(r){return r+"%"},fontSize:25}})},processOption(){const{getColor:t}=this;this.chartOption={update:!1,title:{show:!1,text:"",left:"62%",top:"55%",textStyle:{color:t("staFC"),fontSize:14,fontWeight:"bold"}},tooltip:{formatter:"{a} <br/>{b} : {c}%"},series:[]},this.processData()},chartTheme(){const{chartData:t,getPalette:e,oriColors:o}=this;t.colors=e({actual:2,pickType:"rdm"})}},mounted(){this.processOption()}};var i=function(){var e=this,o=e._self._c;return o("echartsInit",{attrs:{chartOption:e.chartOption}})},c=[],h=n(l,i,c,!1,null,null,null,null);const u=h.exports;export{u as default};