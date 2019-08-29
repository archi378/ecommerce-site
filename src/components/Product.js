import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import WishlistBtn from './WishlistBtn';

export default class Product extends Component {
    componentWillMount() {
        window.scroll(0,0)
      }

    handleWishlist = (id) =>{
        let wishlist = document.getElementById(`"wishlist-${id}"`);
        let wishlistEffect = document.getElementById(`"wishlist-effect-${id}"`);
        wishlist.classList.toggle('wishlist-btn-clicked');
        wishlistEffect.classList.toggle('d-none');
        console.log(id)
    }
    render() {
        let { id, title, img, price, inCart, inWishlist, color, reviews, thumb, memory}= this.props.product;
        return (
            <div id="productList" className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
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
                                :('Add to Cart')}
                        </button>
                        <button className="addto-cart-btn-mobile d-lg-none btn-color"
                            disabled={inCart? true:false}
                            onClick={()=>{
                                data.addToCart(id);
                                const product = data.getItem(id);
                                inCart = product.inCart
                                data.openModal(id);
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
                            <i id={`"wishlist-${id}"`} className="fas fa-heart wishlist-btn "></i>
                            <span id={`"wishlist-effect-${id}"`} className="btn-position d-none"><WishlistBtn /></span>
                        </div>
                        <div className="card-body">
                            <div className="card-footer">
                            <Link to="/ProductDetails">
                                <strong className="pl-3">{title}</strong>
                            </Link>
                            <span className=" price-text price-text-color pl-3 d-block">₹&nbsp;{price}</span>
                            <div className="pl-3 stars-outer">
                            <i className="far fa-star review-text"></i>
                            <i className="far fa-star review-text"></i>
                            <i className="far fa-star review-text"></i>
                            <i className="far fa-star review-text"></i>
                            <i className="far fa-star review-text"></i>
                                <div className="pl-3 stars-inner">
                                </div>
                            </div>
                            <span className="pl-3 review-text">({reviews} Reviews )</span>
                            {/* <div id="selection-div" className={`${data.onHover? "" : "onHover" } pl-3 pb-5 pt-2 d-none `}>
                                <div>
                                <label className="RobotoRegular text-font">Select Color :</label>
                                <div className=" col-xs-6 d-flex pb-2">
                                    {thumb && thumb.map((thumb,index) =>{
                                        return(
                                        <div className=" color-div-wrapper gw-color-div-wrapper">
                                            <input type="radio" className="color-radio-btn gw-color-radio-btn" name='color' id={`color-${index}`} value={thumb.color} onClick={(e)=>{data.handleColor(e,id)}}/>
                                            <div id="color-div-outer" className="">
                                            <div className="color-div gw-color-div" style={{ backgroundColor : thumb.colorType}}></div>
                                            </div>
                                        </div>
                                    )
                                    })}
                                </div>
                                </div>
                                <div className="">
                                    <label className="RobotoRegular text-font">Select Size :</label>
                                    <div className="size-div-wrapper d-flex">
                                        {memory && memory.map((memory,index)=>{
                                            return(
                                                <div className=" color-div-wrapper gw-color-div-wrapper mr-3">
                                                <input type="radio" className="size-radio-btn gw-size-radio-btn" name='size' id={`size-${index}`} value={memory} onClick={(e)=>{data.handleSize(e,id)}}/>
                                                <div id="color-div-outer" className="size-div  gw-size-div mr-3">
                                                 {memory}
                                                </div>
                                            </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div> */}
                            </div>
                        </div>
                    </div>
                    )}
                </ProductConsumer>
            </div>
        )
    }
}
