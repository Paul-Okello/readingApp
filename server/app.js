const express = require("express");

const app = express();

//Set up middleware
app.use(
  "/graphql",
  qraphqlHTTP({
    schema,
  })
);

app.listen(4000, () => {
  console.log("Now listening for requests on port 4000");
});
