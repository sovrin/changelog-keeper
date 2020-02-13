import React from 'react';
import {Content as Target} from '@thomann/spectre-react-components/OffCanvas';
import Container from '@thomann/spectre-react-components/Container';
import styled from 'styled-components';
import {Breakpoint} from '../../hooks/useTheme';
import Header from './Header';

const Element = styled(Target)`
    flex: 1 1 auto;
    padding: 0 !important;
    
    
     ${Header} & {
        @media (max-width: ${Breakpoint.MD}) {
            width: 100%;
            margin-top: calc(var(--unit-10) * 2);
        }
   }
`;

/**
 *
 * @returns {*}
 * @constructor
 */
const Content = ({children}) => (
    <Element>
        <Container size={Container.Size.MEDIUM}>
            {children}
        </Container>
    </Element>
);

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 16.11.2019
 * Time: 00:32
 */
export default Content;