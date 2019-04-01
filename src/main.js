// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'

import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'

import '../static/font/aliFont.css'

import './base'

import utils from './utils'

Vue.axios = Vue.prototype.axios = axios

Vue.config.productionTip = false
/**, { size: 'small', zIndex: 3000 } */
Vue.use(ElementUI)

/** 引入mock */
require('./mock')

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')