import React from "react";
import { GiCupcake } from "react-icons/gi";
function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <h3>Muffin Store</h3>
        <div className="navDiv">
          <p>0</p>
          <GiCupcake className="" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
