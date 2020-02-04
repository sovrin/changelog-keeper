import React from 'react';
import useI18n from '../../hooks/useI18n';

/**
 *
 * @returns {*}
 * @constructor
 */
const Snippet = ({cursor, parameter}) => {
    const {resolve} = useI18n();

    return resolve(cursor, parameter);
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 04.02.2020
 * Time: 20:29
 */
export default Snippet;