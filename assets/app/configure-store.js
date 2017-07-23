import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import todoApp from "./reducers";

const configureStore = () => {
  const middlewares = [createLogger()];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    todoApp,
    composeEnhancers(
      applyMiddleware(...middlewares)
    )
  );
};

export default configureStore;
