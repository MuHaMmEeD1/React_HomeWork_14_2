import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBasketProducts, getProducts } from "../../redux/selectors";
import {
  addBasketProducts,
  clearBasketProducts,
  deleteBasketProducts,
} from "../../redux/slice/productsSlice";
import { MainDiv } from "./styles";

const BasketProductComponent = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const basketProducts = useSelector(getBasketProducts);
  const [classNameOpenClose, setClassNameOpenClose] = useState("");

  return (
    <MainDiv>
      <button
        onClick={() => {
          classNameOpenClose == ""
            ? setClassNameOpenClose("openClose")
            : setClassNameOpenClose("");
        }}
      >
        Basket
      </button>
      <div className={classNameOpenClose}>
        <ul>
          {basketProducts.map((p) => {
            return (
              <li key={p.id}>
                <p>{p.name}</p>
                <p>{p.price}</p>
                <button
                  onClick={() => {
                    dispatch(deleteBasketProducts(p.id));
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>

        <button
          onClick={() => {
            dispatch(clearBasketProducts("ok"));
          }}
        >
          All Buy
        </button>
      </div>

      <ul>
        {products.map((p) => {
          return (
            <li key={p.id}>
              <p>{p.name}</p>
              <p>{p.price}</p>
              <button
                onClick={() => {
                  dispatch(addBasketProducts(p));
                }}
              >
                Add Basket
              </button>
            </li>
          );
        })}
      </ul>
    </MainDiv>
  );
};

export default BasketProductComponent;
