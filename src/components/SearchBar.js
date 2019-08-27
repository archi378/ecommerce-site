import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class SearchBar extends Component {

    search =()=> {
        let element = document.getElementById('searchbox');
        // element.style.display = (element.style.display != 'block' ? 'block' : 'none' );
        // slideNav.style.display = (slideNav.style.width != '0' ? '0' : ' ' );
        element.classList.toggle('activeRight');
        console.log(element)
    }
    render() {
        return (
            <div className=" d-flex justify-content-center">
                <form className="search-wrapper d-none d-md-block" onSubmit={this.props.handleSubmit}>
                    <span className="d-flex">
                        <input type="text" id="search" placeholder="Search..." className="search-input" onChange={this.props.handleChange} />
                        <Link to='/Search-results' className="d-inline-block search-icon-wrapper"><i className="material-icons search-icon" onClick={this.props.handleSearch}>search</i></Link>
                    </span> 
                </form>
        
                <form className="d-md-none d-block"  onSubmit={this.props.handleSubmit}>
                    <span id="searchbox-wrapper" className="d-flex justify-content-center align-items-center">
                        <input type="text" id="searchbox" placeholder="search" className="search-input" onChange={this.props.handleChange} />
                        <Link to='/Search-results'><i className="material-icons search-icon pt-2 nav-text" onClick={this.props.handleSearch}>search</i></Link>
                    </span>
                </form>
            </div>
        )
    }
}
