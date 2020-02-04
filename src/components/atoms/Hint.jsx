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

export default Hint;