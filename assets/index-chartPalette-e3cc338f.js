import{n,_ as i}from"./index-beda625d.js";const o={name:"SVC",mixins:[],data(){return{adptivePanelConfig:{adaptiveType:"advance",backgroundFillAll:!0,loading:!0}}},components:{chartPalette:()=>i(()=>import("./chartPalette-d7027622.js"),["assets/chartPalette-d7027622.js","assets/themeChart-df325d8f.js","assets/index-beda625d.js","assets/index-c2c9ef50.css"])},computed:{},methods:{},watch:{},mounted(){const{tipState:a,$notify:t,$timer:e}=this;e("pumpStationLoading",()=>{this.adptivePanelConfig.loading=!1},1e3),a&&e("notify1",()=>{t({title:this.$t("tip.title.common"),message:this.$t("tip.desc.chartPalette"),duration:0})},5e3)},beforeDestroy(){const{$notify:a,$timer:t}=this;a.closeAll(),t("notify1")}};var l=function(){var t=this,e=t._self._c;return e("adaptivePanel",{staticClass:"dashboard1080A-SA",attrs:{config:t.adptivePanelConfig}},[e("chartPalette")],1)},s=[],r=n(o,l,s,!1,null,null,null,null);const d=r.exports;export{d as default};