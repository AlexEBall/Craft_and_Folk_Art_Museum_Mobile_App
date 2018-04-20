import React, { Component } from 'react';
import {Text, View, Image, StyleSheet, ImageBackground } from 'react-native';
import Button from './Button';

const LandingPage = (props) => {
    return (
        <ImageBackground
            source={require('../assets/img/mainBackground.jpg')}
            style={styles.backgroundImage}>
        <View style={{ flex: .6 }}>
        </View>
        <View style={{ flex: .4, flexDirection: 'row', justifyContent: 'space-around', backgroundColor: 'white', alignItems: 'flex-start' }}>
            <Button>
                Guests
            </Button>
            <Button>
                Docents
            </Button>
        </View>
        </ImageBackground>
    ) 
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        flexDirection: 'column',
        width: null,
        height: null,
        backgroundColor: 'rgb(0, 0, 0)'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});

export default LandingPage;