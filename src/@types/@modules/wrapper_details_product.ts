import type { IDadosProducts } from "./wrapper_products";

export interface IOpenDetails {
  isOpen: boolean;
  productSelected: IDadosProducts;
  onClose: () => void;
}
