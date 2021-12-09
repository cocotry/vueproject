import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/', 
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: function () {
      return import('../views/Category.vue')
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: function () {
      return import('../views/Cart.vue')
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: function () {
      return import('../views/Profile.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
