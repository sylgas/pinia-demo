import { ItemInBag, ShoppingBagState } from "@/store/stores/ShoppingBag/shoppingBag.interfaces";
import { defineStore } from 'pinia';
import { NAMESPACES } from '@/store/consts/namespace.const';

export const useShoppingBagStore = defineStore(NAMESPACES.shoppingBag, {
  state: (): ShoppingBagState => ({
    itemsInBag: [] as ItemInBag[],
  }),
  getters: {
    numberOfItemsInShoppingBag: (state: ShoppingBagState) => state.itemsInBag.length,
  },
  actions: {
    addItemsToShoppingBag(newItems: ItemInBag[]) {
      this.itemsInBag.push(...newItems);
    },
    removeItemFromShoppingBag(itemId: string) {
      const index = this.itemsInBag.findIndex((item) => item.id === itemId);
      if (index !== -1) {
        this.itemsInBag.splice(index, 1);
      }
    },
    removeAllItemsWithId(itemId: string) {
      this.itemsInBag = this.itemsInBag.filter((item) => item.id !== itemId);
    },
  },
});
