/** @format */

import React from "react";
import "./CheckOutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckOutProduct({ id, image, title, price, rating,hideButton,hideDownloadButton,file }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    // to remove the items from basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className='Checkout_product'>
      <img className='checkoutProduct_image' src={image} />
      <div className='checkoutproduct_info'>
        <p className='checkoutproduct_title'>{title}</p>
        <p className='checkoutproduct_price'>
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className='product_rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        {!hideButton && (<button onClick={removeFromBasket}>Remove From Basket</button>)}
        {!hideDownloadButton && (<button> <a href = {file} download> Download Here </a></button>)}
      </div>
    </div>
  );
}

export default CheckOutProduct;
