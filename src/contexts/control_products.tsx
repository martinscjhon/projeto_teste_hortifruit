import { createContext, type ReactNode, useMemo, useState } from "react";
import type {
  Product,
  ProductContextValue,
} from "src/@types/@contexts/control_products";

export const ProductContext = createContext<ProductContextValue | undefined>(
  undefined,
);

/* =======================
 * Provider
 * ======================= */

export function ProductProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);

  const addProduct = (product: Product) => {
    setProducts((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) return prev;
      return [...prev, product];
    });
  };

  const removeProductById = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const clearProducts = () => setProducts([]);

  const updateProduct = (id: string, patch: Partial<Product>) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...patch } : p)),
    );
  };

  const value = useMemo(
    () => ({
      products,
      addProduct,
      removeProductById,
      clearProducts,
      updateProduct,
    }),
    [products],
  );

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}
