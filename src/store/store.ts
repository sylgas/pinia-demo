import { createStore } from "vuex";

interface RootState {
  tabs: {
    selectedTab: string;
  };
}

const store = createStore<RootState>({
  state: {
    tabs: {
      selectedTab: "tab1",
    },
  },
  mutations: {
    setSelectedTab(state, tab: string) {
      state.tabs.selectedTab = tab;
    },
  },
  actions: {
    updateSelectedTab({ commit }, tab: string) {
      commit("setSelectedTab", tab);
    },
  },
  getters: {
    selectedTab: (state) => state.tabs.selectedTab,
  },
});

export default store;
