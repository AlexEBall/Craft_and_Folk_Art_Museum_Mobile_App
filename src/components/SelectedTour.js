import React, {Component} from 'react';
import {
    Text, 
    View, 
    Image, 
    ImageBackground,
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
    audioCurrentTime,
    audioPlayerViewWidth
} from '../actions';
import AudioPlayer from 'react-native-play-audio';
import Svg, {Path} from 'react-native-svg';
import ProgressBar from './ProgressBar';

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

        let currentTime = AudioPlayer.getCurrentTime((currentTime) => {
            console.log('current time::::: is :::: ', currentTime);
            // this.props.audioSetTime(currentTime);

            let forwardedTime = (currentTime + 10);
            console.log('forwarded time is :::::: ', forwardedTime);

            this.props.audioSetTime(forwardedTime);

            AudioPlayer.setTime(this.props.setTime);
        });
    }

    _audioRewind = (url) => {
        console.log('rewind');

        let currentTime = AudioPlayer.getCurrentTime((currentTime) => {
            console.log('current time::::: is :::: ', currentTime);
            // this.props.audioSetTime(currentTime);

            let rewoundTime = (currentTime - 10);
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
        console.log(limit);
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

    _findDimensions = (layout) => {
        const {x, y, width, height} = layout;
        console.log(x);
        console.log(y);
        console.log(width);
        console.log(height);

        this.props.audioPlayerViewWidth(width);
    }

    componentWillUnmount = () => {
        this.props.audioCurrentTime(0);
        this.props.audioPlaying(false);
        this.props.audioPaused(false);
        this.props.audioSetTime(0);
        this.props.audioTime(0);
        AudioPlayer.stop();

        console.log('component unmounted');
    } 

    renderImages = () => {
        console.log('floorGallery array? ', this.props.floorGallery);
        return this.props.floorGallery.map((image, index) => 
            <ImageBackground key={index} style={styles.selectedTourImg} source={{ uri: image }}/>
        );
    }

    render() {
        console.log(this.props);
        console.log('AudioPlayer --------- ', AudioPlayer);
        const url = this.props.audioLinkName;

        return (
            <View style={styles.selectedTour} onLayout={(event) => { this._findDimensions(event.nativeEvent.layout) }}>

                <View style={styles.imgArea}>
                    <ScrollView horizontal={true}>
                        <View style={styles.tourImgBox}>
                            {this.renderImages()}
                        </View>
                    </ScrollView>
                </View>

                <View style={styles.selectedTourAudioInfoBox}>
                    <View style={styles.audioTitleBox}>
                        <Text style={styles.audioTitle}>
                            Bamboo: A Japanese Perspective
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

                <View style={styles.moreInfoBox}>
                    <TouchableOpacity style={styles.infoBtn}>
                        <Text style={styles.infoText}>
                            Learn More
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

// FE4A49 red highlight
const styles = StyleSheet.create({
    // CONTAINER
    selectedTour: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        margin: 10,
        height: 'auto'
    },

    // 3 PARTS OF CONTAINER
    imgArea: {
        flex: 1
    },
    selectedTourAudioInfoBox: {
        flex: .3,

        // backgroundColor: 'red',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        // for separation
        marginTop: 10
    },
    moreInfoBox: {
        flex: .2, 
        marginTop: 5
    },

    // IMG STYLING 
    tourImgBox: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        width: 950
    },
    selectedTourImg: {
        flex: 1,
        // backgroundColor: 'lightblue',
        height: null,
        width: null,
        margin: 5
    },

    // TITLE STYLING
    audioTitleBox: {
        flex: .2,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'black'
    },
    audioTitle: {
        fontSize: 18,
        fontWeight: '400',
    },
    // AUDIO CONTROL STYLING
    audioControls: {
        flex: .8,
        display: 'flex',
        flexDirection: 'row',
        // backgroundColor: 'purple'
    },
    audioBtnBox: {
        flex: .2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    audioBtn: {
        // backgroundColor: 'lightblue',
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
        // backgroundColor: 'green'
    },
    audioProgressBar: {
        flex: 1,
        // borderColor: 'black'
    },

    infoBtn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: 'teal'
    },
    infoText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    }

});

const mapStateToProps = state => {
    return {
        totalTime: state.audio.totalTime,
        isPlaying: state.audio.isPlaying,
        isPaused: state.audio.isPaused,
        setTime: state.audio.setTime,
        currentTime: state.audio.currentTime,
        viewWidth: state.audio.viewWidth,
        error: state.audio.error
    }
}

//<Image style={styles.audioImg} source={require('../assets/img/audioPlay.png')} />

{/* <Svg height="32" width="32">
    <Path d="M10.396 18.433c2.641-2.574 6.604-6.433 6.604-6.433s-3.963-3.859-6.604-6.433c-0.363-0.349-0.853-0.567-1.396-0.567-1.104 0-2 0.896-2 2v10c0 1.104 0.896 2 2 2 0.543 0 1.033-0.218 1.396-0.567z"
        fill='#ffffff'
        stroke='#009FB7'
        stokeWidth={5}>
    </Path>
</Svg> */}

{/* < ScrollView > <View style={styles.selectedTourTextBox}>
    <Text style={styles.selectedTourText}>
        {this.props.tourText}
    </Text>
</View> < /ScrollView> */}

   // selectedTourTextBox: {
    //     flex: 1,
    //     backgroundColor: 'white',
    //     borderTopColor: '#009FB7',
    //     borderTopWidth: 2
    // },

export default connect(mapStateToProps, { 
    audioPlaying, 
    audioTime, 
    audioError, 
    audioPaused,
    audioSetTime,
    audioCurrentTime,
    audioPlayerViewWidth
})(SelectedTour);