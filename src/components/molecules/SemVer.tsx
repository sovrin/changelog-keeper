import React from 'react';
import Version from '~/components/atoms/Version';
import Root from '~/styles/molecules/SemVer.style';

/**
 *
 * @param current
 * @param next
 * @returns {*}
 * @constructor
 */
const SemVer = ({current, next, type}) => (
    <Root>
        <Version>{current}</Version> &rarr; <Version>{next}</Version>
    </Root>
);

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 04.02.2020
 * Time: 21:40
 */
export default SemVer;