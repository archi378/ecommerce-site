import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';

export default class Product extends Component {
    handleWishlist = () =>{
        let element = document.getElementById('wishlist');
        element.classList.toggle('wishlist-btn-clicked');
        console.log('wishlist')
    }
    render() {
        const { id, title, img, price, inCart, color}= this.props.product;
        return (
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                <div className="card mb-3">
                    <div className="img-container p-3">
                        <Link to="/ProductDetails">
                            <img src={img} alt="product-image"  className=" card-img img-width img-fluid"/>
                        </Link>
                    </div>
                    <button className={`btn btn-primary addto-cart-btn ${inCart? "height40": ""}`} disabled={inCart? true:false} >
                            {inCart? (<p className="text-capitalize width30" disabled>In Cart</p>)
                            :( <i className="fas fa-cart-plus"></i>)}
                    </button>
                    {inCart? <i className="fas fa-cart-arrow-down addto-cart-btn-mobile d-lg-none btn-color opacity05"></i>
                    : <i className="fas fa-cart-plus addto-cart-btn-mobile btn-color d-lg-none"></i>}
                    {/* <button className="btn btn-primary wishlist-btn"><i className="fas fa-heart"></i></button> */}
                    <i  id='wishlist'  className="fas fa-heart wishlist-btn " onClick={this.handleWishlist}></i>
                    <div className="card-body">
                        <div className="card-footer d-flex justify-content-center">
                        <Link to="/ProductDetails">
                            <strong className="">{title}</strong>
                        </Link>
                        <span className=" price-text pl-3">${price}</span>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
