import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { ErrorContainer, SuccessContainer } from 'Forms/LoginForm';

export interface FormData {
  currency: string;
  startSale: string;
  endSale: string;
  description: string;
}

interface Props {
  onSubmit: (args: FormData) => void;
  success: boolean;
  error: boolean;
}

const NewTransactionForm = (props: Props) => {
  const { handleSubmit, register, errors } = useForm<FormData>({
    defaultValues: {
      startSale: '1',
      endSale: '1',
      description: 'Lorem...',
    },
  });
  const onSubmit = (values: any) => props.onSubmit(values);

  const [currency, setCurrency] = useState('£');

  const { success, error } = props;

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Label>Currency:</Form.Label>
        <Form.Control
          as='select'
          onChange={(e: any) => setCurrency(e.target.value)}
          name='currency'
          ref={register()}
        >
          <option>£</option>
          <option>$</option>
        </Form.Control>
        <ErrorContainer>
          {errors.currency && errors.currency.message}
        </ErrorContainer>
      </Form.Group>
      <Form.Group>
        <Form.Label>I started with:</Form.Label>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>{currency}</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            name='startSale'
            ref={register({
              required: 'Required',
            })}
          />
        </InputGroup>
      </Form.Group>
      <ErrorContainer>
        {errors.startSale && errors.startSale.message}
      </ErrorContainer>

      <Form.Group>
        <Form.Label>I ended with:</Form.Label>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>{currency}</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            name='endSale'
            ref={register({
              required: 'Required',
            })}
          />
        </InputGroup>
      </Form.Group>
      <ErrorContainer>
        {errors.endSale && errors.endSale.message}
      </ErrorContainer>

      <Form.Group controlId='exampleForm.ControlTextarea1'>
        <Form.Label>Some Description about your transaction</Form.Label>
        <Form.Control
          as='textarea'
          name='description'
          rows={3}
          ref={register({
            required: 'Required',
          })}
        />
      </Form.Group>
      <ErrorContainer>
        {errors.description && errors.description.message}
      </ErrorContainer>

      <Button variant='primary' type='submit'>
        Submit
      </Button>
      {error ? (
        <ErrorContainer>
          {errors.description && errors.description.message}
        </ErrorContainer>
      ) : success ? (
        <SuccessContainer>Success!</SuccessContainer>
      ) : null}
    </Form>
  );
};

export default NewTransactionForm;
