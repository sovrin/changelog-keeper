import styled from 'styled-components';
import {Button} from '@thomann/spectre-react-components';

/**
 *
 */
export const Wrapper = styled('span')`

`;

/**
 *
 */
export const Toggle = styled(Button)`
    flex-shrink: 0;
    //margin-bottom: var(--spacing-sm);
    //margin-left: var(--spacing-sm);
    opacity: 0;
    filter: grayscale(1);
    cursor: pointer;
    transition: opacity .2s;
    box-shadow: none !important;
`;

/**
 *
 */
const Root = styled('div')`
    display: flex;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    border-radius: var(--border-radius);
    transition: background .2s;

    ${({active}) => active && `
        background: rgba(0, 0, 0, 0.05);
        border: var(--border-width) solid rgba(0, 0, 0, 0.05); 

        ${Toggle} {
            opacity: 0.5;
        }
    `}

    &:hover {
        ${Toggle} {
            opacity: 0.5;
        }
    }
`;

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 24.06.2020
 * Time: 20:10
 */
export default Root;