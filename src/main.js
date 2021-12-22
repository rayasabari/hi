import Vue from 'vue'
import App from './App.vue'
import './index.css'
import VueTyperPlugin from 'vue-typer'
Vue.use(VueTyperPlugin)
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
