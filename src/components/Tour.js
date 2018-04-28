import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    ScrollView,
    ImageBackground
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from '../components/Button';

export default class Tour extends Component {

    renderTours() {

    }

    onTourPress() {
        Actions.tour({selectedTour: this.props.selectedTour});
    }

    render() {
        // console.log(this.props.seledtedTour);
        const coverImage = this.props.selectedTour.coverPic;

        return (
            <View style={styles.tour}>
                <View style={styles.tourImg}>
                    <ImageBackground 
                        source={{ uri: coverImage }}
                        style={styles.img}>
                        <View style={styles.imgTextBox}>
                            <Text style={styles.imgText}>
                                Floor {this.props.selectedTour.floor}
                            </Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.tourInfoBox}>
                    <Button onPress={this.onTourPress.bind(this)}>
                        Start
                    </Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    // tourBoxTours: {
    //     flex: .8,
    //     backgroundColor: 'blue',
    //     display: 'flex',
    //     flexDirection: 'row'
    // },
    tour: {
        // flex: 1,
        width: 250,
        backgroundColor: 'white',
        margin: 2,
        display: 'flex',
        flexDirection: 'column'
    },
    tourImg: {
        flex: .7,
        backgroundColor: 'seagreen'

    },
    tourInfoBox: {
        flex: .3,
        backgroundColor: 'indigo'
    },
    img: {
        flex: 1,
        height: null,
        width: null,
        // resizeMode: 'cover',
        backgroundColor: 'rgb(0, 0, 0)'
    },
    imgTextBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        transform: [{ skewY: '-10deg' }]
    },
    imgText: {
        color: 'white',
        fontSize: 34,
        letterSpacing: 2,
        textShadowOffset: { width: 2, height: 2 },
        textShadowColor: 'black',
        textShadowRadius: 1,
        // backgroundColor: 'rgba(247, 247, 247, .2)'
    }
})