import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
    const {product, handleAddToCart} =  props;
    const {name,price, img, ratings, seller} = product;
    return (
        <div className='card'>
           <div className="imgBox">
                <img src={img} alt="" />
            </div>
            <div className="contentBox">
                <h3>{name}</h3>
                <h4>Price: ${price}</h4>
                <p>Manufacturer: {seller} </p>
                <p>Rating: {ratings} Star </p>
            </div>
            <button onClick={()=> handleAddToCart(product)} className='card-btn' > <span>Add to Card</span>  
             <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </button>
        </div>
    );
};

export default Product;