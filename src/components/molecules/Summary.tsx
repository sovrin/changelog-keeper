import React from 'react';
import ChangeType from '~/components/atoms/ChangeType';
import Root from '~/styles/molecules/Summary.style';

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

        const build = (
            <ChangeType
                key={type}
                count={entries.length}
                compact
            >
                {type}
            </ChangeType>
        );

        children.push(build);
    }

    return (
        <Root>
            {children}
        </Root>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 25.06.2020
 * Time: 22:28
 */
export default Summary;