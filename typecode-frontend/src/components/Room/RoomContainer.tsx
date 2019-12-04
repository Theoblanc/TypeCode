import React from "react";
import RoomPresenter from "./RoomPresenter";
import { FIND_MY_ROOMS } from "./RoomQueries";
import { useQuery } from "react-apollo";

const RoomContainer: React.FC = () => {
  const moverRoom = () => {
    console.log("The link was clicked.");
  };

  const { data } = useQuery(FIND_MY_ROOMS);
  console.log(data);

  return <RoomPresenter moverRoom={moverRoom} data={data.findMyrooms} />;
};

export default RoomContainer;
