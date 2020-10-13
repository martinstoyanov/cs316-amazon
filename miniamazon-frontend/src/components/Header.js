import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';

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
export const Header = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Mini-Amazon</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
      </Form>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/account">My Account</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/cart">Cart</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)
