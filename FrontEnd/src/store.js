import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import axiosMiddleware from 'redux-axios-middleware';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import io from 'socket.io-client';

const socketUrl = 'http://localhost:5000';

const persistConfig = {
  key: 'root',
  whitelist: [],
  storage,
};

const ioInst = io(socketUrl);

const persistedReducer = persistReducer(persistConfig, rootReducer);

let count = 0;
const middlewareForSockets = store => next => action => {
  if (action.type === "asd") {
    count += 1;
    ioInst.emit('newMessage', action.payload);
    console.log(count)
  }
  ioInst.on('currentMessages', console.log)
  ioInst.on('messageCreated', message => {
    store.dispatch({ type: "INCOMINGMessage", payload: message });
    console.log("message created", message)
  })
  let result = next(action)

  return result
}



const store = createStore(persistedReducer, composeWithDevTools(
  applyMiddleware(axiosMiddleware(thunk), middlewareForSockets),
));

const persistor = persistStore(store);

export { store, persistor };
