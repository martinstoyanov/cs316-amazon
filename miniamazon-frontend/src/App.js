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

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Account" component={Account} />
            <Route path="/Account-Edit" component={AccountEdit} />
            <Route path="/Shop" component={ProductsList} />
            <Route path="/Cart" component={Cart} />
            <Route path="/Thanks" component={PostCheckout} />
            <Route path="/Orders" component={OrdersList} />
          </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
  