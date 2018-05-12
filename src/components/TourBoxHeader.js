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
                        {this.props.title} Tour
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
        backgroundColor: '#F9D24E',
        borderTopColor: '#009FB7',
        borderTopWidth: 2,
        borderBottomColor: '#009FB7',
        borderBottomWidth: 2,
        shadowColor: '#000',
		shadowOffset: { width: 1, heigh: 2 },
		shadowOpacity: 0.3,
		shadowRadius: 2,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10
    },
    tourBoxHeaderTitle: {
        flexBasis: '50%',
        paddingLeft: 10,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    tourBoxHeaderTitleText: {
        fontSize: 24,
        color: '#009FB7',
        textShadowOffset: { width: .5, height: .5 },
        textShadowColor: 'black',
        textShadowRadius: 1
    },
    tourBoxButton: {
        flexBasis: '30%'
    }
});