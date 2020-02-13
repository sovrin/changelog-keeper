import React from 'react';
import {Button} from '@thomann/spectre-react-components';
import useChangelog from '../../hooks/useChangelog';
import Entries from '../molecules/Entries';

/**
 *
 * @param children
 * @returns {*}
 * @constructor
 */
const Change = ({children, type, entries, edit}) => {
    const {dispatch} = useChangelog();

    const addEntry = () => {

    };

    const removeEntry = () => {

    };

    return (
        <div className="change">
            <h3>{type}</h3>
            <Entries entries={entries}/>
            {children}

            {(edit) && (
                <Button onClick={() => alert('asd')}>new entry</Button>
            )}
        </div>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 23.09.2019
 * Time: 22:43
 */
export default Change;