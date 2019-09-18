import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer } from '../context'

export default class CartItem extends Component {
    render() {
        const{id,img,title,count,total,memory,  devicePrice }= this.props.item
        const{increment, decrement, remove, handleDetail}= this.props.value
        return (  
            <ProductConsumer>
                {data => {
                    return (
                        <div className="row cart-item text-center mt-2 p-md-3 mobile-padding">
                            <div className="col-5 col-md-5 pt-2 p-3">
                                <Link to="/ProductDetails" onClick={()=>handleDetail(id)}>
                                    <img src={img} style={{width:'3rem'}} className="img-fluid" alt="product" />
                                </Link>
                                <div className="d-flex justify-content-center mt-3"> 
                                    <span className="btn btn-cart mr-1" onClick={()=>{decrement(id)}}>-</span>
                                    <span className="btn btn-cart mr-1">{count}</span>
                                    <span className="btn btn-cart" onClick={()=>{increment(id)}}>+</span>
                                </div>
                            </div>
                
                            <div className="col-7 col-md-6 offset-md-1 pt-md-2 p-3 text-left">
                                <div><span className="text-font d-block">{title}</span><span className="text-font">({data.selectedColor}-{data.selectedSize})</span></div>
                                {/* {console.log(data.selectedSize !== undefined ? memory.filter(memory => memory.storage === data.selectedSize)[0].price : memory[0].price)} */}
                                <div><span className="price-text-color">Price : </span><span className="text-font price-text-color">₹&nbsp;{ devicePrice }</span></div>
                               
                                <span className="text-font"><strong>item total : ₹&nbsp;{total}</strong></span>
                                <div className=" pt-md-2 d-flex align-items-center">Remove
                                <span className="text-font btn-delete-wrapper" onClick={()=>{remove(id)}}>
                                <i className="material-icons btn-delete">delete</i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        )
                    }
                }
            </ProductConsumer>
        )
    }
}
