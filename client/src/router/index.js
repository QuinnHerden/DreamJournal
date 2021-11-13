import { createRouter, createWebHistory } from 'vue-router'
import Session from '../services/session'
import Home from '../views/Home.vue'
import Journal from '../views/Journal.vue'
import Entry from '../views/Entry.vue'
import Profile from '../views/Profile.vue'
import ProfileEdit from '../views/ProfileEdit.vue'
import ProfileOther from '../views/ProfileOther'
import session from '../services/session'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/journal',
    name: 'Journal',
    component: Journal,
    meta: { requiresLogin: true }
  },
  {
    path: '/entry',
    name: 'Entry',
    component: Entry,
    meta: { requiresLogin: true }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { requiresLogin: true }
  },
  {
    path: '/editprofile',
    name: 'EditProfile',
    component: ProfileEdit,
    meta: { requiresLogin: true }
  },
  {
    path: '/profile/@Quinn',
    name: 'ProfileOther',
    component: ProfileOther,
    meta: {requiresLogin: true}
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
    session.toRoute = to;
    next('/login');
  } else {
    next();
  }
})

export default router
