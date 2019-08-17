import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import emptyBag from '../empty-cart.jpg';
import CartList from './CartList';

export default class Cart extends Component {
    render() {
        return (
            <ProductConsumer>
                {data => {
                    const {cart,subTotal,tax,cartTotal}=data;
                    if(cart.length>0){
                        return(
                            <div id="cartPage" className="container-fluid p-lg-4 mobile-padding">
                                <div className="row mobile-padding wishlist-wrapper">
                                    <div className="col-xs-12 col-md-8 mobile-padding">
                                        <h6 className="pl-3 pb-md-3 mt-3 mt-md-0">My Shopping Cart</h6>
                                        <CartList value={data} />
                                    </div>
                                    <div className="col-md-4 pl-lg-3 pl-md-1 pl-3">
                                        <h6 className="mt-3 mt-md-0">PRICE DETAILS</h6>
                                        <div className="cart-item mt-md-4 cart-price-details">
                                            <div className=" row d-flext p-2">
                                                <span className="col-7 text-font">Total Price :</span>
                                                <span className=" col-5 text-right">₹&nbsp;{subTotal}</span>
                                            </div>
                                            <div className=" row d-flext p-2">
                                                <span className="col-7 text-font">Total Tax :</span>
                                                <span className=" col-5 text-right">₹&nbsp;{tax}</span>
                                            </div>
                                            <div className=" row d-flext p-2">
                                                <span className="col-7 text-font cartTotal">Payable Amount :</span>
                                                <span className=" col-5 text-right cartTotal">₹&nbsp;{cartTotal}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    else{
                        return(
                            <div className=" empty-cart d-flex justify-content-center">
                            <div className="p-5 text-center cart-wrapper">
                            <img src={emptyBag} alt="empty-cart" style={{width:'200px'}}/>
                                <h4>Your Cart is Currently Empty</h4>
                                </div>
                            </div>
                        )
                    }
                }}
            </ProductConsumer>
        )
    }
}
