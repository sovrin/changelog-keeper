import React, {useContext} from 'react';
import {Button} from 'spectre-react-components';
import {Context} from './Changelog';

/**
 *
 * @param children
 * @returns {*}
 * @constructor
 */
const Title = ({children}) => {
    const {updater} = useContext(Context);
    const {update} = updater('title');

    return (
        <h1 className="title">
            <Button onClick={() => update('NEW TITLE')}>update</Button>
            {children}
        </h1>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 23.09.2019
 * Time: 22:40
 */
export default Title;