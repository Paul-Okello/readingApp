import React from "react";
import Typography from "@material-ui/core/Typography";
import { GET_BOOKS_QUERY } from "../querries/querries";
import { useQuery } from "@apollo/client";
import BookDetails from "./BookDetails";

function BookList() {
  const { loading, error, data } = useQuery(GET_BOOKS_QUERY);

  function displayBooks() {
    if (loading) {
      return <div>Loading books...</div>;
    } else if (data) {
      return data.books.map((book) => {
        return (
          <li key={book.id}>
            <Typography variant="h5">{book.name}</Typography>
          </li>
        );
      });
    } else {
      return `Error! ${error}`;
    }
  }
  return (
    <div>
      <ul className="book__list">{displayBooks()}</ul>
      <BookDetails />
    </div>
  );
}

export default BookList;
