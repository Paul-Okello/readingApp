import { gql } from "@apollo/client";

export const GET_BOOKS_QUERY = gql`
  {
    books {
      name
      id
    }
  }
`;
export const GET_AUTHORS_QUERY = gql`
  {
    authors {
      name
      id
    }
  }
`;
export const ADD_BOOK_MUTATION = gql`
  mutation {
    addBook(name: "", genre: "", authorId: "") {
      name
      id
    }
  }
`;
