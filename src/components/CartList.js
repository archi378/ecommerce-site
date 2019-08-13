import React, { Component } from 'react';
import CartItem from './CartItem';
import {ProductConsumer} from '../context';

export default class CartList extends Component {
    render() {
        return (
            <ProductConsumer>
                {data => {
                    return(
                        <div className="container-fluid">
                            {data.cart.map(item=>{
                                return(
                                    <CartItem key={item.id} item={item} value={data}/> 
                                )
                            })}
                        </div>
                    )}}
            </ProductConsumer>
        )
    }
}
