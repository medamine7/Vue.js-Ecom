import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'


// index.js or main.js
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
