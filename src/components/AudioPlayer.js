import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';
import {
    audioPlaying,
    audioTime,
    audioError,
    audioPaused,
    audioSetTime,
    audioCurrentTime
} from '../actions';
import AudioPlayer from 'react-native-play-audio';
import Svg, {Path} from 'react-native-svg';
import ProgressBar from './ProgressBar';

class AudioPlayerComponent extends Component {
    // console.log(this.props.audioCurrentTime);
    _audioPlay = (url) => {

        setInterval(() => {
            AudioPlayer.getCurrentTime((currentTime) => {
                this.props.audioCurrentTime(currentTime);
            });
        }, 1000);

        if (this.props.isPlaying === false && this.props.isPaused === false) {
        AudioPlayer.prepare(url, () => {
            this.props.audioPlaying(true);
            AudioPlayer.play();

            AudioPlayer.getDuration((duration) => {
                this.props.audioTime(duration);
            });
        });
        } else {
            this.props.audioPlaying(true);
            AudioPlayer.play();
        }
    }

    _audioPause = (url) => {
        this.props.audioPlaying(false);
        this.props.audioPaused(true);
        AudioPlayer.pause();
    }

    _audioForward = (url) => {
        let currentTime = AudioPlayer.getCurrentTime((currentTime) => {
            let forwardedTime = (currentTime + 10);
            this.props.audioSetTime(forwardedTime);
            AudioPlayer.setTime(this.props.setTime);
        });
    }

    _audioRewind = (url) => {
        let currentTime = AudioPlayer.getCurrentTime((currentTime) => {
            let rewoundTime = (currentTime - 10);
            this.props.audioSetTime(rewoundTime);

            if (currentTime < 10) {
                AudioPlayer.setTime(0);
            } else {
                AudioPlayer.setTime(this.props.setTime);
            }
        });
    }

    audioPlayPauseToggle = (url) => {

        if (this.props.isPlaying === true) {
            return (
                <TouchableOpacity style={styles.audioBtn} onPress={() => this._audioPause(url)}>
                    <Svg height={32} width={32}>
                        <Path d="M4 4h10v24h-10zM18 4h10v24h-10z"
                            fill='#009FB7'
                            stroke='#009FB7'>
                        </Path>
                    </Svg>
                </TouchableOpacity>
            );
        } else {
            return (
                <TouchableOpacity style={styles.audioBtn} onPress={() => this._audioPlay(url)}>
                    <Svg height={32} width={32}>
                        <Path d="M6 4l20 12-20 12z"
                            fill='#009FB7'
                            stroke='#009FB7'>
                        </Path>
                    </Svg>
                </TouchableOpacity>
            );
        }
    }

    audioRewindTouchableToggle = (url) => {
        if (this.props.currentTime < 10 || this.props.currentTime === this.props.totalTime) {
            return (
            <TouchableOpacity style={styles.audioBtn} disabled={true} onPress={() => this._audioRewind(url)}>
                <Svg height={32} width={32}>
                    <Path d="M18 5v10l10-10v22l-10-10v10l-11-11z"
                        fill='#4D4D4D'
                        stroke='#4D4D4D'>
                    </Path>
                </Svg>
            </TouchableOpacity>
            );
        } else {
            return (
            <TouchableOpacity style={styles.audioBtn} onPress={() => this._audioRewind(url)}>
                <Svg height={32} width={32}>
                    <Path d="M18 5v10l10-10v22l-10-10v10l-11-11z"
                        fill='#009FB7'
                        stroke='#009FB7'>
                    </Path>
                </Svg>
            </TouchableOpacity>
            );
        }
    }

    audioForwardTouchableToggle = (url) => {
        const limit = (this.props.totalTime - 10);

        if (this.props.currentTime > (this.props.totalTime - 10)) {
            return (
            <TouchableOpacity style={styles.audioBtn} disabled={true} onPress={() => this._audioForward(url)}>
                <Svg height={32} width={32}>
                    <Path d="M16 27v-10l-10 10v-22l10 10v-10l11 11z"
                        fill='#4D4D4D'
                        stroke='#4D4D4D'>
                    </Path>
                </Svg>
            </TouchableOpacity>
            );
        } else {
            return (
            <TouchableOpacity style={styles.audioBtn} onPress={() => this._audioForward(url)}>
                <Svg height={32} width={32}>
                    <Path d="M16 27v-10l-10 10v-22l10 10v-10l11 11z"
                        fill='#009FB7'
                        stroke='#009FB7'>
                    </Path>
                </Svg>
            </TouchableOpacity>
            );
        }
    }

    componentWillUnmount = () => {
        this.props.audioCurrentTime(0);
        this.props.audioPlaying(false);
        this.props.audioPaused(false);
        this.props.audioSetTime(0);
        this.props.audioTime(0);
        AudioPlayer.stop();
    } 

    render() {
        const url = this.props.url;
        const title = this.props.title;

        // console.log(this.props.audioCurrentTime);
        return (
            <View style={styles.selectedTourAudioInfoBox}>
                <View style={styles.audioTitleBox}>
                    <Text style={styles.audioTitle}>
                        {title}
                    </Text>
                </View>
                <View style={styles.audioControls}>
                    <View style={styles.audioBtnBox}>
                        {this.audioPlayPauseToggle(url)}
                    </View>
                    <View style={styles.audioProgressBarBox}>
                    <ProgressBar
                        row
                        progress={this.props.currentTime}
                        duration={500} 
                        borderColor={'#ffffff'}
                        fillColor={'white'}
                        barColor={'#009FB7'}
                        borderWidth={0}
                        borderRadius={10}
                        maxValue={this.props.totalTime}
                    />
                    </View>
                    <View style={styles.audioBtnBox}>
                        {this.audioRewindTouchableToggle(url)}
                    </View>
                    <View style={styles.audioBtnBox}>
                        {this.audioForwardTouchableToggle(url)}
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    selectedTourAudioInfoBox: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    // TITLE STYLING
    audioTitleBox: {
        // flex: 1,s
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        // flexDirection: 'row',
        // flexWrap: 'wrap'
    },
    audioTitle: {
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'center'

    },
    // AUDIO CONTROL STYLING
    audioControls: {
        flex: .9,
        display: 'flex',
        flexDirection: 'row',
    },
    audioBtnBox: {
        flex: .2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    audioBtn: {
        padding: 5,
        borderRadius: 50,
    },
    audioProgressBarBox: {
        flex: .7,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
        marginLeft: 5,
        paddingRight: 5,
        paddingLeft: 5,
    },
    audioProgressBar: {
        flex: 1,
    }
})

const mapStateToProps = state => {
    return {
        totalTime: state.audio.totalTime,
        isPlaying: state.audio.isPlaying,
        isPaused: state.audio.isPaused,
        setTime: state.audio.setTime,
        currentTime: state.audio.currentTime,
        error: state.audio.error
    }
}

export default connect(mapStateToProps, {
    audioPlaying,
    audioTime,
    audioError,
    audioPaused,
    audioSetTime,
    audioCurrentTime,
})(AudioPlayerComponent);