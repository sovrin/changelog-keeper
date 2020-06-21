import React from 'react';
import {Change as Entry} from 'keep-a-changelog';
import Change from 'components/atoms/Change';
import {Action} from 'reducers/changelog';
import useChangelog from 'hooks/useChangelog';

/**
 *
 * @param children
 * @returns {*}
 * @constructor
 */
const Changes = ({changes}) => {
    const children = [];
    const {dispatch} = useChangelog();

    const addChange = () => {
        const entry = new Entry('2.0.0', new Date() , 'foobar');

        dispatch({type: Action.ADD_RELEASE, value: entry});
    };

    const removeChange = () => {

    };

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