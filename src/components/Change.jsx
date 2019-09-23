import React, {useContext} from 'react';
import {Button} from 'spectre-react-components';
import {Context} from './Changelog';

/**
 *
 * @param children
 * @returns {*}
 * @constructor
 */
const Change = ({children, type, entries}) => {
    const {changelog} = useContext(Context);

    return (
        <div className="change">
            <h3>{type}</h3>
            <ul>
                <Button onClick={() => alert('asd')}>new entry</Button>
                {entries.map(Entry)}
            </ul>
            {children}
        </div>
    );
};

/**
 *
 * @param title
 * @returns {*}
 * @constructor
 */
const Entry = ({title}) => {
    return (
        <li key={title}>{title}</li>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 23.09.2019
 * Time: 22:43
 */
export default Change;