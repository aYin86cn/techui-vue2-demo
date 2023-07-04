import{n as u,_ as p}from"./index-e5c47b2c.js";import{t as D}from"./themeChart-df325d8f.js";import{m as d}from"./api-0c0121c1.js";const b={mixins:[D],components:{mapPopover:()=>p(()=>import("./map-popover-6bd075a2.js"),["assets/map-popover-6bd075a2.js","assets/index-e5c47b2c.js","assets/index-ff56af40.css","assets/map-popover-e2ab1a87.css"]),mapViewToggle:()=>p(()=>import("./map-viewToggle-ba4afe02.js"),["assets/map-viewToggle-ba4afe02.js","assets/index-e5c47b2c.js","assets/index-ff56af40.css","assets/map-viewToggle-13399c52.css"])},data(){return{mapInited:!1,view:{data:[{title:"Data A",label:"data1"},{title:"Data B",label:"data2"},{title:"Data C",label:"data3"},{title:"Data D",label:"data4"}],current:"data1"},chartData:{alladcode:[],geoJson:{},visualMapColors:[$c.cyA16,$c.cbA17,$c.blA18],mapData:[],pointData:[],sum:0,nav:{data:[{code:21e4,name:this.$t("map.navRoot")}],show:!1},maxData:500,minData:9,maxPin:45,minPin:20,layoutCenter:[["50%","66%"],["50%","50%"]],layoutSize:["100%","80%"],visualMapPos:{right:"13%",bottom:"8.5%"}},chartOption:{update:!1},clickData:{show:!1,area:"北京",data:"325",x:120,y:120}}},computed:{publicUrl(){return`./static/maps/${this.globalConfig.language}/`},pinColor(){const{view:a}=this;if(a.current=="data1")return[$c.aql2,$c.aql5,$c.bll7];if(a.current=="data2")return[$c.cbl3,$c.cyl5,$c.wh];if(a.current=="data3")return[$c.orl3,$c.rel5,$c.wh];if(a.current=="data4")return[$c.pul3,$c.inl6,$c.wh]},mapCenter(){const{chartData:a}=this,{layoutCenter:t}=a;return a.nav.data[a.nav.data.length-1].name=="全国"?t[0]:t[1]},mapSize(){const{chartData:a}=this,{layoutSize:t}=a;return a.nav.data[a.nav.data.length-1].name=="全国"?t[0]:t[1]}},watch:{},methods:{changeView(a){let t=this.chartData.nav.data;this.view.current=a.label,this.clickData.show=!1,this.getMapData(t[t.length-1])},processMapData(a){const{getColor:t,chartData:r,chartOption:n,processTimeLine:c}=this,{mapData:s,pointData:e,sum:l,navDept:m,maxData:o,minData:_,maxPin:C,minPin:w}=r;let h=[];h.push({type:"bar3D",coordinateSystem:"geo3D",tooltip:{formatter:function(i){return"name:"+i.name+"<br />value:"+i.value[2]}},barSize:5,minHeight:1,zlevel:1,geo3DIndex:0,shading:"lambert",label:{show:!0,position:"top",distance:0,color:t("staFCS"),borderRadius:3,fontSize:14,lineHeight:20,backgroundColor:$c.fade("bk",.6),padding:3,formatter:i=>{switch(i.name){case"内蒙古自治区":i.name="内蒙古";break;case"西藏自治区":i.name="西藏";break;case"新疆维吾尔自治区":i.name="新疆";break;case"宁夏回族自治区":i.name="宁夏";break;case"广西壮族自治区":i.name="广西";break;case"香港特别行政区":i.name="香港";break;case"澳门特别行政区":i.name="澳门";break}return i.name}},emphasis:{label:{formatter:i=>i.data.value[2]}},itemStyle:{color:this.pinColor[1]},data:e}),n.series=h,this.mapInited=!0},processOption(a){if(!a){let o=this.chartData.nav.data;a=o[o.length-1]}const{mapCenter:t,mapSize:r,chartData:n,chartOption:c,processMapData:s,getColor:e}=this,{visualMapPos:l}=n;let m={title:{show:!1,text:a.name,left:"center"},tooltip:{show:!0},geo3D:{map:a.name,roam:!1,boxHeight:15,boxWidth:200,bottom:0,regionHeight:4,regions:[{name:"山西省",height:5,itemStyle:{color:"red"}}],itemStyle:{color:e("mapBGA"),borderColor:e("mapBGB"),opacity:1,borderWidth:.4,shadowColor:e("mapSD")},instancing:!0,viewControl:{autoRotateAfterStill:13,minBeta:-180,maxBeta:180,center:[0,-50,-20],beta:5,alpha:50,distance:260,rotateMouseButton:"left",panMouseButton:"right",panSensitivity:1,animationDurationUpdate:1e3,animationEasingUpdate:"cubicInOut"},emphasis:{disabled:!1,label:{show:!1,color:e("staFCWr"),fontSize:16},itemStyle:{color:e("mapBGHA")}},label:{show:!1,position:"top",color:e("actFCS"),fontSize:14,distance:10,zlevel:0,formatter:o=>{switch(o.name){case"内蒙古自治区":o.name="内蒙古";break;case"西藏自治区":o.name="西藏";break;case"新疆维吾尔自治区":o.name="新疆";break;case"宁夏回族自治区":o.name="宁夏";break;case"广西壮族自治区":o.name="广西";break;case"香港特别行政区":o.name="香港";break;case"澳门特别行政区":o.name="澳门";break}return`
`+o.name}},light:{main:{intensity:.8,shadow:!0,alpha:120,beta:80},ambient:{intensity:.6}}},series:[]};m.visualMap={type:"continuous",right:l.right,bottom:l.bottom,min:0,max:n.maxData,seriesIndex:0,orient:"horizontal",inRange:{color:n.visualMapColors},textStyle:{color:e("staFC")},calculable:!0};for(let o in m)c[o]=m[o];c.update=!0,s(a)},getMapData(a){const{chartData:t,processOption:r}=this;let n=[],c=[],s=0;t.geoJson.features.forEach(e=>{if(e.properties.name){let l=(Math.random()*500).toFixed(0);n.push({name:e.properties.name,value:l,cityCode:parseInt(e.properties.adcode)}),e.properties.center&&c.push({name:e.properties.name,value:[e.properties.center[0],e.properties.center[1],l],cityCode:parseInt(e.properties.adcode)}),s+=l}}),t.mapData=n,t.pointData=c,t.sum=s,r(a)},async initChart(a){const{chartData:t,getMapData:r}=this;t.alladcode.length==0&&await d(this.publicUrl,"all.json").then(n=>{t.alladcode=n}).catch(function(n){console.error("getmap",n)}),await d(this.publicUrl,a.code+"_geojson_full.json").then(n=>{t.geoJson={...n,...a}}).catch(function(n){console.error("getmap",n)}),r(a)},mapOver(a){console.log("mapOver",a)},mapAction(a){const{clickData:t}=this;t.show=!1},mapClick(a){var e;const{clickData:t}=this,{alladcode:r,initChart:n,nav:c}=this.chartData,s=c.data;if(t.show=!1,s[s.length-1].name!=a.name)if(a.componentType=="geo"||a.componentType=="series"&&a.componentSubType=="map"){let l=(e=r.filter(o=>o.name===a.name)[0])==null?void 0:e.adcode,m={code:l,name:a.name};s[s.length-1].name!=a.name&&s.length<2&&(this.initChart(m),s.push({code:l,name:a.name}))}else a.code&&this.initChart(a);a.componentType=="series"&&a.componentSubType=="scatter"&&(t.area=a.name,t.data=a.data.value[2],t.x=a.domPosition[0],t.y=a.domPosition[1],t.show=!0)},chartTheme(){this.themePalette.chart.visual,this.chartData.visualMapColors=this.getPalette({total:5,actual:3,palette:[$c.aql5,$c.yel3,$c.rel5]})}},mounted(){const{chartData:a}=this;this.initChart(a.nav.data[0])},beforeDestroy(){},destroyed(){}};var f=function(){var t=this,r=t._self._c;return r("div",{staticClass:"map-wrap map3D-simple"},[r("mapPopover",{attrs:{clickData:t.clickData}}),r("mapViewToggle",{attrs:{view:t.view},on:{changeView:t.changeView}}),t.mapInited?r("echartsMap",{staticClass:"echartsMap",attrs:{chartOption:t.chartOption,chartData:t.chartData},on:{mapClick:t.mapClick,mapOver:t.mapOver,mapAction:t.mapAction}}):t._e()],1)},g=[],v=u(b,f,g,!1,null,null,null,null);const $=v.exports;export{$ as default};