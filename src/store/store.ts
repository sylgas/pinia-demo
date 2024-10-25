import { createStore } from "vuex";
import {
  shoppingBagModule,
  ShoppingBagState,
} from "@/store/modules/ShoppingBag/shoppingBagModule";
import {
  navigationModule,
  NavigationState,
} from "@/store/modules/Navigation/navigationModule";
import {
  coffeeBagsModule,
  CoffeeBagState,
} from "@/store/modules/CoffeeBags/coffeeBagModule";

export interface RootState {
  navigation: NavigationState;
  shoppingBag: ShoppingBagState;
  coffeeBags: CoffeeBagState;
}

const store = createStore<RootState>({
  modules: {
    navigation: navigationModule,
    shoppingBag: shoppingBagModule,
    coffeeBags: coffeeBagsModule,
  },
});

export default store;
