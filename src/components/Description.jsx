import React, {useContext} from 'react';
import {Button} from 'spectre-react-components';
import {Context} from './Changelog';

/**
 *
 * @param children
 * @returns {*}
 * @constructor
 */
const Description = ({children}) => {
    const {updater, stringify} = useContext(Context);
    const {update} = updater('description');

    return (
        <p className="description">
            <Button onClick={() => update('new desc')}>update</Button>
            <Button onClick={() => stringify()}>string</Button>
            {children}
        </p>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 23.09.2019
 * Time: 22:34
 */
export default Description;