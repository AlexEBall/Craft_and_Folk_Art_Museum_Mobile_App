// Define all possible screens/scenes that a user can visit in our app
import React from 'react';
import {Actions, Scene, Router, Lightbox} from 'react-native-router-flux';
import LandingPage from './components/LandingPage';

const RouterComponent = () => {
    return (
        <Router>
            <Lightbox>
                <Scene key="root" hideNavBar>
                    <Scene key="homepage" component={LandingPage} />
                </Scene>
            </Lightbox>
        </Router>
    );
};

export default RouterComponent;
