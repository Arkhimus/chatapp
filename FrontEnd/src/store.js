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

let ioInst = null;

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewareForSockets = store => next => action => {
  if (window.location.href.includes("Dashboard")) {
    if (action.type === "asd") {
      ioInst.emit('newMessage', action.payload);
    }

  }
  let result = next(action)
  return result
}

if (ioInst === null) {
  ioInst = io(socketUrl);
}

ioInst.on("currentMessages", messages => {
  store.dispatch({ type: "INCOMINGMessages", payload: messages })
})

ioInst.on('messageCreated', message => {
  store.dispatch({ type: "INCOMINGMessage", payload: message });
})


const store = createStore(persistedReducer, composeWithDevTools(
  applyMiddleware(axiosMiddleware(thunk), middlewareForSockets),
));


console.log(store);
const persistor = persistStore(store);

export { store, persistor };
