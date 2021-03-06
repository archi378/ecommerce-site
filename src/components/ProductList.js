import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import Filter from './Filter';
import SearchBar from './SearchBar';
import Select from './Select';
import {storeProducts,detailProduct} from '../data';
import { ProductConsumer } from '../context';
import Footer from './Footer'
export default class ProductList extends Component {
    state= {
         products:storeProducts,
         filteredProduct:storeProducts
    }

    componentWillMount() {
        window.scroll(0,0)
    }

    handleFilter = (e) => {
        this.setState({filter:e.target.value});
        this.filterProducts();
    }

    handleSort = (e) => {
        this.setState({sort:e.target.value});
        this.sortProduct();
    }
    sortProduct = () =>{
        let products = this.state.filteredProduct;
        this.setState(state =>{
            if(state.sort !== 'Select'){
                products = products.sort((a,b)=>
                    (state.sort=='Low to High')?
                        (a.price>b.price? 1:-1):(
                    (state.sort=='High to Low')?
                        (a.price<b.price? 1:-1):'')
                )
                // console.log(storeProducts);
                // console.log(state.products);
            }
            if(state.sort == 'Select'){
                products = products.sort((a,b)=> a.id < b.id ? 1:-1)
            }
        
            return {filteredProduct:products}
        })
    }
    filterProducts = () => {
        // let selectSort = document.getElementById('sort');
        // console.log(selectSort.selectedIndex)
        // selectSort.selectedIndex = 0;
        this.setState(state => {
            if(state.filter !== 'Brand'){
                   let products = state.products.filter(a => a.company == state.filter)
                    return{filteredProduct:products,sort: 'Select'}  
                }
            else {
                return {filteredProduct:storeProducts}
            }
                
        })        
    }
    render() {
        let sortOption = ["Select","Low to High","High to Low"];
        let filterOption = ["Brand","Samsung","Google","Apple","HTC","Xiaomi","OnePlus","Huawei","Nokia","Sony"]
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        {/* <div className="col-xs-12 col-md-6 col-lg-7">
                            <SearchBar />
                        </div> */}
                        <div className="col-xs-12 col-md-12 col-lg-12 filter-section-wrapper">
                            <div className="d-flex padBottom floatRight" id="filter-section">
                                <div className="col-xs-6 mr-2">
                                    <Select id="filter" label={"Filter by"} options={filterOption} sort={this.state.filter} handleClick={this.handleFilter} />
                                </div>
                                <div className="col-xs-6 ">
                                    <Select id="sort" label={"Sort by"} options={sortOption} sort={this.state.sort} handleClick={this.handleSort}/>
                                </div>        
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* <ProductConsumer>
                            {data =>{
                                return(
                                    data.products.map(product =>{
                                        return(
                                            <Product key={product.id} product={product}/>
                                        )
                                    })
                                )
                            }}
                        </ProductConsumer> */}
                        {this.state.filteredProduct.map(product => {
                            return (
                            <Product key={product.id} product={product} />)     
                            })
                        }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
