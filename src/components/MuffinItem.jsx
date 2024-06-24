import React from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { removeItem } from "../control/cartSlice"

function MuffinItem({ id, title, price, img, quantity }) {
    const dispatch = useDispatch();
  return (
    <div className="cartItem"> 
      <img src={img} alt="" />
      <div className="cartInfo">
        <h4>{title}</h4>
        <h4>{price}$</h4>
        <div>
          <button className="cartQuantityButton">
            <BsChevronUp />
          </button>
          <p className="cartQuantity">{quantity}</p>
          <button className="cartQuantityButton">
            <BsChevronDown />
          </button>
        </div>
        <button className="cartDeleteButton" onClick={()=>{ dispatch(removeItem(id))}}>Delete</button>
      </div>
    </div>
  );
}

export default MuffinItem;
