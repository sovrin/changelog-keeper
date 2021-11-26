import React from 'react';
import {Overlay as Element} from '@thomann/spectre-react-components/OffCanvas';
import style from './module.less';

/**
 *
 * @returns {*}
 * @constructor
 */
const Overlay = () => (
    <Element
        href="#close"
        className={style.overlay}
    />
);

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 16.11.2019
 * Time: 00:33
 */
export default Overlay;
