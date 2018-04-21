import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, ScrollView} from 'react-native';

export default class Tour extends Component {
    render() {
        console.log(this.onTourPress);
        return (
             <View style={styles.container}>
                <View style={styles.headerFixed}>
                    Tour #1
                </View>
                <View style={styles.tourContainer}>
                    <ScrollView>
                        <View style={styles.selectedTour}>
                            <Image
                                style={styles.selectedTourImg} />
                            <View style={styles.selectedTourAudioInfoBox}>
                            </View>
                            <View style={styles.selectedTourText}>
                                <Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ullam quaerat eos cumque corporis omnis dolorum, voluptates voluptate fugit illum repellendus dolores assumenda repudiandae, at qui, nulla debitis quo voluptas quibusdam. Itaque, sint eos?
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
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
    headerFixed: {
        flex: .1,
        backgroundColor: 'violet'

    },
    tourContainer: {
        flex: .9,
        backgroundColor: 'grey'
    },
    selectedTour: {
        // flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'red',
        margin: 10,
        height: 900
    },
    selectedTourImg: {
        flex: .4,
        backgroundColor: 'lightblue'
    },
    selectedTourAudioInfoBox: {
        flex: .1,
        backgroundColor: 'lightgrey'
    },
    selectedTourText: {
        flex: 1,
        backgroundColor: 'white'
    }
})
