import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] =useState([]);
    const [card, setCard] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    const handleAddToCart =(product)=>{
        // console.log(product);
        const newCard = [...card, product];
        setCard(newCard);
    }
    return (
        <section className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=> <Product 
                        key={product.id}
                        product={product}
                        handleAddToCart ={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="summary-container">
                <h1>This is Summary</h1>
                <h2>Select Items: {card.length}</h2>
            </div>
        </section>
    );
};

export default Shop;