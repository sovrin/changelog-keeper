import React from 'react';
import {useClassName} from '@thomann/spectre-react-components/hooks';
import style from './module.less';

/**
 *
 * @param open
 * @param children
 * @constructor
 */
const Folder = ({open, children}) => {
    const className = useClassName(style.folder, {
        [style.open]: open,
    });

    return (
        <div className={className}>
            {children}
        </div>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 01.07.2021
 * Time: 23:13
 */
export default Folder;
