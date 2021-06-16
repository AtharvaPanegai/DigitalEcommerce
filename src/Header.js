/** @format */

import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispacth] = useStateValue();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className='header'>
      <Link to='/'>
        <img
          className='logo'
          src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
        />
      </Link>

      <div className='header_Search'>
        <input className='header_SearchInput' />
        <SearchIcon className='header_SearchIcon' />
      </div>
      <div className='header_Nav'>
        <Link to={!user && "/login"}>
          <div className='header_option' onClick={handleAuth}>
            <span className='headerOption_lineOne'>Hello {user?.email}</span>
            <span className='headerOption_lineTwo'>
              {user ? "SignOut" : "SignIn"}
            </span>
          </div>
        </Link>
        <Link to='/orders'>
          <div className='header_option'>
            <span className='headerOption_lineOne'>Returns</span>
            <span className='headerOption_lineTwo'>and Orders</span>
          </div>
        </Link>

        <div className='header_option'>
          <span className='headerOption_lineOne'>Your </span>
          <span className='headerOption_lineTwo'>Prime</span>
        </div>
        <Link to='/checkout'>
          <div className='headerOption_Basket'>
            <ShoppingBasketIcon className='headerOption_BasketIcon' />
            <span className='headerOption_lineTwo header_BasketCount'>
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
