/* eslint-disable space-before-function-paren */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import 'babel-polyfill'
// import hljs from 'highlight.js'
// plugin
import '@/plugins/common'
import '@/plugins/element-ui'

import Tools from './utils/tool'
import '@/v-md-preview'
// style
import '@/assets/styles/common.less'

// import mavonEditor from 'mavon-editor'
// import 'mavon-editor/dist/css/index.css'

Vue.prototype.$Tools = Tools
Vue.config.productionTip = false

// Vue.directive('highlight', function(el) {
//   const blocks = el.querySelectorAll('pre code')
//   blocks.forEach(block => {
//     hljs.highlightBlock(block)
//   })
// })

Vue.filter('time', (value, fmt) => {
  if (!value) return ''
  var o = {
    'M+': value.getMonth() + 1, // 月份
    'd+': value.getDate(), // 日
    'h+': value.getHours(), // 小时
    'm+': value.getMinutes(), // 分
    's+': value.getSeconds(), // 秒
    'q+': Math.floor((value.getMonth() + 3) / 3), // 季度
    'S': value.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (value.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
})
// Vue.use(mavonEditor)
Vue.directive('scroll', {
  inserted: function (el, binding) {
    const f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})

// eslint-disable-next-line space-before-function-paren
window.Date.prototype.format = function (fmt) {
  var o = {
    'M+': this.getMonth() + 1, // 月份
    'd+': this.getDate(), // 日
    'h+': this.getHours(), // 小时
    'm+': this.getMinutes(), // 分
    's+': this.getSeconds(), // 秒
    'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
    'S': this.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
