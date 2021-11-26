import React, {useState} from 'react';
import {Icon, Button} from '@thomann/spectre-react-components';
import {Menu} from '@thomann/spectre-react-components';
import {Eval, Folder} from 'components';
import Changes from 'scenes/Changelog/components/Releases/Changes';
import Timestamp from 'scenes/Changelog/components/Releases/Timestamp';
import {Version} from 'scenes/Changelog/components';
import {useChangelog} from 'scenes/Changelog/hooks';
import {useInterpreter, usePath, useFolder} from 'hooks';
import Summary from '../Summary';
import style from './module.less';

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
    const [isFolded, setFold] = useState(isHead);
    // const {onFold, Folder} = useFolder(isHead);
    const {dispatch, Action} = useChangelog();

    /**
     *
     */
    const onDelete = () => {
        dispatch({action: Action.DELETE_RELEASE, path});
    };

    return (
        <Menu className={style.release}>
            <Eval test={!isLocked}>
                <Button
                    className={style.delete}
                    onClick={onDelete}
                    size={Button.Size.SMALL}
                    action
                >
                    <Icon type={Icon.Type.DELETE}/>
                </Button>
            </Eval>

            <div
                className={style.header}
                onClick={() => setFold(!isFolded)}
            >
                <Version className={style.version}>
                    {raw}
                </Version>
                <span> - </span>
                <Timestamp
                    className={style.timestamp}
                    date={date}
                />
                <Summary changes={changes}/>
            </div>

            <Folder open={isFolded}>
                <Changes
                    changes={changes}
                    path={path}
                />
            </Folder>
        </Menu>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 23.09.2019
 * Time: 22:42
 */
export default Release;
