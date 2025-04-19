import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Approve from '../views/Approve.vue'
import Transfer from '../views/Transfer.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/approve', component: Approve },
    { path: '/transfer', component: Transfer },
  ]
})