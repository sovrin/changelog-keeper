import React from 'react';
import styled from 'styled-components';
import {add, BREAKPOINT_960, UNIT_9} from '../../style';
import Toggle from './Header/Toggle';
import Controls from './Header/Controls';

const Element = styled('div')`
    height: ${add(UNIT_9, 2)};
    position: fixed;
    right: 0;
    top: 0;
    z-index: 100;
    
    @media (max-width: ${BREAKPOINT_960}) {
        backdrop-filter: blur(5px);
        background: rgba(246, 247, 248, 0.65);
        left: 0
    }
`;

/**
 *
 * @returns {*}
 * @constructor
 */
const Header = ({children}) => (
    <Element>
        <Toggle/>
        {children}
        <Controls/>
    </Element>
);

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 15.11.2019
 * Time: 20:57
 */
export default Header;