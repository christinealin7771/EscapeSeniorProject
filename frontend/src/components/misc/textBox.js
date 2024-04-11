import React from 'react';
import { Form, Card } from 'react-bootstrap';

const TextBox = () => {
  return (
    <Card >
      <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Control 
            as="textarea" 
            rows={17} 
            placeholder="For your escape plan..." 
            tabIndex={0} 
            autoFocus
          />
        </Form.Group>
      </Form>
    </Card>
  );
};

export default TextBox;
