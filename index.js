import React from 'react';
import { AppRegistry, View, Image } from 'react-native';
import LandingPage from './src/components/LandingPage';
// import App from './App';

const App = () => (
	<LandingPage />
);

AppRegistry.registerComponent('cafam', () => App);
