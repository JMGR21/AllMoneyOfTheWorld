import { createRouter, createWebHistory } from 'vue-router'
import MainTitle from '../views/MainTitle.vue'

const routes = [
  {
    path: '/',
    name: 'MainTitle',
    component: MainTitle
  },
  {
    path: '/game',
    name: 'Game',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/GameView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
