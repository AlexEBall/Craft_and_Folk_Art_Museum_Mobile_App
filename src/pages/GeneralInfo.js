import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    Linking,
    ScrollView
} from 'react-native';
import Svg, {Path} from 'react-native-svg';

export default class GeneralInfo extends Component {
    render() {
        return (
            <ScrollView style={styles.infoContainer}>


                <View style={styles.admissions}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Admissions</Text>
                        <View style={styles.icon}>
                            <Svg height="34" width="34">
                                <Path d="M32 30v-2h-2v-12h2v-2h-6v2h2v12h-6v-12h2v-2h-6v2h2v12h-6v-12h2v-2h-6v2h2v12h-6v-12h2v-2h-6v2h2v12h-2v2h-2v2h34v-2h-2z"
                                fill='#009FB7'
                                stroke='#009FB7'>
                                </Path>
                                <Path d="M16 0h2l16 10v2h-34v-2l16-10z"
                                fill='#009FB7'
                                stroke='#009FB7'>
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
                    <View style={styles.header}>
                        <Text style={styles.title}>Hours</Text>
                        <View style={styles.icon}>
                            <Svg height="32" width="32">
                                <Path d="M20.586 23.414l-6.586-6.586v-8.828h4v7.172l5.414 5.414zM16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 28c-6.627 0-12-5.373-12-12s5.373-12 12-12c6.627 0 12 5.373 12 12s-5.373 12-12 12z"
                                fill='#009FB7'
                                stroke='#009FB7'>
                                </Path>
                            </Svg>
                        </View>
                    </View>
                    <View style={styles.info}>
                        <Text>Monday: Closed</Text>
                        <Text>Tuesday - Friday: 11 am - 5 pm</Text>
                        <Text>Saturday & Sunday: 11 am - 6 pm</Text>
                        <Text>The first Thursday of every month: 6:30 pm - 9:30 pm</Text>
                    </View>
                </View>


                <View style={styles.parking}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Parking</Text>
                        <View style={styles.icon}>
                            <Svg height="32" width="32">
                                <Path d="M7.5 17c0-1.375-1.125-2.5-2.5-2.5s-2.5 1.125-2.5 2.5 1.125 2.5 2.5 2.5 2.5-1.125 2.5-2.5zM8.062 12h15.875l-1.391-5.578c-0.047-0.172-0.359-0.422-0.547-0.422h-12c-0.187 0-0.5 0.25-0.547 0.422zM29.5 17c0-1.375-1.125-2.5-2.5-2.5s-2.5 1.125-2.5 2.5 1.125 2.5 2.5 2.5 2.5-1.125 2.5-2.5zM32 15.5v6c0 0.281-0.219 0.5-0.5 0.5h-1.5v2c0 1.656-1.344 3-3 3s-3-1.344-3-3v-2h-16v2c0 1.656-1.344 3-3 3s-3-1.344-3-3v-2h-1.5c-0.281 0-0.5-0.219-0.5-0.5v-6c0-1.937 1.563-3.5 3.5-3.5h0.438l1.641-6.547c0.484-1.969 2.391-3.453 4.422-3.453h12c2.031 0 3.938 1.484 4.422 3.453l1.641 6.547h0.438c1.937 0 3.5 1.563 3.5 3.5z"
                                fill='#009FB7'
                                stroke='#009FB7'>
                                </Path>
                            </Svg>
                        </View>
                    </View>
                    <View style={styles.info}>
                        <Text style={{ marginBottom: 8 }}>$5 parking is available on Saturday & Sunday only from 7am - 8pm 
                            just for CAFAM visitors! Make sure to pick up your validation coupon 
                            from the admission desk after your visit.</Text>
                        <Text style={{ marginBottom: 8 }}>5750 Courtyard Place Los Angeles, CA 90036</Text>
                        <Text style={{ marginBottom: 4 }}>Enter from Wilshire Blvd. at Courtyard Place (between Masselin and Curson). 
                            Structure will be on the right.</Text>
                        <Text>There is two hour street parking within a block of CAFAM as well.</Text>
                    </View>
                </View>


                <View style={styles.map}>
                    <Image 
                        style={styles.mapImg}
                        source={{ uri: "https://res.cloudinary.com/dawjvqyvd/image/upload/c_scale,w_447/v1528503550/Screen_Shot_2018-06-08_at_5.18.21_PM.png" }}
                    />
                </View>
            </ScrollView>
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
        display: 'flex'
    },
    hours: {
        flex: 1,
        display: 'flex'
    },
    parking: {
        flex: 1,
        display: 'flex'
    },
    map: {
        flex: 1,
        display: 'flex',
        borderTopWidth: 3,
        borderTopColor: '#009FB7',
        height: 300
    },
    mapImg: {
        flex: 1,
        height: null,
        width: null
    },
    header: {
        flex: .3,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 3,
        borderBottomWidth: 2,
        borderColor: '#009FB7'
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