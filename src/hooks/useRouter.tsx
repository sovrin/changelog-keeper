import {useContext} from 'react';
import {Context} from 'contexts/Router';

/**
 *
 */
const useRouter = () => {
    return useContext(Context);
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 23.01.2021
 * Time: 22:38
 */
export default useRouter;
