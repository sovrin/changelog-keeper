import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App.jsx';
import backend from './backend';

backend.initialize();

ReactDOM.render(<App/>, document.getElementById('root'));