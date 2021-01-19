import React from 'react';
import styled from 'styled-components';
import Button from '@thomann/spectre-react-components/Button';
import {useUtility} from '@thomann/spectre-react-components/hooks';
import {Breakpoint} from '~/hooks/useTheme';

const {Display, default: utility} = useUtility;

const Element = styled('div')`
    position: absolute;
    right: var(--unit-7);
    top: var(--unit-5);
    
    @media (max-width: ${Breakpoint.SM}) {
        right: var(--unit-4)
    }
`;

/**
 *
 * @returns {*}
 * @constructor
 */
const Controls = () => {
    const style = utility(Display.FLEX);

    return (
        <Element {...style}>
            <Button>
                Save
            </Button>
        </Element>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 15.11.2019
 * Time: 23:10
 */
export default Controls;