import { ItemInBag, ShoppingBagState } from "@/store/stores/ShoppingBag/shoppingBag.interfaces";
import { defineStore, StoreDefinition } from 'pinia';
import { NAMESPACES } from '@/store/consts/namespace.const';
import { computed, ref } from 'vue';

export const useShoppingBagSetupStore: StoreDefinition<string, ShoppingBagState> =
    defineStore(
        NAMESPACES.shoppingBag, () => {
          const itemsInBag = ref([] as ItemInBag[]);
          const numberOfItemsInShoppingBag =
              computed(() => itemsInBag.value.length);
          function addItemsToShoppingBag(newItems: ItemInBag[]) {
            itemsInBag.value.push(...newItems);
          }
          function removeItemFromShoppingBag(itemId: string) {
            const index = itemsInBag.value.findIndex((item) => item.id === itemId);
            if (index !== -1) {
              itemsInBag.value.splice(index, 1);
            }
          }
          function removeAllItemsWithId(itemId: string) {
            itemsInBag.value = itemsInBag.value.filter((item) => item.id !== itemId);
          }
          return {
            itemsInBag,
            numberOfItemsInShoppingBag,
            addItemsToShoppingBag,
            removeItemFromShoppingBag,
            removeAllItemsWithId
          };
        },
    );
