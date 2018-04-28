import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {audioPlaying, audioTime, audioError} from '../actions';
import {Player, MediaStates} from 'react-native-audio-toolkit';

class SelectedTour extends Component {
    audioBtnPressed = () => {
        console.log('pressed');
        let audio = new Player('https://ia801407.us.archive.org/3/items/FranklynMonkPodcast27/TourGuide.mp3');
        console.log(audio);

        // audio.prepare(err => console.log(err));
        // audio.prepare((err) => {
        //     if (err) return this.props.error(err);

        //     let seconds = this.player.duration/1000;
        //     this.props.audioTime(seconds);
        // });

        // audio.play(() => {
        //     this.props.audioPlaying();
        // })
    }

    render() {
        console.log(this.props)
        return (
            <View style={styles.selectedTour}>
                <Image
                    source={require('../assets/img/clay.jpeg')}
                    style={styles.selectedTourImg} />


                <View style={styles.selectedTourAudioInfoBox}>
                    <View style={styles.audioBtnBox}>
                        <TouchableOpacity style={styles.audioBtn} onPress={this.audioBtnPressed.bind(this)}>
                            <Image 
                                style={styles.audioImg}
                                source={require('../assets/img/audioPlay.png')} />
                        </TouchableOpacity>
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

export default connect(mapStateToProps, { audioPlaying, audioTime, audioError })(SelectedTour);