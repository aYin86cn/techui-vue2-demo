import{n as i,_ as n}from"./index-e5c47b2c.js";const s={name:"SVC",mixins:[],data(){return{reload:!1,adptivePanelConfig:{adaptiveType:"advance",chartCount:11}}},components:{layout:()=>n(()=>import("./layout-bb921130.js"),["assets/layout-bb921130.js","assets/index-e5c47b2c.js","assets/index-ff56af40.css","assets/layout-1c7d6b3c.css"])},computed:{},methods:{},watch:{$route(e,t){},"globalConfig.language"(e){this.reload=!0,this.$nextTick(()=>{this.reload=!1})}},mounted(){const{tipState:e,$notify:t,$timer:o}=this;e&&(o("notify1",()=>{t({title:this.$t("tip.title.common"),message:this.$t("tip.desc.dashboardA1"),duration:0})},3e3),o("notify3",()=>{t({title:this.$t("tip.title.common"),message:this.$t("tip.desc.dashboardA2"),duration:0})},4e3)),this.$tBus.$on("adaptiveConfig",a=>{console.log("ReviceBus",a)})},beforeDestroy(){const{$notify:e,$timer:t}=this;e.closeAll(),t("notify1"),t("notify2"),t("notify3")}};var l=function(){var t=this,o=t._self._c;return t.reload?t._e():o("adaptivePanel",{staticClass:"dashboard1080AG-SA",attrs:{config:t.adptivePanelConfig}},[o("layout")],1)},r=[],d=i(s,l,r,!1,null,null,null,null);const c=d.exports;export{c as default};