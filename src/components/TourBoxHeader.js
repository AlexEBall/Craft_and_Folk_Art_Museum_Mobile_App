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
import Button from '../components/Button';

export default class TourBoxHeader extends Component {

    _information = () => {
        console.log(this.props.title);
    }

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
        // backgroundColor: '#F9D24E',
        // borderTopColor: '#009FB7',
        // borderTopWidth: 2,
        // borderBottomColor: '#009FB7',
        // borderBottomWidth: 2,
        // shadowColor: '#000',
		// shadowOffset: { width: 1, heigh: 2 },
		// shadowOpacity: 0.3,
		// shadowRadius: 2,
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

{/* <View style={styles.tourBoxButton}>
    <TouchableOpacity style={styles.infoBtn} onPress={() => this._information()}>
        <Svg height="32" width="32">
            <Path d="M16.5 29v0c-6.904 0-12.5-5.596-12.5-12.5s5.596-12.5 12.5-12.5c6.904 0 12.5 5.596 12.5 12.5s-5.596 12.5-12.5 12.5zM17 22v-7h-3v1h2v6h-2v1h5v-1h-2zM16.5 13c0.828 0 1.5-0.672 1.5-1.5s-0.672-1.5-1.5-1.5c-0.828 0-1.5 0.672-1.5 1.5s0.672 1.5 1.5 1.5v0z"
                fill='#ffffff'
                stroke='#009FB7'
                stokeWidth={5}>
            </Path>
        </Svg>
    </TouchableOpacity>
</View> */}