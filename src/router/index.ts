import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/login',
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/login',
      name: 'user-login',
      component: () => import('../components/Login.vue'),
    },
  ],
})
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token') // Kiểm tra token
  if (!isAuthenticated && to.path !== '/login') {
    next('/login') // Chưa đăng nhập thì bắt buộc vào trang login
  } else {
    next() // Nếu đã đăng nhập, cho vào các trang khác
  }
})

export default router
