import React from "react";
import { GiCupcake } from "react-icons/gi";
import { useSelector } from "react-redux";


function Navbar() {

  const {quantity} = useSelector((store) => store.cart);
  console.log( useSelector((store) => store.cart));
  return (
    <nav>
      <div className="navbar">
        <h3>Muffin Store</h3>
        <div className="navDiv">
          <div className="itemDiv">
            <p>{quantity}</p>
          </div>

          <GiCupcake className="itemsIcon" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
