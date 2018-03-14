import Vue from 'vue'
import router from './router'
import store from './store/'
import {
  sync
} from 'vuex-router-sync'
import App from './App.vue'
// import Admin from './Admin.vue'
import Element from 'element-ui'
import VueResource from 'vue-resource'
import VueClipboards from 'vue-clipboards'
import 'vue-video'
import './assets/iconfont/iconfont.js'
import 'element-ui/lib/theme-default/index.css'
import 'github-markdown-css'
import './themes/default/index.scss'
// import track from './util/track'
import * as filters from './util/filter'

Vue.use(VueClipboards)
Vue.use(VueResource)
Vue.use(Element)

Vue.http.options.emulateJSON = true
Vue.http.interceptors.push((request, next) => {
  request.headers.set('token', localStorage.getItem('token'))
  next((response) => {
    if (response.body.code === -1010) {
      vm.$router.push('/login')
      vm.$message(response.body.detail)
    }
    return response
  })
})
sync(store, router)

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

let vm = {}

vm = new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

// if (location.href.indexOf('login') > -1 || location.href.indexOf('editor') > -1 || location.href.indexOf('dashboard') > -1) {
//   vm = new Vue({
//     store,
//     router,
//     render: h => h(Admin)
//   }).$mount('#app')
// } else {
//   vm = new Vue({
//     el: '#app',
//     store,
//     router,
//     render: h => h(App)
//   }).$mount('#app')
// }