import React from 'react';
import Blockquote from '@thomann/spectre-react-components/Blockquote';
import styled from 'styled-components';

const Element = styled(Blockquote)`
    color: var(--black-l);
    font-style: italic;
`;

/**
 *
 * @param children
 * @returns {*}
 * @constructor
 */
const Hint = ({children}) => (
    <Element>
        {children}
    </Element>
);

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 21.06.2020
 * Time: 16:26
 */
export default Hint;