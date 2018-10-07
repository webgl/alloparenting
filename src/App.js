import React from 'react';
import Routes from './Routes';
import {Provider} from 'react-redux';
import {store, persistor} from './helpers/';
import {PersistGate} from 'redux-persist/integration/react';
import './App.css';

export default () => (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <Routes/>
        </PersistGate>
    </Provider>
);
