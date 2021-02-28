import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import hljs from 'highlight.js'
// plugin
import '@/plugins/common'
import '@/plugins/element-ui'

import Tools from './utils/tool'

// style
import '@/assets/styles/common.less'

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.prototype.$Tools = Tools
Vue.config.productionTip = false

Vue.directive('highlight', function(el) {
  const blocks = el.querySelectorAll('pre code')
  blocks.forEach(block => {
    hljs.highlightBlock(block)
  })
})

Vue.use(mavonEditor)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
