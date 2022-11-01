import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import PageSecond from '../views/Page2.vue'
import TabsPage from '../views/Tabs.vue'
import TabsPageSecond from '../views/Tabs2.vue'

const routes: Array<RouteRecordRaw> = 
[
  {
    path: '/',
    redirect: '/FishApi/HomePage'
  },
  {
    path: '/FishApi/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/FishApi/HomePage'
      },
      {
        path: 'HomePage',
        component: HomePage
      }
    ]
  },
  {
    path: '/FishApi/',
    component: TabsPageSecond,
    children: [
      {
        path: '',
        redirect: '/FishApi/HomePage'
      },
      {
        path: 'Page2',
        component: PageSecond
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
