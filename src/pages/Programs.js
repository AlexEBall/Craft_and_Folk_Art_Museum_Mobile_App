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
import {connect} from 'react-redux';
import Card from '../components/Card';

class Programs extends Component {
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
    }
});

const mapStateToProps = state => {
    // return {viewWidth: state.audio.viewWidth}
}

export default connect(mapStateToProps, {})(Programs);