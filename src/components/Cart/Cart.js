import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowRight, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    return (
        <div className='cart-container'>
            <h2>Order Summary</h2>
            <div>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: ${}</p>
                <p>Total Shipping Charge: ${}</p>
                <p>Tax: ${}</p>
                <h4>Grand Total: ${}</h4>
                <button className='cart-btn bg-orange'><span>Clear Cart</span>
                    <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon>
                </button>
                <button className='cart-btn bg-yellow'><span>Review Order</span>
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
            </div>

        </div>
    );
};

export default Cart;