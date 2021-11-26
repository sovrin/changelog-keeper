import React from 'react';
import {hot} from 'react-hot-loader/root';
import Modals from '@thomann/spectre-react-components/Modals';
import {Backend, I18n, Router, Settings} from 'contexts';
import {Frame} from './';
import routes from '../routes';
import 'styles/global.css';

const {version, name} = require('../../package.json');

/**
 *
 * @returns {*}
 * @constructor
 */
const App = () => ((
    <Settings
        version={version}
        name={name}
    >
        {({language}) => (
            <Backend>
                <Frame>
                    <I18n lang={language}>
                        <Modals>
                            <Router routes={routes}/>
                        </Modals>
                    </I18n>
                </Frame>
            </Backend>
        )}
    </Settings>
));

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 23.09.2019
 * Time: 21:47
 */
export default hot(App);
