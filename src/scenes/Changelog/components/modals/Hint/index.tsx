import React from 'react';
import {Blockquote} from '@thomann/spectre-react-components';
import style from './module.less';

/**
 *
 * @param children
 * @returns {*}
 * @constructor
 */
const Hint = ({children}) => (
    <Blockquote className={style.hint}>
        {children}
    </Blockquote>
);

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 21.06.2020
 * Time: 16:26
 */
export default Hint;
