import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/garden',
      name: 'garden',
      component: () => import('../views/GardenView.vue')
    },
    {
      path: '/garden/:category',
      name: 'gardenCategory',
      component: () => import('../views/GardenCategoryView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import('../views/RegistrationView.vue')
    },
    {
      path: '/user',
      name: 'user',
      meta: {
        needAuth: true
      },
      component: () => import('../views/UserView.vue')
    }
  ]
})

router.beforeEach((to, from) => {
  if(to.meta.needAuth && (localStorage.getItem('plantToken')==='' || localStorage.getItem('plantToken')===null)) {
    return {name: 'login'}
  }
})

export default router
