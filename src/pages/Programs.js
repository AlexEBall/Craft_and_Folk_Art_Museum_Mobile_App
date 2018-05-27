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
import Card from '../components/Card';

export default class Programs extends Component {
    _findDimensions = (layout) => {
        const {x, y, width, height} = layout;
        console.log(x);
        console.log(y);
        console.log(width);
        console.log(height);

        // this.props.audioPlayerViewWidth(width);
    }

    renderCards = () => {
        
    }

    render() {
        return (
            <View style={styles.container} onLayout={(event) => { this._findDimensions(event.nativeEvent.layout) }}>

                <ScrollView>

                    <Card
                        price={'$90'}
                        title={'An Old-Fashioned Craft-Cocktail Workshop with Bar Mattachine'}
                        time={'Sunday, June 17. 2:00pm–4:00pm'}
                        description={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum id aliquam sapiente, deleniti suscipit quaerat? Explicabo blanditiis placeat sint asperiores, harum aliquam, omnis repudiandae, rerum qui aut nostrum. Ullam, ratione.'} 
                    />
                    

                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center'
    },
//     card: {
//         flex: 1,
//         backgroundColor: 'white',
//         // margin: 10,
//         display: 'flex',
//         justifyContent: 'center',
//         // alignItems: 'center'
//         height: 580,
//         borderBottomWidth: 2,
//         borderBottomColor: '#f7f7f7',
//         shadowColor: '#000',
// 		shadowOffset: { width: 1, heigh: 1 },
//         shadowOpacity: 0.6,
//         marginBottom: 12
//     }, 
//     mainImg: {
//         flex: .5,
//         display: 'flex',
//     },

//     priceBox: {
//         flex: .15,
//         display: 'flex',
//         backgroundColor: 'white',
//         alignItems: 'flex-start',
//         justifyContent: 'center',
//         marginLeft: 15,
//         marginTop: 40,
//         width: 80,
//         // height: 100
//     },
//     price: {
//         fontSize: 28,
//         // padding: 
//     },


//     infoBox: {
//         flex: .5,
//         display: 'flex'
//     },
//     img: {
//         flex: 1,
//         height: null,
//         width: null
//     },
//     infoBoxTitle: {
//         flex: 1,
//         backgroundColor: '#fff',
//         display: 'flex',
//         flexDirection: 'row',
//         justifyContent: 'flex-start',
//         alignItems: 'center',
        
//         // marginLeft: 10
//     },
//     infoBoxTime: {
//         flex: .2,
//         backgroundColor: '#fff'
//     },
//     infoBoxDescription: {
//         flex: 1,
//         backgroundColor: '#fff'
//     },
//     title: {
//         fontSize: 24,
//         letterSpacing: 1.3,
//         paddingLeft: 15

//     },
//     time: {
//         fontSize: 16,
//         paddingLeft: 15,
//         color: '#4D4D4D'
//     },
//     description: {
//         fontSize: 20,
//         padding: 15
//     }
});