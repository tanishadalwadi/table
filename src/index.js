import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Scores from "./components/index";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Scores />
  </StrictMode>,
  rootElement
);
