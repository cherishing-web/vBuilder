import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

import AppView from '../views/AppView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: AppView,
    children: [
      {
        path: 'dataSource',
        name: 'dataSource',
        component: AppView,
      },
      {
        path: 'layout',
        name: 'layout',
        component: AppView,
      },
      {
        path: 'actions',
        name: 'actions',
        component: AppView,
      }
    ],

  },
  {
    path: '/about',
    name: 'about',
    component: AppView,
  }
]
export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})

