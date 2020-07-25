import React from'react';
import ReactDOM from'react-dom';
import App from'./App.js';
import { Provider } from 'react-redux';
import store from '../store';
import {Route, Router, browserHistory} from 'react-router';
import AppRoutes from '../src/routes';

ReactDOM.render(
<Provider store={store}>
    <AppRoutes />
</Provider>,
document.getElementById('app'));
