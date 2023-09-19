import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../stores/auth.store";

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/dashboard",
      component: () => import("../layouts/Default.vue"),
      children: [
        {
          path: "/dashboard",
          name: "Dashboard",
          component: () => import("../pages/Dashboard.vue"),
          meta: {
            title: "Main Page",
            protected: false,
          },
        },
      ],
    },
    {
      path: "/auth",
      redirect: "/auth/login",
      component: () => import("../layouts/Auth.vue"),
      children: [
        {
          path: "/auth/login",
          name: "Login",
          component: () => import("../pages/Login.vue"),
          meta: {
            title: "Login",
          },
        },
      ],
    },
  ],
});

router.beforeEach(async (to: any, from: any, next) => {
  document.title = `${to.meta.title} | Vue GraphQL Integration`;
  const authStore = useAuthStore();
  const isAuthenticated = authStore.user !== null;
  if (to.meta.protected && !isAuthenticated) {
    next({ name: "Login" });
  } else {
    next();
  }
});

export default router;
