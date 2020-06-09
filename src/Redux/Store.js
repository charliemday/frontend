import { applyMiddleware, compose, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { resettableReducer } from 'reduxsauce';
import { createBrowserHistory } from 'history';

import ImmutablePersistenceTransform from 'Services/ImmutablePersistanceTransform';

export const history = createBrowserHistory();

// Configure our Redux-Persist
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['authentication'],
  transforms: [ImmutablePersistenceTransform],
};

const resettable = resettableReducer('LOGOUT');

// All of our reducers/our state
const rootReducer = combineReducers({
  router: connectRouter(history),
  authentication: resettable(require('./AuthenticationRedux').reducer),
});

// This enables our state to be peristed when the user leaves the webpage
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore() {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    persistedReducer,
    composeEnhancers(
      applyMiddleware(routerMiddleware(history), thunkMiddleware)
    )
  );
  let persistor = persistStore(store);
  return { store, persistor };
}

const { store, persistor } = configureStore();

export { store, persistor };
