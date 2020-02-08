import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Navigation from './components/Navigation.vue'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false

Vue.component('navigation', Navigation); 

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
