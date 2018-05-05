import React, {Component} from 'react';
import {
    Text, 
    View, 
    Image, 
    StyleSheet, 
    ScrollView, 
    TouchableOpacity} from 'react-native';
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

class SelectedTour extends Component {

    _audioPlay = (url) => {
        console.log('pressed');

        setInterval(() => {
            AudioPlayer.getCurrentTime((currentTime) => {
            console.log('current time::::: is :::: ', currentTime);
            this.props.audioCurrentTime(currentTime);
            });
        }, 1000);

        if (this.props.isPlaying === false && this.props.isPaused === false) {
        AudioPlayer.prepare(url, () => {
            this.props.audioPlaying(true);
            AudioPlayer.play();

            AudioPlayer.getDuration((duration) => {
                this.props.audioTime(duration);
                console.log(duration);
            });
        });
        } else {
            this.props.audioPlaying(true);
            AudioPlayer.play();
        }
    }

    _audioPause = (url) => {
        console.log('paused')
        this.props.audioPlaying(false);
        this.props.audioPaused(true);
        AudioPlayer.pause();
    }

    _audioForward = (url) => {
        console.log('forward');

        const currentTime = AudioPlayer.getCurrentTime((currentTime) => {
            console.log('current time::::: is :::: ', currentTime);
            // this.props.audioSetTime(currentTime);

            const forwardedTime = (currentTime + 10);
            console.log('forwarded time is :::::: ', forwardedTime);

            this.props.audioSetTime(forwardedTime);

            AudioPlayer.setTime(this.props.setTime);
        });
    }

    _audioRewind = (url) => {
        console.log('rewind');

        const currentTime = AudioPlayer.getCurrentTime((currentTime) => {
            console.log('current time::::: is :::: ', currentTime);
            // this.props.audioSetTime(currentTime);

            const rewoundTime = (currentTime - 10);
            console.log('rewound time is :::::: ', rewoundTime);

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
                    <Image style={styles.audioImg} source={require('../assets/img/audioPause.png')} />
                </TouchableOpacity>
            );
        } else {
            return (
                <TouchableOpacity style={styles.audioBtn} onPress={() => this._audioPlay(url)}>
                    <Image style={styles.audioImg} source={require('../assets/img/audioPlay.png')} />
                </TouchableOpacity>
            );
        }
    }

    audioRewindTouchableToggle = (url) => {
        if (this.props.currentTime < 10) {
            return (
            <TouchableOpacity style={styles.audioBtn} disabled={true} onPress={() => this._audioRewind(url)}>
                <Image style={styles.audioImg} source={require('../assets/img/10sec_backward-256.png')} />
            </TouchableOpacity>
            );
        } else {
            return (
            <TouchableOpacity style={styles.audioBtn} onPress={() => this._audioRewind(url)}>
                <Image style={styles.audioImg} source={require('../assets/img/10sec_backward-256.png')} />
            </TouchableOpacity>
            );
        }
    }

    render() {
        console.log(this.props);

        console.log('-----------');
        console.log(AudioPlayer);
    
        const url = this.props.audioLinkName;

        return (
            <View style={styles.selectedTour}>
                <Image
                    source={require('../assets/img/clay.jpeg')}
                    style={styles.selectedTourImg} />


                <View style={styles.selectedTourAudioInfoBox}>
                    <View style={styles.audioBtnBoxRewind}>
                        {this.audioRewindTouchableToggle(url)}
                    </View>
                    <View style={styles.audioBtnBox}>
                        {this.audioPlayPauseToggle(url)}
                    </View>
                    <View style={styles.audioBtnBoxForward}>
                        <TouchableOpacity style={styles.audioBtn} onPress={() => this._audioForward(url)}>
                            <Image style={styles.audioImg} source={require('../assets/img/10sec_forward-128.png')} />
                        </TouchableOpacity>
                    </View>
                </View>


                <ScrollView>
                <View style={styles.selectedTourTextBox}>
                    <Text style={styles.selectedTourText}>
                        {this.props.tourText}
                    </Text>
                </View>
                </ScrollView>
                
            </View>
        );
    }
}
const styles = StyleSheet.create({
    selectedTour: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'red',
        margin: 10,
        height: 'auto'
    },
    selectedTourImg: {
        flex: .8,
        backgroundColor: 'lightblue',
        height: null,
        width: null,
        resizeMode: 'cover'
    },
    selectedTourAudioInfoBox: {
        flex: .3,
        backgroundColor: 'lightgrey',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    audioBtnBox: {
        flex: 1,
        backgroundColor: 'red',
        padding: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    audioBtnBoxForward: {
        flex: 1,
        backgroundColor: 'skyblue',
        padding: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    audioBtnBoxRewind: {
        flex: 1,
        backgroundColor: 'skyblue',
        padding: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    audioBtn: {
        backgroundColor: 'lightblue',
        padding: 10,
        borderRadius: 50,
        height: 60,
        width: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    audioImg: {
        padding: 10,
        // borderRadius: 50,
        height: 70,
        width: 70,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    // audioImgPause: {
    //     padding: 10,
    //     borderRadius: 50,
    //     height: 40,
    //     width: 40,
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center'
    // },
    audioInfo: {
        flex: .8,
        backgroundColor: 'tan',
        padding: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    selectedTourTextBox: {
        flex: 1,
        backgroundColor: 'white',
        height: 'auto'
    },
    selectedTourText: {
        fontSize: 24,
        padding: 10
    }
});

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
    audioCurrentTime 
})(SelectedTour);