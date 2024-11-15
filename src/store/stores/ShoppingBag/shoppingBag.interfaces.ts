import { ItemDetails } from '@/views/CoffeeBeans/interfaces/coffeeBeans.interfaces';

export interface ShoppingBagState {
  itemsInBag: ItemInBag[];
  itemDetails?: ItemDetails;
}

export interface ItemInBag {
  id: string;
  label: string;
  price: number;
}
