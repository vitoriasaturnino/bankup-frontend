// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../pages/Dashboard.vue'
import Payments from '../pages/Payments.vue'
import Settings from '../pages/Settings.vue'
import NewAccount from '../pages/NewAccount.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'

const routes = [
  { path: '/', name: 'Dashboard', component: Dashboard },
  { path: '/payments', name: 'Payments', component: Payments },
  { path: '/settings', name: 'Settings', component: Settings },
  { path: '/new-account', name: 'NewAccount', component: NewAccount },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
