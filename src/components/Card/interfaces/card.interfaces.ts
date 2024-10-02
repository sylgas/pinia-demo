export interface CardConfig {
  id: string;
  label: string;
  sourceUrl: string;
  productConfigs: ProductConfig[];
  description?: string;
}

export interface ProductConfig {
  size: string;
  price: string;
  currency: string;
  isAvailable: boolean;
}
