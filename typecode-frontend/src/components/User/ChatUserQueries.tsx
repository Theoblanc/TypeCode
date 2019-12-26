import { gql } from "apollo-boost";

export const ME = gql`
  query me {
    id
    name
    email
    friends {
      id
      name
    }
  }
`;
