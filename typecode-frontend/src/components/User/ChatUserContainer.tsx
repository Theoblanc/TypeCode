import React from "react";
import { useQuery } from "react-apollo";
import Loading from "src/pages/Loading";
import { ME } from "./ChatUserQueries";
import ChatUserPresenter from "./ChatUserPresenter";

const ChatUserContainer: React.FC = () => {
  const { data, loading } = useQuery(ME);

  console.log("543321", data);

  if (loading) {
    return <Loading />;
  }

  return <ChatUserPresenter data={data} />;
};

export default ChatUserContainer;
