import { Module } from "vuex";
import { RootState } from "@/store/store";

export interface NavigationState {
  selectedTab: string;
}

const state: NavigationState = {
  selectedTab: "tab1",
};

const mutations = {
  setSelectedTab(state: NavigationState, tab: string) {
    state.selectedTab = tab;
  },
};

const actions = {
  updateSelectedTab({ commit }, tab: string) {
    commit("setSelectedTab", tab);
  },
};

const getters = {
  selectedTab: (state: NavigationState) => state.selectedTab,
};

export const navigationModule: Module<NavigationState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
