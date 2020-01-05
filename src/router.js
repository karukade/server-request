import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
  { 
    path: "/",
    component: () => import("./Form")
  },
  { 
    name: "complete",
    path: "/complete",
    component: () => import("./Complete")
  },
  { 
    name: "error",
    path: "/error",
    component: () => import("./Error")
  },
  { 
    name: "test",
    path: "/test",
    component: () => import("./Test")
  }
]

export default new VueRouter({
  mode: "history",
  routes
})