import { createRouter, createWebHistory } from "vue-router";
import ShoppingBagView from "../views/ShoppingBag/ShoppingBagView.vue";
import HomeView from "../views/Home/HomeView.vue";
import CoffeeBeansView from "../views/CoffeeBeans/CoffeeBeansView.vue";
import CoffeeBeansDetailsView from "@/views/CoffeeBeans/Details/CoffeeBeansDetailsView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/bag",
      name: "bag",
      component: ShoppingBagView,
    },
    {
      path: "/collection/coffee-beans",
      name: "collection.coffeeBeans",
      component: CoffeeBeansView,
    },
    {
      path: "/collection/coffee-beans/:itemId",
      name: "collection.coffeeBeans.details",
      component: CoffeeBeansDetailsView,
    },
  ],
});

export default router;
