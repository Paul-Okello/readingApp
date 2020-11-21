import { useQuery } from "@apollo/client";
import React from "react";
import { GET_AUTHORS_QUERY } from "../querries/querries";

function AddBook() {
  const { loading, data, error } = useQuery(GET_AUTHORS_QUERY);

  function displayAuthors() {
    if (loading) {
      return (
        <option value="" disabled>
          <p>Loading Authors...</p>
        </option>
      );
    } else if (data) {
      return data.authors.map((author) => {
        return (
          <option key={author.id}>
            <p>{author.name}</p>
          </option>
        );
      });
    } else {
      return `Error! ${error}`;
    }
  }

  return (
    <form action="" id="add__book">
      <div className="field">
        <label htmlFor="">Book Name</label>
        <input type="text" />
      </div>
      <div className="field">
        <label htmlFor="">Genre</label>
        <input type="text" />
      </div>
      <div className="field">
        <label htmlFor="">Author</label>
        <select name="" id="">
          <option value="">Select Author</option>
        </select>
      </div>
    </form>
  );
}

export default AddBook;
