import React, {useContext} from 'react';
import {Context} from 'contexts/Changelog';

export {Action} from 'reducers/changelog';

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 21.11.2019
 * Time: 20:35
 */
export default () => {
    const {changelog, head, dispatch} = useContext(Context);

    return {
        changelog,
        head,
        dispatch,
    };
};