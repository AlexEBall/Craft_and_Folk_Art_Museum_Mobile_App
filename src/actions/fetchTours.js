import axios from 'axios';
import {FETCHING_TOURS_START, FETCHING_TOURS_ERROR, RECIEVE_TOURS} from './types';

// pass in API name to reduce number of exports... but what about two calls?
export const fetchTourData = () => {
    return (dispatch) => {
        dispatch({type: FETCHING_TOURS_START})
        axios.get('https://stormy-shelf-62092.herokuapp.com/api/cafam')
            .then((res) => {
                dispatch({type: RECIEVE_TOURS, payload: res.data})
                // console.log(res.data);
            })
            .catch((err) => {
                dispatch({type: FETCHING_TOURS_ERROR, payload: err})
            })
    }
};