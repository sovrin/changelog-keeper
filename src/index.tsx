import React from 'react';
import ReactDOM from 'react-dom';
import App from '~/components/App';
import {backend} from './backend';

backend.initialize();

const node = document.getElementById('root');

ReactDOM.render(<App/>, node);