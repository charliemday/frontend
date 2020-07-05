import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, InputGroup } from 'react-bootstrap';

export interface FormData {
  currency: string;
  initialValue: string;
  finalValue: string;
  description: string;
}

interface Props {
  onSubmit: (args: FormData) => void;
}

const NewTransactionForm = (props: Props) => {
  const { handleSubmit, register, errors } = useForm<FormData>();
  const onSubmit = (values: any) => console.log(values);

  const [currency, setCurrency] = useState('£');

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
      </Form.Group>
      <Form.Group>
        <Form.Label>I started with:</Form.Label>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>{currency}</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            name='initialValue'
            ref={register({
              required: 'Required',
            })}
          />
        </InputGroup>
      </Form.Group>
      <Form.Group>
        <Form.Label>I ended with:</Form.Label>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>{currency}</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            name='finalValue'
            ref={register({
              required: 'Required',
            })}
          />
        </InputGroup>
      </Form.Group>
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
      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  );
};

export default NewTransactionForm;
