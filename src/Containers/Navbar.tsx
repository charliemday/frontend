import React, { Component } from 'react';

import { Navbar, Nav, FormControl, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import routes from 'Navigation/Routes';

class CustomNavbar extends Component {
  state = {};
  render() {
    return (
      <Navbar bg='light' variant='light'>
        <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
        <Nav className='mr-auto'>
          <Nav.Link>
            <Link to={routes.home}>Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to={routes.login}>Login</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to={routes.signup}>Signup</Link>
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type='text' placeholder='Search' className='mr-sm-2' />
          <Button variant='outline-info'>Search</Button>
        </Form>
      </Navbar>
    );
  }
}

export default CustomNavbar;
