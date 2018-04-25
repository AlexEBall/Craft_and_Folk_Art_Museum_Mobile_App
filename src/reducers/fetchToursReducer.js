import {
    FETCHING_TOURS_START,
    FETCHING_TOURS_ERROR,
    RECIEVE_TOURS
} from '../actions/types';

const INITIAL_STATE = {
    fetching: false,
    fetched: false,
    data: [],
    error: null
}
export default (state=INITIAL_STATE, action) => {

    switch (action.type) {
        case FETCHING_TOURS_START: 
            return { ...state, fetching: true }
        case FETCHING_TOURS_ERROR: 
            return { ...state, fetching: false, error: action.payload }
        case RECIEVE_TOURS: 
            return { ...state, 
                fetching: false, 
                fetched: true, 
                data: action.payload 
                }
        default: 
            return state;
    }
};
