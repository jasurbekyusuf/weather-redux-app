import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {AppContainer} from "./components/app/AppContainer";
import "./assets/global.css"
import store from './store';
import {Provider} from 'react-redux';

ReactDOM.render(
        <Provider store={store}>
            <AppContainer/>
        </Provider>,
    document.getElementById('root')
);

reportWebVitals();
