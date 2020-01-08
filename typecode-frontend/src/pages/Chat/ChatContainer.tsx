import React from "react";
import ChatPresenter from "./ChatPresenter";
import { useQuery } from "react-apollo";
import { FIND_MY_ROOMS } from "src/components/Room/RoomQueries";
import Loading from "src/routes/Loading";
import { ME } from "src/components/User/ChatUserQueries";

interface IProps {}

const ChatContainer: React.FC<IProps> = () => {
  const { data, loading } = useQuery(FIND_MY_ROOMS);
  const { data: Me, loading: meLoading } = useQuery(ME);

  console.log("Me", Me);

  if (loading && meLoading) {
    return <Loading />;
  }

  return <ChatPresenter data={data} Me={Me} />;
};

export default ChatContainer;
