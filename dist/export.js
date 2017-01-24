(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var inserted = exports.cache = {}

exports.insert = function (css) {
  if (inserted[css]) return
  inserted[css] = true

  var elem = document.createElement('style')
  elem.setAttribute('type', 'text/css')

  if ('textContent' in elem) {
    elem.textContent = css
  } else {
    elem.styleSheet.cssText = css
  }

  document.getElementsByTagName('head')[0].appendChild(elem)
  return elem
}

},{}],2:[function(require,module,exports){
var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert(".p-metatags__google-title{color:blue;text-decoration:underline}.p-metatags__google-link{color:green}.p-metatags__preview{margin:5px 0 15px;padding:10px;color:#000;background:#fff}")
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  computed: {
    charCount: function charCount() {
      return this.model.description.length;
    }
  },
  mixins: [window.Storyblok.plugin],
  methods: {
    initWith: function initWith() {
      return {
        plugin: 'metatags',
        title: 'Your title',
        description: 'Your description'
      };
    }
  },
  events: {
    'plugin:created': function pluginCreated() {
      console.log('plugin:created');
    },
    'plugin:destroyed': function pluginDestroyed() {
      console.log('plugin:destroyed');
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
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "<div>Google snippet preview:<div class=p-metatags__preview><div class=p-metatags__google-title>{{ model.title }}</div><div class=p-metatags__google-link>yoursite.com/example</div><div class=p-metatags__google-description>{{ model.description }}</div></div><div class=uk-form-row><label>SEO Title</label><input type=text v-model=model.title class=uk-width-1-1></div><div class=uk-form-row><label>Meta description</label><textarea rows=4 v-model=model.description class=uk-width-1-1></textarea><div>{{ charCount }} of 156 chars used</div></div></div>"

},{"vueify/lib/insert-css":1}],3:[function(require,module,exports){
'use strict';

var _Plugin = require('../Plugin.vue');

var _Plugin2 = _interopRequireDefault(_Plugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var init = _Plugin2.default.methods.initWith();

window.storyblok.field_types[init.plugin] = _Plugin2.default;

},{"../Plugin.vue":2}]},{},[3]);
