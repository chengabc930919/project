// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Element from 'element-ui'
import $ from 'jquery'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
