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
    color: #c0b3f2;
    &:hover { color: white; }
    font-family: 'Cormorant Garamond', Garamond, Georgia, 'Times New Roman', Times, serif;
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #c0b3f2;
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
      searchResults : []
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
          <Navbar.Brand href="/">Mini-Amazon</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Form className="form-center" onChange={this.search}>
            <FormControl type="text" value = {this.state.searchTerm}  onChange = {this.handleSearchInputChange} placeholder="Search" className="" />
          </Form>
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
              <Nav.Item><Nav.Link href="/account">My Account</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link href="/shop">Shop</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link href="/cart">Cart</Nav.Link></Nav.Item>
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
