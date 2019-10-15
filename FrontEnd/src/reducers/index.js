import { combineReducers } from 'redux';
import registrationReducer from './registrationReducer';
import loginReducer from './loginReducer';
import dashboardReducer from './dashboardReducer';
import chatReducer from './chatReducer';

const rootReducer = combineReducers({
  registrationReducer,
  loginReducer,
  dashboardReducer,
  chatReducer,
});

export default rootReducer;
