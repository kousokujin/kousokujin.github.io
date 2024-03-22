import { createRouter, createWebHistory } from 'vue-router'
import profile_view from '@/views/ProfileView.vue'
import creation_view from '@/views/CreationView.vue'
import contact_view from "@/views/ContactView.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'profile',
      component: profile_view
    },
    {
      path: '/creation',
      name: 'creation',
      component: creation_view
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact_view
    }
  ]
})

export default router
