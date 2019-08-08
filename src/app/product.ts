export enum Sex {men = 'men', women = 'women', children = 'children'}

export interface Product {
  name: string;
  price: string;
  size: string;
  img: string;
  sex: Sex;
  id?: number;
  description?: string;
}
