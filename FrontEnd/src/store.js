import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import axiosMiddleware from 'redux-axios-middleware';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const persistConfig = {
  key: 'root',
  whitelist: [],
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composeWithDevTools(
  applyMiddleware(axiosMiddleware(thunk)),
));

const persistor = persistStore(store);

export { store, persistor };
