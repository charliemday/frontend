import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  color: red;
`;

const LoginForm = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values: any) => console.log(values);

  console.log(errors);

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            name='email'
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

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </>
  );
};
export default LoginForm;
