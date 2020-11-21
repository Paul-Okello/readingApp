import { useQuery } from "@apollo/client";
import { Button } from "@material-ui/core";
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
        return <option key={author.id}>{author.name}</option>;
      });
    } else {
      return `Error! ${error}`;
    }
  }
  function submitForm(e) {
    e.preventDefault();
    addBook({
      variables: {
        name,
        genre,
        authorId,
      },
    });
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
          {displayAuthors()}
        </select>
      </div>
      <Button variant="outlined" color="primary">
        +
      </Button>
    </form>
  );
}

export default AddBook;
