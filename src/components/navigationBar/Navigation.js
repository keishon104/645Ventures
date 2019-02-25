import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import './Navigation.css';


class NavigationBar extends Component {
  render() {
    return (
      <div className="NavigationWrapper">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">645 Ventures</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Companies" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">PhantomBuster</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">AptDeco</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">VooDoo Manufacturing</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav.Link href="#link">Log Out</Nav.Link>

        </Navbar.Collapse>
      </Navbar>
      </div>
    );
  }
}

export default NavigationBar;
