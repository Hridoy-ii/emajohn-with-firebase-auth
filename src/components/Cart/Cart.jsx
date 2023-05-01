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
    return (
        <div className='cart'>
            <h5>Order Summary</h5>
            <p>Selected Item: {cart.length}</p>
            <p>Total Price: </p>
            <p>Total Shipping charge: </p>
            <p>Tax: </p>
            <h6>Grand Total: </h6>
            <button className='clr-cart-btn'>Clear Cart {deleteIcon}</button>
            <button className='rvw-ordr-btn'>Review Order {arrowIcon}</button>
        </div>
    );
};

export default Cart;