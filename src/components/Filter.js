import React, { Component } from 'react';
import Select from './Select';

export default class Filter extends Component {
    render() {
        let sortOption = ["Low to Hign","High to Low"];
        let filterOption = ["Brand","Color","Memory"]
        console.log(sortOption);
        return (
            <div className="d-flex justify-content-md-center padBottom" id="filter-section">
                <div className="col-xs-6 mr-2">
                    {/* <label className="label-text">Filter</label>
                        <select className="pl-2 ml-2">
                            <option>Brand</option>
                            <option>Color</option>
                            <option>OS</option>
                        </select>
                        <span className="select-dropdown ml-2 mr-4"></span> */}
                        <Select label={"Filter by"} options={filterOption} />
                </div>
                <div className="col-xs-6 ">
                    {/* <label className=" label-text">Sort
                        <select className="pl-2 ml-2">
                            <option>Low to High</option>
                            <option>High to Low</option>
                            <option></option>
                        </select>
                    </label> */}
                     <Select label={"Sort by"} options={sortOption}/>
                </div>        
            </div>
        )
    }
}
