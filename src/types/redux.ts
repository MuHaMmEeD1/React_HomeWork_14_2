import { ProductType } from "./index";

export type ProductState = {
  products: ProductType[];
  basketProducts: ProductType[];
};

export type AddProduct = {
  type: string;
  payload: ProductType;
};

export type DeleteProduct = {
  type: string;
  payload: number;
};

export type ClearProducts = {
  type: string;
  payload: string;
};
