import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer'


export default class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>Welcome Home</h1>
                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }
}
