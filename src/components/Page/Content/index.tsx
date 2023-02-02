import React from 'react';
import Container from '@thomann/spectre-react-components/Container';
import {Content as Element} from '@thomann/spectre-react-components/OffCanvas';
import style from './module.less';

/**
 *
 * @returns {*}
 * @constructor
 */
const Content = ({children = null}) => (
    <Element className={style.content}>
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
