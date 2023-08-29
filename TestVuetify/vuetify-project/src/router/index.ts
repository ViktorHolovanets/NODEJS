// Composables
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/user',
        name: 'User',
        component: () => {
          return import( '@/components/User/User.vue');
        },
      },
      {
        path: '/bands',
        name: 'Bands',
        component: () => {
          return import('@/components/Band/ViewBands.vue');
        },
      },
      {
        path: 'band/:id',
        name: 'Band',
        component: () => {
          return import('@/components/Band/ViewBand.vue');
        },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
