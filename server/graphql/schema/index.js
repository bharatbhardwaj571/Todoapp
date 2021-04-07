const {buildSchema} = require('graphql');

module.exports = buildSchema(`
    
    type Todo {
        _id:ID!
        title:String!
        body:String!
        createdAt:String!
    }

    input TodoInput {
        title:String!
        body:String!

    }

    type Query {
        todos: [Todo!]
    }

    type Mutation {
        createTodo(todo:TodoInput): Todo,
        updateTodo(id:ID!,title:String!,body:String!):Todo,
        removeTodo(id:ID!):Todo
        
    }

    schema {
        query:Query
        mutation:Mutation
    }

`)
