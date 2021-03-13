import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../views/Layout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../views/Login/Login.vue")
  },
  {
    path: "/layout",
    name: "Layout",
    component: Layout,
    children: [
      {
        path: "",
        component: () => import("../views/CenterData/Home.vue")
      },
      {
        path: "calendar",
        component: () => import("../views/Calendar.vue")
      },
      {
        path: "center",
        component: () => import("../views/CenterData/scaleResult.vue")
      },
      {
        path: "register",
        component: () => import("../views/CenterData/Register.vue")
      },
      {
        path: "anxiety",
        component: () => import("../views/Scale/Anxiety.vue")
      },
      {
        path: "depression",
        component: () => import("../views/Scale/Depression.vue")
      },
      {
        path: "other",
        component: () => import("../views/Scale/Other.vue")
      }
    ]
  },
  {
    path: "*",
    component: () => import("../views/Error404.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
