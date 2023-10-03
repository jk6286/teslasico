import { createRouter, createWebHistory } from 'vue-router';
import MissionPage from '@/pages/MissionPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  strict: true,
  routes: [
    {
      path: '/mission',
      redirect: '/'
    },
    {
      path: '/',
      name: 'mission',
      component: MissionPage
    },
    {
      path: '/:notFound(.*)*',
      name: 'NotFound',
      component: () => import('@/pages/NotFound.vue')
    },
    {
      path: '/car-sale',
      name: 'car-sale',
      component: () => import('@/pages/CarSalePage.vue')
    },
    {
      path: '/x',
      name: 'x',
      component: () => import('@/pages/XPage.vue'),
      meta: { title: 'title x' }
    }
  ]
  // scrollBehavior() {
  //   return { top: 0 };
  // },
});
router.beforeEach((to) => {
  if (to.path !== '/' && to.path.endsWith('/')) {
    return to.path.slice(0, -1);
  }
});

export default router;
