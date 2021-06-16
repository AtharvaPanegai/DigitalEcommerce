/** @format */

import React from "react";
import "./Checkout.css";
import CheckOutProduct from "./CheckOutProduct";
import { useStateValue } from "./StateProvider";
import SubTotalComponent from "./SubTotalComponent";


function CheckOut() {
  const [{basket,user},dispatch] = useStateValue();
  return (
    <div className='CheckOut'>
      <div className='checkout_left'>
        <img
          className='checkout_ad'
          src='https://static.businessworld.in/article/article_extra_large_image/1590571015_oiei4u_Amazon.png'
        />
        <div>
          <h3>Hello!! {user?.email}</h3>
          <h2 className='checkout_title'>Your Shopping Basket</h2>

        {basket.map(item => (
          <CheckOutProduct
            id = {item.id}
            title = {item.title}
            image = {item.image}
            price = {item.price}
            rating = {item.rating}
            hideDownloadButton
          />
         ))}
           
        </div>
      </div>
      <div className='checkout_right'>
        <SubTotalComponent />
        {/* CheckoutProduct */}
      </div>
    </div>
  );
}

export default CheckOut;
