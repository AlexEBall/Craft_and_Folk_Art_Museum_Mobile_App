import {AUDIO_PLAYING, AUDIO_TIME, AUDIO_ERROR, AUDIO_PAUSE} from './types';

export const audioPlaying = (value) => {
    return {
        type: 'audio_playing',
        payload: value
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

export const audioPause = () => {
    return {
        type: 'audio_pause',
        palyod: false
    }
}