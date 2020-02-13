import React from 'react';
import {Sidebar as Target} from '@thomann/spectre-react-components/OffCanvas';
import styled from 'styled-components';
import usePage from '../../hooks/usePage';

const Element = styled(Target)`
     width: 12rem
`;

/**
 *
 * @param children
 * @returns {*}
 * @constructor
 */
const Sidebar = ({children}) => {
    const {id} = usePage();

    return (
        <Element id={id}>
            {children}
        </Element>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 16.11.2019
 * Time: 00:24
 */
export default Sidebar;