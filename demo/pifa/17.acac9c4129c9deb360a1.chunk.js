webpackJsonp([17],{267:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{self:this,datagrid:{data:[],head:[{title:"名称",key:"name"},{title:"状态",key:"status",render:function(t){return 1==t.status?"显示":"隐藏"}},{title:"操作",key:"opt",render:function(t){return'<i-button v-show="row.status == 1" type="error" szie="small" @click="optRow(row)">关闭</i-button>\n\t\t\t\t\t\t<i-button v-show="row.status == 0" type="primary" szie="small" @click="optRow(row)">开启</i-button>\n\t\t\t\t\t\t<i-button v-show="row.status == 1" type="error" szie="small" @click="addRow(row)">编辑</i-button>'}}]},model:{isOpen:!1,title:""},formItem:{name:"",id:"",status:!0},pagination:{page:0,pageCount:0,pageSize:0,rowCount:0},formRules:{name:[{required:!0,trigger:"blur",message:"请输入单位名称！"}]}}},created:function(){this.getOrder()},methods:{getOrder:function(t){var e=this,a="/home/unit/index";t&&(a+="?page="+t),this.fetch(a).then(function(t){1==t.data.code&&t.data.data&&(e.datagrid.data=t.data.data.data,e.pagination=t.data.data.pagination)})},addRow:function(t){this.model.isOpen=!0,t?(this.model.title="修改单位",this.formItem={name:t.name,id:t.id,status:1==t.status}):(this.model.title="新增单位",this.formItem={name:"",id:"",status:!0})},optRow:function(t){var e=this;t.status=0==t.status?1:0;var a={};a.name=t.name,a.status=t.status,a.id=t.id,this.fetch("/home/unit/add",a).then(function(t){1==t.data.code&&e.getOrder()})},ok:function(){var t=this,e={};e.name=this.formItem.name,e.status=this.formItem.status?1:0,this.formItem.id&&(e.id=this.formItem.id),this.fetch("/home/unit/add",e).then(function(e){1==e.data.code&&(t.getOrder(),t.formItem={name:"",id:"",status:!0})})}}}},542:function(t,e){},584:function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Row",[a("Col",{attrs:{span:"24"}},[a("Modal",{attrs:{title:t.model.title},on:{"on-ok":t.ok},model:{value:t.model.isOpen,callback:function(e){t.model.isOpen=e},expression:"model.isOpen"}},[a("Form",{attrs:{model:t.formItem,"label-width":100,rules:t.formRules}},[a("Form-item",{attrs:{label:"单位名称：",prop:"name"}},[a("Input",{model:{value:t.formItem.name,callback:function(e){t.formItem.name=e},expression:"formItem.name"}})],1),t._v(" "),a("Form-item",{attrs:{label:"状态"}},[a("i-switch",{model:{value:t.formItem.status,callback:function(e){t.formItem.status=e},expression:"formItem.status"}})],1)],1)],1),t._v(" "),a("Button",{attrs:{type:"primary"},on:{click:t.addRow}},[t._v("新增单位")])],1),t._v(" "),a("Col",{staticStyle:{"margin-top":"20px"},attrs:{span:"24"}},[a("Table",{attrs:{context:t.self,columns:t.datagrid.head,data:t.datagrid.data}})],1),t._v(" "),a("Col",{attrs:{span:"24"}},[a("div",{staticStyle:{"margin-top":"20px",float:"right","margin-right":"20px"}},[a("Page",{attrs:{total:t.pagination.rowCount,current:t.pagination.page,"on-change":"changePage"}})],1)])],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},70:function(t,e,a){a(542);var o=a(6)(a(267),a(584),null,null);o.options.__file="/Users/yaojiasong/YJSON/boke/vue/pingful-pifa-www/src/pages/home/config/unit-set.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__esModule"!==t}),o.options.functional,t.exports=o.exports}});