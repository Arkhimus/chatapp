import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';
import history from './history';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { persistor, store } from './store';
import LoginContainer from './containers/LoginContainer';
import RegisterContainer from './containers/RegisterContainer';
import DashboardContainer from './containers/DashboardContainer';
// import PrivateRoute from './utils/privateRoute';

ReactDOM.render(
  <PersistGate persistor={persistor}>
    <Router history={history}>
      <Provider store={store}>
        <App>
          <Route exact path="/" component={LoginContainer} />
          <Route exact path="/registration" component={RegisterContainer} />
          <Route exact path="/dashboard" component={DashboardContainer} />
        </App>
      </Provider>
    </Router>
  </PersistGate>,
  document.getElementById('root'),
);

serviceWorker.unregister();
