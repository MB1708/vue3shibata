import Vue from 'vue'
import App from './App'
import store from './vuex/store'
import router from './router'

Vue.config.productionTip = false

const config = {
  apiKey: "AIzaSyCCSEri_htb1nwcGGG3X0HVH2cuQSGEsUs",
  authDomain: "shibataactivestreet-9043a.firebaseapp.com",
  databaseURL: "https://shibataactivestreet-9043a.firebaseio.com",
  projectId: "shibataactivestreet-9043a",
  storageBucket: "",
  messagingSenderId: "172548216049"
}
firebase.initializeApp(config)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
