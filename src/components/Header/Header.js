import React from 'react';
import Logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <header className='header'>
            <div className='logo'>
                <img src={Logo} alt="" />
            </div>
            <div className='menu-bar'>
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/oderReview">Oder Review</a>
                <a href="/manageInventory">Manage Inventory</a>
            </div>
        </header>
    );
};

export default Header;