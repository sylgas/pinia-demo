import { createStore } from "vuex";
import {
  shoppingBagModule,
  ShoppingBagState,
} from "@/store/modules/ShoppingBag/shoppingBagModule";
import {
  navigationModule,
  NavigationState,
} from "@/store/modules/Navigation/navigationModule";

export interface RootState {
  navigation: NavigationState;
  shoppingBag: ShoppingBagState;
}

const store = createStore<RootState>({
  modules: {
    navigation: navigationModule,
    shoppingBag: shoppingBagModule,
  },
});

export default store;
