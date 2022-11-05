import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import SolarGenView from '../views/SolarGenView.vue'
import ManufacturingView from '../views/ManufacturingView.vue'
import LoginView from '../views/LoginView.vue'
import AdminView from '../views/AdminView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // This is an example of lazy loading component
    //{
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
    {
      path: '/contact',
      name: 'contactus',
      component: ContactView
    },
    {
      path: '/solargen',
      name: 'solargen',
      component: SolarGenView
    },
    {
      path: '/manufacturing',
      name: 'manufacturing',
      component: ManufacturingView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView
    }
  ],

})

export default router
