import { createRouter, createWebHistory } from 'vue-router'
import Session from '../services/session'
import Home from '../views/Home.vue'
import Journal from '../views/Journal.vue'
import Entry from '../views/Entry.vue'
import Profile from '../views/Profile.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/journal',
    name: 'Journal',
    component: Journal
  },
  {
    path: '/entry',
    name: 'Entry',
    component: Entry
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {

    path: '/signup',
    name: 'Signup',
    component: () => import(/* webpackChunkName: "Signup" */ '../views/Signup.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresLogin && !Session.user) {
    next('/login');
  } else {
    next();
  }
})

export default router
