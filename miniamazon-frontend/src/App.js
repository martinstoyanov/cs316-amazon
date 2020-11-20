import React, {useState, useEffect} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
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
import Forgot from './components/ForgottenPassword.js';
import Register from './components/Register';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';

function App() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [message, setMessage] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const axios = require('axios');

  const updateItems = (newItems, newTerm) => {
    setItems(newItems)
    setSearchTerm(newTerm);
  }

  useEffect(() => {
    if(items.length > 0) {
      window.location = `/Search/${searchTerm}`;
    }
  }, [items]); 

  const API_URL = 'https://miniamazon-sp9m9.ondigitalocean.app'

  const handle_login = (e, data) => {
    e.preventDefault();
    console.log(data)
    if (data.user_name && data.user_password) {
    axios.post(API_URL + '/login', data)
      .then(
        res => {
          setMessage(res.data.message)
          if (res.data.id) {
            localStorage.setItem('token', res.data.id);
            setLoggedIn(true)
          }
          console.log(res); //debugging purposes
          // <Redirect to="/" /> 
          // window.history.back();

          // window.location.replace("http://localhost:3000");
        }
      ).catch(function (error) {
        console.log('User cannot log in.');
        setMessage('Invalid username or password.')
        console.log(error);
        // window.location.replace("http://localhost:3000");
      })
    } else {
      setMessage('Please fill out all fields!!!!')
    }
  }

  const handle_signup = (e, data) => {
    e.preventDefault();
    console.log(data)
    if (data.user_name.length > 0 && data.user_password.length > 0 && data.user_email.length > 0) {
    axios.post(API_URL + '/user', data)
      .then(
        res => {
          setMessage(res.data.message)
          if (res.data.user_id) {
            localStorage.setItem('token', res.data.user_id);
            setLoggedIn(true)
          }

          console.log(res.data.user_id)
          
          console.log(res); //debugging purposes
          // window.location.replace("http://localhost:3000");
          // window.history.back();

          // <Redirect to="/" />
        }
      )
    } else {
      setMessage('Please fill out all fields!!!!')
    }
  }


  const handle_logout = () => {
    console.log('LOGOUT')
    localStorage.removeItem('token') 
    setLoggedIn(false)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setMessage('')
  }
  return (
    <React.Fragment>
      <Router>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={(message)}
          onClose={handleClose}
          autoHideDuration={3000}
          message={message}
        ></Snackbar>
        <Header updateItems={updateItems} loggedIn={(localStorage.getItem('token'))} />
          <Switch>
            <Route exact path="/" >
            {localStorage.getItem('token') ?  <Home/> : <Redirect from = '/' to='/login'></Redirect>}
            </Route>
            <Route exact path="/Account" component={Account} />
            <Route path="/Account-Edit" component={AccountEdit} />
          <Route path="/Shop">{localStorage.getItem('token') ? <ProductsList /> : <Redirect from='/shop' to='/login'></Redirect>}</Route>
          <Route path="/Cart">{localStorage.getItem('token') ? <Cart /> : <Redirect from='/cart' to='/login'></Redirect>}</Route>
            <Route path="/Thanks" component={PostCheckout} />
            <Route path="/Orders" component={OrdersList} />
            <Route exact path="/account/seller/products" component={SellerList} />
            <Route exact path="/account/seller/add-products" component={SellerAdd} />
            <Route path="/account/seller/delete/:ID" component={SellerDelete} />
            <Route exact path="/account/seller/edit/:ID" component={SellerEdit} />
            <Route path="/Balance" component={Balance} />
            <Route path="/Sold-Items" component={SoldList} />
            <Route path="/Items/:Id" component={Item} />
          <Route path="/Forgot" component={Forgot} />
            <Route path="/Reviews" component={ReviewsAccount} />
            <Route path="/Order-History/:Id" component={OrderHistory} />
            <Route path="/items/:Id" component={Name} />
            <Route path="/login">
              {!loggedIn ? <SignIn handle_login={handle_login} /> : <Redirect from='/login' to='/'></Redirect>}
            </Route>
            <Route path="/register">
              {!loggedIn ? <Register handle_signup={handle_signup} /> : <Redirect from='/register' to='/'></Redirect>} 
            </Route>
          <Route path="/logout" render={() => {
            handle_logout()
            return <Redirect from='/logout' to='/login' />;
          }} />

          </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
  