import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VueComponents from '../views/VueComponents.vue'
import StateManagement from '@/views/StateManagement.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/vue-components',
      name: 'Components',
      component: VueComponents
    },
    {
      path: '/state-management',
      name: 'State Management',
      component: StateManagement
    }
  ]
})

export default router
