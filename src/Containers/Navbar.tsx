import React, { Component } from 'react';
import { Navbar, Nav, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import routes from 'Navigation/Routes';

const ButtonContainer = styled.div`
  margin-left: 20px;
`;

const NavLink = styled(Link)`
  padding: 10px;
`;

class CustomNavbar extends Component {
  state = {};
  render() {
    return (
      <Navbar bg='light' variant='light'>
        <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
        <Nav className='mr-auto'>
          <NavLink to={routes.home}>Home</NavLink>
          <NavLink to={routes.feed}>Feed</NavLink>
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
