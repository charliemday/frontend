import { applyMiddleware, compose, createStore } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { resettableReducer } from "reduxsauce";
import { createBrowserHistory } from "history";
import createSagaMiddleware from "redux-saga";

import ImmutablePersistenceTransform from "Services/ImmutablePersistanceTransform";
import rootSagas from "Sagas";

export const history = createBrowserHistory();

// Configure our Redux-Persist
const persistConfig = {
  key: "root",
  storage,
  transforms: [ImmutablePersistenceTransform],
};

const resettable = resettableReducer("LOGOUT");

// All of our reducers/our state
const rootReducer = combineReducers({
  router: connectRouter(history),
  authentication: resettable(require("./AuthenticationRedux").reducer),
});

// This enables our state to be peristed when the user leaves the webpage
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore() {
  const composeEnhancers =
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    persistedReducer,
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history),
        thunkMiddleware,
        sagaMiddleware
      )
    )
  );
  let persistor = persistStore(store);
  // @ts-ignore
  sagaMiddleware.run(rootSagas, history);
  return { store, persistor };
}

const { store, persistor } = configureStore();

export { store, persistor };
