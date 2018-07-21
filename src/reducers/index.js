import { combineReducers } from 'redux';
import FetchToursReducer from './fetchToursReducer';
import AudioPlayingReducer from './audioPlayingReducer';
import FetchProgramReducer from './fetchProgramReducer';
import FetchArtistConnectReducer from './fetchArtistConnectReducer';

export default combineReducers({
        data: FetchToursReducer,
        audio: AudioPlayingReducer,
        programs: FetchProgramReducer,
        artistData: FetchArtistConnectReducer
});