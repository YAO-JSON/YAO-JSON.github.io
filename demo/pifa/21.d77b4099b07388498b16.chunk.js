webpackJsonp([21],{262:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{logoId:"",imgUrl:"",self:this,dataGridHeader:[{title:"广告名称",key:"name"},{title:"分类",key:"position_type",render:function(t){return 1==t.position_type?"幻灯片":"快捷图标"}},{title:"图片",key:"file",render:function(t,e,a){return"<img v-lazy='getFile(row.file)' style=\"height:40px\"/>"}},{title:"链接",key:"url"},{title:"排序",key:"rank"},{title:"状态",key:"status",render:function(t,e,a){return 0==t.status?"关闭":"开启"}},{title:"创建时间",key:"created_at"},{title:"操作",key:"operation",align:"center",width:150,render:function(t){return'<i-button type="primary" size="small" style="margin-right:5px" v-show="row.status == 0" @click=\'openOrCloseAdver(row)\'>开启</i-button>\n\t\t\t\t\t\t\t<i-button type="error" size="small" style="margin-right:5px" v-show="row.status == 1" @click="openOrCloseAdver(row)">关闭</i-button>\n\t\t\t\t\t\t\t<i-button type="primary" size="small" @click="alterAdver(row)">修改</i-button>'}}],dataGridData:[]}},created:function(){this.getAdverListData()},methods:{getAdverListData:function(){var t=this;this.fetch("home/ads/index").then(function(e){1==e.data.code&&e.data.data&&(t.dataGridData=e.data.data)})},addAdver:function(){this.$router.push("/home/adver/addAdver")},openOrCloseAdver:function(t){t.status=0==t.status?1:0,this.dataGridData[t._index].status=t.status,this.fetch("/home/ads/set_status?id="+t.id+"&status="+t.status)},alterAdver:function(t){this.$router.push({path:"/home/adver/addAdver",query:{id:t.id}})}}}},545:function(t,e){},589:function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Row",{staticStyle:{background:"#f8f8f8",padding:"10px 20px","margin-bottom":"10px"}},[a("Col",{attrs:{span:"24"}},[a("Button",{attrs:{type:"primary"},on:{click:t.addAdver}},[t._v("新增广告")])],1)],1),t._v(" "),a("Row",[a("Col",{attrs:{span:"24"}},[a("Table",{attrs:{context:t.self,columns:t.dataGridHeader,data:t.dataGridData,"highlight-row":""}})],1),t._v(" "),a("Col",{attrs:{span:"24"}})],1)],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},66:function(t,e,a){a(545);var r=a(6)(a(262),a(589),"data-v-62ba25e6",null);r.options.__file="/Users/yaojiasong/YJSON/boke/vue/pingful-pifa-www/src/pages/home/adver/list.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__esModule"!==t}),r.options.functional,t.exports=r.exports}});