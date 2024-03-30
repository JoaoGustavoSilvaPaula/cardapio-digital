import { ProductType } from './productType';

export interface CategoryType {
  id: number;
  name: string;
  products: ProductType[];
}
