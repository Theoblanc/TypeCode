import React from "react";
import ChatPresenter from "./ChatPresenter";
import { useQuery } from "react-apollo";
import { FETCH_MY_ROOMS } from "src/components/Room/RoomQueries";
import Loading from "src/routes/Loading";
import { ME } from "src/components/User/ChatUserQueries";

interface IProps {}

const ChatContainer: React.FC<IProps> = () => {
  const { data: fetchMyRooms, loading: myRoomLoading } = useQuery(
    FETCH_MY_ROOMS
  );
  const { data: me, loading: meLoading } = useQuery(ME);
  // const { data: fetchChat, chatLoading } = useQuert()

  if (myRoomLoading && meLoading) {
    return <Loading />;
  }

  return <ChatPresenter fetchMyRooms={fetchMyRooms} me={me} />;
};

export default ChatContainer;
