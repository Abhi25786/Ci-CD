import {combineReducers} from 'redux';
import intro from './intro';

const appReducer = combineReducers({
    intro
  });
  const rootReducer = (state, action) => {

    return appReducer(state, action);
  };
  
  export default rootReducer;
  