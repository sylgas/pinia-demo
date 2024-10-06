import { Module } from "vuex";
import { RootState } from "@/store";
import { CoffeeBag } from "@/store/modules/CoffeeBags/coffeeBag.interfaces";

export interface CoffeeBagState {
  coffeeBags: CoffeeBag[];
}

const state: CoffeeBagState = {
  coffeeBags: [],
};

const mutations = {
  setCoffeeBags(state: CoffeeBagState, coffeeBags: CoffeeBag[] = []) {
    state.coffeeBags.push(...coffeeBags);
  },
};

const actions = {
  loadCoffeeBags({ commit }, coffeeBags: CoffeeBag[] = []) {
    commit("setCoffeeBags", coffeeBags);
  },
};

const getters = {};

export const coffeeBagsModule: Module<CoffeeBagState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
