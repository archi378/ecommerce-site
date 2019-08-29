import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {ProductConsumer } from '../context'

export default class WishlistItem extends Component {
    render() {
        const{id,img,title,price,count,total}= this.props.item
        const{removeWishlistItem, handleDetail}= this.props.value
        return (
            <div className="row cart-item text-center mt-2 p-md-3 mobile-padding">
                <div className="col-5 col-md-2 pt-2 p-3">
                <Link to="/ProductDetails" onClick={()=>handleDetail(id)}>
                    <img src={img} style={{width:'3rem'}} className="img-fluid" alt="product" />
                    </Link>
                </div>
                <ProductConsumer>
                    {data => {
                        return(
                            <div className="col-7 col-md-3 offset-md-1 pt-md-2 p-3 text-left">
                            <div><span className="text-font d-block"><strong>{title}</strong></span><span className="text-font">({data.selectedColor}-{data.selectedSize})</span></div>
                            <div><span className="">Price : </span><span className="text-font">₹&nbsp;{price}</span></div>
                            <div className=" pt-md-2 d-flex">Remove
                            <span className="text-font btn-delete-wrapper" onClick={()=>{removeWishlistItem(id)}}>
                            <i className="far fa-trash-alt btn-delete"></i>
                                </span>
                            </div>
                        </div>
                        )
                    }}
                </ProductConsumer>
            </div>
        )
    }
}
