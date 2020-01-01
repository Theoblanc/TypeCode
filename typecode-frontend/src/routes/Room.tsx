import React from "react";
import RoomPage from "../pages/Room";

interface IProps {
  data: any;
}

const Room: React.FC<IProps> = ({ data }) => <RoomPage />;
export default Room;
