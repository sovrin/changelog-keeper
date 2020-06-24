import styled from 'styled-components';
import {Button} from '@thomann/spectre-react-components';

/**
 *
 */
export const Toggle = styled(Button)`
    flex-shrink: 0;
    margin-bottom: var(--spacing-sm);
    margin-left: var(--spacing-sm);
    opacity: 0;
    filter: grayscale(1);
    cursor: pointer;
    transition: opacity .2s;
`;

/**
 *
 */
const Root = styled('div')`
    display: flex;
    justify-content: space-between;
    width: 100%;
    
    ${({active}) => active && `
        border-radius: var(--border-radius);
        
         ${Toggle} {
            opacity: 0.5;
        }
    `}
    
     &:hover {
        ${Toggle} {
            opacity: 0.5;
        }
    };
`;

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 24.06.2020
 * Time: 20:10
 */
export default Root;