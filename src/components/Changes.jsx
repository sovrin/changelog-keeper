import React from 'react';
import Change from './Change';

/**
 *
 * @param children
 * @returns {*}
 * @constructor
 */
const Changes = ({changes}) => {
    const children = [];

    for (const [type, entries] of changes) {
        if (!entries.length) {
            continue;
        }

        const change = (
            <Change
                key={type}
                type={type}
                entries={entries}
            />
        );

        children.push(change);
    }

    return (
        <div className="changes">
            {children}
        </div>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 23.09.2019
 * Time: 22:54
 */
export default Changes;