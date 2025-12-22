export interface IProductMock {
  categorieName: string;
  categorieId: string;
  products: {
    name: string;
    description: string | null;
    value: number;
    id: string;
    path: string;
  }[];
}
