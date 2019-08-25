import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/navbar.css';
import SearchBar from './SearchBar';
import Logo from '../web-logo.png';
import {ProductConsumer} from '../context';

export default class Navbar extends Component {

    handleClick =()=> {
        let element = document.getElementById('collapse_target');
        let slideNav = document.getElementById('slide-navbar');
        // element.style.display = (element.style.display != 'block' ? 'block' : 'none' );
        // slideNav.style.display = (slideNav.style.width != '0' ? '0' : ' ' );
        slideNav.classList.toggle('active');
    }
    handleSearch =()=> {
        let element = document.getElementById('searchbox');
        // element.style.display = (element.style.display != 'block' ? 'block' : 'none' );
        // slideNav.style.display = (slideNav.style.width != '0' ? '0' : ' ' );
        element.classList.toggle('activeRight');
        console.log('search')
    }
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid nav-container d-flex d-md-block pl-3">
            <button className="navbar-toggler" id="humberg" onClick={this.handleClick}>
                <i className="material-icons">menu</i>
            </button>
            {/* <div className="row">
                <div className="col-md-8">
                    <ul className="navbar-nav align-item-center">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home&nbsp; &nbsp;|</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/ProductList" className="nav-link">About Us&nbsp; &nbsp;|</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/ProductList" className="nav-link">My Account&nbsp; &nbsp;|</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <ul className="navbar-nav profile-link align-item-center">
                        <li className="nav-item">              
                        <Link to="/" className="nav-link d-flex floatRight"><span><i class="material-icons">account_circle</i></span>Sign In | Register</Link>
                        </li>
                    </ul>
                </div>
            </div> */}
            <div className="row">
                <div className="col-md-8 col-lg-9 d-flex margin-top: -10px mobile-padding logoWrapper">
                    <Link to="/" className="logo">
                        <img src={Logo}  alt="minishop-logo" id="logo" />
                    </Link><span className="logotext d-none d-md-block">iniSHOP</span>
                </div>
                <div className="col-xs-12 col-md-4 col-lg-3 pt-2 displayNone">
                    <ProductConsumer>
                        {data => {
                            return(
                                <SearchBar handleChange={(e)=>{data.handleChange(e)}} handleSubmit={(e)=>{data.handleSubmit(e)}}/>
                            )
                        }}
                    </ProductConsumer>
                </div>
            </div>
            <div className="row mobile-view">
                <div className="col-md-8 d-none d-md-block pad0">
                    <div className="" id="collapse_target">
                        <ul className="navbar-nav align-item-center">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home&nbsp; &nbsp;|</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/ProductList" className="nav-link">SmartPhones&nbsp; &nbsp;|</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">ContactUs</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4 pad0">
                <ProductConsumer>
                    {data => {
                        return (
                            <ul id="account-info" className="navbar-nav floatRight d-flex align-items-center">
                                <li className="d-flex search-outer d-md-none">
                                    <span id="searchbox-wrapper" >
                                        <input type="text" id="searchbox" placeholder="search" className="search-input" /></span>
                                    <i className="material-icons search-icon pt-2 nav-text" onClick={this.handleSearch}>search</i>
                                </li>
                                <li className=" nav-item nav-text text-center text-font mx-2">
                                <Link to="/Wishlist" className="nav-text" >
                                    <i className="material-icons d-block">bookmark_border</i>
                                    <span className={`nav-indicator wishlist-indicator ${data.wishlist.length?'d-block':'d-none'}`}>{data.wishlist.length}</span>
                                    <span className="d-none d-md-block">Wishlist</span>
                                    </Link>
                                </li>
                                <li className="nav-item text-center text-font mx-2">
                                    <Link to="/cart" className="nav-text" >
                                        <i className="material-icons d-block">work_outline</i>
                                        <span className={`nav-indicator cart-indicator ${data.cart.length?'d-block':'d-none'}`}>{data.cart.length}</span>
                                        <span className="d-none d-md-block">My Cart</span>
                                    </Link>
                                </li>
                            </ul>
                        )
                    }}
                </ProductConsumer>
                </div>
            </div>
                <div className="slide-navbar" id="slide-navbar">
                    <button className="navbar-toggler" id="humberg" onClick={this.handleClick}>
                        <i className="material-icons">close</i>
                    </button>
                    <div className="side-nav">
                    <div>
                    <Link to="/" className="logo">
                    <img src={Logo}  alt="minishop-logo" id="logo" />
                    </Link><span className="logotext">iniSHOP</span></div></div>
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
                </div>
            </nav>
        )
    }
}
