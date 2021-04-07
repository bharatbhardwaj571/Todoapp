const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const graphqlSchema = require("./graphql/schema");
const graphqlResolvers = require("./graphql/resolvers");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true,
  })
);
mongoose
  .connect("mongodb://localhost/todo3", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    app.listen(5000, console.log("server is running 3000"));
    console.log("Connected to database");
  })
  .catch((error) => {
    throw new Error(error);
  });
