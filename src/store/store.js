import { createStore, combineReducers, applyMiddleware } from "redux";
import todoReducer from "../store/reducers/todoReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'

const Reducer = combineReducers({
  todo: todoReducer,
});

const middleware = [thunk];

const store = createStore(
  Reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
