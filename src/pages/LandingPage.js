import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from '../components/Button';

export default class LandingPage extends Component {
    onGuestPress() {
        Actions.tours();
    }
    render() {
        return (
            <ImageBackground
                source={require('../assets/img/mainBackground.jpg')}
                style={styles.backgroundImage}>
            <View style={{ flex: .7 }}>
            </View>
            <View style={{ flex: .3, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-start' }}>
                <Button onPress={this.onGuestPress.bind()}>
                    Guests
                </Button>
                <Button>
                    Docents
                </Button>
            </View>
            </ImageBackground>
        ) 
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        flexDirection: 'column',
        width: null,
        height: null,
        backgroundColor: 'rgb(0, 0, 0)'
    }
});
