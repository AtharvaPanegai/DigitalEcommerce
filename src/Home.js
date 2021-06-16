/** @format */

import React from "react";
import "./Home.css";
import ProductComponent from "./ProductComponent";
// to download files
import AfterEffect from "./afterEffects.png";
import premierPro from "./premierPro.png"
import multiSim from "./ni-multisim.png";
import photoShop from "./photoShop.png";
import matlab from "./matLab.png"
import href from "./hrefLogo.png"

function Home() {
  return (
    <div className='Home'>
      <div className='home_Container'>
        <img
          className='home_Image'
          src='https://image.freepik.com/free-photo/coding-man_1098-18084.jpg'
          height = "500px"
          alt=''
        />
      </div>
      <div className='home_row'>
        {/* product Component */}
        <ProductComponent
          id = "1"
          title='Adobe After Effects'
          image={AfterEffect}
          price={100}
          rating={5}
          file = {AfterEffect}
        />
        <ProductComponent
        id = "2"
          title = "Premier Pro"
          image = {premierPro}
          price = {1500}
          rating = {4}
          file = {premierPro}
        />
        {/* product Component */}
      </div>
      <div className='home_row'>
        <ProductComponent 
        id = "3"
        title = "MultiSim"
        image = {multiSim}
        price = {30000}
        rating = {5}
        file = {multiSim}

        />
        <ProductComponent
        id = "4"
          title = "Matlab"
          image = {matlab}
          price = {3000}
          rating = {2}
          file = {matlab}
          />
        <ProductComponent 
        id = "5"
        title = 'PhotoShop'
        image = {photoShop}
        price = {8000}
        rating = {4}
        file = {photoShop}
        />
        {/* product Component */}
        {/* product Component */}
        {/* product Component */}
      </div>
      <div className='home_row'>
        <ProductComponent
        id = "6"
        title = "Href SEO"
        image = {href}
        price = {100000}
        rating = {5}
        file = {href}
        />
        {/* product Component */}
      </div>
    </div>
  );
}

export default Home;
