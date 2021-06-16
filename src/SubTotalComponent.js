/** @format */

import React from "react";
import "./Subtotal.css";
import NumberFormat from 'react-number-format';
import { useStateValue } from "./StateProvider";
import { getbasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";


function SubTotalComponent() {
  const history = useHistory();
  const [{basket},dispatch] = useStateValue();
  return (
    <div className='subtotal'>
      <NumberFormat
        renderText = {(value) =>(
          <>
          <p>Subtotal ({basket.length} items) : 
            <strong>{value}</strong>
          </p>
          <small className = "subtotal_gift">
            <input type = "checkbox" /> This Order Contains Gift
          </small>
          </>

        )}
        decimalScale = {2}
        value = {getbasketTotal(basket)}
        displayType = {"text"}
        thousandSeparator = {true}
        prefix = {"$"}
      />
      <button onClick = {e =>history.push("/payment") }>Proceed To ChechOut</button>
    </div>
  );
}

export default SubTotalComponent;
