import React from 'react';
import Toolbar from "./Toolbar";
import style from './module.less';

/**
 *
 * @constructor
 */
const Frame = ({children}) => {
    return (
        <div className={style.frame}>
            <Toolbar/>

            <div className={style.content}>
                {children}
            </div>
        </div>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 30.06.2021
 * Time: 23:55
 */
export default Frame;
