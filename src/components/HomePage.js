import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../assets/homepage.css';
import Footer from './Footer';
import promotionalImg1 from '../assets/images/iphone.jpg';
import promotionalImg2 from '../assets/images/samsung.jpg';
import promotionalImg3 from '../assets/images/iphoneBrand.jpg';
import promotionalImg4 from '../assets/images/googleBrand.jpg';
import apple from '../assets/images/apple.png';
import oneplus from '../assets/images/oneplus.jpg';
import samsung from '../assets/images/samsung.png';
import google from '../assets/images/google.jpg';
import featuredProduct from '../assets/images/iphoneX.1.jpg';
import {ProductConsumer} from '../context';
import {storeProducts,detailProduct} from '../data';


export default class HomePage extends Component {
    constructor(props){
        super(props);
        this.state={
            products:storeProducts,
            currentProduct:storeProducts[0]
        }
    }
    componentWillMount() {
        window.scroll(0,0)
    }

//    nextProduct = () => {
//        let newIndex = this.state.currentProduct.id+1;
//        console.log(this.state.currentProduct.id)
//        this.setState(()=>{
//            return{
//            currentProduct:this.state.products[newIndex]
//            }
//        })
//    }
//    prevProduct = () => {
//         let newIndex = this.state.currentProduct.id-2;
//         console.log(this.state.currentProduct.id)
//         this.setState(()=>{
//             return{
//             currentProduct:this.state.products[newIndex]
//             }
//         })
//     }
    // componentDidMount(){
    //     let slider = document.getElementById('product-slider');
    //     if()
    // }
    render() {
        const {products,currentProduct}=this.state;
        return (
            <div>
                        {/* Section 1 */}
                <div className="homepage-wrapper">
                    <div className="slider-container">
                        <div className="mySlides">
                            <img src={promotionalImg1} alt="promotional" className="img-fluid"/>
                            <h3 className="pl-md-5 pl-3">Get All Premium Mobiles Collections...</h3>
                        </div>
                        <div className="mySlides">
                            <img src={promotionalImg2} alt="promotional" />
                            <h3 className="pl-md-5 pl-3">Get Ready in your Favourite Celebrety Look now... </h3>
                            {/* <h3>Only on MiniShop </h3> */}
                        </div>
                        <div className="mySlides" >
                            <img src={promotionalImg3} alt="promotional" />
                            <h3 className="pl-md-5 pl-3">We have brought you the latest trend with amazing deals...</h3>
                        </div>
                        <div className="mySlides">
                            <img src={promotionalImg4} alt="promotional" />
                            <h3 className="pl-md-5 pl-3">Don't stop and Click on shop Now for getting your Dreams true...</h3>
                        </div>
                    </div>
                    <Link to="/ProductList">
                    <button className="shop-btn text-font">Shop Now</button>
                    </Link>
                </div>

                            {/* Section 2 */}
                <div className="d-block text-center">
                    <h1 className="p-3 promotion-title">__Our Top Brands__</h1>
                </div>
                <div id="product-card" className="container-fluid justify-content-around">
                <div className="row d-flex justify-content-around">
                    <div className="card mb-2">
                        <div className="card-title pt-2 text-center"><h4 className="brand-title ">Apple</h4></div>
                        <div className="card-body text-center">
                            <img src={apple} alt="apple-product" />
                        </div>
                        <div className="card-footer"></div>
                    </div>
                    <div className="card mb-2">
                        <div className="card-title pt-2 text-center"><h4 className="brand-title ">OnePlus</h4></div>
                        <div className="card-body text-center">
                            <img src={oneplus} alt="oneplus-product" />
                        </div>
                        <div className="card-footer"></div>
                    </div>
                    <div className="card mb-2">
                        <div className="card-title pt-2 text-center"><h4 className="brand-title ">Samsung</h4></div>
                        <div className="card-body text-center">
                            <img src={samsung} alt="oneplus-product" />
                        </div>
                        <div className="card-footer"></div>
                    </div>
                    <div className="card mb-2">
                        <div className="card-title pt-2 text-center"><h4 className="brand-title ">Google</h4></div>
                        <div className="card-body text-center">
                            <img src={google} alt="oneplus-product" />
                        </div>
                        <div className="card-footer"></div>
                    </div>
                </div>
                </div>

                     {/* Section 3 */}
                <div className="d-block text-center">
                    <h1 className="p-3 promotion-title">__Featured Products__</h1>
                </div>
                <div className="section-3">
                    <div className="row featured-product">
                        <div className="col-12 col-md-5">
                            <h4 className="featured-title p-md-5 p-3 text-center">Iphone-XS <br/>Series</h4>
                        </div>
                        <div className="col-12 col-md-7">
                            <img src={featuredProduct} className="img-fluid featured-img pt-md-5" />
                        </div>
                    </div>
                    <Link to="/ProductList">
                        <button className="shop-btn text-font">Shop Now</button>
                    </Link>
                </div>

                
                            {/* Section 4 */}
                <div className="d-block text-center">
                    <h1 className="p-3 promotion-title">__Our Top Sellers__</h1>
                </div>
                <div id="section-4" className="">
                {/* <button className="button-wrapper left-btn"
                    onClick={this.prevProduct}
                    disabled={currentProduct.id === 1?true:false}
                ><i className="material-icons">arrow_back_ios</i></button>
                <button className="button-wrapper right-btn"
                    onClick={this.nextProduct}
                    disabled={currentProduct.id && currentProduct.id === storeProducts.length-1? true:false}
                    ><i className="material-icons">arrow_forward_ios</i></button> */}
                    <ProductConsumer>
                        {data => {
                            return(
                                <div id="product-slider" className="d-flex card-wrapper">
                                {products.map(product =>{
                                    return(
                                        <div className="product-slider-wrapper"  onClick={()=>data.handleDetail(product.id)}>
                                            <Link to="/ProductDetails">
                                                <div className="card mb-2">
                                                <div className="card-title pt-2 text-center"><h4 className="brand-title ">{product.title}</h4></div>
                                                <div className="card-body text-center">
                                                    <img src={product.img} alt="apple-product" className="img-fluid"/>
                                                </div>
                                                <div className="card-footer"></div>
                                                </div>
                                            </Link>
                                        </div>
                                  
                                    )
                                })
                            }
                        </div>
                            )
                        }}
                    </ProductConsumer>
                  </div>
            </div>
        )
    }
}
