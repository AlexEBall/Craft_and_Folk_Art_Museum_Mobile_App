import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    ScrollView,
    ImageBackground
} from 'react-native';
import TourBoxHeader from '../components/TourBoxHeader';
import Tour from '../components/Tour';
import Button from '../components/Button';

export default class TourBox extends Component {

    // mount api with tour obj pass in data obj as properties
    // render tourbox function that maps api above and passes here

    render() {
        return (
            <View style={styles.tourBox}>
                <TourBoxHeader
                title='K-12' />
                <Tour />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tourBox: {
        // flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'red',
        margin: 5,
        height: 350
    },
    // tourBoxHeader: {
    //     flex: .2,
    //     backgroundColor: 'pink',
    //     display: 'flex',
    //     flexDirection: 'row',
    //     justifyContent: 'space-between'
    // },
    // tourBoxHeaderTitle: {
    //     flexBasis: '20%',
    //     alignItems: 'center',
    //     justifyContent: 'center'
    // },
    // tourBoxHeaderTitleText: {
    //     fontSize: 24
    // },
    // tourBoxButton: {
    //     flexBasis: '30%'
    // },
    // tourBoxTours: {
    //     flex: .8,
    //     backgroundColor: 'blue',
    //     display: 'flex',
    //     flexDirection: 'row'
    // },
    // tour: {
    //     // flex: 1,
    //     width: 250,
    //     backgroundColor: 'white',
    //     margin: 2,
    //     display: 'flex',
    //     flexDirection: 'column'
    // },
    // tourImg: {
    //     flex: .7,
    //     backgroundColor: 'seagreen'

    // },
    // tourInfoBox: {
    //     flex: .3,
    //     backgroundColor: 'indigo'
    // },
    // img: {
    //     flex: 1,
    //     height: null,
    //     width: null,
    //     // resizeMode: 'cover',
    //     backgroundColor: 'rgb(0, 0, 0)'
    // },
    // imgTextBox: {
    //     flex: 1,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     transform: [{ skewY: '-10deg' }]
    // },
    // imgText: {
    //     color: 'white',
    //     fontSize: 34,
    //     letterSpacing: 2,
    //     textShadowOffset: { width: 2, height: 2 },
    //     textShadowColor: 'black',
    //     textShadowRadius: 1,
    //     // backgroundColor: 'rgba(247, 247, 247, .2)'
    // }
})