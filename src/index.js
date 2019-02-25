import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import reducer from './components/redux/reducer';


import { createStore } from 'redux';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Provider store = {createStore(reducer)}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.querySelector("#root")
);
