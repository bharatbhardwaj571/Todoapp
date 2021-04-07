import React, { useState } from "react";
import "./App.css";
import InputComponent from "./component/inputComponent";
import ListComponent from "./component/listComponent";
import { useQuery, gql, useMutation } from "@apollo/client";
import {GET_TODOS} from './graphql/queries'
import {REMOVE_TODO,ADD_TODO,UPDATE_TODO} from './graphql/mutations';


function App() {
  const [show, setShow] = useState(true)
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [addTodo, { data: data2 }] = useMutation(ADD_TODO, {
    refetchQueries: (mutationResult) => [{ query: GET_TODOS }],
  });
  const [removeTodo] = useMutation(REMOVE_TODO,{
    refetchQueries:(mutationResult) => [{query: GET_TODOS}]
  })
  const [updateTodo] = useMutation(UPDATE_TODO,{
    refetchQueries:(mutationResult) => [{query:GET_TODOS}]
  })

  const { loading, error, data} = useQuery(GET_TODOS);
  if (loading) return <p>loading...</p>;
  if (error) return <p>Error</p>;

  const onClickHandler = () => {
    addTodo({ variables: { title: title, body: body } });
    setTitle("");
    setBody("");
  
  };

  const onClickHandler2 =(title,body,id) => {
    console.log(title,body,id)
    updateTodo({variables:{id:id,title:title,body:body}})
  }
  
  return (
    <div className="App">
      <div style={{
        fontSize:'3rem',
        textTransform:"uppercase",
        fontWeight:"lighter",
        letterSpacing:"1rem"
      }}>Todo app</div>
      <InputComponent
        title={title}
        setTitle={setTitle}
        body={body}
        setBody={setBody}
        onClickHandler={onClickHandler}
        show={show}
      />
      <ListComponent data={data?.todos} removeTodo={removeTodo} onClickHandler2={onClickHandler2} setShow={setShow}/>
    </div>
  );
}

export default App;
