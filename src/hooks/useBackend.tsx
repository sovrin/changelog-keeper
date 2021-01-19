import React, {useContext} from 'react';
import {Context as Backend} from '~/contexts/Backend';

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 17.11.2019
 * Time: 18:47
 */
export default () => {
    const {backend} = useContext(Backend);

    /**
     *
     * @param path
     */
    const read = (path) => {
        path = 'C:/dev/projects/tcl/' + path;

        return backend.read(path);
    };

    return {
        read,
    };
}