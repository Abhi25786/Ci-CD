import {combineReducers} from 'redux';
import intro from './intro';
import auth from './auth'

const appReducer = combineReducers({
  intro,
  auth
  
  });
  const rootReducer = (state, action) => {

    return appReducer(state, action);
  };
  
  export default rootReducer;
  