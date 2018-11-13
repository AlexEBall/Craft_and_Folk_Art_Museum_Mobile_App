import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    ScrollView,
    ImageBackground
} from 'react-native';
// import TourBoxHeader from '../components/TourBoxHeader';
import Tour from '../components/Tour';

export default class TourBox extends Component {

    renderTour = () => {
        return this.props.tour.floors.map(selectedTour => 
            <Tour key={selectedTour.floor} selectedTour={selectedTour} />
        );
    }

    render() {
        return (
            <View style={styles.tourBox}>
                <View style={styles.tourBoxTours}>
                    <ScrollView>
                        {this.renderTour()}
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tourBox: {
        display: 'flex',
        flexDirection: 'column'
    },
    tourBoxTours: {
        flex: 1,
        backgroundColor: '#ffffff',
        display: 'flex'
    }
});