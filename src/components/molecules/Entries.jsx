import React from 'react';
import Entry from 'components/atoms/Entry';
import usePath from 'hooks/usePath';

/**
 *
 * @param entries
 * @param path
 * @returns {*}
 * @constructor
 */
const Entries = ({entries, path}) => {

    /**
     *
     * @param entry
     * @param i
     * @returns {*}
     */
    const build = (entry, i) => {
        const context = usePath('entry', i, path);

        return (
            <Entry
                key={context}
                path={context}
                {...entry}
            />
        );
    }

    const children = entries.map(build);

    return (
        <ul>
            {children}
        </ul>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 04.02.2020
 * Time: 22:09
 */
export default Entries;