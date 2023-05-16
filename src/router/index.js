import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () =>
      import("../views/HomeView.vue"),
    },
    {
      path: '/blog',
      name: 'Blog',
      component: () =>
      import("../views/BlogView.vue"),
    },
    {
      path: '/shop',
      name: 'Shop',
      component: () =>
      import("../views/ShopView.vue"),
    },
    {
      path: '/product/:productId',
      name: 'product',
      component: () =>
      import("../components/Shop/ProductDetail.vue"),
    },
    {
      path: '/contactUs',
      name: 'ContactUs',
      component: () =>
      import("../views/ContactView.vue"),
    }
  ]
})

export default router
