import React from "react";
import BookList from "./components/BookList";

//apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div id="main">
      <h1>My Reading List.</h1>
      <BookList />
    </div>
  );
}

export default App;
