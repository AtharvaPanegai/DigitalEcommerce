/** @format */

import React from "react";
import "./product.css";
import { useStateValue } from "./StateProvider";

function ProductComponent({ id, title, image, price, rating,file,hideDownloadButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispacth product to the data layer
    dispatch({
      type: "Add_to_basket",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        file : file,
      },
    });
  };
  return (
    <div className='ProductComponent'>
      <div className='product_info'>
        <p>{title}</p>
        <p className='product_Price'>
          <small>₹</small>
          <strong> {price} </strong>
        </p>
        <div className='product_Rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt='' />
      <button onClick={addToBasket}>Add to Basket</button>
      {!!hideDownloadButton && (<button> <a href = {file} download> Download Here </a></button>)}
      
    </div>
  );
}

export default ProductComponent;
