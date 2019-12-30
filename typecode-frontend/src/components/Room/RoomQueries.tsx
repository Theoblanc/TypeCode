import { gql } from "apollo-boost";

export const FIND_MY_ROOMS = gql`
  query findMyrooms {
    findMyrooms {
      id
      roomName
    }
  }
`;

export const MAKE_MY_ROOM = gql`
  mutation createMyRoom($roomName: String!) {
    createMyRoom(roomName: $roomName) {
      ok
    }
  }
`;
