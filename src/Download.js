/** @format */

import React from "react";
import "./Download.css";
import abc from "./abc.jpg"

function Download() {
  return (
    <div className='download'>
      <h1>This is Download component</h1>
      <button>
      <a href={abc} download> Download Here </a>
      </button>
    </div>
  );
}

export default Download;

