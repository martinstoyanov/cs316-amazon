import React, {useState, useEffect} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import ProductsList from './components/ProductsList';
import Account from './components/Account';
import AccountEdit from './components/AccountEdit';
import Cart from './components/Cart';
import PostCheckout from './components/PostCheckout';
import OrdersList from './components/OrdersList';
import Item from './components/Item';
import SearchResults from './components/SearchResults';
import ReviewsAccount from './components/ReviewsAccount';
import OrderHistory from './components/OrderHistory';
import Balance from './components/Balance';
import SoldList from './components/SoldList';
import Name from './components/Name';

function App() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const updateItems = (newItems, newTerm) => {
    setItems(newItems)
    setSearchTerm(newTerm);
  }

  useEffect(() => {
    if(items.length > 0) {
      window.location = `/Search/${searchTerm}`;
    }
  }, [items]); 

  return (
    <React.Fragment>
      <Router>
        <Header updateItems={updateItems} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Account" component={Account} />
            <Route path="/Account-Edit" component={AccountEdit} />
            <Route path="/Shop" component={ProductsList} />
            <Route path="/Cart" component={Cart} />
            <Route path="/Thanks" component={PostCheckout} />
            <Route path="/Orders" component={OrdersList} />
            <Route path="/Balance" component={Balance} />
            <Route path="/Sold-Items" component={SoldList} />
            <Route path="/Items/:Id" component={Item} />
            <Route path="/Reviews" component={ReviewsAccount} />
            <Route path="/Order-History/:Id" component={OrderHistory} />
            <Route path="/items/:Id" component={Name} />
          </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
  