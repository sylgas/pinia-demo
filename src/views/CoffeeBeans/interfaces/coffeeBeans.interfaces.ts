export interface ItemOption {
  price: number;
  currency: string;
  size: string;
  isAvailable: boolean;
}

export interface ItemDetails {
  id?: string;
  name?: string;
  options?: ItemOption[];
}
