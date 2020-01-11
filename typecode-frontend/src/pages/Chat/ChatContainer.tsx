import React from "react";
import ChatPresenter from "./ChatPresenter";
import { useQuery } from "react-apollo";
import { FIND_MY_ROOMS } from "src/components/Room/RoomQueries";
import Loading from "src/routes/Loading";
import { ME } from "src/components/User/ChatUserQueries";

interface IProps {}

const ChatContainer: React.FC<IProps> = () => {
  const { data: fetchRoom, loading } = useQuery(FIND_MY_ROOMS);
  const { data: me, loading: meLoading } = useQuery(ME);
  // const { data: fetchChat, chatLoading } = useQuert()

  if (loading && meLoading) {
    return <Loading />;
  }

  return <ChatPresenter fetchRoom={fetchRoom} me={me} />;
};

export default ChatContainer;
