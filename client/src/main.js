import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Drawer from './components/Drawer.vue'

Vue.config.productionTip = false

Vue.component('app-drawer', Drawer); 

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
