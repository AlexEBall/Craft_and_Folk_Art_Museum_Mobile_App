import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {audioPlaying, audioTime, audioError, audioPause} from '../actions';
import {Player, MediaStates} from 'react-native-audio-toolkit';

class SelectedTour extends Component {
    
    audioPlayAndPause() {
        // if statement for play/pause btn functionality use isPlaying
        // need to set a spinner to allow for loading
        console.log('pressed');
        const audio = new Player(this.props.audioLinkName);
        // console.log(audio);

        // audio.prepare(err => console.log(err));
        if (audio.isPlaying === false) {
            audio.prepare((err) => {
                if (err) return this.props.error(err);

                let seconds = audio.duration/1000;
                this.props.audioTime(seconds);
                // this.props.audioPlaying();
            });

            
            audio.play();
            console.log(audio.isPlaying);
        } else {
            
            audio.pause();
            // this.props.audioPause();
        }

        // audio.play(() => {
        //     this.props.audioPlaying();
        // })

        // audio.pause(() => {
        //     return this.props.audioPause();
        // })
    }

    // audioPause() {
    //     audio.pause(() => {
    //         this.props.audioPause();
    //     })
    // }

    audioToggle() {

        const audio = new Player(this.props.audioLinkName);

        // let audio = new Player(this.props.audioLinkName);

        if (this.props.isPlaying === true) {
            return (
                <TouchableOpacity style={styles.audioBtn} onPress={() => {
                        console.log('paused')
                        this.props.audioPlaying(false);
                        console.log(audio.canStop);
                        audio.pause(this._playerId);
                    }
                }>
                    <Image style={styles.audioImg} source={require('../assets/img/audioPause.png')} />
                </TouchableOpacity>
            );
        } else {
            return (
                <TouchableOpacity style={styles.audioBtn} onPress={() => {
                        console.log('pressed');
                        audio.prepare((err) => {
                            if (err) return this.props.error(err);

                            let seconds = audio.duration/1000;
                            this.props.audioTime(seconds);
                        });
                        audio.play();
                        this.props.audioPlaying(true);
                        console.log(audio.isPlaying);
                        console.log(audio._playerId);
                    }
                }>
                    <Image style={styles.audioImg} source={require('../assets/img/audioPlay.png')} />
                </TouchableOpacity>
            );
        }
    }

    render() {
        console.log(this.props);
        return (
            <View style={styles.selectedTour}>
                <Image
                    source={require('../assets/img/clay.jpeg')}
                    style={styles.selectedTourImg} />


                <View style={styles.selectedTourAudioInfoBox}>
                    <View style={styles.audioBtnBox}>
                        {this.audioToggle()}
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
        error: state.audio.error
    }
}

export default connect(mapStateToProps, { audioPlaying, audioTime, audioError, audioPause })(SelectedTour);