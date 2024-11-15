import { defineStore } from 'pinia';
import { NAMESPACES } from '@/store/consts/namespace.const';

export const useNavigationStore = defineStore(NAMESPACES.navigation, {
  state: () => ({
    selectedTab: 'tab1' as string,
  }),
  actions: {
    setSelectedTab(tab: string) {
      this.selectedTab = tab;
    },
  },
});
