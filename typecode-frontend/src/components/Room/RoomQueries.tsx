import { gql } from "apollo-boost";

export const FIND_MY_ROOMS = gql`
  query findMyrooms {
    findMyrooms {
      roomName
    }
  }
`;
