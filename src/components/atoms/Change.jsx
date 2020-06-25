import React from 'react';
import {Button, Icon} from '@thomann/spectre-react-components';
import Entries from 'components/molecules/Entries';
import Eval from './Eval';
import {Action} from 'reducers/changelog';
import Root, {Add} from 'styles/atoms/Change.style';
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

    const onAdd = () => {
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
            <Eval test={!isLocked}>
                <Add
                    onClick={onAdd}
                    size={Button.Size.SMALL}
                    action
                >
                    <Icon type={Icon.Type.PLUS}/>
                </Add>
            </Eval>
            {type}
            <Entries
                entries={entries}
                path={path}
            />
            {children}
        </Root>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 23.09.2019
 * Time: 22:43
 */
export default Change;