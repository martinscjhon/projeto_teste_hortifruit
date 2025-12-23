import type { IDadosProducts } from "./wrapper_list_products";

export interface IOpenDetails {
  isOpen: boolean;
  productSelected: IDadosProducts;
  onClose: () => void;
}
