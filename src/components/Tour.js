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
import Button from '../components/Button';

export default class Tour extends Component {

    onTourPress() {
        Actions.tour({selectedTour: this.props.selectedTour});
    }

    renderButton = () => {
        console.log('hello');
        if (!this.props.selectedTour) {
            return  <TouchableOpacity style={styles.startBtnDisabled} onPress={this.onTourPress.bind(this)}>
                        <Text style={styles.startBtnText}>Loading</Text>
                    </TouchableOpacity>
        } else {
            return  <TouchableOpacity style={styles.startBtn} onPress={this.onTourPress.bind(this)}>
                        <Text style={styles.startBtnText}>Start</Text>
                    </TouchableOpacity>
        }
    }

    render() {
        const coverImage = this.props.selectedTour.coverPic;

        return (
            <View style={styles.tour}>
                <View style={styles.tourImgBox}>
                    <ImageBackground 
                        source={{ uri: coverImage }}
                        style={styles.img}>
                    <View style={styles.push}></View>
                    <View style={styles.tourInfoBox}>
                        <Text style={styles.imgText}>
                            Floor {this.props.selectedTour.floor}
                        </Text>
                        {this.renderButton()}
                    </View>
                    </ImageBackground>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tour: {
        width: 250,
        backgroundColor: '#F08433',
        marginRight: 5,
        marginLeft: 5,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column'
    },
    tourImgBox: {
        flex: 1,
    },
    img: {
        flex: 1,
        height: null,
        width: null,
        overflow: 'hidden',
        borderRadius: 10,
    },
    tourInfoBox: {
        flex: .3,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(240, 132, 51, .7)'
    },
    push: {
        flex: .7
    },
    startBtn: {
        flex: 1,
        zIndex: 5,
        flexDirection: 'column',
        alignSelf: 'center',
        justifyContent: 'center',
        opacity: 1,
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#009FB7',
        margin: 15,
        padding: 5
    },
    startBtnDisabled: {
        flex: 1,
        zIndex: 5,
        opacity: .5,
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#009FB7',
        margin: 15,
        padding: 5
    },
    startBtnText: {
        alignSelf: 'center',
        color: '#009FB7',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    // imgTextBox: {
    //     flex: 1,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     transform: [{ skewY: '-10deg' }]
    // },
    imgText: {
        margin: 10,
        color: 'white',
        fontSize: 24,
        letterSpacing: 2,
        textShadowOffset: { width: 2, height: 2 },
        textShadowColor: 'black',
        textShadowRadius: 1,
    }
})