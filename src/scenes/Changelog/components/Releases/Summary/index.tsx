import React from 'react';
import Type from './Type';
import style from './module.less';

/**
 *
 * @param changes
 * @returns {*}
 * @constructor
 */
const Summary = ({changes}) => {
    const children = [];

    for (const [type, entries] of changes) {
        if (!entries.length) {
            continue;
        }

        children.push(
            <Type
                className={style.type}
                key={type}
                count={entries.length}
                compact
            >
                {type}
            </Type>,
        );
    }

    return (
        <div className={style.summary}>
            {children}
        </div>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 25.06.2020
 * Time: 22:28
 */
export default Summary;
