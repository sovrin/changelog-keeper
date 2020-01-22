import React, {useContext} from 'react';
import {Context} from '../contexts/Changelog';

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 21.11.2019
 * Time: 20:35
 */
export default () => {
    const {changelog, dispatch} = useContext(Context);

    return {
        changelog,
        dispatch,
    };
}