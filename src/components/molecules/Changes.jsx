import React from 'react';
import {Change as Entry} from 'keep-a-changelog';
import Change from 'components/atoms/Change';
import {Action} from 'reducers/changelog';
import useChangelog from 'hooks/useChangelog';
import usePath from 'hooks/usePath';

/**
 *
 * @param children
 * @returns {*}
 * @constructor
 */
const Changes = ({changes, path}) => {
    const children = [];
    const {dispatch} = useChangelog();

    const addChange = () => {

    };

    const removeChange = () => {

    };

    for (const [type, entries] of changes) {
        if (!entries.length) {
            continue;
        }

        const context = usePath('changes', type, path);

        const build = (
            <Change
                key={type}
                type={type}
                entries={entries}
                path={context}
            />
        );

        children.push(build);
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