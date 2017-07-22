import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibility-filter";

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

export default todoApp;
