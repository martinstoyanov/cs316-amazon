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
import Name from './components/Name';
import SignIn from './components/SignIn';
import Register from './components/Register';

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

  const handle_login = (e, data) => {
    e.preventDefault();
    // axios.post('https://whalescale-stagingcicd.herokuapp.com/login/', data)
    //   .then(
    //     res => {

    //       localStorage.setItem('token', res.data.token);
    //       this.setState({
    //         logged_in: true,
    //         username: data.username,
    //         mytoke: res.data.token
    //       })
    //       console.log(res); //debugging purposes
    //       // <Redirect to="/" /> 
    //       // window.history.back();

    //       window.location.replace("http://whalescale-one.vercel.app/");
    //     }
    //   ).catch(function (error) {
    //     console.log('User cannot log in.');
    //     console.log(error);
    //   })
  }

  const handle_signup = (e, data) => {
    e.preventDefault();
    // axios.post('https://whalescale-stagingcicd.herokuapp.com/register/', data)
    //   .then(
    //     res => {
    //       localStorage.setItem('token', res.data.token);
    //       this.setState({
    //         logged_in: true,
    //         username: data.username,
    //         mytoke: res.data.token
    //       })
    //       console.log(res); //debugging purposes
    //       window.location.replace("http://whalescale-one.vercel.app/");
    //       // window.history.back();

    //       // <Redirect to="/" />
    //     }
    //   )
  }


  const handle_logout = () => {
    localStorage.remoteItem('token') 
  }

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
            <Route path="/items/:Id" component={Name} />
            <Route path="/login">
              <SignIn handle_login={handle_login} />
            </Route>
            <Route path="/register">
              <Register handle_signup={handle_signup} />
            </Route>
          </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
  