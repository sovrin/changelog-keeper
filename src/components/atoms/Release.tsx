import React from 'react';
import {Icon, Button} from '@thomann/spectre-react-components';
import Changes from '~/components/molecules/Changes';
import Eval from './Eval';
import Root, {Delete, Header, Version, Timestamp} from '~/styles/atoms/Release.style';
import useInterpreter from '~/hooks/useInterpreter';
import usePath from '~/hooks/usePath';
import useFolder from '~/hooks/useFoldable';
import useChangelog, {Action} from '~/hooks/useChangelog';
import Summary from '../molecules/Summary';

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