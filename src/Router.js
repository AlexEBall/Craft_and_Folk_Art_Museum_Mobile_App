// Define all possible screens/scenes that a user can visit in our app
import React from 'react';
import {Actions, Scene, Router, Lightbox} from 'react-native-router-flux';
import LandingPage from './pages/LandingPage';
import Tours from './pages/Tours';
import Tour from './pages/Tour';

const RouterComponent = () => {
    return (
        <Router>
            <Lightbox>
                <Scene key="root" hideNavBar>
                    <Scene key="homepage" component={LandingPage} />
                    <Scene key="tours" component={Tours} />
                    <Scene key="tour" component={Tour} hideNavBar={false} title={'Tour #1'} 
                            navigationBarStyle={{ backgroundColor: 'orange' }}/>
                </Scene>
            </Lightbox>
        </Router>
    );
};

export default RouterComponent;
