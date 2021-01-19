import React from 'react';
import {Container} from '@thomann/spectre-react-components';
import Root from './Header.style';

/**
 *
 * @returns {*}
 * @constructor
 */
const Header = ({children}) => (
    <Root>
        <Container size={Container.Size.LARGE}>
            {children}
        </Container>
    </Root>
);

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 15.11.2019
 * Time: 20:57
 */
export default Header;