import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, ImageBackground} from 'react-native';
import {Actions} from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';

export default class ChoicesPage extends Component {
    render() {
        return (
            <LinearGradient colors={['#f4a93f', '#f08433']} style={styles.LinearGradient}>
                <View style={styles.container}>
                    <Text>Hello</Text>
                </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    LinearGradient: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: .5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 280,
        height: 300,
        borderRadius: 20,
        backgroundColor: '#fff'
    }
})