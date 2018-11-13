import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Svg, {Path} from 'react-native-svg';
import imageCacheHoc from 'react-native-image-cache-hoc';

const CacheableImage = imageCacheHoc(ImageBackground);

export default class Tour extends Component {

    onTourPress() {
        Actions.tour({selectedTour: this.props.selectedTour});
    }

    renderButton = () => {
        if (!this.props.selectedTour) {
            return  <TouchableOpacity style={styles.startBtnDisabled} onPress={this.onTourPress.bind(this)}>
                        <Svg height="32" width="32">
                            <Path d="M30 18h-2v-4c0-6.625-5.375-12-12-12s-12 5.375-12 12v4h-2c-1.105 0-2 0.895-2 2v8c0 1.105 0.895 2 2 2h6v-16c0-4.414 3.586-8 8-8s8 3.586 8 8v16h6c1.105 0 2-0.895 2-2v-8c0-1.105-0.895-2-2-2z"
                                fill='#009FB7'
                                stroke='#009FB7'
                                stokeWidth={5}>
                            </Path>
                        </Svg>
                    </TouchableOpacity>
        } else {
            return  <TouchableOpacity style={styles.startBtn} onPress={this.onTourPress.bind(this)}>
                        <Svg height="32" width="32">
                            <Path d="M30 18h-2v-4c0-6.625-5.375-12-12-12s-12 5.375-12 12v4h-2c-1.105 0-2 0.895-2 2v8c0 1.105 0.895 2 2 2h6v-16c0-4.414 3.586-8 8-8s8 3.586 8 8v16h6c1.105 0 2-0.895 2-2v-8c0-1.105-0.895-2-2-2z"
                                fill='#009FB7'
                                stroke='#009FB7'
                                stokeWidth={5}>
                            </Path>
                        </Svg>
                    </TouchableOpacity>
        }
    }

    render() {
        const coverImage = this.props.selectedTour.coverPic;

        return (
            <View style={styles.tour}>
                <View style={styles.tourImgBox}>
                    <CacheableImage 
                        source={{ uri: coverImage }}
                        style={styles.img}>
                    <View style={styles.push}></View>
                    <View style={styles.tourInfoBox}>
                        <Text style={styles.imgText}>
                            Floor {this.props.selectedTour.floor}
                        </Text>
                        {this.renderButton()}
                    </View>
                    </CacheableImage>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tour: {
        height: 350,
        backgroundColor: '#F08433',
        display: 'flex',
        flexDirection: 'column',
        flex: 1
    },
    tourImgBox: {
        flex: 1,
    },
    img: {
        flex: 1,
        height: null,
        width: null,
        overflow: 'hidden'
    },
    tourInfoBox: {
        flex: .2,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(240, 132, 51, .7)'
    },
    push: {
        flex: .8
    },
    startBtn: {
        zIndex: 5,
        alignSelf: 'center',
        opacity: 1,
        backgroundColor: '#fff',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#009FB7',
        margin: 15,
        padding: 12
    },
    startBtnDisabled: {
        zIndex: 5,
        opacity: .5,
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#009FB7',
        margin: 15,
        padding: 5
    },
    imgText: {
        margin: 10,
        color: 'white',
        fontSize: 28,
        letterSpacing: 2,
        textShadowOffset: { width: 2, height: 2 },
        textShadowColor: 'black',
        textShadowRadius: 1,
    }
});
