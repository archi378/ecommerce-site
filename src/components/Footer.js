import React, { Component } from 'react';
import freeDelivery from '../assets/images/delivery.png'
import returnExchange from '../assets/images/return.jpg'
import trust from '../assets/images/original.png'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
            <div className="row p-5">
                <div className="col-xs-12 col-md-4">
                    <ul>Quic Links
                        <li>Home</li>
                        <li>SmartPhones</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="col-xs-12 col-md-4">
                    <ul>Our Brands
                        <li>Apple</li>
                        <li>Google</li>
                        <li>Samsung</li>
                        <li>HTC</li>
                        <li>Xiaomi</li>
                        <li>Nokia</li>
                    </ul>
                </div>
                <div className="col-xs-12 col-md-4">
                    <ul>Our Services
                        <li><span><img src={freeDelivery} alt="free-Delivery" className="img-fluid"/></span>
                            <span className="pl-3 text-font"> Get free delivery for every order above Rs.499</span>
                        </li>
                        <li><span><img src={returnExchange} alt="free-Delivery" className="img-fluid"/></span>
                            <span className="pl-3 text-font">Return within 15days of receiving your order</span>
                        </li>
                        <li><span><img src={trust} alt="free-Delivery" className="mt-2 img-fluid"/></span>
                            <span className="pl-3 text-font">100% ORIGINAL guarantee for all products at mimishop</span>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        )
    }
}