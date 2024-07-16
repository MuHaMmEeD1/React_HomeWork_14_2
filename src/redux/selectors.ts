import { ProductType } from "../types";
import { RootState } from "./store";

export const getProducts = (state: RootState): ProductType[] =>
  state.productsReducer.products;
export const getBasketProducts = (state: RootState): ProductType[] =>
  state.productsReducer.basketProducts;
