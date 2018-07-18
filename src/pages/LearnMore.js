import React, {Component} from 'react';
import {
    Text,
    View,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
    Linking,
    ScrollView
} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
import imageCacheHoc from 'react-native-image-cache-hoc';

const CacheableImage = imageCacheHoc(ImageBackground);

export default class LearnMore extends Component {
    render() {
        console.log(this.props);
        return (
            <CacheableImage 
                style={styles.learnMoreImg}
                source={{ uri: 'https://res.cloudinary.com/dawjvqyvd/image/upload/v1531872311/merion-estes-lost-horizons-35.jpg' }}
                resizeMode='cover' >
                <LinearGradient 
                    style={styles.learnMoreLinearGradient}
                    colors={['transparent', 'rgb(256, 256, 256)']}>
                        
                        <View style={styles.learnMorePush}>
                        </View>
                        <View style={styles.articleTitle}>

                        </View>

                        <View style={styles.articleDesc}>

                        </View>
                        
                        <View style={styles.articleLinks}>
                        </View>

                </LinearGradient>
            </CacheableImage>
        );
    }
}

const styles = StyleSheet.create({
    learnMoreContainer: {
        flex: 1,
        backgroundColor : 'transparent'
    },
    learnMoreImg: {
        flex: 1
    },
    learnMoreLinearGradient: {
        flex: 1,
        display: 'flex'
    },
    learnMorePush: {
        flex: .4,
        backgroundColor: 'transparent'
    },
    articleTitle: {
        flex: .1,
        backgroundColor: 'pink',
        borderColor: 'black',
        borderWidth: 2
    },
    articleDesc: {
        flex: .4,
        backgroundColor: 'yellow',
        borderColor: 'black',
        borderWidth: 2
    }, 
    articleLinks: {
        flex: .1,
        backgroundColor: 'red',
        borderColor: 'black',
        borderWidth: 2
    }
});