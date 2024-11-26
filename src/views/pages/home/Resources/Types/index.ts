interface Icategory {
  id: number;
  name: string;
  image: string;
}

export interface IResponseCategory {
  data: Icategory[];
}

export interface Iproducts {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Icategory;
  images: [string];
}

export interface IResponseProduts {
  data: Iproducts[];
}

export interface IvalueChart {
  value: string | number;
  index: number;
}
