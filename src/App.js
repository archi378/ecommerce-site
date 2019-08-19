import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import PageNotFound from './components/PageNotFound';
import Modal from './components/Modal';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/ProductList" component={ProductList} />
        <Route exact path="/ProductDetails" component={ProductDetails} />
        <Route exact path="/Cart" component={Cart} />
        <Route exact path="/Wishlist" component={Wishlist} />
        <Route component={PageNotFound} />
      </Switch>
      <Modal />
      <Footer />
    </React.Fragment>
  );
}

export default App;
