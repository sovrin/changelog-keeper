import React from 'react';
import Menu from '@thomann/spectre-react-components/Menu';
import Changes from 'components/molecules/Changes';
import Timestamp from './Timestamp';
import Version from './Version';

/**
 *
 * @param children
 * @param key
 * @param changes
 * @param version
 * @param date
 * @returns {*}
 * @constructor
 */
const Release = ({children, changes, version, date}) => {
    const {raw} = version;

    return (
        <Menu
            key={raw}
            className="release"
        >
            <h2>
                <Version>{raw}</Version> - <Timestamp date={date}/>
            </h2>
            {children}
            <Changes changes={changes}/>
        </Menu>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 23.09.2019
 * Time: 22:42
 */
export default Release;