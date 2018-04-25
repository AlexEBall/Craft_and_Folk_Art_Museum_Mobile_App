import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import SelectedTour from '../components/SelectedTour';
// import Button from '../components/Button';

export default class Tour extends Component {
    render() {
        console.log(this.props.selectedTour);
        return (
             <View style={styles.container}>

                <View style={styles.tourContainer}>

                    <SelectedTour
                    tourText={this.props.selectedTour.floorText}
                    audioLinkName={this.props.selectedTour.audioLink} />

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
    }
});
