import React from 'react';
import styled from 'styled-components';

const Element = styled('div')`
    color: #5755d9;
    height: 2rem;
    left: 1.5rem;
    position: fixed;
    top: .85rem;
`;

/**
 *
 * @returns {*}
 * @constructor
 */
const Brand = () => (
    <Element>
        Changelog Helper
    </Element>
);

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 16.11.2019
 * Time: 00:30
 */
export default Brand;