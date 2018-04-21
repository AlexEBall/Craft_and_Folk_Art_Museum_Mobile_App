import React, {Component} from 'react';
import { Text, View, Image, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import Button from '../components/Button';
import TourBox from '../components/TourBox';

export default class Tours extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerFixed}>
                </View>
                <View style={styles.toursContainer}>
                    <ScrollView>


                    <TourBox />
                    <TourBox />
                    <TourBox />



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
    // tourBox: {
    //     // flex: 1,
    //     display: 'flex',
    //     flexDirection: 'column',
    //     backgroundColor: 'red',
    //     margin: 5,
    //     height: 350
    // },
    // tourBoxHeader: {
    //     flex: .2,
    //     backgroundColor: 'pink',
    //     display: 'flex',
    //     flexDirection: 'row',
    //     justifyContent: 'space-between'
    // },
    // tourBoxHeaderTitle: {
    //     flexBasis: '20%',
    //     alignItems: 'center',
    //     justifyContent: 'center'
    // },
    // tourBoxHeaderTitleText: {
    //     fontSize: 24
    // },
    // tourBoxButton: {
    //     flexBasis: '30%'
    // },
    // tourBoxTours: {
    //     flex: .8,
    //     backgroundColor: 'blue',
    //     display: 'flex',
    //     flexDirection: 'row'
    // },
    // tour: {
    //     // flex: 1,
    //     width: 250,
    //     backgroundColor: 'white',
    //     margin: 2,
    //     display: 'flex',
    //     flexDirection: 'column'
    // },
    // tourImg: {
    //     flex: .7,
    //     backgroundColor: 'seagreen'

    // },
    // tourInfoBox: {
    //     flex: .3,
    //     backgroundColor: 'indigo'
    // },
    // img: {
    //     flex: 1,
    //     height: null,
    //     width: null,
    //     resizeMode: 'cover',
    //     backgroundColor: 'rgb(0, 0, 0)'
    // },
    // imgTextBox: {
    //     flex: 1,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     transform: [{ skewY: '-10deg' }]
    // },
    // imgText: {
    //     color: 'white',
    //     fontSize: 34,
    //     letterSpacing: 2,
    //     textShadowOffset: { width: 2, height: 2 },
    //     textShadowColor: 'black',
    //     textShadowRadius: 1,
    //     // backgroundColor: 'rgba(247, 247, 247, .2)'
    // }
})


 {/* <View style={styles.tourBox}>
                        <View style={styles.tourBoxHeader}>
                            <View style={styles.tourBoxHeaderTitle}>
                                <Text style={styles.tourBoxHeaderTitleText}>
                                    K-12
                                </Text>
                            </View>
                            <View style={styles.tourBoxButton}>
                                <Button>
                                    More
                                </Button>
                            </View>
                        </View>
                        <View style={styles.tourBoxTours}>

                            <ScrollView horizontal={true}>


                                <View style={styles.tour}>
                                    <View style={styles.tourImg}>
                                        <ImageBackground 
                                            source={require('../assets/img/elementary.jpg')}
                                            style={styles.img}>
                                            <View style={styles.imgTextBox}>
                                                <Text style={styles.imgText}>
                                                    Elementary
                                                </Text>
                                            </View>
                                        </ImageBackground>
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
                    </View>  */}
