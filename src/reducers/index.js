import { combineReducers } from 'redux';
import FetchToursReducer from './fetchToursReducer';
import AudioPlayingReducer from './audioPlayingReducer';
import FetchProgramReducer from './fetchProgramReducer';

export default combineReducers({
        data: FetchToursReducer,
        audio: AudioPlayingReducer,
        programs: FetchProgramReducer
});