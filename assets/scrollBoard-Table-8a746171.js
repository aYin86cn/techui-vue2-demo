import{n as h}from"./index-e5c47b2c.js";const i={name:"blockCenter",mixins:[],components:{},data(){return{simData:{name:["徽商银行关于2022年采购项目维保终端技术服务交换机合同","长城汽车诺博汽车系统徐采购项目维保终端技术服务交换机合同","中信银行济南分行4G采购项目维保终端技术服务交换机合同","中国科学院空天信息创采购项目维保终端技术服务交换机合同","中国信息创新研究院采购项目维保终端技术服务交换机合同","上海黄金交易所采购项目维保终端技术服务交换机合同","2022年苏州银行采购项目维保终端技术服务交换机合同","齐齐哈尔移动采购项目维保终端技术服务交换机合同","博时基金2022红帽采购项目维保终端技术服务交换机合同","航信远程监控项目采购项目维保终端技术服务交换机合同","全路通信信号设计院采购项目维保终端技术服务交换机合同","全路通信信号设计院服务器采购项目维保终端技术服务交换机合同"],date:["1 "+this.$t("dashboardE.b1.week"),"1 "+this.$t("dashboardE.b1.month"),"2 "+this.$t("dashboardE.b1.month"),"2 "+this.$t("dashboardE.b1.week"),"3 "+this.$t("dashboardE.b1.day"),"3 "+this.$t("dashboardE.b1.month"),"1 "+this.$t("dashboardE.b1.day"),"1 "+this.$t("dashboardE.b1.week"),"1 "+this.$t("dashboardE.b1.month"),"2 "+this.$t("dashboardE.b1.month"),"2 "+this.$t("dashboardE.b1.week"),"3 "+this.$t("dashboardE.b1.day")],number:[32,68,12,35,78,99,32,68,12,35,78,99],percent:[12,35,78,99,32,68,12,35,78,99,32,68]},option:{reset:!0,header:["项目名称","日期","回款额","回款率"],data:[],index:!1,columnWidth:[300,150,190,150],headerBGC:$c.fade($c.bk,.3),oddRowBGC:$c.fade($c.cyl3,.1),evenRowBGC:"transparent",align:["left","center","center","center"],rowNum:7,waitTime:5e3}}},computed:{},watch:{"$tState.mapData.code"(o,a){this.option.reset=!0,this.option.data=this.option.data.sort(function(e,s){return Math.random()-.5}),this.$timer("resetDataTAble",()=>{this.option.reset=!1},100)}},methods:{processData(){let{name:o,date:a,number:e,percent:s}=this.simData,{header:d}=this.option;d.forEach((n,t)=>{this.option.header[t]=this.$t(`dashboardE.b1.head${t+1}`)}),o.forEach((n,t)=>{let r;s[t]>80?r=[this.$t("dashboardE.b1.item")+"-"+this.randomString(4),a[t],e[t]+this.$t("dashboardE.b1.unit"),'<b class="markRE">'+s[t]+"%</b>"]:s[t]>50?r=[this.$t("dashboardE.b1.item")+"-"+this.randomString(4),a[t],e[t]+this.$t("dashboardE.b1.unit"),'<b class="markOR">'+s[t]+"%</b>"]:s[t]>30?r=[this.$t("dashboardE.b1.item")+"-"+this.randomString(4),a[t],e[t]+this.$t("dashboardE.b1.unit"),'<b class="markYE">'+s[t]+"%</b>"]:s[t]>10?r=[this.$t("dashboardE.b1.item")+"-"+this.randomString(4),a[t],e[t]+this.$t("dashboardE.b1.unit"),'<b class="markCY">'+s[t]+"%</b>"]:r=[this.$t("dashboardE.b1.item")+"-"+this.randomString(4),a[t],e[t]+this.$t("dashboardE.b1.unit"),'<b class="markAQ">'+s[t]+"%</b>"],this.option.data.push(r)}),this.option.reset=!1}},mounted(){this.processData()}};var b=function(){var a=this,e=a._self._c;return a.option.reset?a._e():e("dv-scroll-board",{staticClass:"dashboardE-scrollBoard-table",attrs:{config:a.option}})},l=[],m=h(i,b,l,!1,null,null,null,null);const $=m.exports;export{$ as default};