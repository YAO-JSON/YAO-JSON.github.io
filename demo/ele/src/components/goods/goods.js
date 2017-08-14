'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _data = require('../../../data.json');

var _betterScroll = require('better-scroll');

var _betterScroll2 = _interopRequireDefault(_betterScroll);

var _carcontrol = require('components/carcontrol/carcontrol.vue');

var _carcontrol2 = _interopRequireDefault(_carcontrol);

var _shopcar = require('components/shopcar/shopcar.vue');

var _shopcar2 = _interopRequireDefault(_shopcar);

var _food = require('components/food/food.vue');

var _food2 = _interopRequireDefault(_food);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      goods: [],
      listHeight: [],
      scrollY: 0,
      selectedFood: {}
    };
  },

  props: {
    seller: {
      type: Object
    }
  },
  created: function created() {
    var _this = this;

    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    // this.$http.get('/api/goods').then((res) => {
    //   res = res.body;
    //   if (res.errno === ERR_OK) {
    //     this.goods = res.data;
    //     this.$nextTick(() => {
    //       this._initScroll();
    //       this._caclulateHeight();
    //     });
    //   };
    // });
    this.goods = _data.goods;
    this.$nextTick(function () {
      _this._initScroll();
      _this._caclulateHeight();
    });
  },

  computed: {
    currentIndex: function currentIndex() {
      for (var i = 0; i < this.listHeight.length; i++) {
        var height1 = this.listHeight[i];
        var height2 = this.listHeight[i + 1];
        if (!height2 || this.scrollY >= height1 && this.scrollY < height2) {
          return i;
        }
      }
    },
    selectFoods: function selectFoods() {
      var foods = [];
      this.goods.map(function (good) {
        good.foods.map(function (food) {
          if (food.count) {
            foods.push(food);
          }
        });
      });
      return foods;
    }
  },
  components: { Carcontrol: _carcontrol2.default, Shopcar: _shopcar2.default, Food: _food2.default },
  methods: {
    _initScroll: function _initScroll() {
      var _this2 = this;

      this.menuScroll = new _betterScroll2.default(this.$refs['menu-wrapper'], {
        click: true
      });
      this.foodScroll = new _betterScroll2.default(this.$refs['food-wrapper'], {
        probeType: 3,
        click: true
      });

      this.foodScroll.on('scroll', function (pos) {
        _this2.scrollY = Math.abs(Math.round(pos.y));
      });
    },
    _caclulateHeight: function _caclulateHeight() {
      var foodList = this.$refs['food-wrapper'].getElementsByClassName('food-list-hook');
      var height = 0;
      this.listHeight.push(height);
      for (var i = 0; i < foodList.length; i++) {
        var item = foodList[i];
        height += item.clientHeight;
        this.listHeight.push(height);
      }
    },
    selectMenu: function selectMenu(index) {
      var foodList = this.$refs['food-wrapper'].getElementsByClassName('food-list-hook');
      var el = foodList[index];
      this.foodScroll.scrollToElement(el, 500);
    },
    cartAdd: function cartAdd(target) {
      this.$refs.shopcar._drop(target);
    },
    selectFood: function selectFood(food, e) {
      e.stopPropagation();
      this.selectedFood = food;
      this.$refs.food.show();
    }
  }
}; // const ERR_OK = 0;
//# sourceMappingURL=goods.js.map