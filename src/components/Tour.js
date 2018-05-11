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

    onTourPress() {
        Actions.tour({selectedTour: this.props.selectedTour});
    }

    renderButton = () => {
        console.log('hi');
        if (!this.props.selectedTour) {
            return <Button disabled={true} onPress={this.onTourPress.bind(this)}>
                        Start
                    </Button>
        } else {
            return <Button onPress={this.onTourPress.bind(this)}>
                        Start
                    </Button>
        }
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
                    {this.renderButton()}
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
    tourImg: {
        flex: .7,
        // backgroundColor: 'seagreen'

    },
    tourInfoBox: {
        flex: .3,
        borderRadius: 10,
        backgroundColor: '#F08433'
    },
    img: {
        flex: 1,
        height: null,
        width: null,
        overflow: 'hidden',
        borderRadius: 10,
        // margin: 10
        // resizeMode: 'cover',
        // backgroundColor: 'rgb(0, 0, 0)'
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