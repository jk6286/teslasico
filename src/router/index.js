import { createRouter, createWebHistory } from 'vue-router';
import MissionPage from '@/pages/MissionPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'mission',
      component: MissionPage
    },
    {
      path: '/car-sale',
      name: 'car-sale',
      component: () => import('@/pages/CarSalePage.vue')
    },
    {
      path: '/sub',
      name: 'sub',
      component: () => import('@/pages/SubPage.vue')
    }
  ]
});

export default router;
