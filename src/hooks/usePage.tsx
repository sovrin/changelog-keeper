import React, {useContext} from 'react';
import {Context} from '#/contexts/Page';

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 21.11.2019
 * Time: 23:51
 */
export default () => {
    const {
        id,
    } = useContext(Context);

    return {
        id,
    };
}
