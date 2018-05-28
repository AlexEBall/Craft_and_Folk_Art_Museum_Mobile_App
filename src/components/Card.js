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
                                {this.props.price}
                            </Text>
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
                    <View style={styles.infoBoxDescription}>
                        <Text style={styles.description}>{this.props.description}</Text>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: 'white',
        // margin: 10,
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center'
        height: 580,
        borderBottomWidth: 2,
        borderBottomColor: '#f7f7f7',
        shadowColor: '#000',
        shadowOffset: { width: 1, heigh: 1 },
        shadowOpacity: 0.6,
        marginBottom: 12
    }, 
    mainImg: {
        flex: .5,
        display: 'flex',
    },

    priceBox: {
        flex: .15,
        display: 'flex',
        backgroundColor: 'white',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginLeft: 15,
        marginTop: 40,
        width: 80,
        // height: 100
    },
    price: {
        fontSize: 28,
        // padding: 
    },


    infoBox: {
        flex: .5,
        display: 'flex'
    },
    img: {
        flex: 1,
        height: null,
        width: null
    },
    infoBoxTitle: {
        flex: 1,
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        
        // marginLeft: 10
    },
    infoBoxTime: {
        flex: .2,
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
        padding: 15
    }
});