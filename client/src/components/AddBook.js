import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import {
  GET_AUTHORS_QUERY,
  ADD_BOOK_MUTATION,
  GET_BOOKS_QUERY,
} from "../querries/querries";

function AddBook() {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorId, setAuthorId] = useState("");

  const { loading, data, error } = useQuery(GET_AUTHORS_QUERY);
  const [addBook] = useMutation(ADD_BOOK_MUTATION);

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
      refetchQueries: [{ query: GET_BOOKS_QUERY }],
    });
  }

  return (
    <form action="" id="add__book" onSubmit={submitForm}>
      <div className="field">
        <label htmlFor="">Book Name</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="field">
        <label htmlFor="">Genre</label>
        <input type="text" onChange={(e) => setGenre(e.target.value)} />
      </div>
      <div className="field">
        <label htmlFor="">Author</label>
        <select name="" id="" onChange={(e) => setAuthorId(e.target.value)}>
          <option value="">Select Author</option>
          {displayAuthors()}
        </select>
      </div>
      <button>+</button>
    </form>
  );
}

export default AddBook;
