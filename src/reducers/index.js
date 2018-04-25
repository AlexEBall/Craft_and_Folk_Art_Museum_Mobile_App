import { combineReducers } from 'redux';
import FetchToursReducer from './fetchToursReducer';

export default combineReducers({data: FetchToursReducer});