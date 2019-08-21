import React, { Component } from 'react';
import {ProductConsumer } from '../context'


export default class ProductDetails extends Component {
    state = {
        sliderIndex:0
    }
    componentWillMount() {
        window.scroll(0,0)
    }
    componentDidMount(){ 
        document.getElementById('imgBox').src = document.getElementById('thumb1').value;
    }
    onMouseOverEvent = (e) => {
        document.getElementById('imgBox').src = e.target.value;
    }
    slideLeft = (e) => {
        let slider = document.querySelector('.slider-wrapper');
        document.querySelector('.arrow-left').style.display = 'block'
        this.setState({sliderIndex:( this.state.sliderIndex > 0 ? this.state.sliderIndex - 1 : 0)})
        let currentIndex = (this.state.sliderIndex > 0 ? this.state.sliderIndex - 1 : 0)
        slider.style.transform = 'translate('+ currentIndex * -25 +'%)'
    }
    slideRight = () => {
        this.setState({sliderIndex:this.state.sliderIndex+1})
        let slider = document.querySelector('.slider-wrapper');
        this.setState({sliderIndex:( this.state.sliderIndex < 3 ? this.state.sliderIndex + 1 : 3)})
        let currentIndex = (this.state.sliderIndex < 3 ? this.state.sliderIndex + 1 : 3)
        slider.style.transform = 'translate('+ currentIndex * -25 +'%)';
    }
    render() {
        return (
            <ProductConsumer>
                {data =>{
                    let { id, title, img, price, inCart, color, colorType, memory, camera, images, thumb,
                        thumb_target, specification, battery, processor, reviews} = data.detailProduct;

                    return (
                    <div>
                    <div id="product-detail" className="row wishlist-wrapper">
                        <div className="col-xs-12 col-md-6 d-flex text-center">
                        <i  id='wishlist'  className="fas fa-heart pdp-wishlist-btn " onClick={this.handleWishlist}></i>
                            {/* <ul className="thumb">
                                <li><a href="img/google/img-target1.jpg" target="imgBox" onClick={this.onHover}>
                                    <img src="img/google/thumb1.jpg" /></a></li>
                                <li><a href="img/google/img-target2.jpg" target="imgBox" onClick={this.onHover}>
                                    <img src="img/google/thumb2.jpg" /></a></li>
                                <li><a href="img/google/img-target3.jpg" target="imgBox"><img src="img/google/thumb3.jpg" /></a></li>
                                <li><a href="img/google/img-target4.jpg" target="imgBox"><img src="img/google/thumb4.jpg" /></a></li>
                            </ul> */}

                                            {/* for desktop view */}
                            <div className="col-md-3 col-lg-2 d-none d-md-block">
                            {/* {thumb.map((thumb,index) => {
                                console.log(thumb)
                                return(
                                    <div>
                                        <input className="thumb position-absolute" type="radio" id={"thumb"+index} name="thumb" checked onMouseOver={this.onMouseOverEvent} onClick={this.onHover} value={thumb_target[index]}/>
                                        <span className="thumb mb-2"><img src={thumb} alt="thumb"/></span>
                                    </div>
                                )
                            })} */}
                            
                                <input className="thumb position-absolute" type="radio" id="thumb1"  name="thumb" checked onMouseOver={this.onMouseOverEvent} onChange={this.onMouseOverEvent} value={thumb_target[0]}/>
                                <span className="thumb mb-2"><img src={thumb[0]} /></span>
                                <input className="thumb position-absolute" type="radio" id="thumb2"  name="thumb" onMouseOver={this.onMouseOverEvent} onChange={this.onMouseOverEvent} value={thumb_target[1]}/>
                                <span className="thumb mb-2"><img src={thumb[1]} /></span>
                                <input className="thumb position-absolute" type="radio" id="thumb3"  name="thumb" onMouseOver={this.onMouseOverEvent} onChange={this.onMouseOverEvent} value={thumb_target[2]} />
                                <span className="thumb mb-2"><img src={thumb[2]} /></span>
                                <input className="thumb position-absolute" type="radio" id="thumb4"  name="thumb" onMouseOver={this.onMouseOverEvent} onChange={this.onMouseOverEvent} value={thumb_target[3]} />
                                <span className="thumb mb-2"><img src={thumb[3]} /></span>
                            </div>
                            <div className="col-md-9 imgBox text-center d-none d-md-block">
                                <img id="imgBox" src="" alt={`"${title} image "`} className="height300"/>
                            </div>

                            {/* for mobile view image slider*/}

                            <div className="slider-container-pdp text-center d-md-none d-sm-block">
                                <div className="slider-wrapper">
                                    <section className="slides"><img src={thumb_target[0]} className="height300 width200" /></section>
                                    <section className="slides"><img src={thumb_target[1]} className="height300 width200" /></section>
                                    <section className="slides"><img src={thumb_target[2]} className="height300 width200" /></section>
                                    <section className="slides"><img src={thumb_target[3]} className="height300 width200" /></section>
                                </div>
                                <div className="slider-control">
                                    <span className="arrow-left" onClick={this.slideLeft}></span>
                                    <span className="arrow-right" onClick={this.slideRight}></span>
                                </div>
                                <div className="slider-number">{this.state.sliderIndex+1}/{thumb_target.length}</div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-6 px-4">
                            <h2 className="h2-Font NeueSerifBold">{title}</h2>
                            <h4 className="h4-Font price-text-color"> Price: ₹{price}</h4>
                            <div className="stars-outer">
                            <i class="far fa-star review-text"></i>
                            <i class="far fa-star review-text"></i>
                            <i class="far fa-star review-text"></i>
                            <i class="far fa-star review-text"></i>
                            <i class="far fa-star review-text"></i>
                                <div className="stars-inner">
                                </div>
                            </div>
                            <span className="|review-text">({reviews} Reviews )</span>
                            <hr></hr>
                            <div className="mt-3">
                            <label className="RobotoRegular">Select Color :</label>
                                <div className=" col-xs-6 d-flex">
                                    {colorType && color.map((colorType,index) =>{
                                        return(
                                        <div className=" color-div-wrapper">
                                            <input type="radio" className="color-radio-btn" />
                                            <div id="color-div-outer" className="">
                                            <div className="color-div" style={{ backgroundColor : colorType}}></div>
                                            </div>
                                        </div>
                                    )
                                    })}
                                </div>
                                <div className="d-flex">
                                {color && color.map((color,index)=>{
                                        return(
                                            <div className="color-label-div">
                                                <label className="text-font">{color}</label>
                                            </div>
                                        )
                                    })}
                                </div><hr></hr>
                                <div className="select-size-section ">
                                    <label className="RobotoRegular">Select Size :</label>
                                    <div className="size-div-wrapper d-flex">
                                        {memory && memory.map((memory,index)=>{
                                            return(
                                                <div className="size-div mr-3">
                                                    {memory}
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div><hr></hr>
                            </div>
                            <button className="btn btn-primary RobotoRegular custom-btn"
                             disabled={inCart? true : false}
                             onClick={()=>{
                                data.addToCart(id);
                                const product = data.getItem(id);
                                inCart = product.inCart
                                console.log(inCart)
                                }}
                             >
                            {inCart ? 'In Cart' : 'Add to Cart'}</button>
                        </div>
                    </div><hr></hr>

                    <div className="feature-section mx-5 px-4">
                        <h4 className="h4-Font NeueSerifMedium">Features</h4><hr></hr>
                        <div className="row pad20">
                            <div className="col-xs-12 col-md-6 pad0">
                                <img src={images[0]}  className="feature-image-column"/>
                            </div>
                            <div className="col-xs-12 col-md-6 pad0 text-section">
                                <div>
                                    <h6 className="NeueSerifMedium">Camera</h6>
                                    <p className="text-font">{camera}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row my-4 pad20">
                            <div className="col-xs-12 col-md-6 pad0 mobile-order text-section">
                                <div>
                                    <h6 className="NeueSerifMedium">Battery</h6>
                                    <p className="text-font">{battery}</p>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-6 pad0 text-md-right">
                                <img src={images[1]}  className="feature-image-column"/>
                            </div>
                        </div>
                        <div className="row my-4 pad20">
                            <div className="col-xs-12 col-md-6 pad0">
                                <img src={images[2]}  className="feature-image-column"/>
                            </div>
                            <div className="col-xs-12 col-md-6 pad0 text-section">
                                <div>
                                    <h6 className="NeueSerifMedium">Processor</h6>
                                    <p className="text-font">{processor}</p>
                                </div>
                            </div>
                        </div><hr></hr>
                    </div>
                    <div className="sepecification-section mx-5 px-4">
                        <h4 className="h4-Font NeueSerifMedium">Specification</h4><hr></hr>
                        <div className="row">
                                <div className="col-xs-12 col-md-10 d-flex pb-3 pt-3 bottom-border mobile-padding ">
                                    <h6 className="col-xs-12 col-md-4 pad0 text-font">Brand</h6>
                                    <span className=" col-xs-12 col-md-6 pad0 text-font">{specification.brand}</span>
                                </div>
                                <div className="col-xs-12 col-md-10 d-flex pb-3 pt-3 bottom-border mobile-padding ">
                                    <h6 className=" col-xs-12 col-md-4 pad0  text-font">Operating System</h6>
                                    <span className="col-xs-12 col-md-6 pad0 text-font">{specification.os}</span>
                                </div>
                                <div className="col-xs-12 col-md-10 d-flex pb-3 pt-3 bottom-border mobile-padding ">
                                    <h6 className="col-xs-12 col-md-4 pad0 text-font">Model</h6>
                                    <span className="col-xs-12 col-md-6 pad0 text-font">{specification.model}</span>
                                </div>
                                <div className="col-xs-12 col-md-10 d-flex pb-3 pt-3 bottom-border mobile-padding ">
                                    <h6 className="col-xs-12 col-md-4 pad0 text-font">Camera</h6>
                                    <span className="col-xs-12 col-md-6 pad0 text-font">{specification.camera}</span>
                                </div>
                                <div className="col-xs-12 col-md-10 d-flex pb-3 pt-3 bottom-border mobile-padding ">
                                    <h6 className="col-xs-12 col-md-4 pad0 text-font">Processor</h6>
                                    <span className="col-xs-12 col-md-6 pad0 text-font">{specification.processor}</span>
                                </div>
                                <div className="col-xs-12 col-md-10 d-flex pb-3 pt-3 bottom-border mobile-padding ">
                                    <h6 className="col-xs-12 col-md-4 pad0  text-font">Battery</h6>
                                    <span className="col-xs-12 col-md-6 pad0 text-font">{specification.battery}</span>
                                </div>
                                <div className="col-xs-12 col-md-10 d-flex pb-3 pt-3 bottom-border mobile-padding ">
                                    <h6 className="col-xs-12 col-md-4 pad0 text-font">Special features</h6>
                                    <span className="col-xs-12 col-md-6 pad0 text-font">{specification.sf}</span>
                                </div>
                            <div className="col-xs-12 col-md-9">
                            </div>
                        </div>
                    </div>
                </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
