import {AUDIO_PLAYING, AUDIO_ERROR} from './types';

export const audioPlaying = () => {
    return {
        type: 'audio_playing',
        payload: true
    }
}