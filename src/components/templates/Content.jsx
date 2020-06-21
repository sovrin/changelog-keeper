import React from 'react';
import Container from '@thomann/spectre-react-components/Container';
import Root from 'styles/templates/Content.style';

/**
 *
 * @returns {*}
 * @constructor
 */
const Content = ({children}) => (
    <Root>
        <Container size={Container.Size.MEDIUM}>
            {children}
        </Container>
    </Root>
);

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 16.11.2019
 * Time: 00:32
 */
export default Content;