import React from "react";
import Typography from "@material-ui/core/Typography";
import { GET_BOOKS_QUERY } from "../querries/querries";
import { useQuery } from "@apollo/client";

function BookList() {
  const { loading, error, data } = useQuery(GET_BOOKS_QUERY);

  if (loading) {
    return <div>Loading books...</div>;
  } else if (data) {
    return data.books.map((book) => {
      return (
        <ul className="book__list">
          <li>
            <Typography variant="h5" key={book.id}>
              {book.name}
            </Typography>
          </li>
        </ul>
      );
    });
  } else {
    return `Error! ${error}`;
  }
}

export default BookList;
