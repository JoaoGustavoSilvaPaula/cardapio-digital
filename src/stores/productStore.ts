import { create } from 'zustand';

type product = {
  id: number;
  name: string;
};
type complement = {
  id: number;
  name: string;
  price: number;
  count: number;
};

type SelectProdutctState = {
  product: product;
  complements: complement[];
  countSelectedComplement: number;
  addProduct: (item: product) => void;
  updateComplement: (complement: complement, count: number) => void;
  removeProduct: () => void;
};

export const useProductStore = create<SelectProdutctState>((set) => ({
  product: { id: 0, name: '' },
  complements: [],
  countSelectedComplement: 0,
  addProduct: (item) => set(() => ({ product: item })),
  updateComplement: (complement, count) =>
    set((state) => ({
      complements: addOrupdateComplement(state, complement, count),
      countSelectedComplement: state.countSelectedComplement + count,
    })),
  removeProduct: () => set(() => ({ product: { id: 0, name: '' }, complements: [] })),
}));

function addOrupdateComplement(state: SelectProdutctState, complement: complement, count: number) {
  if (state.complements.find((x) => x.id == complement.id)) {
    return state.complements.map((item) =>
      item.id === complement.id ? { ...item, count: item.count + count } : item,
    );
  } else {
    return [...state.complements, { ...complement, count: 1 }];
  }
}
