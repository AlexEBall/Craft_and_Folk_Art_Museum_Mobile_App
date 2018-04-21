import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Button from '../components/Button';

export default class Tour extends Component {
    render() {
        console.log(this.onTourPress);
        return (
             <View style={styles.container}>

                <View style={styles.tourContainer}>

                        <View style={styles.selectedTour}>
                            <Image
                                source={require('../assets/img/clay.jpeg')}
                                style={styles.selectedTourImg} />
                            <View style={styles.selectedTourAudioInfoBox}>
                                <View style={styles.audioBtnBox}>
                                    <TouchableOpacity style={styles.audioBtn}>
                                        <Text>
                                            Play
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.audioInfo}>
                                    <Text>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam.
                                    </Text>
                                </View>
                            </View>
                            <ScrollView>
                            <View style={styles.selectedTourTextBox}>
                                <Text style={styles.selectedTourText}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ullam quaerat eos cumque corporis omnis dolorum, voluptates voluptate fugit illum repellendus dolores assumenda repudiandae, at qui, nulla debitis quo voluptas quibusdam. Itaque, sint eos?
                                </Text>
                                <Text style={styles.selectedTourText}>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, quia voluptates, id temporibus labore doloremque deserunt earum odio enim libero laborum distinctio eum dolorem similique velit adipisci cupiditate commodi vitae quam praesentium officiis cumque? Dicta error pariatur voluptates provident laudantium?
                                </Text>
                            </View>
                            </ScrollView>
                        </View>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    tourContainer: {
        flex: 1,
        backgroundColor: 'grey'
    },
    selectedTour: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'red',
        margin: 10,
        height: 'auto'
    },
    selectedTourImg: {
        flex: .8,
        backgroundColor: 'lightblue',
        height: null,
        width: null,
        resizeMode: 'cover'
    },
    selectedTourAudioInfoBox: {
        flex: .3,
        backgroundColor: 'lightgrey',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    audioBtnBox: {
        flex: .2,
        backgroundColor: 'red',
        padding: 5,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    audioBtn: {
        backgroundColor: 'lightblue',
        padding: 10,
        borderRadius: 50,
        height: 50,
        width: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    audioInfo: {
        flex: .8,
        backgroundColor: 'tan',
        padding: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    selectedTourTextBox: {
        flex: 1,
        backgroundColor: 'white',
        height: 'auto'
    },
    selectedTourText: {
        fontSize: 24,
        padding: 5,
        margin: 3
    }
});

{/* <View style={styles.headerFixed}>
                    <View style={styles.headerButtonBox}>
                        <Button style={styles.headerButton}>
                            Back
                        </Button>
                    </View>
                    <View style={styles.headerTextBox}>
                        <Text style={styles.headerText}>
                            Tour #1
                        </Text>
                    </View>
                </View> */}
