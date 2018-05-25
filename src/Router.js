// Define all possible screens/scenes that a user can visit in our app
import React from 'react';
import {View} from 'react-native';
import {Actions, Scene, Router, Lightbox} from 'react-native-router-flux';
import LandingPage from './pages/LandingPage';
import ChoicesPage from './pages/ChoicesPage';
import Exhibitions from './pages/Exhibitions';
import GeneralInfo from './pages/GeneralInfo';
import Programs from './pages/Programs';
import Tour from './pages/Tour';

const RouterComponent = () => {
    return (
        <Router>
            <Lightbox>
                <Scene key="root" hideNavBar>
                    <Scene key="homepage" component={LandingPage} />
                    <Scene key="choices" component={ChoicesPage} hideNavBar={false} title={'CAFAM'}
                            navigationBarStyle={{ backgroundColor: '#F4A93f'}}
                            renderBackButton={() => <View/>}/>
                    <Scene key="tours" component={Exhibitions} hideNavBar={false} title={'CAFAM Exhibitions'} 
                            navigationBarStyle={{ backgroundColor: '#F4A93F' }} 
                            backTitle=" "/>
                    <Scene key="generalInfo" component={GeneralInfo} hideNavBar={false} title={'General Information'} 
                            navigationBarStyle={{ backgroundColor: '#F4A93F' }} 
                            backTitle=" " />
                    <Scene key="programs" component={Programs} hideNavBar={false} title={'General Information'} 
                            navigationBarStyle={{ backgroundColor: '#F4A93F' }} 
                            backTitle=" " />
                    <Scene key="tour" component={Tour} hideNavBar={false} title={'CAFAM Tour'} 
                            navigationBarStyle={{ backgroundColor: '#F4A93F' }}/>
                </Scene>
            </Lightbox>
        </Router>
    );
};

export default RouterComponent;
