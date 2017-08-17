'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _Hello = require('components/Hello.vue');

var _Hello2 = _interopRequireDefault(_Hello);

var _world = require('components/world/world.vue');

var _world2 = _interopRequireDefault(_world);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

exports.default = new _vueRouter2.default({
  routes: [{
    path: '/',
    name: 'Hello',
    component: _Hello2.default
  }, {
    path: '/world',
    name: 'World',
    component: _world2.default
  }]
});
//# sourceMappingURL=index.js.map