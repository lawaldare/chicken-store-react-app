import { combineReducers } from 'redux';
import chickensReducer from './chickensReducer';

const rootReducer = combineReducers({
  chickens: chickensReducer
});

export default rootReducer;
