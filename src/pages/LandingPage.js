import React, { Component } from 'react';
import { Text, View, StyleSheet, Image,ImageBackground, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import imageCacheHoc from 'react-native-image-cache-hoc';

const CacheableImage = imageCacheHoc(ImageBackground);

export default class LandingPage extends Component {
    onGuestPress() {
        Actions.choices();
    }
    render() {
        return (
            <CacheableImage
                source={{ uri: 'https://res.cloudinary.com/dawjvqyvd/image/upload/v1552886431/artscrafts3b.jpg' }}
                style={styles.backgroundImage}
                resizeMethod="resize">
                <View style={styles.container}>
                    <View style={styles.titleContainer}>
                        <View style={styles.titleBox}>
                            <View style={styles.imgContainer}>
                                <Image
                                    style={styles.img}
                                    source={{ uri: 'https://res.cloudinary.com/dawjvqyvd/image/upload/c_scale,w_150/v1552859045/CraftContemporary_Logo_Symbol_Black_rgb.png' }}
                                />
                                <View style={styles.imgPusher}>
                                    <Text style={styles.h1}> raft</Text>
                                </View>
                            </View>
                            <Text style={styles.h1}>Contemporary</Text>
                        </View>
                    </View>
                    <View style={styles.enter}>
                        <TouchableOpacity style={styles.enterBtn} onPress={this.onGuestPress.bind(this)}>
                            <Text style={styles.enterText}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </CacheableImage>
        ) 
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
    },
    container: {
        flex: 1, 
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgba(0,0,0,.1)'
    },
    titleContainer: {
        flex: .8,
        flexDirection: 'column'
    },
    titleBox: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    imgContainer: {
        flex: .3,
        flexDirection: 'row'
    },
    imgPusher: {
        flex: .7,
        display: 'flex',
        justifyContent: 'flex-end'
    },
    img: {
        flex: .3,
        height: null,
        width: null
    },
    h1: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#fff'
    },
    enter: {
        flex : .2,
        flexDirection : 'row',
        alignItems : 'flex-end'
    },
    enterBtn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#23C9FF'
    },
    enterText: {
        fontSize: 24,
        fontWeight: '700',
        color: 'white'
    }
});
