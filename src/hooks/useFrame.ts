import {useContext} from 'react';
import {Context as Frame} from '#/contexts/Frame';

/**
 *
 */
const useFrame = () => {
    return useContext(Frame);
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 02.02.23
 * Time: 22:27
 */
export default useFrame;
