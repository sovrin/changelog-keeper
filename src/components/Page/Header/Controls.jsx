import React from 'react';
import styled from 'styled-components';
import {BREAKPOINT_600, UNIT_4, UNIT_5, UNIT_7} from '../../../style';
import Button from '@thomann/spectre-react-components/Button';
import {useUtility} from '@thomann/spectre-react-components/hooks';
const {Display, default: fn} = useUtility;

const Element = styled('div')`
    position: absolute;
    right: ${UNIT_7};
    top: ${UNIT_5};
    
    @media (max-width: ${BREAKPOINT_600}) {
        right: ${UNIT_4}
    }
`;

/**
 *
 * @returns {*}
 * @constructor
 */
const Controls = () => {
    const style = fn(Display.FLEX);

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