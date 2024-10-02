import { createStore } from "vuex";
import { ItemInBag } from "@/store/interfaces/shoppingBag.interfaces";

interface RootState {
  tabs: {
    selectedTab: string;
  };
  shoppingBag: {
    itemsInBag: ItemInBag[];
  };
}

const store = createStore<RootState>({
  state: {
    tabs: {
      selectedTab: "tab1",
    },
    shoppingBag: {
      itemsInBag: [],
    },
  },
  mutations: {
    setSelectedTab(state: RootState, tab: string) {
      state.tabs.selectedTab = tab;
    },
    addItemsToShoppingBag(state: RootState, newItems: ItemInBag[]) {
      state.shoppingBag.itemsInBag.push(...newItems);
    },
    removeItemFromShoppingBag(state: RootState, itemId: string) {
      // state.shoppingBag.itemsInBag.filter((item) => itemId === item.id).pop();
    },
  },
  actions: {
    updateSelectedTab({ commit }, tab: string) {
      commit("setSelectedTab", tab);
    },
    addItems({ commit }, newItems: ItemInBag[] = []) {
      commit("addItemsToShoppingBag", newItems);
    },
    removeItem({ commit }, itemId: string) {
      commit("removeItemFromShoppingBag", itemId);
    },
  },
  getters: {
    selectedTab: (state) => state.tabs.selectedTab,
    getItemsInBag: (state, id: string) => state.shoppingBag.itemsInBag,
    getNumberOfItemsInShoppingBag: (state) =>
      state.shoppingBag.itemsInBag.length,
  },
});

export default store;
