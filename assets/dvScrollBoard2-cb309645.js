import{n as a}from"./index-e5c47b2c.js";const o={mixins:[],data(){return{config1:{header:["列1","列2","列3"],data:[['<span style="color:#37a2da;">行1列1</span>',"行1列2","行1列3"],["行2列1",'<span style="color:#32c5e9;">行2列2</span>',"行2列3"],["行3列1","行3列2",'<span style="color:#67e0e3;">行3列3</span>'],["行4列1",'<span style="color:#9fe6b8;">行4列2</span>',"行4列3"],['<span style="color:#ffdb5c;">行5列1</span>',"行5列2","行5列3"],["行6列1",'<span style="color:#ff9f7f;">行6列2</span>',"行6列3"],["行7列1","行7列2",'<span style="color:#fb7293;">行7列3</span>'],["行8列1",'<span style="color:#e062ae;">行8列2</span>',"行8列3"],['<span style="color:#e690d1;">行9列1</span>',"行9列2","行9列3"],["行10列1",'<span style="color:#e7bcf3;">行10列2</span>',"行10列3"]],index:!0,columnWidth:[50],align:["center","left"],headerBGC:$c.bk,oddRowBGC:$c.cbl9,evenRowBGC:$c.cbl8,rowNum:8,indexHeader:"id",waitTime:5e3,headerHeight:50,hoverPause:!1}}},components:{},computed:{},methods:{doUpdate(){this.$refs.scrollBoard.updateRows([['<span style="color:#37a2da;">行1列1</span>',"行1列2","行1列3"],["行2列1",'<span style="color:#32c5e9;">行2列2</span>',"行2列3"],["行3列1","行3列2",'<span style="color:#67e0e3;">行3列3</span>'],["行4列1",'<span style="color:#9fe6b8;">行4列2</span>',"行4列3"],["行1列1","行1列2","行1列3"],["行2列1","行2列2","行2列3"],["行3列1","行3列2","行3列3"],["行4列1","行4列2","行4列3"],["行5列1","行5列2","行5列3"],["行6列1","行6列2","行6列3"],["行7列1","行7列2","行7列3"],["行8列1","行8列2","行8列3"],["行9列1","行9列2","行9列3"],["行10列1","行10列2","行10列3"]],3)}},mounted(){}};var n=function(){var e=this,s=e._self._c;return s("div",{staticClass:"scroll-board"},[s("el-button",{attrs:{size:"mini"},on:{click:e.doUpdate}},[e._v("Update")]),s("dv-scroll-board",{ref:"scrollBoard",staticStyle:{width:"100%",height:"100%"},attrs:{config:e.config1}})],1)},l=[],t=a(o,n,l,!1,null,null,null,null);const d=t.exports;export{d as default};