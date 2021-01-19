import React from 'react';
import {hot} from 'react-hot-loader/root';
import Modals from '@thomann/spectre-react-components/Modals';
import Router from '~/contexts/Router';
import I18n from '~/contexts/I18n';
import Backend, {isNeutralino} from '~/contexts/Backend';
import routes from '../routes';

import 'spectre.css';
import 'spectre.css/dist/spectre-icons.min.css';
import 'spectre.css/dist/spectre-exp.min.css';

/**
 *
 * @returns {*}
 * @constructor
 */
const App = () => {
    const prefix = (isNeutralino)
        ? '/changelog-keeper'
        : ''
    ;

    return (
        <Backend>
            <I18n lang={'english'}>
                <Modals>
                    <Router
                        routes={routes}
                        prefix={prefix}
                    />
                </Modals>
            </I18n>
        </Backend>
    );
}

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 23.09.2019
 * Time: 21:47
 */
export default hot(App);