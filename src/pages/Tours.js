import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchTourData} from '../actions';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import TourBox from '../components/TourBox';
import Spinner from '../components/Spinner';

class Tours extends Component {
    componentWillMount = () => {
        this.props.fetchTourData();
    }

    renderTourBox = () => {
        let tours = this.props.data;
        let spin = this.props.fetching

        console.log(spin);
        // spinner on images if passing smaller images doesn't work
        if (spin === true) {
            return <Spinner />
        } else {
        
        return tours.map(tour => 
            <TourBox key={tour._id} tour={tour} />
        );

        }
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.headerFixed} /> 
                <View style={styles.toursContainer}>
                    <ScrollView>
                        {this.renderTourBox()}
                    </ScrollView>
                </View>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    headerFixed: {
        flex: .1,
        backgroundColor: '#F4A93F'

    },
    toursContainer: {
        flex: .9,
        backgroundColor: '#ffffff',
    }
});

const mapStateToProps = state => {
    return {
        fetching: state.data.fetching,
        fetched: state.data.fetched,
        error: state.data.error,
        data: state.data.data
    }
}

export default connect(mapStateToProps, { fetchTourData })(Tours);
