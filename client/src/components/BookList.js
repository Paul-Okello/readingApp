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

  return (
    <div>
      <ul className="book__list">
        <li>Book Name</li>
      </ul>
    </div>
  );
}

export default BookList;
