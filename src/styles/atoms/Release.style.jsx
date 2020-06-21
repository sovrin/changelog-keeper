import styled from 'styled-components';
import {Button, Menu} from '@thomann/spectre-react-components';
import React from 'react';

/**
 *
 * @param onClick
 * @returns {*}
 * @constructor
 */
export const Delete = styled(Button)`
    float: right;
    opacity: 0;
    transition: opacity .2s;
`;

/**
 *
 */
const Root = styled(Menu)`
    margin-bottom: var(--spacing);

    &:hover {
        ${Delete} {
            opacity: 1;
        }
    };
`;

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 21.06.2020
 * Time: 18:58
 */
export default Root;