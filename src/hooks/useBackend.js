import React, {useContext, useEffect, useState} from 'react';
import {Context as Backend} from '../components/Backend';

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 17.11.2019
 * Time: 18:47
 */
export default () => {
    const [source, setSource] = useState(null);
    const {readLog} = useContext(Backend);

    useEffect(() => {
        readLog().then(setSource);
    }, []);

    return {
        source,
    };
}