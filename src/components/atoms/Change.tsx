import React from 'react';
import {Button, Icon} from '@thomann/spectre-react-components';
import {useModal} from '@thomann/spectre-react-components/hooks';
import Entries from '~/components/molecules/Entries';
import Create from '~/components/organisms/modals/change/Create';
import Eval from './Eval';
import {Action} from '~/reducers/changelog';
import Root, {Add} from '~/styles/atoms/Change.style';
import useChangelog from '~/hooks/useChangelog';
import useInterpreter from '~/hooks/useInterpreter';

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