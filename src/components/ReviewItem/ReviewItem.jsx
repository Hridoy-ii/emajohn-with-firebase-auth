import React from 'react';
import './ReviewItem.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = ({ product, handleRemoveFromCart }) => {
    const { id, img, price, name, quantity } = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='product-details'>
                <p className='product-title'>{name}</p>
                <p>Price: <span className='orng-text'>${price}</span></p>
                <p>Order Quantity: <span className='orng-text'>{quantity}</span></p>
            </div>
            <button onClick={() => handleRemoveFromCart(id)} className='dlt-btn'>
                <FontAwesomeIcon className='dlt-icon' icon={faTrashCan} />
            </button>
        </div>
    );
};

export default ReviewItem;