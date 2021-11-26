import React from 'react';
import {Button, Icon} from '@thomann/spectre-react-components';
import {useModal} from '@thomann/spectre-react-components/hooks';
import {Eval} from 'components';
import Entries from '../Entries';
import {useInterpreter} from 'hooks';
import useChangelog from 'scenes/Changelog/hooks/useChangelog';
import Create from 'scenes/Changelog/components/modals/change/Create';
import {Action} from 'scenes/Changelog/reducers/changelog';
import style from './module.less';

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
        <div className={style.change}>
            <Eval test={!isLocked}>
                <Button
                    className={style.add}
                    onClick={addChange}
                    size={Button.Size.SMALL}
                    action
                >
                    <Icon type={Icon.Type.PLUS}/>
                </Button>
            </Eval>
            {type}
            <Entries
                entries={entries}
                path={path}
            />
        </div>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 23.09.2019
 * Time: 22:43
 */
export default Change;
