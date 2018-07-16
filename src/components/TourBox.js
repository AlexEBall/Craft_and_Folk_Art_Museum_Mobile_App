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
        // flex: 1,
        display: 'flex',
        flexDirection: 'column',
        // marginTop: 10,
        // marginBottom: 10,
        // marginRight: 5,
        // marginLeft: 5,
        // height: 'auto',
        // borderColor: 'green',
        // borderWidth: 2
    },
    tourBoxTours: {
        flex: 1,
        backgroundColor: '#ffffff',
        display: 'flex',
        // flexDirection: 'row',
        // borderColor: 'black',
        // borderWidth: 2
    }
});

// for tour header
// <TourBoxHeader title={this.props.tour.tourAudience} /> 