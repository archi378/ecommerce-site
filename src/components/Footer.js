import React, { Component } from 'react';
import freeDelivery from '../assets/images/delivery.jpg'
import returnExchange from '../assets/images/return.jpg'
import trust from '../assets/images/original.jpg'
import facebook from '../assets/images/facebook.png'
import twitter from '../assets/images/twitter.png'
import instagram from '../assets/images/insta.jpg'
import {Link} from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
            <div className="row p-5">
                <div className="col-xs-12 col-md-4 pad0 footer-links">
                    <ul><span>Quic Links</span>
                        <li>Home</li>
                        <li>SmartPhones</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
                    <ul><span className="">Follow Us</span>
                        <div className="d-flex pt-3 align-items-center social-links">
                            <Link to="https://www.facebook.com/"><li><img src={facebook} alt="facebook" className="img-fluid"/></li></Link>
                            <Link to="https://twitter.com/"><li><img src={twitter} alt="twitter" className="img-fluid ml-3" style={{width:'50px'}}/></li></Link>
                            <Link to="https://www.instagram.com/"><li><img src={instagram} alt="instagram" className="img-fluid ml-3" style={{width:'30px'}}/></li></Link>
                        </div>
                    </ul>
                </div>
                <div className="col-xs-12 col-md-4 pad0 footer-links">
                    <ul><span>Our Brands</span>
                        <li>Apple</li>
                        <li>Google</li>
                        <li>Samsung</li>
                        <li>HTC</li>
                        <li>Xiaomi</li>
                        <li>Nokia</li>
                    </ul>
                </div>
                <div className="col-xs-12 col-sm-10 col-md-4 pad0 footer-links">
                    <ul><span>Our Services</span>
                        <li className="d-flex">
                            <div className="col-3 pt-2 pad0"><img src={freeDelivery} alt="free-Delivery" className="img-fluid"/></div>
                            <div className=" col-7 pt-2 text-font pad0"> Get free delivery for every order above Rs.499</div>
                        </li>
                        <li  className="d-flex">
                            <div className="col-3 pt-2 pad0"><img src={returnExchange} alt="free-Delivery" className="img-fluid"/></div>
                            <div className=" col-7 pt-2 text-font pad0">Return within 15days of receiving your order</div>
                        </li>
                        <li  className="d-flex">
                            <div className="col-3 pt-2 pad0"><img src={trust} alt="free-Delivery" className="mt-2 img-fluid"/></div>
                            <div className=" col-7 pt-2 text-font pad0">100% ORIGINAL guarantee for all products at mimishop</div>
                        </li>
                    </ul>
                </div><hr></hr>
                </div>
            </div>
        )
    }
}