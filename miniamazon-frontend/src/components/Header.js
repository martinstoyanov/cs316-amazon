import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';
import SearchContainer from './SearchContainer.jsx'
import Name from './Name'

const serverURL = "http://localhost:8888"
const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #ff9900;
    &:hover { color: white; }
    font-family: 'Cormorant Garamond', Garamond, Georgia, 'Times New Roman', Times, serif;
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #ff9900;
    &:hover { color: white; }
    font-family: 'Cormorant Garamond', Garamond, Georgia, 'Times New Roman', Times, serif;
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
    font-family: 'Cormorant Garamond', Garamond, Georgia, 'Times New Roman', Times, serif;
  }
`;

export default class Header extends React.Component
{
  constructor(props){
    super(props);
    this.state = {
      searchTerm: '',
      searchResults : [],
      loggedIn: false
    }
    this.search = this.search.bind(this)
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
  }

  handleSearchInputChange(event){
    this.setState({searchTerm: event.target.value})
  }

  search = () => {
      axios.get(`${serverURL}/items/name/${this.state.searchTerm}`).then((response) => {
      var arr = [];
      arr.push(response.data.data[0]._id);
      console.log(response.data.data[0]._id);
      console.log(arr.length);
      this.state.searchResults = arr;
      return arr;
    });
}

  render()
  {
    return (
      <Styles>
        <Navbar expand="lg">
          <Navbar.Brand href="/"> 
            <img 
              src= "./kamazon.png"
              height="40"
              className="d-inline-block align-top"
              alt="Kamazon"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Form className="form-center" onChange={this.search}>
            <FormControl type="text" value = {this.state.searchTerm}  onChange = {this.handleSearchInputChange} placeholder="Search" className="" />
          </Form>
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item><Nav.Link href="/"><b>Home</b></Nav.Link></Nav.Item> 
              {!this.props.loggedIn ? 
              <div><Nav.Item><Nav.Link href="/register"><b>Register</b></Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link href="/login"><b>Login</b></Nav.Link></Nav.Item></div>
              : <Nav.Item><Nav.Link href="/account"><b>My Account</b></Nav.Link></Nav.Item> }
              <Nav.Item><Nav.Link href="/shop"><b>Shop</b></Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link href="/cart"><b>Cart</b></Nav.Link></Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div>
              {this.state.searchResults.map(name => <Name name = {name}/>)}
          </div>
      </Styles>
    )
  }
}
