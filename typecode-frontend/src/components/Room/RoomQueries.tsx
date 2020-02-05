import { gql } from "apollo-boost";

export const FETCH_MY_ROOMS = gql`
  query fetchMyRooms {
    fetchMyRooms {
      id
      roomName
    }
  }
`;

export const CREATE_MY_ROOM = gql`
  mutation createMyRoom($roomName: String!) {
    createMyRoom(roomName: $roomName) {
      ok
    }
  }
`;
