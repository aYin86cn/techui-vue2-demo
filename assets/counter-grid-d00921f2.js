import{n as r}from"./index-beda625d.js";const e={name:"blockCenter",mixins:[],data(){return{arry:[{title:"人工成本",icon:"i carbon:events-alt",unit:"万元",total:"14276"},{title:"直接材料费",icon:"i carbon:cloud-satellite",unit:"万元",total:"14276"},{title:"折旧及摊销费",icon:"i carbon:network-admin-control",unit:"万元",total:"3135"},{title:"内部结算",icon:"i carbon:delivery-parcel",unit:"万元",total:"769"},{title:"间接费用分摊",icon:"i carbon:concept",unit:"万元",total:"3135"},{title:"其他直接支出",icon:"i carbon:cics-system-group",unit:"万元",total:"769"}],borderConfig:{decoration:!1,opacity:.7}}},computed:{},watch:{"$tState.mapData.name"(o,t){let n=this.randomData({min:0,max:9999,length:4,group:1})[0];this.arry.forEach((a,i)=>{a.total=n[i]})}},methods:{},mounted(){}};var l=function(){var t=this,n=t._self._c;return n("div",{staticClass:"counterGrid6-1080D"},t._l(t.arry,function(a,i){return n("aYinTechBorderB2",{key:i,attrs:{config:t.borderConfig}},[n("div",{staticClass:"inner-content"},[n("div",{staticClass:"block-title"},[t._v(t._s(t.$t(`dashboardD.r3.item${i+1}`))+" "),a.unit?n("span",[t._v("("+t._s(t.$t("dashboardD.r3.unit"))+")")]):t._e()]),n("div",{staticClass:"total"},[n("i",{class:[a.icon,"icon"]}),n("DigitalTransform",{staticClass:"numbers",attrs:{value:a.total,useGrouping:!0,interval:t.globalConfig.animation?3e3:0}})],1)])])}),1)},c=[],s=r(e,l,c,!1,null,null,null,null);const d=s.exports;export{d as default};