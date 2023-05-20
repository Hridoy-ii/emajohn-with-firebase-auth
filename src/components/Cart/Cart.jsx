import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const deleteIcon = <FontAwesomeIcon icon={faTrashCan} />
const arrowIcon = <FontAwesomeIcon icon={faArrowRight} />



const Cart = ({ cart, handleClearCart }) => {
    // const cart = props.cart; opt-1 to get the cart
    // const {cart} = props; opt-2 to get the cart
    // here the cart destructured in the cart props param
    console.log(cart);

    let totalPrice = 0;
    let shippingTotal = 0;
    let quantity = 0;
    for (const product of cart){
        product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price * product.quantity;
        shippingTotal = shippingTotal + product.shipping * product.quantity;
        quantity = quantity + product.quantity;
    }

    const tax = totalPrice*7/100;
    const grandTotal = totalPrice + shippingTotal + tax;

    return (
        <div className='cart'>
            <h5>Order Summary</h5>
            <p>Selected Item: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping charge: ${shippingTotal}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
            <button onClick={handleClearCart} className='clr-cart-btn'>Clear Cart {deleteIcon}</button>
            <Link to='/OrderReview'><button className='rvw-ordr-btn'>Review Order {arrowIcon}</button></Link>
            
        </div>
    );
};

export default Cart;