import { createRouter, createWebHistory } from 'vue-router'
import Session from '../services/session'
import Home from '../views/Home.vue'
import JournalGlobal from '../views/JournalGlobal.vue'
import JournalPersonal from '../views/JournalPersonal.vue'
import JournalUser from '../views/JournalUser.vue'
import JournalTag from '../views/JournalTag.vue'
import Entry from '../views/Entry.vue'
import Profile from '../views/Profile.vue'
import ProfileEdit from '../views/ProfileEdit.vue'
import session from '../services/session'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/journal/global',
    name: 'Global Journal',
    component: JournalGlobal,
    meta: { requiresLogin: true }
  },
  {
    path: '/journal/personal',
    name: 'Personal Journal',
    component: JournalPersonal,
    meta: { requiresLogin: true }
  },
  {
    path: '/journal/user',
    name: 'User Journal',
    component: JournalUser,
    meta: { requiresLogin: true }
  },
  {
    path: '/journal/tag',
    name: 'Tag Journal',
    component: JournalTag,
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
