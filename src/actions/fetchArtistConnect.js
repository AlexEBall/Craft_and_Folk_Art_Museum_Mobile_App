import axios from 'axios';
import {FETCHING_ARTIST_CONNECT_START, FETCHING_ARTIST_CONNECT_ERROR, RECIEVE_ARTIST_CONNECT} from './types';

export const fetchArtistConnectData = (floor) => {
    return (dispatch) => {
        dispatch({type: FETCHING_ARTIST_CONNECT_START})
        axios
            .get('https://young-savannah-71265.herokuapp.com/api/cafamArtistConnect/floor/' + floor )
            .then((res) => {
                dispatch({type: RECIEVE_ARTIST_CONNECT, payload: res.data})
            })
            .catch((err) => {
                dispatch({type: FETCHING_ARTIST_CONNECT_ERROR, payload: err})
            })
    }
};