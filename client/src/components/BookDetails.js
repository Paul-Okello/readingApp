import { useQuery } from "@apollo/client";
import React from "react";
import { GET_BOOK_QUERY } from "../querries/querries";

function BookDetails() {
  const { loading, data, error } = useQuery(GET_BOOK_QUERY);
  return (
    <div id="book__details">
      <p>Output of book details here</p>
    </div>
  );
}

export default BookDetails;
