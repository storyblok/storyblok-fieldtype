(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var inserted = exports.cache = {}

function noop () {}

exports.insert = function (css) {
  if (inserted[css]) return noop
  inserted[css] = true

  var elem = document.createElement('style')
  elem.setAttribute('type', 'text/css')

  if ('textContent' in elem) {
    elem.textContent = css
  } else {
    elem.styleSheet.cssText = css
  }

  document.getElementsByTagName('head')[0].appendChild(elem)
  return function () {
    document.getElementsByTagName('head')[0].removeChild(elem)
    inserted[css] = false
  }
}

},{}],2:[function(require,module,exports){
var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert(".p-metatags__google-title{color:blue;text-decoration:underline}.p-metatags__google-link{color:green}.p-metatags__preview{margin:5px 0 15px;padding:10px;color:#000;background:#fff}")
;(function(){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  mixins: [window.Storyblok.plugin],
  methods: {
    initWith: function initWith() {
      return {
        plugin: 'my-plugin-name',
        title: 'Your title',
        description: 'Your description'
      };
    },
    pluginCreated: function pluginCreated() {
      console.log('plugin:created');
    }
  },
  watch: {
    'model': {
      handler: function handler(value) {
        this.$emit('changed-model', value);
      },
      deep: true
    }
  }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._v("\n  Google snippet preview:\n  "),_c('div',{staticClass:"p-metatags__preview"},[_c('div',{staticClass:"p-metatags__google-title"},[_vm._v(_vm._s(_vm.model.title))]),_vm._v(" "),_c('div',{staticClass:"p-metatags__google-link"},[_vm._v("yoursite.com/example")]),_vm._v(" "),_c('div',{staticClass:"p-metatags__google-description"},[_vm._v(_vm._s(_vm.model.description))])]),_vm._v(" "),_c('div',{staticClass:"uk-form-row"},[_c('label',[_vm._v("SEO Title")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.model.title),expression:"model.title"}],staticClass:"uk-width-1-1",attrs:{"type":"text"},domProps:{"value":(_vm.model.title)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.model, "title", $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"uk-form-row"},[_c('label',[_vm._v("Meta description")]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.model.description),expression:"model.description"}],staticClass:"uk-width-1-1",attrs:{"rows":"4"},domProps:{"value":(_vm.model.description)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.model, "description", $event.target.value)}}})])])}
__vue__options__.staticRenderFns = []

},{"vueify/lib/insert-css":1}],3:[function(require,module,exports){
'use strict';

var _Plugin = require('../Plugin.vue');

var _Plugin2 = _interopRequireDefault(_Plugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var init = _Plugin2.default.methods.initWith();

window.storyblok.field_types[init.plugin] = _Plugin2.default;

},{"../Plugin.vue":2}]},{},[3]);
