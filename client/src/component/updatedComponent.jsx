import React, { useState } from 'react'
import {Form,Button} from 'react-bootstrap';
const UpdatedComponent = ({onClickHandler2,id,setUpdate,setShow}) => {
  const [title,setTitle] = useState('');
  const [body,setBody] = useState('');
    return (
      <div>
        <div>
          <p>please fill the updated details</p>
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
              onClick={() => {
                onClickHandler2(title, body, id);
                setUpdate(true);
                setShow(true)
              }}
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
}

export default UpdatedComponent
