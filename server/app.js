const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { MONGODB } = require("./config");
const schema = require("./Schema/schema");
const mongoose = require("mongoose");

const app = express();
//Database
mongoose
  .connect(MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected");
  });
//Set up middleware
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("Now listening for requests on port 4000");
});
