import React from 'react';
import {Container} from '@thomann/spectre-react-components';
import style from './module.less';

/**
 *
 * @param children
 * @constructor
 */
const Header = ({children}) => (
    <div className={style.header}>
        <Container size={Container.Size.LARGE}>
            {children}
        </Container>
    </div>
);

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 15.11.2019
 * Time: 20:57
 */
export default Header;
