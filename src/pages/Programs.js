import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {fetchPrograms} from '../actions';
import Card from '../components/Card';
import Spinner from '../components/Spinner';

class Programs extends Component {

    componentWillMount = () => {
        this.props.fetchPrograms();
    }

    _findDimensions = (layout) => {
        const {x, y, width, height} = layout;
    }

    renderCards = () => {
        let programs = this.props.programs;
        let spin = this.props.fetching;

        if (spin === true) {
            return <Spinner />
        } else {

            return programs.map(program => 
                <Card key={program._id} 
                    price={program.price}
                    memberInfo={program.memberInfo}
                    title={program.title}
                    time={program.time}
                    description={program.description}
                    picture={program.picture}
                    registrationLink={program.registrationLink} 
                />
            );
        }
    }

    render() {

        return (
            <View style={styles.container} onLayout={(event) => { this._findDimensions(event.nativeEvent.layout) }}>
                <ScrollView>
                    {this.renderCards()}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'center'
    }
});

const mapStateToProps = state => {
    return {
        fetching: state.programs.fetching,
        fetched: state.programs.fetched,
        error: state.programs.error,
        programs: state.programs.programs
    }
}

export default connect(mapStateToProps, { fetchPrograms })(Programs);