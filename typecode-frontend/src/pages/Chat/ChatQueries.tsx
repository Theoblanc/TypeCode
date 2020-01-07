import gql from "graphql-tag";

export const MUTATION_LOGIN = gql`
  query sendMessage($roomId: String!) {
    text
    from {
      name
    }
  }
`;
