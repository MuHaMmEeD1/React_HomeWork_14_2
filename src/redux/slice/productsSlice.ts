import { ProductType } from "./../../types/index";
import {
  ProductState,
  AddProduct,
  DeleteProduct,
  ClearProducts,
} from "./../../types/redux";
import { createSlice } from "@reduxjs/toolkit";

const productsState = {
  products: [
    { id: 1, name: "Laptop", price: 999.99 },
    { id: 2, name: "Smartphone", price: 599.99 },
    { id: 3, name: "Headphones", price: 149.99 },
    { id: 4, name: "Smartwatch", price: 199.99 },
    { id: 5, name: "Camera", price: 749.99 },
    { id: 6, name: "Tablet", price: 399.99 },
    { id: 7, name: "Wireless Charger", price: 29.99 },
    { id: 8, name: "Bluetooth Speaker", price: 89.99 },
    { id: 9, name: "Gaming Mouse", price: 59.99 },
    { id: 10, name: "External Hard Drive", price: 89.99 },
  ],
  basketProducts: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState: productsState,
  reducers: {
    addBasketProducts: {
      reducer(state: ProductState, action: AddProduct) {
        state.basketProducts.push(action.payload);
      },
      prepare(newProduct: ProductType) {
        return {
          payload: {
            id: Date.now(),
            name: newProduct.name,
            price: newProduct.price,
          },
        };
      },
    },

    deleteBasketProducts: {
      reducer(state: ProductState, action: DeleteProduct) {
        state.basketProducts.forEach((p, i) => {
          if (p.id == action.payload) {
            state.basketProducts.splice(i, 1);
          }
        });
      },
      prepare(id: number) {
        return {
          payload: id,
        };
      },
    },

    clearBasketProducts: {
      reducer(state: ProductState, action: ClearProducts) {
        state.basketProducts = [];
      },
      prepare(s: string) {
        return { payload: s };
      },
    },
  },
});

export const { addBasketProducts, deleteBasketProducts, clearBasketProducts } =
  productsSlice.actions;
export const productsReducer = productsSlice.reducer;
