import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "./configure-store";
import App from "./components/app";

const store = configureStore();

export default class Todo extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
