import { ComplementGroupType } from './complementGroupType';

export interface ProductType {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  active: boolean;
  categoryId: number;
  accountId: number;
  complementGroup: ComplementGroupType[];
}
