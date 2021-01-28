import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

const root = document.getElementById("root") as HTMLElement;
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// Adapted from https://github.com/mui-org/material-ui/issues/17010#issuecomment-723953307
// since the types are wrong. It's fixed in v5 of Material UI so once it's stable and we
// can upgrade to it, we can remove this
declare module "@material-ui/core" {
  interface BoxProps {
    ref?: React.Ref<HTMLElement>;
  }
}
