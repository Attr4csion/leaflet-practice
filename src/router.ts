import { createRouter, createWebHistory } from 'vue-router'
import SightsDetail from './components/SightsDetail.vue'
import MainPage from '@/pages/MainPage.vue'

const routes = [
  {
    path: '/',
    component: MainPage,
    meta: {
      title: 'TestPage',
    },

  },
  {
    path:'/sights/:id',
    component: SightsDetail
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
