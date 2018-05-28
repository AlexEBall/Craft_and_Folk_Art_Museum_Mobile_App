import axios from 'axios';
import {FETCHING_PROGRAMS_START, FETCHING_PROGRAMS_ERROR, RECIEVE_PROGRAMS} from './types';

// pass in API name to reduce number of exports... but what about two calls?
export const fetchPrograms = () => {
    return (dispatch) => {
        dispatch({type: FETCHING_PROGRAMS_START})
        axios
            .get('https://stormy-shelf-62092.herokuapp.com/api/cafamPrograms')
            .then((res) => {
                dispatch({type: RECIEVE_PROGRAMS, payload: res.data})
                // console.log(res.data);
            })
            .catch((err) => {
                dispatch({type: FETCHING_PROGRAMS_ERROR, payload: err})
            })
    }
};