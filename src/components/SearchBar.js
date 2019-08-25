import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class SearchBar extends Component {
    render() {
        return (
            <div className="">
                {/* <Link to='/ProductList' handleSubmit={this.props.handleSubmit}> */}
                <form className="search-wrapper d-flex justify-content-center" onSubmit={this.props.handleSubmit}>
                    <i className="material-icons search-icon" onClick={this.props.handleSubmit}>search</i>
                        <input type="text" id="search" className="search-input" onChange={this.props.handleChange} /> 
                </form>
                {/* </Link> */}
            </div>
        )
    }
}
