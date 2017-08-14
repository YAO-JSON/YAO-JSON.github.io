'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _star = require('components/star/star.vue');

var _star2 = _interopRequireDefault(_star);

var _split = require('components/split/split.vue');

var _split2 = _interopRequireDefault(_split);

var _ratingselect = require('components/ratingselect/ratingselect.vue');

var _ratingselect2 = _interopRequireDefault(_ratingselect);

var _betterScroll = require('better-scroll');

var _betterScroll2 = _interopRequireDefault(_betterScroll);

var _data = require('../../../data.json');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var POSITIVE = 0;
var NEGATIVE = 1;
// const ERR_OK = 0;
var ALL = 2;
exports.default = {
  data: function data() {
    return {
      showFlag: false,
      onlyContent: false,
      selectType: ALL,
      ratings: []
    };
  },

  props: {
    seller: {
      type: Object
    }
  },
  created: function created() {
    // this.$http.get('/api/ratings').then((res) => {
    //   res = res.body;
    //   if (res.errno === ERR_OK) {
    //     this.ratings = res.data;
    //     this.refreshBScroll();
    //   }
    // });
    this.ratings = _data.ratings;
    this.refreshBScroll();
  },

  components: { Star: _star2.default, Split: _split2.default, Ratingselect: _ratingselect2.default },
  methods: {
    refreshBScroll: function refreshBScroll() {
      var _this = this;

      this.$nextTick(function () {
        if (!_this.scroll) {
          _this.scroll = new _betterScroll2.default(_this.$refs.ratings, {
            click: true
          });
        } else {
          _this.scroll.refresh();
        }
      });
    },
    changeType: function changeType(type) {
      console.log(type);
      this.selectType = type;
      this.refreshBScroll();
    },
    toggleContent: function toggleContent(bool) {
      this.onlyContent = bool;
      this.refreshBScroll();
    },
    format: function format(time) {
      return this.formatDate(time, 'YYYY-MM-DD hh:mm:ss');
    },
    needShow: function needShow(type, text) {
      if (this.onlyContent && !text) {
        return false;
      }
      if (this.selectType === ALL) {
        return true;
      } else {
        return this.selectType === type;
      }
    }
  }
};
//# sourceMappingURL=ratings.js.map