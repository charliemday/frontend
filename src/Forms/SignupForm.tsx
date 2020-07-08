import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import routes from 'Navigation/Routes';

const ErrorContainer = styled.div`
  color: red;
  text-align: left;
`;

export const FooterContainer = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const SignupForm = (props: {
  onSubmit: (values: any) => void;
  error: { [key: string]: string[] };
}) => {
  const { handleSubmit, register, errors, watch } = useForm();
  const onSubmit = (values: any) => props.onSubmit(values);
  const { error } = props;
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId='formBasicEmail'>
        <Form.Control
          type='text'
          placeholder='Username'
          name='username'
          ref={register({
            required: 'Required',
          })}
        />
        <ErrorContainer>
          {(errors.email && errors.email.message) ||
            (error.username && error.username[0])}
        </ErrorContainer>
      </Form.Group>

      <Form.Group controlId='formBasicPassword'>
        <Form.Control
          type='password'
          placeholder='Password'
          name='password'
          ref={register({
            required: 'Required',
          })}
        />
        <ErrorContainer>
          {(errors.password && errors.password.message) ||
            (error.password && error.password[0])}
        </ErrorContainer>
      </Form.Group>
      <Form.Group controlId='formBasicPassword'>
        <Form.Control
          type='password'
          placeholder='Confirm Password'
          name='confirmPassword'
          ref={register({
            required: 'Required',
            validate: (value: string) =>
              value === watch('password') || 'The passwords must match',
          })}
        />
        <ErrorContainer>
          {errors.confirmPassword && errors.confirmPassword.message}
        </ErrorContainer>
      </Form.Group>
      <FooterContainer>
        <Link to={routes.login} style={{ marginRight: 20 }}>
          Already have an account?
        </Link>
        <Button
          variant='primary'
          type='submit'
          style={{
            float: 'right',
          }}
        >
          Signup
        </Button>
      </FooterContainer>
    </Form>
  );
};
export default SignupForm;
