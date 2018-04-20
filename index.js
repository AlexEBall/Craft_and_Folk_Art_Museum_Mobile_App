import React from 'react';
import { AppRegistry, View, Image } from 'react-native';
import LandingPage from './src/components/LandingPage';
// import App from './App';

const App = () => (
    <View style={{ flex: 1 }}>
		<LandingPage />
	</View>
);

AppRegistry.registerComponent('cafam', () => App);
