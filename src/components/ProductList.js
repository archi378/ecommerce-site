import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import Filter from './Filter';
import SearchBar from './SearchBar';
import Select from './Select';
import {storeProducts,detailProduct} from '../data';
import { ProductConsumer } from '../context';

export default class ProductList extends Component {
    state= {
         products:storeProducts,
         filteredProduct:[]
    }
    handleFilter = (e) => {
        console.log('filtered');
        this.setState({filter:e.target.value});
        this.sortProduct();
    }

    handleSort = (e) => {
        console.log('sorted');
        this.setState({sort:e.target.value});
        this.sortProduct();
    }
    sortProduct = () =>{
        this.setState(state =>{
            if(state.sort !== 'Select'){
                this.state.products.sort((a,b)=>
                    (state.sort=='Low to High')?
                        (a.price>b.price? 1:-1):(
                    (state.sort=='High to Low')?
                        (a.price<b.price? 1:-1):'')
                )
                // console.log(storeProducts);
                // console.log(state.products);
            }
            if(state.sort == 'Select'){
                this.state.products.sort((a,b)=> a.id < b.id ? 1:-1)
            }
            if(state.filter !== 'Filter'){
                // if(state.filter == 'Goo'){
                    console.log(state.filter) 
            this.state.products.filter(a => a.company == state.filter)
                   
                    // console.log(state.filter)   
                }
            console.log(state.filteredProduct)
            return {filteredProduct:this.state.products}
        })
    }
    render() {
        let sortOption = ["Select","Low to High","High to Low"];
        let filterOption = ["Filter","Samsung","Color","Memory"]
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-6 col-lg-7">
                            <SearchBar />
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-5 mt-3">
                            <div className="d-flex justify-content-md-center padBottom" id="filter-section">
                                <div className="col-xs-6 mr-2">
                                    <Select label={"Filter by"} options={filterOption} sort={this.state.filter} handleClick={this.handleFilter} />
                                </div>
                                <div className="col-xs-6 ">
                                    <Select label={"Sort by"} options={sortOption} sort={this.state.sort} handleClick={this.handleSort}/>
                                </div>        
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <ProductConsumer>
                            {data =>{
                                return(
                                    data.products.map(product =>{
                                        return(
                                            <Product key={product.id} product={product}/>
                                        )
                                    })
                                )
                            }}
                        </ProductConsumer>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
