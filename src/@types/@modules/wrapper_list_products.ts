export interface IWrapperListProducts {
  values: IDadosProducts[];
  subtitle: string;
  categorieUuid?: string;
}

export interface IDadosProducts {
  name: string;
  description: string | null;
  value: number;
  id: string;
  path: string;
}
