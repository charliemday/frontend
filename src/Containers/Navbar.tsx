import React, { Component } from 'react';
import { Navbar, Nav, FormControl, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import routes from 'Navigation/Routes';

const ButtonContainer = styled.div`
  margin-left: 20px;
`;

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
            <Link to={routes.feed}>Feed</Link>
          </Nav.Link>
        </Nav>
        <Form inline>
          <ButtonContainer>
            <Button variant='outline-info'>
              <Link to={routes.login}>Login</Link>
            </Button>
          </ButtonContainer>
          <ButtonContainer>
            <Button variant='outline-info'>
              {' '}
              <Link to={routes.signup}>Signup</Link>
            </Button>
          </ButtonContainer>
        </Form>
      </Navbar>
    );
  }
}

export default CustomNavbar;
