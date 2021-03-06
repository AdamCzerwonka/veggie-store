import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "./../CartContext";
import { FaShoppingCart, FaSearch } from "react-icons/fa";

import "./../static/styles/NavBar.scss";
import logo from "./../static/img/johnny_automatic_veggies.svg";

const NavBar = () => {
  const [searchText, setSearchText] = useState("");
  const { cart } = useContext(CartContext);

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="search__bar">
        <FaSearch className="search__bar__icon" />
        <input
          type="text"
          placeholder="Search for veggies"
          className="search_bar_input"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <ul className="links">
        <li>
          <NavLink to="/" exact>
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/joinus">Join us</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>

      <NavLink to="/cart">
        <div className="cart">
          <FaShoppingCart className="cart__icon" /> Cart
          <div className="cart__amount">{cart.length}</div>
        </div>
      </NavLink>
    </nav>
  );
};

export default NavBar;
