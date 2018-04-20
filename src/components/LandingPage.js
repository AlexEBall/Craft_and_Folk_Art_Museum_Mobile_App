import React, { Component } from 'react';
import {Text, View, Image, StyleSheet, ImageBackground } from 'react-native';
import Button from './Button';

const LandingPage = (props) => {
    return (
        <ImageBackground
            source={require('../assets/img/mainBackground.jpg')}
            style={styles.backgroundImage}>
        <View style={{ flex: .7 }}>
        </View>
        <View style={{ flex: .3, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-start' }}>
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
    }
});

export default LandingPage;