import { combineReducers } from 'redux';
import FetchToursReducer from './fetchToursReducer';
import AudioPlayingReducer from './audioPlayingReducer';

export default combineReducers({
        data: FetchToursReducer,
        audio: AudioPlayingReducer
});