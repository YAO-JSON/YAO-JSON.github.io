webpackJsonp([16],{270:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{self:this,datagrid:{data:[],head:[{title:"类型",key:"type",render:function(t){switch(t.type){case 1:return"取消订单";case 2:return"退款";case 3:return"售后"}}},{title:"备注",key:"name"},{title:"状态",key:"status",render:function(t){return 0==t.status?"关闭":"开启"}},{title:"操作",key:"opt",render:function(t){return'<i-button size="small" v-show="row.status == 1" type="error" @click="optStatus(row)">关闭</i-button>\n\t\t\t\t\t\t\t<i-button size="small" @click="optStatus(row)" v-show="row.status == 0" type="primary">开启</i-button>\n\t\t\t\t\t\t\t<i-button size="small" size="small" type="primary" @click="openModel(\'edit\',row)">编辑</i-button>'}}]},pagination:{},formItem:{type:"",status:!0,name:""},ordertype:[{value:"1",label:"取消订单"},{value:"2",label:"退款"},{value:"3",label:"售后"}],formRul:[],model:{title:"编辑",isOpen:!1}}},created:function(){this.getOrder()},methods:{getOrder:function(t){var e=this,a="/home/back/index";t&&(a+="?page="+t),this.fetch(a).then(function(t){1==t.data.code&&t.data.data&&(e.datagrid.data=t.data.data.data,e.pagination=t.data.data.pagination)})},changePage:function(t){this.getOrder(t)},optStatus:function(t){var e=this,a=1==t.status?0:1;this.datagrid.data[t._index].status=a,this.fetch("/home/back/add_back",{id:t.id,status:a}).then(function(t){1==t.data.code&&e.$Message.success("修改成功！")})},openModel:function(t,e){this.model.isOpen=!0,"add"==t?(this.model.title="新增售后订单类型",this.formItem={type:"",status:!0,name:""}):(this.model.title="修改售后订单类型",this.formItem={type:e.type+"",status:1==e.status,name:e.name,id:e.id})},ok:function(){var t=this,e={};e.name=this.formItem.name,e.status=!!this.formItem.status,e.type=this.formItem.type,this.formItem.id&&(e.id=this.formItem.id),this.fetch("/home/back/add_back",e).then(function(e){1==e.data.code&&(t.getOrder(),t.formItem={type:1,status:!0,name:""})})},cancel:function(){}}}},540:function(t,e){},577:function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Row",[a("Col",[a("Modal",{attrs:{title:t.model.title},on:{"on-ok":t.ok,"on-cancel":t.cancel},model:{value:t.model.isOpen,callback:function(e){t.model.isOpen=e},expression:"model.isOpen"}},[a("Form",{ref:"formInline",attrs:{model:t.formItem,ruls:t.formRul,"label-width":100}},[a("Form-item",{attrs:{label:"售后类型："}},[a("Select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择售后类型！"},model:{value:t.formItem.type,callback:function(e){t.formItem.type=e},expression:"formItem.type"}},t._l(t.ordertype,function(e,o){return a("Option",{key:o,attrs:{value:e.value}},[t._v(t._s(e.label))])}))],1),t._v(" "),a("Form-item",{attrs:{label:"备注："}},[a("Input",{attrs:{type:"textarea"},model:{value:t.formItem.name,callback:function(e){t.formItem.name=e},expression:"formItem.name"}})],1),t._v(" "),a("Form-item",{attrs:{label:"状态："}},[a("i-switch",{model:{value:t.formItem.status,callback:function(e){t.formItem.status=e},expression:"formItem.status"}})],1)],1)],1)],1),t._v(" "),a("Col",{staticStyle:{background:"#f8f8f8",padding:"10px 20px","margin-bottom":"10px"}},[a("Button",{attrs:{type:"primary"},on:{click:function(e){t.openModel("add")}}},[t._v("新增售后类型")])],1),t._v(" "),a("Col",{staticStyle:{"margin-top":"20px"}},[a("Table",{attrs:{context:t.self,data:t.datagrid.data,columns:t.datagrid.head}})],1),t._v(" "),a("Col",[a("div",{staticStyle:{"margin-top":"20px",float:"right","margin-right":"20px"}},[a("Page",{attrs:{total:t.pagination.rowCount,current:t.pagination.page,"on-change":"changePage"}})],1)])],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},74:function(t,e,a){a(540);var o=a(6)(a(270),a(577),null,null);o.options.__file="/Users/yaojiasong/YJSON/boke/vue/pingful-pifa-www/src/pages/home/order/after-sales-type.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__esModule"!==t}),o.options.functional,t.exports=o.exports}});