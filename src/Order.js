import React from 'react'
import "./Order.css"
import moment from "moment"
import CheckOutProduct from './CheckOutProduct'
import CurrencyFormat from 'react-currency-format'

function Order({order}) {
    return (
        <div className = "order">
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mm:ss a')} </p>
            <p className ="order_id"> <small> {order.id} </small> </p>
            {order.data.basket?.map(item => (
                <CheckOutProduct
                id = {item.id}
                title = {item.title}
                image = {item.image}
                price = {item.price}
                rating = {item.rating}
                hideButton
                file = {item.file}
              />
            ))}
            <CurrencyFormat
                  renderText={(value) => <h3 className="order_total">Order Total: {value}</h3>}
                  decimalScale={2}
                  value={order.data.amount / 100}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                />
        </div>
    )
}

export default Order
