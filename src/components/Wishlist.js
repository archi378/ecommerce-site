import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import WishlistItem from './WishlistItem';
import emptyBag from '../empty-cart.jpg';

export default class Wishlist extends Component {
    render() {
        return (
            <ProductConsumer>
                {data => {
                    if(data.wishlist.length>0){
                    return(
                        <div className="wishlistPage container-fluid">
                            <div className="wishlist-wrapper">
                        {data.wishlist.map(item =>{
                             return(
                                <WishlistItem key={item.id} item={item} value={data}/> 
                            )
                        })}
                            <div></div>
                          </div>  
                        </div>
                    )}
                    else {
                        return(
                            <div className=" empty-cart d-flex justify-content-center">
                            <div className="p-5 text-center cart-wrapper">
                            <img src={emptyBag} alt="empty-cart" style={{width:'200px'}}/>
                                <h4>Your Wishlist is Currently Empty</h4>
                                </div>
                            </div>
                        )
                    }
                }}
            </ProductConsumer>
        )
    }
}
