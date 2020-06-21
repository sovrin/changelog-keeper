import React from 'react';
import styled from 'styled-components';
import Container from '@thomann/spectre-react-components/Container';
import {Breakpoint} from 'hooks/useTheme';

const Element = styled('div')`
    height: calc(var(--unit-9) + 2rem);
    position: fixed;
    right: 0;
    top: 0;
    z-index: 100;
    
    @media (max-width: ${Breakpoint.MD}) {
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
        <Container size={Container.Size.LARGE}>
            {children}
        </Container>
    </Element>
);

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 15.11.2019
 * Time: 20:57
 */
export default Header;