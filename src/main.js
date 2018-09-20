import Vue from 'vue'
import App from './App.vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import {router} from './router/router'
import httpConfig from './httpConfig'
import store from './vuex/store';
Vue.use(iView)
Vue.config.productionTip = false;
new Vue({
  router,
  store:store,
  el: '#app',
  render: h => h(App)
})
