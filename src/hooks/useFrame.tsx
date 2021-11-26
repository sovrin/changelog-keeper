import React from 'react';
import {useBackend} from './index';

/**
 *
 */
const useFrame = () => {
    const {minimize, maximize, close, develop} = useBackend();

    return {
        close,
        maximize,
        minimize,
        develop,
    };
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 03.07.2021
 * Time: 15:21
 */
export default useFrame;
