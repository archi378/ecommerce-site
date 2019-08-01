import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/navbar.css';
import Logo from '../web-logo.png';

export default class Navbar extends Component {

    handleClick =()=> {
        let element = document.getElementById('collapse_target');
        let slideNav = document.getElementById('slide-navbar');
        // element.style.display = (element.style.display != 'block' ? 'block' : 'none' );
        // slideNav.style.display = (slideNav.style.width != '0' ? '0' : ' ' );
        slideNav.classList.toggle('active');
    }
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <button className="navbar-toggler" id="humberg" onClick={this.handleClick}>
                <i className="fas fa-bars"></i>
            </button>
                <Link to="/">
                    <img src={Logo} className="logo" alt="minishop-logo" id="logo" />
                </Link>
                <div className="display-none-mobile" id="collapse_target">
                <ul className="navbar-nav align-item-center">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/ProductList" className="nav-link">SmartPhones</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">ContactUs</Link>
                    </li>
                </ul>
                </div>
                <div className="slide-navbar" id="slide-navbar">
                    <button className="navbar-toggler" id="humberg" onClick={this.handleClick}>
                        <i className="fas fa-times"></i>
                    </button>
                    <li className="nav-item">
                        <Link to="/" className="nav-link"><i className="fas fa-home pr-3"></i>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/ProductList" className="nav-link"><i className="fas fa-mobile-alt pr-3"></i>SmartPhones</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link"><i className="fas fa-phone pr-3"></i>ContactUs</Link>
                    </li>
                </div>
                <Link to="/cart" className="ml-auto">
                <button className="cart">
                    <i className="fas fa-cart-plus pr-2"></i>My Cart
                </button>
                </Link>
            </nav>
        )
    }
}
