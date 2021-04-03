import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./store/store";

import App from "./App";
import "./styles/css/main.css";
const root = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  root
);
