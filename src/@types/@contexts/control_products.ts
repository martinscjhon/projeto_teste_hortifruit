export type Product = {
  id: string;
  price: number;
  description: string | null;
  path: string;
  name: string;
  quantity: number;
};

export type ProductContextValue = {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProductById: (id: string) => void;
  clearProducts: () => void;
  updateProduct: (id: string, patch: Partial<Product>) => void;
};
