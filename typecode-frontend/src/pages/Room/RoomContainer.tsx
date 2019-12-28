import React from "react";
import RoomPresenter from "./RoomPresenter";

interface IProps {
  data: any;
}

const RoomContainer: React.FC<IProps> = ({ data }) => {
  return <RoomPresenter data={data} />;
};

export default RoomContainer;
