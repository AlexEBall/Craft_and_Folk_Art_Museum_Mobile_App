import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';

export default class Tour extends Component {
    render() {
        console.log(this.onTourPress);
        return (
             <View style={styles.container}>
                <View style={styles.headerFixed}>
                    Tour #1
                </View>
                <View style={styles.toursContainer}>
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
    toursContainer: {
        flex: .9,
        backgroundColor: 'grey'
    }
})
