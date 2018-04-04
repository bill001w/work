import Vue from 'vue';
import Element from 'element-ui';
import App from '@/App';
import router from '@/router';
import store from '@/store';
import '@/mock';
import 'element-ui/lib/theme-chalk/index.css';
import "@/libs/font-awesome/css/font-awesome.css";
import "@/libs/m-boot/m-boot-import.scss";
import "@/utils/style.scss"

Vue.use(Element);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});