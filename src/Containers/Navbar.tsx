import { Button, Form, Nav, Navbar } from 'react-bootstrap';
import React, { Component } from 'react';

import AuthenticationActions, {
  AuthenticationSelectors,
} from 'Redux/AuthenticationRedux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import routes from 'Navigation/Routes';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  margin-left: 20px;
`;

const NavLink = styled(Link)`
  padding: 10px;
`;

interface Props extends RouteComponentProps {
  token: string | null;
  logout: () => void;
}

interface State {}

class CustomNavbar extends Component<Props, State> {
  state = {};

  logout = async () => {
    const { logout, history } = this.props;
    await logout();
    history.push(routes.base);
  };

  render() {
    const { token } = this.props;
    return (
      <Navbar bg='light' variant='light'>
        <Nav className='mr-auto'>
          <NavLink to={routes.home}>Home</NavLink>
        </Nav>
        <Form inline>
          {!token ? (
            <>
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
            </>
          ) : (
            <ButtonContainer>
              <Button variant='outline-info' onClick={this.logout}>
                Logout
              </Button>
            </ButtonContainer>
          )}
        </Form>
      </Navbar>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    token: AuthenticationSelectors.getToken(state),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    logout: () => dispatch(AuthenticationActions.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomNavbar);
