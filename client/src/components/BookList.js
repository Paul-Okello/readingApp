import React from "react";
import { gql } from "@apollo/client";

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

function BookList() {
  return (
    <div>
      <ul className="book__list">
        <li>Book Name</li>
      </ul>
    </div>
  );
}

export default BookList;
