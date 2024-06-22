import React from "react";
import { useSelector } from "react-redux";
import MuffinItem from "./MuffinItem";

function MuffinList() {
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
            <button className="clearButton">Clear</button>
          </footer>
        </section>
      )}
    </>
  );
}

export default MuffinList;
