import "regenerator-runtime/runtime"
import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import "./assets/global.scss"

new Vue({
  router,
  render: h => h(App),
}).$mount("#app")