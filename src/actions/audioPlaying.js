import {AUDIO_PLAYING, AUDIO_TIME, AUDIO_ERROR} from './types';

export const audioPlaying = () => {
    return {
        type: 'audio_playing',
        payload: true
    }
}

export const audioTime = (time) => {
    return { 
        type: 'audio_time',
        payload: time
    }
}

export const audioError = (err) => {
    return {
        type: 'audio_error',
        payload: err
    }
}