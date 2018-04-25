import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    render() {
        const store = createStore(reducers, applyMiddleware(ReduxThunk, logger));

        return (
            <Provider store={store}>
                <Router/>
            </Provider>
        );
    }
}

export default App;