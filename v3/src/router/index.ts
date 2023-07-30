import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'profile',
      component: () => import('@/views/ProfileView.vue')
    },
    {
      path: '/creation',
      name: 'creation',
      component: () => import('@/views/CreationView.vue')
    }
  ]
})

export default router
