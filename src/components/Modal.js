import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import {Link} from 'react-router-dom';

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
               {data => {
                   const{modalOpen, openModal,closeModal } = data;
                   const{ img,title,price} = data.modalProduct;

                   if(!modalOpen){
                       return null
                   }
                   else {
                       return(
                           <div>
                               <div className="modal-container">
                                    <div className="row p-3">
                                    <div id="modal" className="text-center col-xs-10 col-md-12 mx-auto">
                                    <h5 className="RobotoRegular">Item Added to the Cart</h5>
                                    <img src={img} alt="product" className="" />
                                    <h5  className="RobotoRegular">{title}</h5>
                                    <p className="price-text-color"> Price : ₹{price}</p>
                                        <button className="continue-shopping text-font"
                                            onClick={()=>closeModal()}>Continue Shopping</button>
                                        <Link to="/Cart">
                                            <button className="go-to-cart text-font ml-2"
                                                onClick={()=>closeModal()}>Go to Cart</button>
                                        </Link>
                                    </div>
                                   </div>
                                </div>
                            </div>
                       )
                   }
               }} 
            </ProductConsumer>
        )
    }
}
