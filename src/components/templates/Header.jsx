import React from 'react';
import styled from 'styled-components';
import {Breakpoint} from '../../hooks/useTheme';

const Element = styled('div')`
    height: calc(var(--unit-9) + 2rem);
    position: fixed;
    right: 0;
    top: 0;
    z-index: 100;
    
  
`;

/**
 *
 * @returns {*}
 * @constructor
 */
const Header = ({children}) => (
    <Element>
        {children}
    </Element>
);

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 15.11.2019
 * Time: 20:57
 */
export default Header;