import { createStore, applyMiddleware } from "redux";

import Logger from "redux-logger";

import rootReducer from "../root-reducer";

const middlewares = [Logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
