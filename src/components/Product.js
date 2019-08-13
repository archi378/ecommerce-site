import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import WishlistBtn from './WishlistBtn';

export default class Product extends Component {
    handleWishlist = (id) =>{
        let wishlist = document.getElementById(`"wishlist-${id}"`);
        let wishlistEffect = document.getElementById(`"wishlist-effect-${id}"`);
        wishlist.classList.toggle('wishlist-btn-clicked');
        wishlistEffect.classList.toggle('d-none');
        console.log(id)
    }
    render() {
        let { id, title, img, price, inCart, inWishlist, color}= this.props.product;
        return (
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                <ProductConsumer>
                    {data => (
                        <div className="card mb-3">
                        <div className="img-container p-3" onClick={()=>data.handleDetail(id)}>
                            <Link to="/ProductDetails">
                                <img src={img} alt="product"  className=" card-img img-width img-fluid"/>
                            </Link>
                        </div>
                        <button className={`btn btn-primary addto-cart-btn  btn-gridwall ${inCart? "height40": ""}`}
                            disabled={inCart? true:false}
                            onClick={()=>{
                                data.addToCart(id);
                                const product = data.getItem(id);
                                inCart = product.inCart
                                data.openModal(id);
                            }}
                             >
                                {inCart? (<p className="text-capitalize width30" disabled>In Cart</p>)
                                :( <i className="fas fa-cart-plus"></i>)}
                        </button>
                        <button className="addto-cart-btn-mobile d-lg-none btn-color"
                            disabled={inCart? true:false}
                            onClick={()=>{
                                data.addToCart(id);
                                const product = data.getItem(id);
                                inCart = product.inCart
                            }} 
                        >
                        {inCart? <i className="fas fa-cart-arrow-down inCart"></i>
                        : <i className="fas fa-cart-plus"></i>}
                        </button>
                        {/* <button className="btn btn-primary wishlist-btn"><i className="fas fa-heart"></i></button> */}
                        <div onClick={()=> {
                                    data.addToWishlist(id);
                                    const product = data.getItem(id);
                                    inWishlist = product.inWishlist;
                                    this.handleWishlist(product.id)
                                    console.log(inWishlist)
                                }}>
                            <i id={`"wishlist-${id}"`} className="fas fa-heart wishlist-btn ">
                                </i>
                            <span id={`"wishlist-effect-${id}"`} className="btn-position d-none"><WishlistBtn /></span>
                        </div>
                        <div className="card-body">
                            <div className="card-footer d-flex justify-content-center">
                            <Link to="/ProductDetails">
                                <strong className="">{title}</strong>
                            </Link>
                            <span className=" price-text pl-3">${price}</span>
                            </div>
                        </div>
                    </div>
                    )}
                </ProductConsumer>
            </div>
        )
    }
}
