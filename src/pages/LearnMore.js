import React, {Component} from 'react';
import {
    Text,
    View,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
    Linking
} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
import imageCacheHoc from 'react-native-image-cache-hoc';

const CacheableImage = imageCacheHoc(ImageBackground);

export default class LearnMore extends Component {
    onReadMorePress() {
        Linking.openURL(this.props.connect.articleLink)
    }

    onConnectPress() {
        Linking.openURL(this.props.connect.socialLink)
    }

    render() {
        console.log('what are my learn more props', this.props);
        const text = 'Merion Estes collaged paintings on paper at CB1 invoke a tower of Babel in two dimensions: Within them, multiple visual languages are spoken at once. In each of the dozen works from the "Lost Horizons" series (2007-2011), the L.A.-based Estes mobilizes an exuberance of means, toggling between representation, abstraction, pattern and ornament. One mode of address, one manner of engaging surface and space abuts another, all of them feeding into a vibrant, dissonant beauty'
        console.log('max length for if statement... ', text.length);
        return (
            <CacheableImage 
                style={styles.learnMoreImg}
                source={{ uri: this.props.connect.picture }}
                resizeMode='cover' >
                <LinearGradient 
                    style={styles.learnMoreLinearGradient}
                    colors={['transparent', 'rgb(256, 256, 256)']}
                    locations={[0,0.6]}>
                        
                        <View style={styles.learnMorePush}>
                        </View>
                        
                            <View style={styles.articleTitle}>
                                <Text style={styles.titleText}>
                                    {this.props.connect.articleTitle}
                                </Text>
                            </View>

                            <View style={styles.articleDesc}>
                                <Text style={styles.descText}>
                                    {this.props.connect.articleDescription}
                                </Text>
                            </View>
                            
                            <View style={styles.articleLinks}>  
                                <TouchableOpacity style={styles.readMore} onPress={this.onReadMorePress.bind(this)}>
                                    <Text style={styles.readMoreText}>Read More</Text>
                                    <Svg height="32" width="32">
                                        <Path d="M9.297 15c0 0.125-0.063 0.266-0.156 0.359l-7.281 7.281c-0.094 0.094-0.234 0.156-0.359 0.156s-0.266-0.063-0.359-0.156l-0.781-0.781c-0.094-0.094-0.156-0.234-0.156-0.359s0.063-0.266 0.156-0.359l6.141-6.141-6.141-6.141c-0.094-0.094-0.156-0.234-0.156-0.359s0.063-0.266 0.156-0.359l0.781-0.781c0.094-0.094 0.234-0.156 0.359-0.156s0.266 0.063 0.359 0.156l7.281 7.281c0.094 0.094 0.156 0.234 0.156 0.359zM15.297 15c0 0.125-0.063 0.266-0.156 0.359l-7.281 7.281c-0.094 0.094-0.234 0.156-0.359 0.156s-0.266-0.063-0.359-0.156l-0.781-0.781c-0.094-0.094-0.156-0.234-0.156-0.359s0.063-0.266 0.156-0.359l6.141-6.141-6.141-6.141c-0.094-0.094-0.156-0.234-0.156-0.359s0.063-0.266 0.156-0.359l0.781-0.781c0.094-0.094 0.234-0.156 0.359-0.156s0.266 0.063 0.359 0.156l7.281 7.281c0.094 0.094 0.156 0.234 0.156 0.359z"
                                            fill='#009FB7'
                                            stroke='#009FB7'
                                            stokeWidth={5}>
                                        </Path>
                                    </Svg>
                                </TouchableOpacity>
                            
                                <TouchableOpacity style={styles.connect} onPress={this.onConnectPress.bind(this)}>
                                    <Text style={styles.connectText}>Connect</Text>
                                    <Svg height="32" width="32">
                                        <Path d="M18.986 16.471c0.164 0.018 0.327 0.026 0.49 0.026 1.216 0 2.382-0.481 3.258-1.357l7.405-7.405c0.866-0.866 1.349-2.014 1.356-3.231 0.009-1.22-0.459-2.364-1.316-3.222-0.85-0.85-1.98-1.317-3.188-1.317-0.011 0-0.021 0-0.033 0-1.217 0.008-2.364 0.49-3.23 1.356l-7.405 7.405c-1.095 1.095-1.569 2.649-1.269 4.157 0.058 0.29 0.346 0.479 0.629 0.419 0.29-0.058 0.478-0.339 0.42-0.628-0.231-1.157 0.134-2.351 0.976-3.192l7.405-7.405c0.666-0.667 1.548-1.037 2.482-1.043 0.975 0 1.805 0.35 2.458 1.003s1.010 1.527 1.004 2.458c-0.007 0.935-0.377 1.816-1.044 2.482l-7.405 7.405c-0.764 0.763-1.813 1.133-2.879 1.024-0.285-0.033-0.557 0.181-0.588 0.475-0.032 0.296 0.181 0.559 0.474 0.59zM15.14 23.273c1.148-1.148 1.608-2.769 1.229-4.334-0.069-0.287-0.351-0.466-0.646-0.394-0.287 0.069-0.463 0.358-0.394 0.645 0.291 1.201-0.063 2.444-0.946 3.328l-7.405 7.405c-0.666 0.667-1.548 1.037-2.482 1.043-0.959 0.005-1.805-0.349-2.458-1.003-0.653-0.653-1.010-1.526-1.003-2.458 0.006-0.935 0.377-1.816 1.043-2.483l7.405-7.405c0.771-0.771 1.822-1.144 2.906-1.021 0.288 0.022 0.559-0.177 0.592-0.471 0.033-0.293-0.177-0.558-0.471-0.592-1.404-0.158-2.78 0.324-3.783 1.327l-7.405 7.405c-0.866 0.866-1.348 2.014-1.356 3.231-0.009 1.22 0.459 2.364 1.316 3.222 0.85 0.85 1.98 1.317 3.188 1.317 0.011 0 0.021 0 0.033 0 1.217-0.008 2.364-0.49 3.23-1.356l7.407-7.406zM22.734 8.872c-0.209-0.209-0.547-0.209-0.756 0l-13.5 13.5c-0.209 0.208-0.209 0.547 0 0.756 0.104 0.104 0.241 0.157 0.378 0.157s0.273-0.052 0.378-0.157l13.5-13.5c0.209-0.209 0.209-0.547 0-0.756z"
                                            fill='#009FB7'
                                            stroke='#009FB7'
                                            stokeWidth={5}>
                                        </Path>
                                    </Svg>
                                </TouchableOpacity>
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
        display: 'flex'
    },
    articleDesc: {
        borderTopColor: '#000',
        borderTopWidth: 2,
        marginLeft: 3,
        marginRight: 3
    }, 
    articleLinks: {
        flex: .2,
        display: 'flex',
        flexDirection: 'row',
        borderTopColor: '#000',
        borderTopWidth: 2,
        marginLeft: 3,
        marginRight: 3
    },
    titleText: {
        // flex: 1,
        fontSize: 24,
        fontWeight: '600',
        padding: 10,
        color: '#f08433',
        textShadowOffset: { width: 2, height: 2 },
        textShadowColor: 'black',
        textShadowRadius: 1,
    },
    descText: {
        fontSize: 16,
        padding: 10,
    },
    readMore: {
        flex: .5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    readMoreText: {
        fontSize: 20,
        marginRight: 5,
        marginBottom: 5
    },
    connect: {
        flex: .5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    connectText: {
        fontSize: 20,
        marginRight: 5,
        marginBottom: 5
    }
});