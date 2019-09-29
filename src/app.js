import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import "./index.css";
import { Provider } from 'react-redux';
import store from './store';
import {
    OPTION_SUBMITE,
    ADD_CATEGORY,
    REMOVE_CATEGORY,
    RANDOM_CHECK,
    NEW_CHECK,
    WRONGS_CHECK,
    EMPTYS_CHECK,
    LENGTH_UPDATE,
} from './actions'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("pekorkort"));