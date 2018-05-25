import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    Linking
} from 'react-native';
import Svg, {Path} from 'react-native-svg';
// import LinearGradient from 'react-native-linear-gradient';

export default class GeneralInfo extends Component {
    render() {
        return (
            <View style={styles.infoContainer}>
                <View style={styles.admissions}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Admissions</Text>
                        <View style={styles.icon}>
                            <Svg height="34" width="34">
                                <Path d="M32 30v-2h-2v-12h2v-2h-6v2h2v12h-6v-12h2v-2h-6v2h2v12h-6v-12h2v-2h-6v2h2v12h-6v-12h2v-2h-6v2h2v12h-2v2h-2v2h34v-2h-2z"
                                fill='#009FB7'
                                stroke='#009FB7'
                                stokeWidth={5}>
                                </Path>
                                <Path d="M16 0h2l16 10v2h-34v-2l16-10z"
                                fill='#009FB7'
                                stroke='#009FB7'
                                stokeWidth={5}>
                                </Path>
                            </Svg>
                        </View>
                    </View>
                    <View style={styles.info}>
                        <Text>Members: FREE</Text>
                        <Text>General: $7</Text>
                        <Text>Students, teachers, seniors (65+): $5</Text>
                        <Text>Children under 10: FREE</Text>
                        <Text>Sundays: FREE</Text>
                    </View>
                </View>
                <View style={styles.hours}>
                </View>
                <View style={styles.parking}>
                </View>
                <View style={styles.map}>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    infoContainer: {
        flex: 1,
        display: 'flex'
    },
    admissions: {
        flex: 1,
        borderWidth: 2,
        borderColor: 'black',
        display: 'flex',
    },
    hours: {
        flex: 1,
        borderWidth: 2,
        borderColor: 'black'
    },
    parking: {
        flex: 1,
        borderWidth: 2,
        borderColor: 'black'
    },
    map: {
        flex: 1,
        borderWidth: 2,
        borderColor: 'black'
    },
    header: {
        flex: .3,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 3
    },
    info: {
        flex: .7,
        padding: 10,
        display: 'flex'
    },
    title: {
        fontSize: 24,
        marginLeft: 5,
        color: '#009FB7',
        textShadowOffset: { width: .5, height: .5 },
        textShadowColor: 'black',
        textShadowRadius: 1
    },
    icon: {
        marginRight: 15
    }
});