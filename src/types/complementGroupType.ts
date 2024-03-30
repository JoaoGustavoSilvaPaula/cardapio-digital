import { ComplementType } from './complementType';

export interface ComplementGroupType {
  complementGroup: {
    id: number;
    name: string;
    required: boolean;
    min: number;
    max: number;
    active: boolean;
    account: number;
    complements: ComplementType[];
  };
}
