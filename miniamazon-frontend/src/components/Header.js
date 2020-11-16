import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import SearchDisplay from './SearchDisplay'
import axios from 'axios';

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

  search(event) {
    axios.get(`${serverURL}/items/name`,{ params: {
      name: this.state.searchTerm
    }}).then((response) => {
        // parse the json in the output
        this.setState({searchResults: ['test']})
        this.props.updateItems(response.data.data)
    });
    //this.setState({searchResults: [... this.searchResults, this.state.searchTerm]})
    event.preventDefault();
}
  
  render()
  {
    return (
      <Styles>
        <Navbar expand="lg">
          <Navbar.Brand href="/"> 
            <img 
              src= "miniamazon-frontend/noamazon.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="NoAmazon logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Form className="form-center" onSubmit={this.search}>
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
        <SearchDisplay searchResults = {this.state.searchResults}> </SearchDisplay>   
      </Styles>
    )
  }
}

