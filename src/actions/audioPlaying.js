import { 
    AUDIO_PLAYING, 
    AUDIO_TIME, 
    AUDIO_ERROR, 
    AUDIO_PAUSE,
    AUDIO_SET_TIME,
    AUDIO_CURRENT_TIME,
    AUDIO_PLAYER_VIEW_WIDTH
} from './types';

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

export const audioPaused = (value) => {
    console.log('passed in value is... ', value);
    return {
        type: 'audio_pause',
        payload: value
    }
}

export const audioSetTime = (setTime) => {
    return {
        type: 'audio_set_time',
        payload: setTime
    }
}

export const audioCurrentTime = (value) => {
    return {
        type: 'audio_current_time',
        payload: value
    }
}

export const audioPlayerViewWidth = (value) => {
    return {
        type: 'audio_player_view_width',
        payload: value
    }
}