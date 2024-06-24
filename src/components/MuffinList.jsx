import React from "react";
import { useSelector, useDispatch } from "react-redux";
import MuffinItem from "./MuffinItem";
import { clearCart } from "../control/cartSlice";

function MuffinList() {
  const dispatch = useDispatch();
  const { cartItems, quantity, total } = useSelector((store) => store.cart);
  return (
    <>
      {quantity < 1 ? (
        <section className="cart">
          <header>
            <h2>Basket</h2>
            <h4>Basket is empty</h4>
          </header>
        </section>
      ) : (
        <section className="cart">
          <header>
            <h2>Basket</h2>
          </header>
          <div>
            {cartItems.map((item) => {
              return <MuffinItem key={item.id} {...item} />;
            })}
          </div>
          <footer>
            <hr />
            <div>
              <h4>
                Total <span>{total} $</span>
              </h4>
            </div>
            <button className="clearButton" onClick={() => dispatch(clearCart())}>Clear</button>
          </footer>
        </section>
      )}
    </>
  );
}

export default MuffinList;
