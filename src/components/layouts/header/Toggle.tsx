import React from 'react';
import {Toggle as Target} from '@thomann/spectre-react-components/OffCanvas';
import {Icon} from '@thomann/spectre-react-components';
import styled from 'styled-components';
import usePage from '~/hooks/usePage';
import {Breakpoint} from '~/hooks/useTheme';

const Element = styled(Target)`
    font-size: var(--unit-5);
    left: var(--unit-7) !important;
    position: fixed !important;
    top: var(--unit-5) !important;
    
    @media (max-width: ${Breakpoint.MD}) {
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