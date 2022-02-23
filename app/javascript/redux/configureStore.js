import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import messageReducer from './message';

const rootReducer = combineReducers({
  messageData : messageReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;