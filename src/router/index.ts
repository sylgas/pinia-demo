import { createRouter, createWebHistory } from "vue-router";
import ShoppingBagView from "../views/ShoppingBag/ShoppingBagView.vue";
import HomeView from "../views/Home/HomeView.vue";
import CoffeeBeansView from "../views/CoffeeBeans/CoffeeBeansView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/bag",
      name: "Bag",
      component: ShoppingBagView,
    },
    {
      path: "/collection/coffee-beans",
      name: "Coffee Beans",
      component: CoffeeBeansView,
    },
  ],
});

export default router;
