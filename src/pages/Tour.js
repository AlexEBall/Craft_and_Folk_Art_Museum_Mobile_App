import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import SelectedTour from '../components/SelectedTour';

export default class Tour extends Component {

    render() {

        return (
             <View style={styles.container}>

                <View style={styles.tourContainer}>
                    <SelectedTour
                    audioTitle={this.props.selectedTour.audioTitle}
                    audioLinkName={this.props.selectedTour.audioLink}
                    floorGallery={this.props.selectedTour.floorGallery}
                    floor={this.props.selectedTour.floor}
                     />
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
        backgroundColor: '#ffffff'
    }
});
