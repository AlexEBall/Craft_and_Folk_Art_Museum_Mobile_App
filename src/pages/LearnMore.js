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
                                <Text style={styles.titleText}>
                                    Vibrant beauty in L.A. artist Merion Estes' 'Lost Horizons'
                                </Text>
                            </View>

                            <View style={styles.articleDesc}>
                                <Text style={styles.descText}>
                                    Merion Estes ' collaged paintings on paper at CB1 invoke a tower of Babel in two dimensions: W
                                    ithin them, multiple visual languages are spoken at once. In each of the dozen w
                                    orks from the ' Lost Horizons ' series (2007-2011), the L.A.-based Estes mobilizes an exuberance of means, togg
                                    ling between representation, abstraction, pattern and ornament. One mode of addr
                                    ess, one manner of engaging surface and space abuts another, all of them feeding
                                    into a vibrant, dissonant beauty'
                                </Text>
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
        display: 'flex',
        justifyContent: 'flex-end'
    },
    learnMorePush: {
        flex: .4,
        backgroundColor: 'transparent'
    },
    articleTitle: {
        // can't have a hard coded flex unit because of wrapping
        // backgroundColor: 'pink',
        // borderColor: 'black',
        // borderWidth: 2,
        display: 'flex'
    },
    articleDesc: {
        // borderColor: 'black',
        // borderWidth: 2
    }, 
    articleLinks: {
        flex: .2,
        backgroundColor: 'red',
        borderColor: 'black',
        borderWidth: 2
    },
    titleText: {
        // flex: 1,
        fontSize: 24,
        fontWeight: '600',
        padding: 10,
        color: '#fff'
    },
    descText: {
        fontSize: 16,
        padding: 10,
    }
});