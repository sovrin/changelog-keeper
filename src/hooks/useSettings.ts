import {useContext} from 'react';
import {Context} from '#/contexts/Settings';
import {Action} from '#/reducers/settings';
import {Settings} from '#/types/contexts/Settings';

/**
 *
 */
const useSettings = () => {
    const {dispatch, state} = useContext(Context) as Settings;

    return {
        Action,
        dispatch,
        ...state,
    };
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 03.07.2021
 * Time: 14:32
 */
export default useSettings;
