export interface ItemConfig {
  size: string;
  price: string;
  currency: string;
  isAvailable: boolean;
}

export interface CoffeeBag {
  id: string;
  label: string;
  sourceUrl: string;
  productConfigs: ItemConfig[];
  description?: string;
}
