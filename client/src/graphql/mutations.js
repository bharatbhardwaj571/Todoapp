import {gql} from '@apollo/client';

export const ADD_TODO = gql`
  mutation AddTodo($title: String!, $body: String!) {
    createTodo(todo: { title: $title, body: $body }) {
      title
      body
    }
  }
`;

export const REMOVE_TODO = gql`
  mutation RemoveTodo($id: ID!) {
    removeTodo(id: $id) {
      title
      body
    }
  }
`;

export const UPDATE_TODO = gql`
  mutation UpdateTodo($id: ID!, $title: String!, $body: String!) {
    updateTodo(id: $id, title: $title, body: $body) {
      title
      body
    }
  }
`;