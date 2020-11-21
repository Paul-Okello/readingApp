import { gql, useQuery } from "@apollo/client";

export const GET_BOOKS_QUERY = gql`
  {
    books {
      name
      id
    }
  }
`;
