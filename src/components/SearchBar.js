import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div className="">
                <div className="search-wrapper d-flex justify-content-center">
                    <i className="material-icons search-icon">search</i><input type="text" id="search" className="search-input" /> 
                </div>
            </div>
        )
    }
}