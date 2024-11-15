import { ItemInBag } from '@/store/stores/ShoppingBag/shoppingBag.interfaces';

export interface ShoppingBagItem extends ItemInBag {
  count: number;
}
