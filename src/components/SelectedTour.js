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
import {audioPlayerViewWidth} from '../actions';
import {Actions} from 'react-native-router-flux';
import Svg, {Path} from 'react-native-svg';
import AudioPlayerComponent from './AudioPlayer';
import imageCacheHoc from 'react-native-image-cache-hoc';

const CacheableImage = imageCacheHoc(ImageBackground);

class SelectedTour extends Component {

    _findDimensions = (layout) => {
        const {x, y, width, height} = layout;
        this.props.audioPlayerViewWidth(width);
    }

    renderImages = () => {
        return this.props.floorGallery.map((image, index) => 
            <CacheableImage 
                key={index} 
                style={styles.selectedTourImg} 
                source={{ uri: image }}
                resizeMode="contain"
            />
        );
    }

    onLearnMorePress = () => {
        Actions.learnMore({connect: this.props.connect});
    }

    render() {
        console.log('whasssup', this.props);
        const url = this.props.audioLinkName;

        return (
            <View style={styles.selectedTour} onLayout={(event) => { this._findDimensions(event.nativeEvent.layout) }}>

                <View style={styles.imgArea}>
                    <ScrollView>
                        <View style={styles.tourImgBox}>
                            {this.renderImages()}
                        </View>
                    </ScrollView>
                </View>

                <View style={styles.selectedTourAudioInfoBox}>
                    <AudioPlayerComponent 
                    url={url}
                    title={this.props.audioTitle}
                    />
                </View>                

                <View style={styles.moreInfoBox}>
                    <TouchableOpacity style={styles.infoBtn} onPress={this.onLearnMorePress.bind(this)}>
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
        margin: 10
    },

    // 3 PARTS OF CONTAINER
    imgArea: {
        flex: 1
    },
    selectedTourAudioInfoBox: {
        flex: .2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
        height: 1100
    },
    selectedTourImg: {
        flex: 1,
        height: null,
        width: null,
        margin: 5
    },

    // LEARN MORE SECTION STYLING
    infoBtn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4a93f',
        marginTop: 10
    },
    infoText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    }

});

const mapStateToProps = state => {
    return {
        viewWidth: state.audio.viewWidth,
    }
}

export default connect(mapStateToProps, { audioPlayerViewWidth})(SelectedTour);