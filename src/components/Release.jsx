import React from 'react';
import Changes from './Changes';
import Date from './Date';
import Version from './Version';

/**
 *
 * @param children
 * @returns {*}
 * @constructor
 */
const Release = ({children, key, changes, version, date}) => {
    const {raw} = version;

    return (
        <div
            key={version}
            className="release"
        >
            <h2 className="">
                <Version>{raw}</Version> - <Date date={date}/>
            </h2>
            {children}
            <Changes changes={changes}/>
        </div>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 23.09.2019
 * Time: 22:42
 */
export default Release;