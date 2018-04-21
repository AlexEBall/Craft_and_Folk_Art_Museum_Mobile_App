import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native';

export default class SlectedTour extends Component {
    render() {
        return (
            <View style={styles.selectedTour}>
                <Image
                    source={require('../assets/img/clay.jpeg')}
                    style={styles.selectedTourImg} />


                <View style={styles.selectedTourAudioInfoBox}>
                    <View style={styles.audioBtnBox}>
                        <TouchableOpacity style={styles.audioBtn}>
                            <Image 
                                style={styles.audioImg}
                                source={require('../assets/img/audioPlay.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.audioInfo}>
                        <Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam.
                        </Text>
                    </View>
                </View>


                <ScrollView>
                <View style={styles.selectedTourTextBox}>
                    <Text style={styles.selectedTourText}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ullam quaerat eos cumque corporis omnis dolorum, voluptates voluptate fugit illum repellendus dolores assumenda repudiandae, at qui, nulla debitis quo voluptas quibusdam. Itaque, sint eos?
                    </Text>
                    <Text style={styles.selectedTourText}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, quia voluptates, id temporibus labore doloremque deserunt earum odio enim libero laborum distinctio eum dolorem similique velit adipisci cupiditate commodi vitae quam praesentium officiis cumque? Dicta error pariatur voluptates provident laudantium?
                    </Text>
                </View>
                </ScrollView>
                
            </View>
        );
    }
}
const styles = StyleSheet.create({
    selectedTour: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'red',
        margin: 10,
        height: 'auto'
    },
    selectedTourImg: {
        flex: .8,
        backgroundColor: 'lightblue',
        height: null,
        width: null,
        resizeMode: 'cover'
    },
    selectedTourAudioInfoBox: {
        flex: .3,
        backgroundColor: 'lightgrey',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    audioBtnBox: {
        flex: .2,
        backgroundColor: 'red',
        padding: 5,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    audioBtn: {
        backgroundColor: 'lightblue',
        padding: 10,
        borderRadius: 50,
        height: 50,
        width: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    audioImg: {
        padding: 10,
        borderRadius: 50,
        height: 50,
        width: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    audioInfo: {
        flex: .8,
        backgroundColor: 'tan',
        padding: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    selectedTourTextBox: {
        flex: 1,
        backgroundColor: 'white',
        height: 'auto'
    },
    selectedTourText: {
        fontSize: 24,
        padding: 10
    }
});