import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    ScrollView,
    ImageBackground
} from 'react-native';
import TourBoxHeader from '../components/TourBoxHeader';
import Tour from '../components/Tour';
import Button from '../components/Button';

export default class TourBox extends Component {

    renderTour = () => {
        return this.props.tour.floors.map(selectedTour => 
            <Tour key={selectedTour.floor} selectedTour={selectedTour} />
        );
    }

    render() {
        console.log(this.props.tour)
        // const currentTour = thi
        return (
            <View style={styles.tourBox}>
                <TourBoxHeader
                title={this.props.tour.tourAudience} />
                <View style={styles.tourBoxTours}>
                    <ScrollView horizontal={true}>
                        {this.renderTour()}
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tourBox: {
        // flex: 1,
        display: 'flex',
        flexDirection: 'column',
        marginTop: 10,
        marginBottom: 10,
        marginRight: 5,
        marginLeft: 5,
        height: 350
    },
    tourBoxTours: {
        flex: .8,
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'row'
    }
})