import React, { useState } from "react";
import UpdatedComponent from "./updatedComponent";
import { ButtonGroup, Button,ListGroup,ListGroupItem } from "react-bootstrap";

const ListComponent = ({ data, removeTodo, onClickHandler2 ,setShow }) => {
  const [update, setUpdate] = useState(true);
  const [id, setId] = useState("");

  return (
    <div>
      <ul>
        {update == true ? (
          data?.map((ele) => {
            return (
              <ListGroup key={ele.id}>
                <ListGroup.Item variant="info">
                  <div style={{
                    display:"flex",
                    justifyContent:"space-between",

                  

                  }}>
                    <div>{ele.title}</div>
                    <p>{ele.body}</p>
                    <div>
                      <ButtonGroup aria-label="Basic example">
                        <Button
                          onClick={() =>
                            removeTodo({ variables: { id: ele._id } })
                          }
                          variant="danger"
                        >
                          DELETE
                        </Button>
                        <Button
                          onClick={() => {
                            setUpdate(false);
                            setShow(false)
                            setId(ele._id);
                          }}
                          variant="secondary"
                        >
                          EDIT
                        </Button>
                      </ButtonGroup>
                    </div>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            );
          })
        ) : (
          <UpdatedComponent
            onClickHandler2={onClickHandler2}
            id={id}
            setUpdate={setUpdate}
            setShow={setShow}
          />
        )}
      </ul>
    </div>
  );
};

export default ListComponent;
