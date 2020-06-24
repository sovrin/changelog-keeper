import React from 'react';
import {Icon, Button} from '@thomann/spectre-react-components';
import Changes from 'components/molecules/Changes';
import Timestamp from './Timestamp';
import Eval from './Eval';
import Version from './Version';
import Root, {Delete} from 'styles/atoms/Release.style';
import useInterpreter from 'hooks/useInterpreter';
import usePath from 'hooks/usePath';
import useFolder from 'hooks/useFoldable';
import useChangelog, {Action} from 'hooks/useChangelog';

/**
 *
 * @param children
 * @param changes
 * @param version
 * @param date
 * @param index
 * @returns {*}
 * @constructor
 */
const Release = ({changes, version, date, index}) => {
    const {raw} = version;
    const path = usePath('releases', index);
    const {isLocked, isHead} = useInterpreter(path);
    const {onFold, Folder} = useFolder(isHead);
    const {dispatch} = useChangelog();

    /**
     *
     */
    const onDelete = () => {
        dispatch({action: Action.DELETE_RELEASE, path});
    };

    return (
        <Root>
            <Eval test={!isLocked}>
                <Delete
                    onClick={onDelete}
                    size={Button.Size.SMALL}
                    action
                >
                    <Icon type={Icon.Type.DELETE}/>
                </Delete>
            </Eval>

            <h2 onClick={onFold}>
                <a>
                    <Version>{raw}</Version> - <Timestamp date={date}/>
                </a>
            </h2>

            <Folder>
                <Changes
                    changes={changes}
                    path={path}
                />
            </Folder>
        </Root>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 23.09.2019
 * Time: 22:42
 */
export default Release;