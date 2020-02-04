import React from 'react';
import Entry from '../atoms/Entry';

/**
 *
 * @param entries
 * @returns {*}
 * @constructor
 */
const Entries = ({entries}) => (
    <ul>
        {entries.map(Entry)}
    </ul>
);

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 04.02.2020
 * Time: 22:09
 */
export default Entries;