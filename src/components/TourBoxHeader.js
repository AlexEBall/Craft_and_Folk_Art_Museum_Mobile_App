import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default class TourBoxHeader extends Component {

    render() {
        return (
            <View style={styles.tourBoxHeader}>
                <View style={styles.tourBoxHeaderTitle}>
                    <Text style={styles.tourBoxHeaderTitleText}>
                        {this.props.title} Tour
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tourBoxHeader: {
        flex: .2,
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 10
    },
    tourBoxHeaderTitle: {
        flex: 1,
        paddingLeft: 10,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    tourBoxHeaderTitleText: {
        fontSize: 28,
        color: '#009FB7',
        textShadowOffset: { width: .5, height: .5 },
        textShadowColor: 'black',
        textShadowRadius: 1
    },
    tourBoxButton: {
        flex: .2,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginRight: 10
    },
    infoBtn: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: '#009FB7'
    }
});