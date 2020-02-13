import React from 'react';
import styled from 'styled-components';
import Editable from './Editable';

const Element = styled('li')`
    display: flex;
`;

/**
 *
 * @param title
 * @returns {*}
 * @constructor
 */
const Entry = ({title}) => {

    return (
        <Element key={title}>
            <Editable>
                {title}
            </Editable>
        </Element>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 29.01.2020
 * Time: 23:38
 */
export default Entry;