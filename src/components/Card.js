import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Linking,
    ImageBackground
} from 'react-native';
import Svg, {Path} from 'react-native-svg';

export default class Card extends Component {
    
    render() {
        console.log('programs :::: ', this.props);
        return (
            <View style={styles.card}>
                <View style={styles.mainImg}>
                    <ImageBackground 
                        style={styles.img}
                        source={{ uri: this.props.picture }}
                        resizeMode='cover' >
                        <View style={styles.priceBox}>
                            <Text style={styles.price}>
                                ${this.props.price}
                            </Text>
                        </View>
                        <View style={styles.memberInfoBox}>
                            <View style={styles.memberInfoTextBox}>
                                <Text style={styles.memberInfoText}>
                                    {this.props.memberInfo}
                                </Text>
                            </View>
                            <View style={styles.registrationBox}>
                                <TouchableOpacity style={styles.registrationBtn} onPress={() => Linking.openURL(this.props.registrationLink)}>
                                    <Svg height="32" width="32">
                                        <Path d="M12 23c0-4.726 2.996-8.765 7.189-10.319 0.509-1.142 0.811-2.411 0.811-3.681 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h12.416c-0.271-0.954-0.416-1.96-0.416-3z"
                                            fill='#009FB7'
                                            stroke='#009FB7'
                                        >
                                        </Path>
                                        <Path d="M23 14c-4.971 0-9 4.029-9 9s4.029 9 9 9c4.971 0 9-4.029 9-9s-4.029-9-9-9zM28 24h-4v4h-2v-4h-4v-2h4v-4h2v4h4v2z"
                                            fill='#009FB7'
                                            stroke='#009FB7'
                                        ></Path>
                                    </Svg>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.infoBox}>
                    <View style={styles.infoBoxTitle}>
                        <Text style={styles.title}>{this.props.title}</Text>
                    </View>
                    <View style={styles.infoBoxTime}>
                        <Text style={styles.time}>{this.props.time}</Text>
                    </View>
                    <ScrollView>
                        <View style={styles.infoBoxDescription}>
                            <Text style={styles.description}>{this.props.description}</Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        height: 730,
        // borderBottomWidth: 2,
        // borderBottomColor: '#f7f7f7',
        // shadowColor: '#000',
        // shadowOffset: { width: 1, heigh: 1 },
        // shadowOpacity: 0.6,
        // marginBottom: 12
    }, 
    mainImg: {
        flex: .45,
        display: 'flex'
    },

    priceBox: {
        flex: .15,
        display: 'flex',
        backgroundColor: '#f08433',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 15,
        marginTop: 40,
        width: 80,
    },
    memberInfoBox: {
        flex: .2, 
        display: 'flex',
        flexDirection: 'row',
    },
    memberInfoTextBox: {
        flex: .8,
        backgroundColor: 'rgba(254, 74, 73, .8)'
    },
    memberInfoText: {
        fontSize: 18,
        color: '#fff',
        marginLeft: 5,
        marginTop: 5
    },
    registrationBox: {
        flex: .2,
        backgroundColor: 'rgba(254, 74, 73, .8)',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    registrationBtn: {
        zIndex: 5,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 50,
        marginBottom: 3
    },
    price: {
        fontSize: 28,
        color: '#fff'
    },


    infoBox: {
        flex: .55,
        display: 'flex'
    },
    img: {
        flex: 1,
        height: null,
        width: null,
        display: 'flex',
        justifyContent: 'space-between'
    },
    infoBoxTitle: {
        flex: .5,
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    infoBoxTime: {
        flex: .1,
        backgroundColor: '#fff'
    },
    infoBoxDescription: {
        flex: 1,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 24,
        letterSpacing: 1.3,
        paddingLeft: 15

    },
    time: {
        fontSize: 16,
        paddingLeft: 15,
        color: '#4D4D4D'
    },
    description: {
        fontSize: 20,
        paddingLeft: 15,
        paddingTop: 10,
        paddingRight: 15,
        paddingBottom: 10
    }
});