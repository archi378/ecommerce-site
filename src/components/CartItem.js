import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class CartItem extends Component {
    render() {
        const{id,img,title,price,count,total}= this.props.item
        const{increment, decrement, remove, handleDetail}= this.props.value
        return (
            <div className="row cart-item text-center mt-2 p-md-3 mobile-padding">
                <div className="col-6 col-md-5 pt-2 p-3">
                    <Link to="/ProductDetails" onClick={()=>handleDetail(id)}>
                        <img src={img} style={{width:'3rem'}} className="img-fluid" alt="product" />
                    </Link>
                    <div className="d-flex justify-content-center mt-3"> 
                        <span className="btn btn-cart mr-1" onClick={()=>{decrement(id)}}>-</span>
                        <span className="btn btn-cart mr-1">{count}</span>
                        <span className="btn btn-cart" onClick={()=>{increment(id)}}>+</span>
                    </div>
                </div>
                <div className="col-6 col-md-6 offset-md-1 pt-md-2 p-3">
                    <div><span className="text-font">{title}</span></div>
                    <div><span className="">Price : </span><span className="text-font">₹&nbsp;{price}</span></div>
                    <span className="text-font"><strong>item total : ₹&nbsp;{total}</strong></span>
                    <div className=" pt-md-2 d-flex justify-content-center">Remove
                    <span className="text-font btn-delete-wrapper" onClick={()=>{remove(id)}}>
                    <i className="far fa-trash-alt btn-delete"></i>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}
