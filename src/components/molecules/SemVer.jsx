import React from 'react';
import Version from '../atoms/Version';
import styled from 'styled-components';

const Element = styled('h1')`
    margin: 0;
`;

/**
 *
 * @param current
 * @param next
 * @returns {*}
 * @constructor
 */
const SemVer = ({current, next}) => (
    <Element>
        <Version>{current}</Version> &rarr; <Version>{next}</Version>
    </Element>
);

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 04.02.2020
 * Time: 21:40
 */
export default SemVer;