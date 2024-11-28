interface Icategory {
  id: number;
  name: string;
  image: string;
}

export interface IDataCategories {
  data: Icategory[];
}

export interface IPostProducts {
  title: string;
  price: number;
  description: string;
  categoryId: number | string;
  images: [string];
}

export interface IResponseProducts {
  data: IPostProducts[];
}
