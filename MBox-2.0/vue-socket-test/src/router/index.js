import { createRouter, createWebHistory } from 'vue-router';

import BodyView from '../views/BodyView.vue';
import SignUp from '../views/AuthView/SignUp.vue';
import SignIn from '../views/AuthView/SignIn.vue';

import Home from '../views/ContentView/content/Home.vue';
import Search from '../views/ContentView/content/Search.vue';
import Music from '../views/ContentView/content/Music.vue';

import Profile from '../views/ProfileView/Profile.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BodyView,

    },
    {
      path: '/SignUp',
      name: 'sign_up',
      component: SignUp
    },
    {
      path: '/SignIn',
      name: 'sign_in',
      component: SignIn
    }, 
  ]
})

export default router
