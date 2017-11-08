import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import fastclick from 'fastclick'
import router from './router'
import './common/stylus/index.styl'
/* 每次点击body都有三百毫秒的延迟 */

fastclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
