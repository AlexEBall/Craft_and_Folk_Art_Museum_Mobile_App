import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    Linking
} from 'react-native';

export default class Programs extends Component {
    _findDimensions = (layout) => {
        const {x, y, width, height} = layout;
        console.log(x);
        console.log(y);
        console.log(width);
        console.log(height);

        // this.props.audioPlayerViewWidth(width);
    }

    render() {
        return (
            <View style={styles.container} onLayout={(event) => { this._findDimensions(event.nativeEvent.layout) }}>
                <View style={styles.card}>
                    <View style={styles.mainImg}>
                        <Image 
                            style={styles.img}
                            source={require('../assets/img/barm.png')}
                            resizeMode='cover' />
                    </View>
                    <View style={styles.infoBox}>
                        <Text>Hell0</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center'
    },
    card: {
        flex: 1,
        backgroundColor: 'white',
        // margin: 10,
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center'
    }, 
    mainImg: {
        flex: .5
    },
    infoBox: {
        flex: .5,
        display: 'flex',
        justifyContent: 'center'
    },
    img: {
        flex: 1,
        height: null,
        width: null
    }
});