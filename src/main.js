import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import VueRouter from 'vue-router'

import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'
import Master from './components/Master.vue'
import DataBind from './components/DataBind.vue'
import ForLoop from './components/ForLoop.vue'
import SingUp from './components/SingUp.vue'
import Login from './components/Login.vue'
import EmployeeList from './components/EmployeeList.vue'
import PostApi from './components/PostApi.vue'
import DeleteApi from './components/DeleteApi.vue'
import User from './components/User.vue'

Vue.use(BootstrapVue)
Vue.use(VueRouter)
const routes = [
  { path: '/', component: Home },
  { path: '/Master', component: Master },
  { path: '/HelloWorld', component: HelloWorld },
  { path: '/DataBind', component: DataBind },
  { path: '/ForLoop', component: ForLoop },
  { path: '/SingUp', component: SingUp },
  { path: '/Login', component: Login },
  { path: '/EmployeeList', component: EmployeeList },
  { path: '/PostApi', component: PostApi },
  { path: '/DeleteApi', component: DeleteApi },
  { path: '/User1/:id', component: User },
]
const router = new VueRouter({
  routes
})


Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')



