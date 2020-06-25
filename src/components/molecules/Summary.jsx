import React from 'react';
import Type from 'components/atoms/Type';
import Root from 'styles/molecules/Summary.style';

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
            <Type
                key={type}
                count={entries.length}
                compact
            >
                {type}
            </Type>
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