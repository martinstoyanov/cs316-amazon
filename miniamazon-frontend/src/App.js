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
import SellerList from './components/SellerList';
import SellerEdit from './components/SellerEdit';
import SellerAdd from './components/SellerAdd';
import SellerDelete from './components/SellerDelete';
import Item from './components/Item';
import SearchResults from './components/SearchResults';
import ReviewsAccount from './components/ReviewsAccount';
import OrderHistory from './components/OrderHistory';
import Balance from './components/Balance';
import SoldList from './components/SoldList';

function App() {
  // test data passed in for SearchResults page
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const updateItems = (newItems, newTerm) => {
    setItems(newItems)
    setSearchTerm(newTerm);
  }

  useEffect(() => {
    if(items.length > 0) {
      window.location = `/Search/${searchTerm}`;
      //alert(items.length);
    }
  }, [items]); 

  return (
    <React.Fragment>
      <Router>
        <Header updateItems={updateItems} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Account" component={Account} />
            <Route path="/Account-Edit" component={AccountEdit} />
            <Route path="/Shop" component={ProductsList} />
            <Route path="/Cart" component={Cart} />
            <Route path="/Thanks" component={PostCheckout} />
            <Route path="/Orders" component={OrdersList} />
            <Route exact path="/account/seller/products" component={SellerList} />
            <Route exact path="/account/seller/add-products" component={SellerAdd} />
            <Route path="/account/seller/delete/:ID" component={SellerDelete} />
            <Route exact path="/account/seller/edit/:ID" component={SellerEdit} />
            <Route path="/Balance" component={Balance} />
            <Route path="/Sold-Items" component={SoldList} />
            <Route path="/Items/:Id" component={Item} />
            <Route path="/Reviews" component={ReviewsAccount} />
            <Route path="/Order-History/:Id" component={OrderHistory} />
            <Route path="/Search/:key"  
                   render={(props) => (
                      <SearchResults {...props} key={props.location.pathname} items={items} />
                   )} />
          </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
  