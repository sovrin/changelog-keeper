import React, {useContext, useEffect, useState} from 'react';
import {Context as Backend} from '../contexts/Backend';

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 17.11.2019
 * Time: 18:47
 */
export default () => {
    const [source, setSource] = useState(null);
    const {read} = useContext(Backend);

    useEffect(() => {
        read('CHANGELOG.md')
            .then(setSource)
        ;
    }, []);

    return {
        source,
    };
}