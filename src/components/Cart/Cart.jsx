import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const deleteIcon = <FontAwesomeIcon icon={faTrashCan} />
const arrowIcon = <FontAwesomeIcon icon={faArrowRight} />



const Cart = ({ cart }) => {
    // const cart = props.cart; opt-1 to get the cart
    // const {cart} = props; opt-2 to get the cart
    // here the cart destructured in the cart props param
    // console.log(cart);

    let totalPrice = 0;
    let shippngTotal = 0;
    for (const product of cart){
        totalPrice = totalPrice + product.price;
        shippngTotal = shippngTotal + product.shipping;
    }

    const tax = totalPrice*7/100;
    const grandTotal = totalPrice + shippngTotal + tax;

    return (
        <div className='cart'>
            <h5>Order Summary</h5>
            <p>Selected Item: {cart.length}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping charge: ${shippngTotal}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
            <button className='clr-cart-btn'>Clear Cart {deleteIcon}</button>
            <button className='rvw-ordr-btn'>Review Order {arrowIcon}</button>
        </div>
    );
};

export default Cart;