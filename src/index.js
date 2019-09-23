import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import Backend from './components/Backend';

render(
    <Backend>
        <App/>
    </Backend>,
    document.getElementById('root'),
);