define({ "api": [
  {
    "type": "get",
    "url": "/api/config/payment/index",
    "title": "支付方式",
    "description": "<p>支付方式</p>",
    "group": "api_config",
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/api/config/payment/index"
      }
    ],
    "filename": "app/controller/api/config/payment.controller.js",
    "groupTitle": "api_config",
    "name": "GetApiConfigPaymentIndex"
  },
  {
    "type": "GET",
    "url": "/api/user/index",
    "title": "用户信息",
    "description": "<p>用户信息</p>",
    "group": "api_user_index",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户登录授权token.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/api/user/index"
      }
    ],
    "filename": "app/controller/api/user/index.controller.js",
    "groupTitle": "api_user_index",
    "name": "GetApiUserIndex"
  },
  {
    "type": "get",
    "url": "/home/location/city/index",
    "title": "城市列表",
    "description": "<p>城市列表</p>",
    "group": "home_location",
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/location/city/index"
      }
    ],
    "filename": "app/controller/home/location/city.controller.js",
    "groupTitle": "home_location",
    "name": "GetHomeLocationCityIndex"
  },
  {
    "type": "get",
    "url": "/home/location/country/index",
    "title": "国家列表",
    "description": "<p>国家列表</p>",
    "group": "home_location",
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/location/country/index"
      }
    ],
    "filename": "app/controller/home/location/country.controller.js",
    "groupTitle": "home_location",
    "name": "GetHomeLocationCountryIndex"
  },
  {
    "type": "get",
    "url": "/home/location/district/index",
    "title": "地区列表",
    "description": "<p>地区列表</p>",
    "group": "home_location",
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/location/district/index"
      }
    ],
    "filename": "app/controller/home/location/district.controller.js",
    "groupTitle": "home_location",
    "name": "GetHomeLocationDistrictIndex"
  },
  {
    "type": "get",
    "url": "/home/location/province/index",
    "title": "省份列表",
    "description": "<p>省份列表</p>",
    "group": "home_location",
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/location/province/index"
      }
    ],
    "filename": "app/controller/home/location/province.controller.js",
    "groupTitle": "home_location",
    "name": "GetHomeLocationProvinceIndex"
  },
  {
    "type": "post",
    "url": "/home/location/city/update",
    "title": "城市状态修改",
    "description": "<p>城市状态修改</p>",
    "group": "home_location",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>城市id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>城市状态</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/location/city/update"
      }
    ],
    "filename": "app/controller/home/location/city.controller.js",
    "groupTitle": "home_location",
    "name": "PostHomeLocationCityUpdate"
  },
  {
    "type": "post",
    "url": "/home/location/country/add",
    "title": "新增国家",
    "description": "<p>新增国家</p>",
    "group": "home_location",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>国家名称</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/location/country/add"
      }
    ],
    "filename": "app/controller/home/location/country.controller.js",
    "groupTitle": "home_location",
    "name": "PostHomeLocationCountryAdd"
  },
  {
    "type": "post",
    "url": "/home/location/country/update",
    "title": "国家状态修改",
    "description": "<p>国家状态修改</p>",
    "group": "home_location",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>国家id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>城市状态</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/location/country/update"
      }
    ],
    "filename": "app/controller/home/location/country.controller.js",
    "groupTitle": "home_location",
    "name": "PostHomeLocationCountryUpdate"
  },
  {
    "type": "post",
    "url": "/home/location/district/add",
    "title": "新增地区",
    "description": "<p>新增地区</p>",
    "group": "home_location",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "obj",
            "optional": false,
            "field": "data",
            "description": "<p>数据格式如下[{&quot;name&quot;:&quot;二七区&quot;,pid:12,type:3,status:1,orbit:0-1-4},{&quot;name&quot;:&quot;金水区&quot;,pid:21,type:3,status:1,orbit:0-2-7}]</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/location/district/add"
      }
    ],
    "filename": "app/controller/home/location/district.controller.js",
    "groupTitle": "home_location",
    "name": "PostHomeLocationDistrictAdd"
  },
  {
    "type": "post",
    "url": "/home/location/district/add",
    "title": "地区状态修改",
    "description": "<p>地区状态修改</p>",
    "group": "home_location",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>地区id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>状态</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/location/district/add"
      }
    ],
    "filename": "app/controller/home/location/district.controller.js",
    "groupTitle": "home_location",
    "name": "PostHomeLocationDistrictAdd"
  },
  {
    "type": "post",
    "url": "/home/location/province/add",
    "title": "添加省份",
    "description": "<p>添加省份</p>",
    "group": "home_location",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "obj",
            "optional": false,
            "field": "data",
            "description": "<p>数据格式如下[{&quot;name&quot;:&quot;郑州&quot;,pid:12,type:2,status:1,orbit:0-1},{&quot;name&quot;:&quot;石家庄&quot;,pid:11,type:2,status:1,orbit:0-2}]</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/location/province/add"
      }
    ],
    "filename": "app/controller/home/location/city.controller.js",
    "groupTitle": "home_location",
    "name": "PostHomeLocationProvinceAdd"
  },
  {
    "type": "post",
    "url": "/home/location/province/add",
    "title": "添加省份",
    "description": "<p>添加省份</p>",
    "group": "home_location",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "obj",
            "optional": false,
            "field": "data",
            "description": "<p>数据格式如下[{&quot;name&quot;:&quot;河南&quot;,pid:0,type:1,status:1,index:0},{&quot;name&quot;:&quot;河北&quot;,pid:0,type:1,status:1,index:1}]</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/location/province/add"
      }
    ],
    "filename": "app/controller/home/location/province.controller.js",
    "groupTitle": "home_location",
    "name": "PostHomeLocationProvinceAdd"
  },
  {
    "type": "post",
    "url": "/home/location/province/update",
    "title": "省份状态修改",
    "description": "<p>省份状态修改</p>",
    "group": "home_location",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>省份id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>状态</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/location/province/update"
      }
    ],
    "filename": "app/controller/home/location/province.controller.js",
    "groupTitle": "home_location",
    "name": "PostHomeLocationProvinceUpdate"
  },
  {
    "type": "get",
    "url": "/waimai/home/analysis/index",
    "title": "数据统计",
    "group": "waimai",
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/waimai/home/analysis/index"
      }
    ],
    "filename": "app/controller/home/analysis.controller.js",
    "groupTitle": "waimai",
    "name": "GetWaimaiHomeAnalysisIndex"
  },
  {
    "type": "get",
    "url": "/waimai/home/coupon/index/change",
    "title": "使状态失效",
    "group": "waimai_coupon",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>活动状态,1为正常,0关闭活动</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>优惠券活动id</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/waimai/home/coupon/index/change"
      }
    ],
    "filename": "app/controller/home/coupon/index.controller.js",
    "groupTitle": "waimai_coupon",
    "name": "GetWaimaiHomeCouponIndexChange"
  },
  {
    "type": "get",
    "url": "/waimai/home/coupon/index/list",
    "title": "优惠卷列表",
    "group": "waimai_coupon",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>优惠券活动id</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/waimai/home/coupon/index/list"
      }
    ],
    "filename": "app/controller/home/coupon/index.controller.js",
    "groupTitle": "waimai_coupon",
    "name": "GetWaimaiHomeCouponIndexList"
  },
  {
    "type": "get",
    "url": "/waimai/home/coupon/index/search_coupon",
    "title": "收索优惠券",
    "group": "waimai_coupon",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "text",
            "optional": false,
            "field": "keyword",
            "description": "<p>优惠券名称关键字</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>活动状态,1正常,0关闭,不传时为搜索所有状态</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/waimai/home/coupon/index/search_coupon"
      }
    ],
    "filename": "app/controller/home/coupon/index.controller.js",
    "groupTitle": "waimai_coupon",
    "name": "GetWaimaiHomeCouponIndexSearch_coupon"
  },
  {
    "type": "get",
    "url": "/home/delivery/delivery/del",
    "title": "订单减免",
    "group": "waimai_delivery",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>订单金额</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/waimai/home/delivery/delivery/del"
      }
    ],
    "filename": "app/controller/home/delivery/delivery.controller.js",
    "groupTitle": "waimai_delivery",
    "name": "GetHomeDeliveryDeliveryDel"
  },
  {
    "type": "get",
    "url": "/home/delivery/delivery/del_row",
    "title": "订单满减规则",
    "group": "waimai_delivery",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>订单金额</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/waimai/home/delivery/delivery/del_row"
      }
    ],
    "filename": "app/controller/home/delivery/delivery.controller.js",
    "groupTitle": "waimai_delivery",
    "name": "GetHomeDeliveryDeliveryDel_row"
  },
  {
    "type": "get",
    "url": "/home/delivery/delivery/index",
    "title": "订单减免",
    "group": "waimai_delivery",
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/delivery/delivery/index"
      }
    ],
    "filename": "app/controller/home/delivery/delivery.controller.js",
    "groupTitle": "waimai_delivery",
    "name": "GetHomeDeliveryDeliveryIndex"
  },
  {
    "type": "post",
    "url": "/home/delivery/delivery/add",
    "title": "订单减免增加与更新",
    "group": "waimai_delivery",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "obj",
            "optional": false,
            "field": "data",
            "description": "<p>[{order_price:xx,discount_price:xx,id:xx,is_fee:xx,delivery_id:xx},{order_price:xx,discount_price:xx,id:xx,is_fee:xx,delivery_id:xx}]   减免金额 order_price为订单金额 ，discount_price为减少金额，is_fee:0为不免单1为免单</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>减免活动的id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>1为开启活动，0为关闭活动</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/waimai/home/delivery/delivery/add"
      }
    ],
    "filename": "app/controller/home/delivery/delivery.controller.js",
    "groupTitle": "waimai_delivery",
    "name": "PostHomeDeliveryDeliveryAdd"
  },
  {
    "type": "get",
    "url": "/api/index/notfiy",
    "title": "内容管理支付完成",
    "description": "<p>客户登录授权</p>",
    "group": "wappointment_api",
    "version": "0.0.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "order_id",
            "description": "<p>预约订单ID</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/api/index/notfiy"
      }
    ],
    "filename": "app/controller/api/public.controller.js",
    "groupTitle": "wappointment_api",
    "name": "GetApiIndexNotfiy"
  },
  {
    "type": "get",
    "url": "/home/kuaidi/queryLogistics",
    "title": "快递查询",
    "description": "<p>客户登录授权</p>",
    "group": "wappointment_api",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "text",
            "optional": false,
            "field": "com",
            "description": "<p>物流公司编号</p>"
          },
          {
            "group": "Parameter",
            "type": "text",
            "optional": false,
            "field": "nu",
            "description": "<p>物流单号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/kuaidi/queryLogistics"
      }
    ],
    "filename": "app/controller/home/kuaidi.controller.js",
    "groupTitle": "wappointment_api",
    "name": "GetHomeKuaidiQuerylogistics"
  },
  {
    "type": "get",
    "url": "/ads/ads/index",
    "title": "首页_广告列表(position_type 1.幻灯片 2.菜单快捷图标);",
    "group": "whole_api",
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/ads/ads/index"
      }
    ],
    "filename": "app/controller/api/ads/ads.controller.js",
    "groupTitle": "whole_api",
    "name": "GetAdsAdsIndex"
  },
  {
    "type": "get",
    "url": "/api/config/shop/delivery",
    "title": "满减活动",
    "description": "<p>满减活动</p>",
    "group": "whole_api",
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/api/config/shop/delivery"
      }
    ],
    "filename": "app/controller/api/config/shop.controller.js",
    "groupTitle": "whole_api",
    "name": "GetApiConfigShopDelivery"
  },
  {
    "type": "get",
    "url": "/api/config/shop/get_payment",
    "title": "获取支付方式",
    "description": "<p>支付方式;</p>",
    "group": "whole_api",
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/api/config/shop/get_payment"
      }
    ],
    "filename": "app/controller/api/config/shop.controller.js",
    "groupTitle": "whole_api",
    "name": "GetApiConfigShopGet_payment"
  },
  {
    "type": "get",
    "url": "/api/config/shop/index",
    "title": "关于我们",
    "description": "<p>关于我们</p>",
    "group": "whole_api",
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/api/config/shop/index"
      }
    ],
    "filename": "app/controller/api/config/shop.controller.js",
    "groupTitle": "whole_api",
    "name": "GetApiConfigShopIndex"
  },
  {
    "type": "get",
    "url": "/api/coupon/index/couponChange",
    "title": "兑换优惠券",
    "description": "<p>兑换优惠券</p>",
    "group": "whole_api",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户登录授权token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "menu_id",
            "description": "<p>代金券菜单id.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/api/coupon/index/couponChange"
      }
    ],
    "filename": "app/controller/api/coupon/index.controller.js",
    "groupTitle": "whole_api",
    "name": "GetApiCouponIndexCouponchange"
  },
  {
    "type": "get",
    "url": "/api/coupon/index/couponList",
    "title": "可用优惠券列表   status有3种状态:1为开启,0为关闭,-1为失效",
    "description": "<p>可用优惠券列表</p>",
    "group": "whole_api",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户登录授权token.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/api/coupon/index/couponList"
      }
    ],
    "filename": "app/controller/api/coupon/index.controller.js",
    "groupTitle": "whole_api",
    "name": "GetApiCouponIndexCouponlist"
  },
  {
    "type": "get",
    "url": "/api/coupon/index/myCoupon",
    "title": "我的优惠券列表",
    "description": "<p>我的优惠券列表</p>",
    "group": "whole_api",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户登录授权token.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/api/coupon/index/myCoupon"
      }
    ],
    "filename": "app/controller/api/coupon/index.controller.js",
    "groupTitle": "whole_api",
    "name": "GetApiCouponIndexMycoupon"
  },
  {
    "type": "GET",
    "url": "/api/location/index/area",
    "title": "地址三级联动_区",
    "description": "<p>地址列表</p>",
    "group": "whole_api",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "region_id",
            "description": "<p>原始数据id</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/api/location/index/area"
      }
    ],
    "filename": "app/controller/api/location/index.controller.js",
    "groupTitle": "whole_api",
    "name": "GetApiLocationIndexArea"
  },
  {
    "type": "GET",
    "url": "/api/location/index/province",
    "title": "地址三级联动_省",
    "description": "<p>地址列表</p>",
    "group": "whole_api",
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/api/location/index/province"
      }
    ],
    "filename": "app/controller/api/location/index.controller.js",
    "groupTitle": "whole_api",
    "name": "GetApiLocationIndexProvince"
  },
  {
    "type": "get",
    "url": "/api/shop/order/index/detail",
    "title": "获取订单详情",
    "description": "<p>获取订单详情</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>订单id</p>"
          }
        ]
      }
    },
    "group": "whole_api",
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/api/shop/order/index/detail"
      }
    ],
    "filename": "app/controller/api/shop/order/index.controller.js",
    "groupTitle": "whole_api",
    "name": "GetApiShopOrderIndexDetail"
  },
  {
    "type": "get",
    "url": "/api/shop/order/index/entry_apply",
    "title": "取消订单/退款/售后 申请提交进入时",
    "description": "<p>取消订单(1审核通过，-1审核拒绝，2取消订单申请审核中，3.退款申请审核中，4售后申请审核中)</p>",
    "group": "whole_api",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户登录授权token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "check",
            "description": "<p>订单申请状态状态</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/api/shop/order/index/entry_apply"
      }
    ],
    "filename": "app/controller/api/shop/order/index.controller.js",
    "groupTitle": "whole_api",
    "name": "GetApiShopOrderIndexEntry_apply"
  },
  {
    "type": "get",
    "url": "/api/shop/order/index/index",
    "title": "获取全部订单列表",
    "description": "<p>获取订单列表</p>",
    "group": "whole_api",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户登录授权token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>订单状态</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pay_status",
            "description": "<p>支付状态id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/api/shop/order/index/index"
      }
    ],
    "filename": "app/controller/api/shop/order/index.controller.js",
    "groupTitle": "whole_api",
    "name": "GetApiShopOrderIndexIndex"
  },
  {
    "type": "get",
    "url": "/api/shop/product/category/index",
    "title": "菜单分类(为三级分类)",
    "description": "<p>商品分类</p>",
    "group": "whole_api",
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/api/shop/product/category/index"
      }
    ],
    "filename": "app/controller/api/shop/product/category.controller.js",
    "groupTitle": "whole_api",
    "name": "GetApiShopProductCategoryIndex"
  },
  {
    "type": "get",
    "url": "/api/shop/product/collect/add",
    "title": "收藏与取消收藏",
    "description": "<p>收藏列表</p>",
    "group": "whole_api",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>0取消收藏1为收藏商品</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "product_id",
            "description": "<p>商品的收藏id</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/api/shop/product/collect/add"
      }
    ],
    "filename": "app/controller/api/shop/product/collect.controller.js",
    "groupTitle": "whole_api",
    "name": "GetApiShopProductCollectAdd"
  },
  {
    "type": "get",
    "url": "/api/shop/product/collect/list",
    "title": "收藏列表",
    "description": "<p>收藏列表</p>",
    "group": "whole_api",
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/api/shop/product/collect/list"
      }
    ],
    "filename": "app/controller/api/shop/product/collect.controller.js",
    "groupTitle": "whole_api",
    "name": "GetApiShopProductCollectList"
  },
  {
    "type": "get",
    "url": "/api/shop/product/comment/index",
    "title": "评论列表",
    "description": "<p>评论列表</p>",
    "group": "whole_api",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>商品ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/api/shop/product/comment/index"
      }
    ],
    "filename": "app/controller/api/shop/product/comment.controller.js",
    "groupTitle": "whole_api",
    "name": "GetApiShopProductCommentIndex"
  },
  {
    "type": "get",
    "url": "/api/shop/product/index/detail",
    "title": "商品详情",
    "description": "<p>商品详情</p>",
    "group": "whole_api",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>商品ID</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/api/shop/product/index/detail"
      }
    ],
    "filename": "app/controller/api/shop/product/index.controller.js",
    "groupTitle": "whole_api",
    "name": "GetApiShopProductIndexDetail"
  },
  {
    "type": "get",
    "url": "/api/shop/product/index/fee_address",
    "title": "运费模板地址",
    "description": "<p>运费模板地址</p>",
    "group": "whole_api",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "fee_id",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/api/shop/product/index/fee_address"
      }
    ],
    "filename": "app/controller/api/shop/product/index.controller.js",
    "groupTitle": "whole_api",
    "name": "GetApiShopProductIndexFee_address"
  },
  {
    "type": "get",
    "url": "/api/shop/product/index/index",
    "title": "商品列表",
    "description": "<p>商品列表</p>",
    "group": "whole_api",
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/api/shop/product/index/index"
      }
    ],
    "filename": "app/controller/api/shop/product/index.controller.js",
    "groupTitle": "whole_api",
    "name": "GetApiShopProductIndexIndex"
  },
  {
    "type": "get",
    "url": "/api/shop/product/index/product_search",
    "title": "商品搜索",
    "description": "<p>商品搜索</p>",
    "group": "whole_api",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Text",
            "optional": false,
            "field": "key",
            "description": "<p>搜索关键字</p>"
          },
          {
            "group": "Parameter",
            "type": "text",
            "optional": false,
            "field": "rank_type",
            "description": "<p>排序类型 rank默认,price:价格,sales:销量</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/api/shop/product/index/product_search"
      }
    ],
    "filename": "app/controller/api/shop/product/index.controller.js",
    "groupTitle": "whole_api",
    "name": "GetApiShopProductIndexProduct_search"
  },
  {
    "type": "get",
    "url": "/api/user/contact/del",
    "title": "删除收货地址",
    "description": "<p>修改默认收货地址</p>",
    "group": "whole_api",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户登录授权token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>默认地址ID</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/api/user/contact/del"
      }
    ],
    "filename": "app/controller/api/user/contact.controller.js",
    "groupTitle": "whole_api",
    "name": "GetApiUserContactDel"
  },
  {
    "type": "GET",
    "url": "/api/user/contact/detail",
    "title": "收货地址详情",
    "description": "<p>收货地址详情</p>",
    "group": "whole_api",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户登录授权token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "contact_id",
            "description": "<p>收货地址id</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/api/user/contact/detail"
      }
    ],
    "filename": "app/controller/api/user/contact.controller.js",
    "groupTitle": "whole_api",
    "name": "GetApiUserContactDetail"
  },
  {
    "type": "GET",
    "url": "/api/user/contact/index",
    "title": "收货人列表",
    "description": "<p>收货人列表</p>",
    "group": "whole_api",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户登录授权token.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/api/user/contact/index"
      }
    ],
    "filename": "app/controller/api/user/contact.controller.js",
    "groupTitle": "whole_api",
    "name": "GetApiUserContactIndex"
  },
  {
    "type": "GET",
    "url": "/api/user/index/order_count",
    "title": "订单计数",
    "description": "<p>订单计数</p>",
    "group": "whole_api",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户登录授权token.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/api/user/index/order_count"
      }
    ],
    "filename": "app/controller/api/user/index.controller.js",
    "groupTitle": "whole_api",
    "name": "GetApiUserIndexOrder_count"
  },
  {
    "type": "post",
    "url": "/api/shop/order/index/add",
    "title": "新增订单",
    "description": "<p>新增订单</p>",
    "group": "whole_api",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>商品ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "cartData",
            "description": "<p>购物车数据 [{id:1,num:2,sku_id:1,sku_name:sku名称,price:price,fee_id,fee_price}]</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "contact_id",
            "description": "<p>地址ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "payment_id",
            "description": "<p>支付方式1为</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "coupon_id",
            "description": "<p>优惠券id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "total_price",
            "description": "<p>计算后的金额</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/api/shop/order/index/add"
      }
    ],
    "filename": "app/controller/api/shop/order/index.controller.js",
    "groupTitle": "whole_api",
    "name": "PostApiShopOrderIndexAdd"
  },
  {
    "type": "post",
    "url": "/api/shop/order/index/apply",
    "title": "取消订单/退款/售后 申请提交",
    "description": "<p>取消订单(1审核通过，-1审核拒绝，2取消订单申请审核中，3.退款申请审核中，4售后申请审核中)</p>",
    "group": "whole_api",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户登录授权token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>订单id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "check",
            "description": "<p>订单状态</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "back_id",
            "description": "<p>勾选理由id</p>"
          },
          {
            "group": "Parameter",
            "type": "text",
            "optional": false,
            "field": "content",
            "description": "<p>内容</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/api/shop/order/index/apply"
      }
    ],
    "filename": "app/controller/api/shop/order/index.controller.js",
    "groupTitle": "whole_api",
    "name": "PostApiShopOrderIndexApply"
  },
  {
    "type": "post",
    "url": "/api/shop/order/index/comment",
    "title": "评价订单",
    "description": "<p>评价订单(status 为2的订单可以进行评价);</p>",
    "group": "whole_api",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户登录授权token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "int",
            "description": "<p>订单id</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/api/shop/order/index/comment"
      }
    ],
    "filename": "app/controller/api/shop/order/index.controller.js",
    "groupTitle": "whole_api",
    "name": "PostApiShopOrderIndexComment"
  },
  {
    "type": "post",
    "url": "/api/shop/order/index/confirmReceipt",
    "title": "确认收货",
    "description": "<p>确认收货(0:待发货，1:已发货，2:已完成，3:已评价,4退款完成，5售后完成, -1:已关闭，-2:退款中\u0010，-3售后中)</p>",
    "group": "whole_api",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户登录授权token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>订单id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>订单状态</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/api/shop/order/index/confirmReceipt"
      }
    ],
    "filename": "app/controller/api/shop/order/index.controller.js",
    "groupTitle": "whole_api",
    "name": "PostApiShopOrderIndexConfirmreceipt"
  },
  {
    "type": "post",
    "url": "/api/shop/product/category/product",
    "title": "分类的商品和商品排序",
    "description": "<p>分类商品</p>",
    "group": "whole_api",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "category_id",
            "description": "<p>菜单id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "text",
            "optional": false,
            "field": "rank_type",
            "description": "<p>排序类型 rank默认,price:价格,sale:销量</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/api/shop/product/category/product"
      }
    ],
    "filename": "app/controller/api/shop/product/category.controller.js",
    "groupTitle": "whole_api",
    "name": "PostApiShopProductCategoryProduct"
  },
  {
    "type": "POST",
    "url": "/api/user/contact/add",
    "title": "添加/修改收货地址",
    "description": "<p>添加/修改收货地址</p>",
    "group": "whole_api",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户登录授权token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>地址id</p>"
          },
          {
            "group": "Parameter",
            "type": "Phone",
            "optional": false,
            "field": "phone",
            "description": "<p>客户手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>收货人姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "province_id",
            "description": "<p>省份region_id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "city_id",
            "description": "<p>城市region_id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "district_id",
            "description": "<p>行政区region_id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>具体地址</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/api/user/contact/add"
      }
    ],
    "filename": "app/controller/api/user/contact.controller.js",
    "groupTitle": "whole_api",
    "name": "PostApiUserContactAdd"
  },
  {
    "type": "get",
    "url": "/home/coupon/index/add",
    "title": "编辑某个优惠券的id",
    "group": "whole_coupon",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>优惠券id</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/coupon/index/add"
      }
    ],
    "filename": "app/controller/home/coupon/index.controller.js",
    "groupTitle": "whole_coupon",
    "name": "GetHomeCouponIndexAdd"
  },
  {
    "type": "get",
    "url": "/home/coupon/index/index",
    "title": "优惠劵活动列列表",
    "group": "whole_coupon",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/coupon/index/index"
      }
    ],
    "filename": "app/controller/home/coupon/index.controller.js",
    "groupTitle": "whole_coupon",
    "name": "GetHomeCouponIndexIndex"
  },
  {
    "type": "post",
    "url": "/home/coupon/index/add",
    "title": "某个优惠劵的编辑与增加",
    "group": "whole_coupon",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>优惠券id</p>"
          },
          {
            "group": "Parameter",
            "type": "text",
            "optional": false,
            "field": "rule",
            "description": "<p>使用限制规则，为0时不限制，为1时开启订单金额限制，满多少可用，为2时，只能原价时使用，即不能与满减同时使用，为1,2时限制均生效</p>"
          },
          {
            "group": "Parameter",
            "type": "text",
            "optional": false,
            "field": "start_time",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "use_price",
            "description": "<p>金额使用门槛</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "get_num",
            "description": "<p>每人限制获取几张优惠券,为0时不限制</p>"
          },
          {
            "group": "Parameter",
            "type": "Text",
            "optional": false,
            "field": "name",
            "description": "<p>优惠券名称</p>"
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "price",
            "description": "<p>金额</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "num",
            "description": "<p>数目</p>"
          },
          {
            "group": "Parameter",
            "type": "text",
            "optional": false,
            "field": "last_time",
            "description": "<p>结束日期</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>状态值为1开启,0关闭</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/coupon/index/add"
      }
    ],
    "filename": "app/controller/home/coupon/index.controller.js",
    "groupTitle": "whole_coupon",
    "name": "PostHomeCouponIndexAdd"
  },
  {
    "type": "get",
    "url": "/home/ads/add",
    "title": "广告的详情",
    "group": "whole_home",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>广告id</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/ads/add"
      }
    ],
    "filename": "app/controller/home/ads.controller.js",
    "groupTitle": "whole_home",
    "name": "GetHomeAdsAdd"
  },
  {
    "type": "get",
    "url": "/home/ads/index",
    "title": "广告列表",
    "group": "whole_home",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/ads/index"
      }
    ],
    "filename": "app/controller/home/ads.controller.js",
    "groupTitle": "whole_home",
    "name": "GetHomeAdsIndex"
  },
  {
    "type": "get",
    "url": "/home/ads/set_status",
    "title": "改变广告状态",
    "group": "whole_home",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>广告id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>状态</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/ads/set_status"
      }
    ],
    "filename": "app/controller/home/ads.controller.js",
    "groupTitle": "whole_home",
    "name": "GetHomeAdsSet_status"
  },
  {
    "type": "get",
    "url": "/home/back/add_back",
    "title": "订单回退类型的详情",
    "group": "whole_home",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/back/add_back"
      }
    ],
    "filename": "app/controller/home/back.controller.js",
    "groupTitle": "whole_home",
    "name": "GetHomeBackAdd_back"
  },
  {
    "type": "get",
    "url": "/home/back/index",
    "title": "订单回退类型",
    "group": "whole_home",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/back/index"
      }
    ],
    "filename": "app/controller/home/back.controller.js",
    "groupTitle": "whole_home",
    "name": "GetHomeBackIndex"
  },
  {
    "type": "get",
    "url": "/home/comment/change_status",
    "title": "改变评论状态",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>评论id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>状态</p>"
          }
        ]
      }
    },
    "group": "whole_home",
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/comment/change_status"
      }
    ],
    "filename": "app/controller/home/comment.controller.js",
    "groupTitle": "whole_home",
    "name": "GetHomeCommentChange_status"
  },
  {
    "type": "get",
    "url": "/home/comment/index",
    "title": "评论列表",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          }
        ]
      }
    },
    "group": "whole_home",
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/comment/index"
      }
    ],
    "filename": "app/controller/home/comment.controller.js",
    "groupTitle": "whole_home",
    "name": "GetHomeCommentIndex"
  },
  {
    "type": "get",
    "url": "/home/fee/add_address",
    "title": "选择模板的适用地址",
    "description": "<p>选择模板的适用地址</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>费用模板id</p>"
          }
        ]
      }
    },
    "group": "whole_home",
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/fee/add_address"
      }
    ],
    "filename": "app/controller/home/fee.controller.js",
    "groupTitle": "whole_home",
    "name": "GetHomeFeeAdd_address"
  },
  {
    "type": "get",
    "url": "/home/fee/fee_add",
    "title": "进入某个费用模板id",
    "description": "<p>进入某个费用模板id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>费用模板id</p>"
          }
        ]
      }
    },
    "group": "whole_home",
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/fee/fee_add"
      }
    ],
    "filename": "app/controller/home/fee.controller.js",
    "groupTitle": "whole_home",
    "name": "GetHomeFeeFee_add"
  },
  {
    "type": "get",
    "url": "/home/fee/index",
    "title": "费用模板列表",
    "description": "<p>费用模板列表</p>",
    "group": "whole_home",
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/fee/index"
      }
    ],
    "filename": "app/controller/home/fee.controller.js",
    "groupTitle": "whole_home",
    "name": "GetHomeFeeIndex"
  },
  {
    "type": "get",
    "url": "/home/file/add",
    "title": "增加图片",
    "description": "<p>增加图片</p>",
    "group": "whole_home",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户登录授权token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "success",
            "description": "<p>增加图片</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/file/add"
      }
    ],
    "filename": "app/controller/home/file.controller.js",
    "groupTitle": "whole_home",
    "name": "GetHomeFileAdd"
  },
  {
    "type": "get",
    "url": "/home/file/editor",
    "title": "增加图片在编辑器中",
    "description": "<p>编辑器中上传图片</p>",
    "group": "whole_home",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户登录授权token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "success",
            "description": "<p>编辑器中上传图片</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/file/editor"
      }
    ],
    "filename": "app/controller/home/file.controller.js",
    "groupTitle": "whole_home",
    "name": "GetHomeFileEditor"
  },
  {
    "type": "get",
    "url": "/home/file/index",
    "title": "获取图片列表",
    "description": "<p>获取图片列表</p>",
    "group": "whole_home",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户登录授权token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "success",
            "description": "<p>图片列表</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/file/index"
      }
    ],
    "filename": "app/controller/home/file.controller.js",
    "groupTitle": "whole_home",
    "name": "GetHomeFileIndex"
  },
  {
    "type": "get",
    "url": "/home/location/location/add",
    "title": "省份点击增加时",
    "description": "<p>省份增加</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>级别 1为省,2为市,3为区</p>"
          },
          {
            "group": "Parameter",
            "type": "text",
            "optional": false,
            "field": "name",
            "description": "<p>市的名字或省的名字</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>父级id</p>"
          }
        ]
      }
    },
    "group": "whole_home",
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/location/location/add"
      }
    ],
    "filename": "app/controller/home/location/location.controller.js",
    "groupTitle": "whole_home",
    "name": "GetHomeLocationLocationAdd"
  },
  {
    "type": "get",
    "url": "/home/location/location/close_location",
    "title": "地址关闭",
    "description": "<p>省份增加</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>父级id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>状态</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "all",
            "description": "<p>1,全关闭</p>"
          }
        ]
      }
    },
    "group": "whole_home",
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/location/location/close_location"
      }
    ],
    "filename": "app/controller/home/location/location.controller.js",
    "groupTitle": "whole_home",
    "name": "GetHomeLocationLocationClose_location"
  },
  {
    "type": "get",
    "url": "/home/location/location/index",
    "title": "地址列表",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>级别 1为省,2为市,3为区</p>"
          },
          {
            "group": "Parameter",
            "type": "Text",
            "optional": false,
            "field": "name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>父级id</p>"
          }
        ]
      }
    },
    "description": "<p>省份列表</p>",
    "group": "whole_home",
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/location/location/index"
      }
    ],
    "filename": "app/controller/home/location/location.controller.js",
    "groupTitle": "whole_home",
    "name": "GetHomeLocationLocationIndex"
  },
  {
    "type": "get",
    "url": "/home/location/location/original_region",
    "title": "原始下级数据",
    "description": "<p>原始下级数据</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id</p>"
          },
          {
            "group": "Parameter",
            "type": "Text",
            "optional": false,
            "field": "name",
            "description": "<p>名称</p>"
          }
        ]
      }
    },
    "group": "whole_home",
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/location/location/original_region"
      }
    ],
    "filename": "app/controller/home/location/location.controller.js",
    "groupTitle": "whole_home",
    "name": "GetHomeLocationLocationOriginal_region"
  },
  {
    "type": "get",
    "url": "/home/location/location/select_region",
    "title": "已添加的下级属性",
    "description": "<p>已添加的下级属性</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id</p>"
          }
        ]
      }
    },
    "group": "whole_home",
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/location/location/select_region"
      }
    ],
    "filename": "app/controller/home/location/location.controller.js",
    "groupTitle": "whole_home",
    "name": "GetHomeLocationLocationSelect_region"
  },
  {
    "type": "get",
    "url": "/home/menu/add",
    "title": "菜单编辑",
    "group": "whole_home",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>菜单id</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/menu/add"
      }
    ],
    "filename": "app/controller/home/menu.controller.js",
    "groupTitle": "whole_home",
    "name": "GetHomeMenuAdd"
  },
  {
    "type": "get",
    "url": "/home/menu/index",
    "title": "菜单列表",
    "group": "whole_home",
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/menu/index"
      }
    ],
    "filename": "app/controller/home/menu.controller.js",
    "groupTitle": "whole_home",
    "name": "GetHomeMenuIndex"
  },
  {
    "type": "get",
    "url": "/home/menu/third_menu",
    "title": "所有三级菜单列表",
    "group": "whole_home",
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/menu/third_menu"
      }
    ],
    "filename": "app/controller/home/menu.controller.js",
    "groupTitle": "whole_home",
    "name": "GetHomeMenuThird_menu"
  },
  {
    "type": "get",
    "url": "/home/order/await_check",
    "title": "待审核的订单",
    "group": "whole_home",
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/order/await_check"
      }
    ],
    "filename": "app/controller/home/order.controller.js",
    "groupTitle": "whole_home",
    "name": "GetHomeOrderAwait_check"
  },
  {
    "type": "get",
    "url": "/home/order/change_status",
    "title": "改变的订单的状态",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>状态</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>订单id</p>"
          }
        ]
      }
    },
    "group": "whole_home",
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/order/change_status"
      }
    ],
    "filename": "app/controller/home/order.controller.js",
    "groupTitle": "whole_home",
    "name": "GetHomeOrderChange_status"
  },
  {
    "type": "get",
    "url": "/home/order/detail",
    "title": "订单祥情",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>订单id</p>"
          }
        ]
      }
    },
    "group": "whole_home",
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/order/detail"
      }
    ],
    "filename": "app/controller/home/order.controller.js",
    "groupTitle": "whole_home",
    "name": "GetHomeOrderDetail"
  },
  {
    "type": "get",
    "url": "/home/order/export",
    "title": "导出",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "ids",
            "description": "<p>选中的订单id,如:1,2,3(不传id则导出全部);</p>"
          }
        ]
      }
    },
    "group": "whole_home",
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/order/export"
      }
    ],
    "filename": "app/controller/home/order.controller.js",
    "groupTitle": "whole_home",
    "name": "GetHomeOrderExport"
  },
  {
    "type": "get",
    "url": "/home/order/index",
    "title": "订单列表",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          }
        ]
      }
    },
    "group": "whole_home",
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/order/index"
      }
    ],
    "filename": "app/controller/home/order.controller.js",
    "groupTitle": "whole_home",
    "name": "GetHomeOrderIndex"
  },
  {
    "type": "get",
    "url": "/home/order/search_order",
    "title": "收索订单",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "text",
            "optional": false,
            "field": "keyword",
            "description": "<p>关键字</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>订单状态</p>"
          },
          {
            "group": "Parameter",
            "type": "text",
            "optional": false,
            "field": "name",
            "description": "<p>收货人名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Text",
            "optional": false,
            "field": "start_time",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "text",
            "optional": false,
            "field": "end_time",
            "description": "<p>结束时间</p>"
          }
        ]
      }
    },
    "group": "whole_home",
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/order/search_order"
      }
    ],
    "filename": "app/controller/home/order.controller.js",
    "groupTitle": "whole_home",
    "name": "GetHomeOrderSearch_order"
  },
  {
    "type": "get",
    "url": "/home/order/status_order",
    "title": "不同状态订单",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>状态</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pay_status",
            "description": "<p>支付状态1为已支付0为未支付</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          }
        ]
      }
    },
    "group": "whole_home",
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/order/status_order"
      }
    ],
    "filename": "app/controller/home/order.controller.js",
    "groupTitle": "whole_home",
    "name": "GetHomeOrderStatus_order"
  },
  {
    "type": "get",
    "url": "/home/product/add",
    "title": "商品编辑",
    "group": "whole_home",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>商品id</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/product/add"
      }
    ],
    "filename": "app/controller/home/product.controller.js",
    "groupTitle": "whole_home",
    "name": "GetHomeProductAdd"
  },
  {
    "type": "get",
    "url": "/home/product/add_sku",
    "title": "sku菜单的编辑;",
    "group": "whole_home",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/product/add_sku"
      }
    ],
    "filename": "app/controller/home/product.controller.js",
    "groupTitle": "whole_home",
    "name": "GetHomeProductAdd_sku"
  },
  {
    "type": "get",
    "url": "/home/product/all_sku",
    "title": "sku的全部菜单;",
    "group": "whole_home",
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/product/all_sku"
      }
    ],
    "filename": "app/controller/home/product.controller.js",
    "groupTitle": "whole_home",
    "name": "GetHomeProductAll_sku"
  },
  {
    "type": "get",
    "url": "/home/product/change",
    "title": "改变商品的状态(上下架,分组,状态);",
    "group": "whole_home",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "obj",
            "optional": false,
            "field": "data",
            "description": "<p>{id:xx,stutas:xx} stutas</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/product/change"
      }
    ],
    "filename": "app/controller/home/product.controller.js",
    "groupTitle": "whole_home",
    "name": "GetHomeProductChange"
  },
  {
    "type": "get",
    "url": "/home/product/changeAll",
    "title": "改变多个商品的状态(上下架,分组,状态);",
    "group": "whole_home",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "obj",
            "optional": false,
            "field": "data",
            "description": "<p>{id:xx,status:xx} status</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/product/changeAll"
      }
    ],
    "filename": "app/controller/home/product.controller.js",
    "groupTitle": "whole_home",
    "name": "GetHomeProductChangeall"
  },
  {
    "type": "get",
    "url": "/home/product/export",
    "title": "导出商品;",
    "group": "whole_home",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "text",
            "optional": false,
            "field": "ids",
            "description": "<p>id集合</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/product/export"
      }
    ],
    "filename": "app/controller/home/product.controller.js",
    "groupTitle": "whole_home",
    "name": "GetHomeProductExport"
  },
  {
    "type": "get",
    "url": "/home/product/index",
    "title": "商品列表",
    "group": "whole_home",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/product/index"
      }
    ],
    "filename": "app/controller/home/product.controller.js",
    "groupTitle": "whole_home",
    "name": "GetHomeProductIndex"
  },
  {
    "type": "get",
    "url": "/home/product/search_product",
    "title": "搜索商品;",
    "group": "whole_home",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "text",
            "optional": false,
            "field": "keyword",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/product/search_product"
      }
    ],
    "filename": "app/controller/home/product.controller.js",
    "groupTitle": "whole_home",
    "name": "GetHomeProductSearch_product"
  },
  {
    "type": "get",
    "url": "/home/product/sku_list",
    "title": "sku菜单分页列表;",
    "group": "whole_home",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/product/sku_list"
      }
    ],
    "filename": "app/controller/home/product.controller.js",
    "groupTitle": "whole_home",
    "name": "GetHomeProductSku_list"
  },
  {
    "type": "get",
    "url": "/home/trade/export",
    "title": "导出",
    "group": "whole_home",
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/trade/export"
      }
    ],
    "filename": "app/controller/home/trade.controller.js",
    "groupTitle": "whole_home",
    "name": "GetHomeTradeExport"
  },
  {
    "type": "get",
    "url": "/home/trade/index",
    "title": "交易记录",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          }
        ]
      }
    },
    "group": "whole_home",
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/trade/index"
      }
    ],
    "filename": "app/controller/home/trade.controller.js",
    "groupTitle": "whole_home",
    "name": "GetHomeTradeIndex"
  },
  {
    "type": "get",
    "url": "/home/trade/search_trade",
    "title": "交易记录查询",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "text",
            "optional": false,
            "field": "keyword",
            "description": "<p>关键字</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "payment",
            "description": "<p>支付方式</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pay_status",
            "description": "<p>支付状态</p>"
          },
          {
            "group": "Parameter",
            "type": "text",
            "optional": false,
            "field": "start_time",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "text",
            "optional": false,
            "field": "end_time",
            "description": "<p>结束时间</p>"
          }
        ]
      }
    },
    "group": "whole_home",
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/trade/search_trade"
      }
    ],
    "filename": "app/controller/home/trade.controller.js",
    "groupTitle": "whole_home",
    "name": "GetHomeTradeSearch_trade"
  },
  {
    "type": "get",
    "url": "/home/unit/add",
    "title": "单位编辑",
    "group": "whole_home",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>单位id</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/unit/add"
      }
    ],
    "filename": "app/controller/home/unit.controller.js",
    "groupTitle": "whole_home",
    "name": "GetHomeUnitAdd"
  },
  {
    "type": "get",
    "url": "/home/unit/all_unit",
    "title": "所有单位",
    "group": "whole_home",
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/unit/all_unit"
      }
    ],
    "filename": "app/controller/home/unit.controller.js",
    "groupTitle": "whole_home",
    "name": "GetHomeUnitAll_unit"
  },
  {
    "type": "get",
    "url": "/home/unit/index",
    "title": "单位列表",
    "group": "whole_home",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/unit/index"
      }
    ],
    "filename": "app/controller/home/unit.controller.js",
    "groupTitle": "whole_home",
    "name": "GetHomeUnitIndex"
  },
  {
    "type": "post",
    "url": "/home/ads/add",
    "title": "新增与更新广告(有id为更新无id为增加)",
    "group": "whole_home",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>广告id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "position_type",
            "description": "<p>1.幻灯片 2.菜单快捷图标</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "name",
            "description": "<p>广告名称</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "file_id",
            "description": "<p>图片id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "url",
            "description": "<p>链接</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>状态  1。为显示0为隐藏</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "rank",
            "description": "<p>排名</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "created_at",
            "description": "<p>时间</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/ads/add"
      }
    ],
    "filename": "app/controller/home/ads.controller.js",
    "groupTitle": "whole_home",
    "name": "PostHomeAdsAdd"
  },
  {
    "type": "post",
    "url": "/home/back/add_back",
    "title": "订单回退类型的增加与更新(状态的改变)",
    "group": "whole_home",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>状态</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "type",
            "description": "<p>1取消订单,2为退款,3售后</p>"
          },
          {
            "group": "Parameter",
            "type": "text",
            "optional": false,
            "field": "name",
            "description": "<p>内容</p>"
          },
          {
            "group": "Parameter",
            "type": "text",
            "optional": false,
            "field": "id",
            "description": "<p>订单id</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/back/add_back"
      }
    ],
    "filename": "app/controller/home/back.controller.js",
    "groupTitle": "whole_home",
    "name": "PostHomeBackAdd_back"
  },
  {
    "type": "post",
    "url": "/home/config/index",
    "title": "设置_增加或更新",
    "group": "whole_home",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id</p>"
          },
          {
            "group": "Parameter",
            "type": "Text",
            "optional": false,
            "field": "name",
            "description": "<p>店铺名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "logo_id",
            "description": "<p>logo图片</p>"
          },
          {
            "group": "Parameter",
            "type": "Text",
            "optional": false,
            "field": "address",
            "description": "<p>详细地址</p>"
          },
          {
            "group": "Parameter",
            "type": "Text",
            "optional": false,
            "field": "phone",
            "description": "<p>电话</p>"
          },
          {
            "group": "Parameter",
            "type": "Text",
            "optional": false,
            "field": "email",
            "description": "<p>邮件</p>"
          },
          {
            "group": "Parameter",
            "type": "text",
            "optional": false,
            "field": "qq",
            "description": "<p>qq</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>状态</p>"
          },
          {
            "group": "Parameter",
            "type": "Obj",
            "optional": false,
            "field": "payment",
            "description": "<p>支付方式</p>"
          },
          {
            "group": "Parameter",
            "type": "Text",
            "optional": false,
            "field": "close_reason",
            "description": "<p>关闭原因</p>"
          },
          {
            "group": "Parameter",
            "type": "text",
            "optional": false,
            "field": "description",
            "description": "<p>商城描述</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/config/index"
      }
    ],
    "filename": "app/controller/home/config.controller.js",
    "groupTitle": "whole_home",
    "name": "PostHomeConfigIndex"
  },
  {
    "type": "post",
    "url": "/home/fee/fee_add",
    "title": "费用模板的增加与更新",
    "description": "<p>费用模板的增加与更新</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>费用模板id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "type",
            "description": "<p>计费方式:0为按件计算,1为按重计算</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "frist_one",
            "description": "<p>首件或首重</p>"
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "frist_price",
            "description": "<p>首件或首重价格</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "others",
            "description": "<p>续件或续重</p>"
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "others_price",
            "description": "<p>续件或续重价格</p>"
          },
          {
            "group": "Parameter",
            "type": "obj",
            "optional": false,
            "field": "address",
            "description": "<p>与地址管理相同</p>"
          },
          {
            "group": "Parameter",
            "type": "text",
            "optional": false,
            "field": "fee_name",
            "description": "<p>费用模板名称</p>"
          }
        ]
      }
    },
    "group": "whole_home",
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/fee/fee_add"
      }
    ],
    "filename": "app/controller/home/fee.controller.js",
    "groupTitle": "whole_home",
    "name": "PostHomeFeeFee_add"
  },
  {
    "type": "post",
    "url": "/home/location/location/add",
    "title": "省份增加提交时",
    "description": "<p>省份增加</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "obj",
            "optional": false,
            "field": "data",
            "description": "<p>[{&quot;name&quot;:&quot;河南&quot;,type:1,status:1,ful:1,region_id:1,id:1},{&quot;name&quot;:&quot;河北&quot;,type:1,status:1,ful:0,region_id:1,child:[{&quot;name&quot;:&quot;石家庄&quot;,type:2,status:1,ful:0,region_id:5,child:[{&quot;name&quot;:&quot;a区&quot;,type:3,status:1,ful:1,region_id:5}]}]}]</p>"
          }
        ]
      }
    },
    "group": "whole_home",
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/location/location/add"
      }
    ],
    "filename": "app/controller/home/location/location.controller.js",
    "groupTitle": "whole_home",
    "name": "PostHomeLocationLocationAdd"
  },
  {
    "type": "post",
    "url": "/home/menu/add",
    "title": "菜单的状态改变",
    "group": "whole_home",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "all",
            "description": "<p>所有子级全被关闭 1  0</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>菜单id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>状态</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/menu/add"
      }
    ],
    "filename": "app/controller/home/menu.controller.js",
    "groupTitle": "whole_home",
    "name": "PostHomeMenuAdd"
  },
  {
    "type": "post",
    "url": "/home/menu/add",
    "title": "菜单增加与更新",
    "group": "whole_home",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Text",
            "optional": false,
            "field": "name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>菜单id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "rank",
            "description": "<p>排名</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "file_id",
            "description": "<p>图片id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>状态</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "plv",
            "description": "<p>菜单级别1为一级菜单2为二级菜单3为三级菜单</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/menu/add"
      }
    ],
    "filename": "app/controller/home/menu.controller.js",
    "groupTitle": "whole_home",
    "name": "PostHomeMenuAdd"
  },
  {
    "type": "post",
    "url": "/home/order/check_order",
    "title": "审核订单",
    "group": "whole_home",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "apply_type",
            "description": "<p>审核类型</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>order_log的id</p>"
          },
          {
            "group": "Parameter",
            "type": "text",
            "optional": false,
            "field": "refue_result",
            "description": "<p>拒绝理由(此字段在通过时不传)</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "check_result",
            "description": "<p>审核结果,1为通过,2为拒绝</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/order/check_order"
      }
    ],
    "filename": "app/controller/home/order.controller.js",
    "groupTitle": "whole_home",
    "name": "PostHomeOrderCheck_order"
  },
  {
    "type": "post",
    "url": "/home/product/add",
    "title": "商品增加与更新",
    "group": "whole_home",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Text",
            "optional": false,
            "field": "name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "category_id",
            "description": "<p>菜单id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "is_recommend",
            "description": "<p>推荐状态              1为推荐0为不推荐</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "fee_type",
            "description": "<p>运费模板类型           1运费模板0全国统一模板价格</p>"
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "fee_price",
            "description": "<p>推荐状态              fee_type为0时全国统一模板价格(fee_type为1时不传)</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "fee_id",
            "description": "<p>推荐状态              fee_type为1时运费模板的id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "file_id",
            "description": "<p>商品图片id</p>"
          },
          {
            "group": "Parameter",
            "type": "text",
            "optional": false,
            "field": "files",
            "description": "<p>商品集合</p>"
          },
          {
            "group": "Parameter",
            "type": "Text",
            "optional": false,
            "field": "detail",
            "description": "<p>描述</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "sku_id",
            "description": "<p>一级菜单集合 13,14,15</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "sku_status",
            "description": "<p>sku开启状态</p>"
          },
          {
            "group": "Parameter",
            "type": "Text",
            "optional": false,
            "field": "sku",
            "description": "<p>sku数据集合  若开启sku,数据的集合[{name0:xx,name1:xx,name2:xx,price:xx,store:xx}]</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "store",
            "description": "<p>库存  若开启sku,价格最低的那条数据的库存</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "price",
            "description": "<p>价格  若开启sku,价格最低的那条数据的价格</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "rank",
            "description": "<p>排名</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/product/add"
      }
    ],
    "filename": "app/controller/home/product.controller.js",
    "groupTitle": "whole_home",
    "name": "PostHomeProductAdd"
  },
  {
    "type": "post",
    "url": "/home/product/add_sku",
    "title": "sku菜单增加与更新(关闭;开启);",
    "group": "whole_home",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "text",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>1.开启2.关闭</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/product/add_sku"
      }
    ],
    "filename": "app/controller/home/product.controller.js",
    "groupTitle": "whole_home",
    "name": "PostHomeProductAdd_sku"
  },
  {
    "type": "post",
    "url": "/home/unit/add",
    "title": "单位增加与更新(状态改变)",
    "group": "whole_home",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>状态</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3028/home/unit/add"
      }
    ],
    "filename": "app/controller/home/unit.controller.js",
    "groupTitle": "whole_home",
    "name": "PostHomeUnitAdd"
  }
] });
