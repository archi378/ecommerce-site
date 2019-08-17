import React, { Component } from 'react'
import {storeProducts,detailProduct} from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state= {
        products:[],
        detailProduct:detailProduct,
        cart:[],
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
        },()=> {this.addTotals()})
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
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item=>item.id===id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count + 1;
        product.total = product.price * product.count;
        this.setState(()=>{
            return{cart:[...tempCart]}
        },()=>{this.addTotals()});
    }
    decrement = (id) => {
        console.log('decremented',id);
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item=>item.id===id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = (product.count!== 1?product.count - 1:1);
        product.total = product.price * product.count;
        this.setState(()=>{
            return{cart:[...tempCart]}
        },()=>{this.addTotals()});
    }
    remove = (id) => {
        console.log('removed',id)
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item=> item.id !== id);
        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.total = 0;
        removedProduct.count = 0;
        this.setState(()=> {
            return{
            cart:[...tempCart],
            products:[...tempProducts]
            }
        },()=>{
            this.addTotals();
        })
    }
    removeWishlistItem = (id) => {
        let tempProducts = [...this.state.products];
        let tempWishlist = [...this.state.wishlist];
        tempWishlist = tempWishlist.filter(item=> item.id !== id);
        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inWishlist = false;
        this.setState(()=> {
            return{
            wishlist:[...tempWishlist],
            products:[...tempProducts]
            }
        })
    }
    clear = () => {
        console.log('cleared')
    }
    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total));
        const temptax = subTotal * 0.1;
        const tax = parseFloat(temptax.toFixed(2));
        const total = subTotal+tax;
        this.setState(()=>{
            return {
            subTotal:subTotal,
            tax:tax,
            cartTotal:total
            } 
        })
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
              removeWishlistItem:this.removeWishlistItem,
              clear:this.clear
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}
const ProductConsumer = ProductContext.Consumer;
export {ProductProvider,ProductConsumer};