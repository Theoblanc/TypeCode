import React from "react";
import RoomPresenter from "./RoomPresenter";
import { FIND_MY_ROOMS } from "./RoomQueries";
import { useQuery } from "react-apollo";

const RoomContainer: React.FC = () => {
  const { data } = useQuery(FIND_MY_ROOMS);
  console.log("findroom", data);

  const moverRoom = () => {
    console.log("The link was clicked.");
  };

  return <RoomPresenter moverRoom={moverRoom} data={data} />;
};

export default RoomContainer;
