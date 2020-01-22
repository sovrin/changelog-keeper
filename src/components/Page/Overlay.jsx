import React from 'react';
import {Overlay as Target} from '@thomann/spectre-react-components/OffCanvas';
import styled from 'styled-components';

const Element = styled(Target)`
    backdrop-filter: blur(5px);
    transition: all 5s ease ;
`;

/**
 *
 * @returns {*}
 * @constructor
 */
const Overlay = () => (
    <Element href='#close'/>
);

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 16.11.2019
 * Time: 00:33
 */
export default Overlay;