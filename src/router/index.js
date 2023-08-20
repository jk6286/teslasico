import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/pages/MainPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage
    },
    {
      path: '/sub',
      name: 'sub',
      component: () => import('@/pages/SubPage.vue')
    }
  ]
});

export default router;
