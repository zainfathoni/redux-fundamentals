import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import todoApp from "./reducers";

const configureStore = () => {
  const middlewares = [createLogger()];

  return createStore(
    todoApp,
    applyMiddleware(...middlewares)
  );
};

export default configureStore;
