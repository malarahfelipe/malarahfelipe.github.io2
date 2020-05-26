import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './plugins/validator'
import './plugins/mask'
import router from './router'
import store from './store'
import 'bootstrap';
import '@fortawesome/fontawesome-free/css/all.css';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
