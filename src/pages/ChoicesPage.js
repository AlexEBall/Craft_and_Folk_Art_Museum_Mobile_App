import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import {Actions} from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';

export default class ChoicesPage extends Component {

    onExhibitionsPress = () => {
        Actions.tours();
    }

    onGeneralInfoPress = () => {
        Actions.generalInfo();
    }

    onProgramsPress = () => {
        
    }

    onShopPress = () => {
        Linking.openURL('http://www.cafamshop.org/')
    }

    render() {
        return (
            <LinearGradient colors={['#f4a93f','#f08433']} style={styles.LinearGradient}>
                <View style={styles.overAllContainer}>
                    <View style={styles.textBoxContaier}>
                        <Text style={styles.titleText}>What would you like to do?</Text>
                    </View>
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.buttonStyle} onPress={this.onExhibitionsPress.bind(this)}>
                            <LinearGradient style={styles.textContainer}
                                start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                                locations={[0,0.5,0.6]}
                                colors={['#f08433', '#f4a93f', '#f9d24e']}>
                                <Text style={styles.textStyle}>Exhibitions</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonStyle} onPress={this.onGeneralInfoPress.bind(this)}>
                            <LinearGradient style={styles.textContainer}
                                start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                                locations={[0,0.5,0.6]}
                                colors={['#f08433', '#f4a93f', '#f9d24e']}>
                                <Text style={styles.textStyle}>General Info</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonStyle} onPress={this.onProgramsPress.bind(this)}>
                            <LinearGradient style={styles.textContainer}
                                start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                                locations={[0,0.5,0.6]}
                                colors={['#f08433', '#f4a93f', '#f9d24e']}>
                                <Text style={styles.textStyle}>Programs</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonStyle} onPress={this.onShopPress.bind(this)}>
                            <LinearGradient style={styles.textContainer}
                                start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                                locations={[0,0.5,0.6]}
                                colors={['#f08433', '#f4a93f', '#f9d24e']}>
                                <Text style={styles.textStyle}>Shop</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    LinearGradient: {
        flex: 1,
        display: 'flex'
    },
    overAllContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'green',
        borderWidth: 3
    },
    textBoxContainer: {
        flex: .7,
    },
    container: {
        flex: .3,
        // width: 280,
        // borderRadius: 20,
        // backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',

        borderWidth: 2,
        borderColor: 'blue'
        // padding: 20,
        // shadowOffset:{  width: 1,  height: 1,  },
        // shadowColor: 'black',
        // shadowOpacity: 1.0,
    },
    buttonStyle: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'stretch',
        // backgroundColor: '#fff',
        // borderWidth: 3,
        // borderColor: '#009FB7',
        borderRadius: 10,
        margin: 10
    },
    textContainer: {
        flex: 1,
        borderRadius: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 25,
        color: '#009FB7',
        letterSpacing: 1.5,
        textShadowOffset: { width: 1.5, height: 1 },
        textShadowColor: '#000707',
        textShadowRadius: 1,
    }
})