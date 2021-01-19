import React from 'react';
import {Button, Icon} from '@thomann/spectre-react-components';
import {useModal} from '@thomann/spectre-react-components/hooks';
import Entries from './Entries';
import Eval from '~/components/Eval';
import useInterpreter from '~/hooks/useInterpreter';
import useChangelog from '~/scenes/Changelog/hooks/useChangelog';
import Create from '~/scenes/Changelog/components/modals/change/Create';
import {Action} from '~/scenes/Changelog/reducers/changelog';
import Root, {Add} from './Change.style';

/**
 *
 * @param children
 * @param type
 * @param entries
 * @param path
 * @returns {*}
 * @constructor
 */
const Change = ({type, entries, path}) => {
    const {dispatch} = useChangelog();
    const {isLocked} = useInterpreter(path);
    const [showModal] = useModal.default(Create);

    /**
     *
     */
    const addChange = () => {
        /**
         *
         * @returns {boolean}
         * @param title
         * @param description
         */
        const onCreate = (title, description) => {
            const value = {
                title,
                description,
            };

            dispatch({action: Action.ADD_CHANGE, value});

            return true;
        };

        showModal({onCreate});
    };


    const removeEntry = () => {

    };

    return (
        <Root>
            <Eval test={!isLocked}>
                <Add
                    onClick={addChange}
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
        </Root>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 23.09.2019
 * Time: 22:43
 */
export default Change;