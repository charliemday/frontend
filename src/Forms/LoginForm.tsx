import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';

interface Props {
  onSubmit: Function;
  error: boolean;
}

const ErrorContainer = styled.div`
  color: red;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const LoginForm = (props: Props) => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values: any) => props.onSubmit(values);
  const { error } = props;

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            placeholder='Enter username'
            name='username'
            ref={register({
              required: 'Required',
            })}
          />
        </Form.Group>

        <ErrorContainer>{errors.email && errors.email.message}</ErrorContainer>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            name='password'
            ref={register({
              required: 'Required',
            })}
          />
        </Form.Group>

        <ErrorContainer>
          {errors.password && errors.password.message}
        </ErrorContainer>

        {error && <ErrorContainer>Invalid credentials</ErrorContainer>}

        <Button variant='primary' type='submit'>
          Login
        </Button>
      </Form>
    </>
  );
};
export default LoginForm;
