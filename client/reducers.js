/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import usecases from './modules/UseCase/UseCaseReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  usecases
});
