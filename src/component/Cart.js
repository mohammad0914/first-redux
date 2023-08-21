import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem } from "../actionTypes/cartActions";

const Cart = () => {
  const state = useSelector((state) => state);
  const disPatch = useDispatch();
  console.log("store", state);
  return (
    <div className="cart">
      <h2>Number of items in Cart:{state.numOfItems}</h2>
      <button className="green" onClick={() => disPatch(addItem())}>
        Add Item to Cart
      </button>
      <button className="red" onClick={() => disPatch(deleteItem())}>
        Remove Item from Cart
      </button>
    </div>
  );
};

export default Cart;
