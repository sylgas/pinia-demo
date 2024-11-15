import { CoffeeBag } from "@/store/stores/CoffeeBags/coffeeBag.interfaces";

import { defineStore } from 'pinia';
import { NAMESPACES } from '@/store/consts/namespace.const';


export const coffeeBagStore = defineStore(NAMESPACES.coffeeBags, {
  state: () => ({
    coffeeBags: [] as CoffeeBag[],
  }),
  actions: {
    setCoffeeBags(coffeeBags: CoffeeBag[] = []) {
      this.coffeeBags.push(...coffeeBags);
    },
  },
});
