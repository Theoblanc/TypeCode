import React from "react";
import HomePage from "../pages/Home";

interface IProps {
  data: any;
}
const Home: React.FC<IProps> = ({ data }) => <HomePage data={data} />;

export default Home;
