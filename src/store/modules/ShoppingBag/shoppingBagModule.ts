import { Module } from "vuex";
import { RootState } from "@/store";
import { ItemInBag } from "@/store/modules/ShoppingBag/shoppingBag.interfaces";
import { ItemDetails } from "@/views/CoffeeBeans/interfaces/coffeeBeans.interfaces";

export interface ShoppingBagState {
  itemsInBag: ItemInBag[];
  itemDetails: ItemDetails;
}

const state: ShoppingBagState = {
  itemsInBag: [],
  itemDetails: {},
};

const mutations = {
  addItemsToShoppingBag(state: ShoppingBagState, newItems: ItemInBag[]) {
    state.itemsInBag.push(...newItems);
  },
  removeItemFromShoppingBag(state: ShoppingBagState, itemId: string) {
    const index = state.itemsInBag.findIndex((item) => item.id === itemId);
    if (index !== -1) {
      state.itemsInBag.splice(index, 1);
    }
  },
  setItemDetails(state: ShoppingBagState, itemDetails: ItemDetails) {
    state.itemDetails = itemDetails;
  },
};

const actions = {
  addItems({ commit }, newItems: ItemInBag[] = []) {
    commit("addItemsToShoppingBag", newItems);
  },
  removeItem({ commit }, itemId: string) {
    commit("removeItemFromShoppingBag", itemId);
  },
  setItemDetails({ commit }, itemDetails: ItemDetails) {
    commit("setItemDetails", itemDetails);
  },
};

const getters = {
  getItemsInBag: (state: ShoppingBagState, id: string) => state.itemsInBag,
  getNumberOfItemsInShoppingBag: (state: ShoppingBagState) =>
    state.itemsInBag.length,
  getItemDetails: (state: ShoppingBagState) => state.itemDetails,
};

export const shoppingBagModule: Module<ShoppingBagState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
