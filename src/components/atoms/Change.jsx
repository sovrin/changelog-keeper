import React from 'react';
import {Button} from '@thomann/spectre-react-components';
import Entries from 'components/molecules/Entries';
import Eval from './Eval';
import {Action} from 'reducers/changelog';
import Root from 'styles/atoms/Change.style';
import useChangelog from 'hooks/useChangelog';
import useInterpreter from 'hooks/useInterpreter';

/**
 *
 * @param children
 * @param type
 * @param entries
 * @param path
 * @returns {*}
 * @constructor
 */
const Change = ({children, type, entries, path}) => {
    const {dispatch} = useChangelog();
    const {isLocked} = useInterpreter(path);

    const addEntry = () => {
        dispatch({
            action: Action.ADD_ENTRY,
            value: 'YEET',
            path
        });
    };

    const removeEntry = () => {

    };

    return (
        <Root>
            <h3>{type}</h3>
            <Entries
                entries={entries}
                path={path}
            />
            {children}

            <Eval test={!isLocked}>
                <Button onClick={addEntry}>new entry</Button>
            </Eval>
        </Root>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 23.09.2019
 * Time: 22:43
 */
export default Change;