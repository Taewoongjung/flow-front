import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import App from './layouts/App';

ReactDOM.render(
    <HashRouter basename={"https://taewoongjung.github.io/flow-front/"}>
        <App />
    </HashRouter>,
    document.getElementById('root')
);
