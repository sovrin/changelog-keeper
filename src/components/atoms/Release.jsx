import React from 'react';
import {Icon, Button} from '@thomann/spectre-react-components';
import Changes from 'components/molecules/Changes';
import usePath from 'hooks/usePath';
import Timestamp from './Timestamp';
import Version from './Version';
import Root, {Delete} from 'styles/atoms/Release.style';
import useInterpreter from '../../hooks/useInterpreter';
import Eval from './Eval';

/**
 *
 * @param children
 * @param key
 * @param changes
 * @param version
 * @param date
 * @param i
 * @returns {*}
 * @constructor
 */
const Release = ({children, changes, version, date}, i) => {
    const {raw} = version;
    const path = usePath('releases', i);
    const {isLocked} = useInterpreter(path);

    return (
        <Root key={raw}>
            <Eval test={!isLocked}>
                <Delete
                    // onClick={onClick}
                    size={Button.Size.SMALL}
                    action
                >
                    <Icon type={Icon.Type.DELETE}/>
                </Delete>
            </Eval>
            <h2>
                <Version>{raw}</Version> - <Timestamp date={date}/>
            </h2>
            {children}
            <Changes
                changes={changes}
                path={path}
            />
        </Root>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 23.09.2019
 * Time: 22:42
 */
export default Release;