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
        cartTotal:0,
        search:'',
        searchedProduct:[],
        selectedColor:'Black',
        selectedSize: '',
        onHover: false
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
            return{detailProduct:product,selectedColor:product.thumb[0].color,selectedSize:product.memory[0].storage}
        },()=>{console.log('hello from state',this.state.selectedColor , this.state.selectedSize)})

    }
    addToCart = (id) =>{
        console.log(`hello from Cart.id is ${id}`)
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        console.log(tempProducts[index], this.state.cart[index])
        if(this.state.cart.indexOf(this.getItem(id)) !== -1){
            product.inCart = true;
            product.count++;
        }
        else {
            product.inCart = true;
            product.count = 1;
        }
        console.log(product.memory)
        console.log(this.state.selectedSize)
        console.log(product.memory.filter(memory => memory.storage === this.state.selectedSize))
        const price = (this.state.selectedSize !== ''? product.memory.filter(memory => memory.storage === this.state.selectedSize)[0].price : product.memory[0].price) 
        product.devicePrice = price;
        product.total = product.devicePrice*product.count;
        this.setState(()=>{
            return{
                products:tempProducts,
                cart:(this.state.cart.indexOf(this.getItem(id)) !== -1)? [...this.state.cart]:[...this.state.cart,product],
                selectedColor:(this.state.selectedColor === ''|| this.state.selectedColor === 'Black'? product.thumb[0].color : this.state.selectedColor),
                // selectedSize:(this.state.selectedSize === ''? product.memory[0].storage : this.state.selectedSize)
            }
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
                return{
                    products:tempProducts,
                    wishlist:[...this.state.wishlist,product],
                    selectedColor:(this.state.selectedColor === ''|| this.state.selectedColor === 'Black'? product.thumb[0].color : this.state.selectedColor),
                    // selectedSize:(this.state.selectedSize === ''? product.memory[0].storage : this.state.selectedSize)
                }
            },()=> console.log(this.state))
            const price = (this.state.selectedSize !== '' ? product.memory.filter(memory => memory.storage === this.state.selectedSize)[0].price : product.memory[0].price) 
            product.devicePrice = price;
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
        // const price = (this.selectedSize !== '' ? product.memory.filter(memory => memory.storage === this.state.selectedSize)[0].price : product.memory[0].price) 
        product.count = product.count + 1;
        product.total = product.devicePrice * product.count;
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
        product.total = product.devicePrice * product.count;
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
    handleChange = (e) => {
        this.setState({
            search: e.target.value
        })
        console.log(this.state.search)
    }
    handleColor = (e,id) => {  
        this.setState({
            selectedColor: e.target.value
        })
        console.log(this.state.selectedColor)
    }

    handleSize = (e,id) => {  
        this.setState({
            selectedSize:e.target.value
        })
        console.log(this.state.selectedSize)
    }
    handleSubmit = (e) => {
        e.preventDefault();
    }
    handleSearch = () => {
        let tempProducts = [...this.state.products];
        tempProducts = tempProducts.filter(item => {
            let company = item.company.toLowerCase()
            let title = item.title.toLowerCase()
            let search = this.state.search.toLowerCase()
            let searchArray = search.split(' ')
            if(search !== '' && (searchArray.includes(company) !== false ||  
                (searchArray.filter(word => title.split(' ').includes(word)!== false ).length !== 0) )) {
            // console.log(search.split(' ').includes(company))
            // if(company === search) 
            return(item)
            }
        })
        this.setState(()=> {
            return{
            searchedProduct:[...tempProducts],
            }
        }) 
        console.log('searched', window.location.href)
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
              clear:this.clear,
              handleChange:this.handleChange,
              handleSubmit:this.handleSubmit,
              handleSearch:this.handleSearch,
              handleColor:this.handleColor,
              handleSize:this.handleSize
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}
const ProductConsumer = ProductContext.Consumer;
export {ProductProvider,ProductConsumer};
