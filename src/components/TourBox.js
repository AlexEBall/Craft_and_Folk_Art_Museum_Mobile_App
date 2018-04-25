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

    // mount api with tour obj pass in data obj as properties
    // render tourbox function that maps api above and passes here
    renderTours() {
        return this.props.tour.floors.map(selectedTour => 
            <Tour key={this.props.tour._id} floors={selectedTour.floors}/>
        );
    }

    render() {
        console.log(this.props.tour)
        // const currentTour = thi
        return (
            <View style={styles.tourBox}>
                <TourBoxHeader
                title={this.props.tour.tourAudience} />
                {this.renderTours()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tourBox: {
        // flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'red',
        margin: 5,
        height: 350
    }
})