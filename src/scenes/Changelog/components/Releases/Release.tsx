import React from 'react';
import {Icon, Button} from '@thomann/spectre-react-components';
import Summary from './Summary';
import Eval from '~/components/Eval';
import useInterpreter from '~/hooks/useInterpreter';
import usePath from '~/hooks/usePath';
import useFolder from '~/hooks/useFoldable';
import Changes from '~/scenes/Changelog/components/Releases/Changes';
import useChangelog, {Action} from '~/scenes/Changelog/hooks/useChangelog';
import Root, {Delete, Header, Version, Timestamp} from './Release.style';

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

            <Header onClick={onFold}>
                <Version>{raw}</Version>
                <span> - </span>
                <Timestamp date={date}/>
                <Summary changes={changes}/>
            </Header>

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