import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from './components/Header';
import Home from './components/Home';
import Account from './components/Account';
import AccountEdit from './components/AccountEdit';
import Cart from './components/Cart';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Account" component={Account} />
            <Route path="/Account-Edit" component={AccountEdit} />
            <Route path="/Cart" component={Cart} />
          </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
  