import React, { Component } from 'react';
import styled from 'styled-components';
import SignupForm from 'Forms/SignupForm';
import Card from 'react-bootstrap/Card';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import routes from 'Navigation/Routes';
import AuthenticationActions from 'Redux/AuthenticationRedux';

export const Container = styled(Card)`
  padding: 40px;
  width: 30%;
  margin: auto;
  margin-top: 40px;
  text-align: center;
  box-shadow: 2px 2px 2px 2px #888888;
`;

export const Header = styled.h1`
  font-family: Lato;
  margin-bottom: 20px;
`;

interface Props extends RouteComponentProps {
  signup: Function;
  getUserDetails: Function;
}

interface State {
  error: {
    [key: string]: string[];
  };
}

class SignupContainer extends Component<Props, State> {
  state = {
    error: {},
  };

  getUserDetailsCallback = () => ({
    onSuccess: () => this.props.history.push(routes.home),
    onFailure: () => console.log('Failure'),
  });

  signupCallback = () => ({
    onSuccess: async () =>
      await this.props.getUserDetails(this.getUserDetailsCallback()),
    onFailure: (error: { [key: string]: string[] }) => this.setState({ error }),
  });

  handleSubmit = async (values: any) => {
    await this.props.signup(values, this.signupCallback());
  };
  render() {
    const { error } = this.state;
    return (
      <Container>
        <Header>Signup</Header>
        <SignupForm onSubmit={this.handleSubmit} error={error} />
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    signup: (data: any, callback: any) =>
      dispatch(AuthenticationActions.signupRequest(data, callback)),
    getUserDetails: (callback: any) =>
      dispatch(AuthenticationActions.getUserDetailsRequest(callback)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);
