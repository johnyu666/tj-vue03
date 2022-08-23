import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserManager from '@/views/UserManager.vue'
import Detail from '@/views/Detail.vue'
import Setting from '@/views/Setting.vue'
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
      path:'/users/:id',
      name:'users',
      component: UserManager,
      children:[
        {
          path:'detail',name:'detail',component:Detail
        },
        {
          path:'setting',name:'setting',component:Setting
        }
      ]
    }
  ]
})

export default router
