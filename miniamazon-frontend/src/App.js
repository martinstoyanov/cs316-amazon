import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from './components/Header';
import Home from './components/Home';
import ProductsList from './components/ProductsList';
import Account from './components/Account';
import AccountEdit from './components/AccountEdit';
import Cart from './components/Cart';
import PostCheckout from './components/PostCheckout';
import OrdersList from './components/OrdersList';
import SellerList from './components/SellerList';
import SellerEdit from './components/SellerEdit';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Account" component={Account} />
            <Route exact path="/Account-Edit" component={AccountEdit} />
            <Route exact path="/Shop" component={ProductsList} />
            <Route exact path="/Cart" component={Cart} />
            <Route exact path="/Thanks" component={PostCheckout} />
            <Route exact path="/Orders" component={OrdersList} />
            <Route exact path="/account/seller/products" component={SellerList} />
            <Route exact path="/account/seller/edit" component={SellerEdit} />
          </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
  