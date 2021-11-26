import React, {useContext} from 'react';
import {Context} from '../contexts/Changelog';
import {Action} from '../reducers/changelog';

/**
 *
 */
const useChangelog = () => {
    const {changelog, head, dispatch} = useContext(Context);

    return {
        Action,
        changelog,
        head,
        dispatch,
    };
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 21.11.2019
 * Time: 20:35
 */
export default useChangelog;
