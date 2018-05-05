import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {audioPlaying, audioTime, audioError, audioPaused} from '../actions';
// import {Player, MediaStates} from 'react-native-audio-toolkit';
// import Sound from 'react-native-sound';
import AudioPlayer from 'react-native-play-audio';

class SelectedTour extends Component {

    // let audio = new Player(this.props.audioLinkName);
    _audioPlay = (url) => {
        console.log('pressed');

        setInterval(() => {
            AudioPlayer.getCurrentTime((currentTime) => {
            console.log('current time::::: is :::: ', currentTime);
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

    audioToggle = (url) => {

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
                    <View style={styles.audioBtnBox}>
                        {this.audioToggle(url)}
                    </View>
                    <View style={styles.audioInfo}>
                        <Text>
                            {this.props.audioLinkName}
                        </Text>
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
        flex: .2,
        backgroundColor: 'red',
        padding: 5,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    audioBtn: {
        backgroundColor: 'lightblue',
        padding: 10,
        borderRadius: 50,
        height: 50,
        width: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    audioImg: {
        padding: 10,
        borderRadius: 50,
        height: 50,
        width: 50,
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
        error: state.audio.error
    }
}

export default connect(mapStateToProps, { audioPlaying, audioTime, audioError, audioPaused })(SelectedTour);