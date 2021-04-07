import React from 'react';
import {Button,Form} from 'react-bootstrap'

const InputComponent = ({ title, setTitle, body, setBody, onClickHandler,show }) => {
  
  return show == false ? (
    " "
  ) : (
    <div
      style={{
        width: "500px",
        margin: "0 auto",
      }}
    >
      <Form>
        <Form.Group controlId="formBasicText">
          <Form.Label>Enter Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicText">
          <Form.Label>Enter Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Description"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={onClickHandler}
          style={{
            marginBottom: "30px",
          }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default InputComponent
