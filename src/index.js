import React from 'react';
import {render} from 'react-dom';
import Modals from '@thomann/spectre-react-components/Modals';
import App from './components/App';
import Backend from './contexts/Backend';
import I18n from './contexts/I18n';

render(
    <Backend>
        <I18n lang={'english'}>
            <Modals>
                <App/>
            </Modals>
        </I18n>
    </Backend>,
    document.getElementById('root'),
);