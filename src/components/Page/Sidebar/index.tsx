import React from 'react';
import {Sidebar as Element} from '@thomann/spectre-react-components/OffCanvas';
import {usePage} from 'hooks';
import style from './module.less';

/**
 *
 * @param children
 * @returns {*}
 * @constructor
 */
const Sidebar = ({children}) => {
    const {id} = usePage();

    return (
        <Element
            id={id}
            className={style.sidebar}
        >
            {children}
        </Element>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 16.11.2019
 * Time: 00:24
 */
export default Sidebar;
