import { createGlobalStyle } from "../typed-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset};

  * {
    box-sizing:border-box;
  }

  body{
      color: #ffffff;   
      font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
      margin: 0;
      padding: 0;
  }
  li {
    list-style-type: none
  }
`;
