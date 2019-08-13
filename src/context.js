import React, { Component } from 'react'
import {storeProducts,detailProduct} from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state= {
        products:[],
        detailProduct:detailProduct,
        cart:storeProducts,
        wishlist:[],
        modalOpen:false,
        modalProduct:detailProduct,
        subTotal:0,
        tax:0,
        cartTotal:0
    }
    componentDidMount(){
        this.setProducts();
    }
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts,singleItem]
        })
        this.setState(() =>{
            return{products:tempProducts}
        })       
    };
    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }  
    handleDetail = (id) =>{
        const product = this.getItem(id);
        this.setState(()=>{
            return{detailProduct:product}
        })
    }
    addToCart = (id) =>{
        console.log(`hello from Cart.id is ${id}`)
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price 
        product.total = price;
        this.setState(()=>{
            return{products:tempProducts,cart:[...this.state.cart,product]}
        },()=> console.log(this.state))
    }
    addToWishlist = (id) => {
        console.log(`hello from wishlist ${id}`);
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        if(!product.inWishlist){
            product.inWishlist = true
            this.setState(()=>{
                return{products:tempProducts,wishlist:[...this.state.wishlist,product]}
            },()=> console.log(this.state))
        }
        else{
            product.inWishlist = false
            this.state.wishlist.pop(index);
            this.setState(()=>{
                return{products:tempProducts,wishlist:[...this.state.wishlist]}
            },()=> console.log(this.state))
        }
    }
    openModal = (id) => {
        const product = this.getItem(id);
        this.setState(()=>{
            return{modalProduct:product,modalOpen:true}
        },()=> console.log(this.state))
    }
    closeModal = () => {
        this.setState(()=>{
            return{modalOpen:false}
        })
    }
    increment = (id) => {
        console.log('incremented',id)
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.count++
        this.setState(()=>{
            return{products:tempProducts}
        });
        console.log(product.count)
    }
    decrement = (id) => {
        console.log('decremented',id);
        const product = this.getItem(id);
        if(product.count !==0){
        product.count--
        }
        console.log(product.count)
    }
    remove = (id) => {
        console.log('removed',id)
    }
    clear = () => {
        console.log('cleared')
    }
    render() {
        return (
            <ProductContext.Provider value={{
              ...this.state,
              handleDetail:this.handleDetail,
              addToCart:this.addToCart,
              addToWishlist:this.addToWishlist,
              getItem:this.getItem,
              openModal:this.openModal,
              closeModal:this.closeModal,
              increment:this.increment,
              decrement:this.decrement,
              remove:this.remove,
              clear:this.clear
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}
const ProductConsumer = ProductContext.Consumer;
export {ProductProvider,ProductConsumer};
