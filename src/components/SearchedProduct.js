import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom'

export default class SearchedProduct extends Component {

    componentWillMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <ProductConsumer>
                {data => {
                    if(data.searchedProduct.length>0){
                    return(
                        <div className="container-fluid">
                            <div className="wishlist-wrapper pb-5">
                        {data.searchedProduct.map(item =>{
                             return(
                                // <WishlistItem key={item.id} item={item} value={data}/> 
                                <div className="row searchProduct p-5" onClick={()=>data.handleDetail(item.id)}>
                                    <div className="col-4" >
                                        <Link to="/ProductDetails">
                                            <img src={item.img} alt="product" className=" card-img img-width img-fluid" /></Link>
                                    </div>
                                    <div className="col-8">
                                    <Link to="/ProductDetails">
                                        <h4 className="brand-title">{item.title}</h4>
                                        </Link>
                                        <p className="price-text-color">₹&nbsp;{item.price}</p>
                                    </div>
                                </div>
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
                                    <h4>Your search did not results any product</h4>
                                </div>
                            </div>
                        )
                    }
                }}
            </ProductConsumer>
        )
    }
}
