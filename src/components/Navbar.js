import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/navbar.css';
import SearchBar from './SearchBar';
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
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <button className="navbar-toggler" id="humberg" onClick={this.handleClick}>
                <i className="fas fa-bars"></i>
            </button>
                <Link to="/" className="logo">
                    <img src={Logo}  alt="minishop-logo" id="logo" />
                </Link><span className="logotext d-none d-md-block pt-2">MiniSHOP</span>
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
                <div className="col-xs-12 col-md-4 col-lg-5 col-xl-5 displayNone">
                            <SearchBar />
                        </div>
                <div className="slide-navbar" id="slide-navbar">
                    <button className="navbar-toggler" id="humberg" onClick={this.handleClick}>
                        <i className="fas fa-times"></i>
                    </button>
                    <div className="side-nav">
                    <div>
                    <Link to="/" className="logo">
                    <img src={Logo}  alt="minishop-logo" id="logo" />
                    </Link><span className="logotext">MiniSHOP</span></div></div>
                    <li className="nav-item" onClick={this.handleClick}>
                        <Link to="/" className="nav-link"><i className="fas fa-home pr-3"></i>Home</Link>
                    </li>
                    <li className="nav-item"  onClick={this.handleClick}>
                        <Link to="/ProductList" className="nav-link"><i className="fas fa-mobile-alt pr-3"></i>SmartPhones</Link>
                    </li>
                    <li className="nav-item"  onClick={this.handleClick}>
                        <Link to="/" className="nav-link"><i className="fas fa-phone pr-3"></i>ContactUs</Link>
                    </li>
                </div>
                <ul id="account-info" className="navbar-nav position-absolute right25">
                    <li className=" nav-item nav-text text-center text-font mx-2">
                        <i className="material-icons d-block">bookmark_border</i><span className="d-none d-md-block">Wishlist</span>
                    </li>
                    <li className="nav-item text-center text-font mx-2">
                        <Link to="/cart" className="nav-text" >
                            <i className="material-icons d-block">work_outline</i><span className="d-none d-md-block">My Cart</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}
