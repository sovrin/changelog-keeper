import {useContext} from 'react';
import {Context as Backend} from '#/contexts/Backend';

/**
 *
 */
const useBackend = () => {
    return useContext(Backend);
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 17.11.2019
 * Time: 18:47
 */
export default useBackend;
