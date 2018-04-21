// Define all possible screens/scenes that a user can visit in our app
import React from 'react';
import {Actions, Scene, Router, Lightbox} from 'react-native-router-flux';
import LandingPage from './pages/LandingPage';
import Tours from './pages/Tours';

const RouterComponent = () => {
    return (
        <Router>
            <Lightbox>
                <Scene key="root" hideNavBar>
                    <Scene key="homepage" component={LandingPage} />
                    <Scene key="tours" component={Tours} />
                </Scene>
            </Lightbox>
        </Router>
    );
};

export default RouterComponent;
