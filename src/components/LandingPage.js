import React, { Component } from 'react';
import {Text, View, Image, StyleSheet } from 'react-native';

class LandingPage extends Component{
    render() {
    return (
        <Image
            source={require('../assets/img/mainBackground.jpg')}
            style={styles.backgroundImage}
        />
           
    )
    };   
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: null,
        marginTop: 20,
        resizeMode: 'stretch'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});

export default LandingPage;