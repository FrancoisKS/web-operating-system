import { createRouter, createWebHistory } from 'vue-router'
import OperatingSystem from '../views/OperatingSystem.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: OperatingSystem
    },
  ]
})

export default router
