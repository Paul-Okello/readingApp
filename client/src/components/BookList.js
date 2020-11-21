import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_BOOKS_QUERY = gql`
  {
    books {
      name
      id
    }
  }
`;

function BookList() {
  const { loading, error, data } = useQuery(GET_BOOKS_QUERY);

  if (loading) {
    return <div>Loading books...</div>;
  } else if (data) {
    return data.books.map((book) => {
      return (
        <div>
          <ul className="book__list">
            <li>
              <Typography key={book.id} variant="h5">
                {book.name}
              </Typography>
            </li>
          </ul>
        </div>
      );
    });
  } else {
    return `Error! ${error}`;
  }
}

export default BookList;
