import { createRouter, createWebHashHistory } from 'vue-router'
import LayoutDisplay from '../components/LayoutDisplay.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: LayoutDisplay,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
