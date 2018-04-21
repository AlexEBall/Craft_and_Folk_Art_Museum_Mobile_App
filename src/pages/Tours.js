import React, {Component} from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import Button from '../components/Button';

export default class Tours extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerFixed}>
                </View>
                <View style={styles.toursContainer}>
                    <ScrollView>
                    <View style={styles.tourBox}>
                        <View style={styles.tourBoxHeader}>
                        </View>
                        <View style={styles.tourBoxTours}>
                            <ScrollView horizontal={true}>
                                <View style={styles.tour}>
                                    <View style={styles.tourImg}>
                                        <Image 
                                            source={require('../assets/img/elementary.jpg')}
                                            style={styles.img} />
                                    </View>
                                    <View style={styles.tourInfoBox}>
                                        <Button>
                                            Start
                                        </Button>
                                    </View>
                                </View>

                                <View style={styles.tour}>
                                    <View style={styles.tourImg}>
                                        <Image 
                                            source={require('../assets/img/university.jpg')}
                                            style={styles.img} />
                                    </View>
                                    <View style={styles.tourInfoBox}>
                                        <Button>
                                            Start
                                        </Button>
                                    </View>
                                </View>

                                <View style={styles.tour}>
                                    <View>
                                    </View>
                                    <View>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                    <View style={styles.tourBox}>
                    </View>
                    <View style={styles.tourBox}>
                    </View>
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
        backgroundColor: 'violet'

    },
    toursContainer: {
        flex: .9,
        backgroundColor: 'grey'
    },
    tourBox: {
        // flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'red',
        margin: 5,
        height: 350
    },
    tourBoxHeader: {
        flex: .2,
        backgroundColor: 'pink'

    },
    tourBoxTours: {
        flex: .8,
        backgroundColor: 'blue',
        display: 'flex',
        flexDirection: 'row'
    },
    tour: {
        // flex: 1,
        width: 250,
        backgroundColor: 'white',
        margin: 2,
        display: 'flex',
        flexDirection: 'column'
    },
    tourImg: {
        flex: .7,
        backgroundColor: 'seagreen'

    },
    tourInfoBox: {
        flex: .3,
        backgroundColor: 'indigo'
    },
    img: {
        flex: 1,
        height: null,
        width: null,
        resizeMode: 'cover'
    }
})
