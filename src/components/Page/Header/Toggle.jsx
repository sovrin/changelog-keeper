import React from 'react';
import {Toggle as Target} from '@thomann/spectre-react-components/OffCanvas';
import {Icon} from '@thomann/spectre-react-components';
import styled from 'styled-components';
import {BREAKPOINT_960, UNIT_5, UNIT_7} from '../../../style';
import usePage from '../../../hooks/usePage';

const Element = styled(Target)`
    font-size: ${UNIT_5};
    left: ${UNIT_7} !important;
    position: fixed !important;
    top: ${UNIT_5} !important;
    
    @media (max-width: ${BREAKPOINT_960}) {
        z-index: 300
    }
`;

/**
 *
 * @returns {*}
 * @constructor
 */
const Toggle = () => {
    const {id} = usePage();
    const href = `#${id}`;

    return (
        <Element
            primary
            action
            href={href}
        >
            <Icon type={Icon.Type.MENU}/>
        </Element>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 15.11.2019
 * Time: 22:52
 */
export default Toggle;