import React from 'react';
import {Content as Target} from '@thomann/spectre-react-components/OffCanvas';
import Container from '@thomann/spectre-react-components/Container';
import styled from 'styled-components';
import {mul, BREAKPOINT_960, UNIT_10} from '../../style';

const Element = styled(Target)`
    flex: 1 1 auto;
    padding: 0 !important;
    
    @media (max-width: ${BREAKPOINT_960}) {
        width: 100%;
        margin-top: ${mul(UNIT_10, 2)};
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