import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    ScrollView,
    ImageBackground
} from 'react-native';
import Button from '../components/Button';

export default class TourBoxHeader extends Component {
    render() {
        return (
            <View style={styles.tourBoxHeader}>
                <View style={styles.tourBoxHeaderTitle}>
                    <Text style={styles.tourBoxHeaderTitleText}>
                        {this.props.title}
                    </Text>
                </View>
                <View style={styles.tourBoxButton}>
                    <Button>
                        More
                    </Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tourBoxHeader: {
        flex: .2,
        backgroundColor: 'pink',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    tourBoxHeaderTitle: {
        flexBasis: '20%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tourBoxHeaderTitleText: {
        fontSize: 24
    },
    tourBoxButton: {
        flexBasis: '30%'
    }
});