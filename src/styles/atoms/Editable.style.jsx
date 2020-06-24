import styled from 'styled-components';

/**
 *
 */
export const Content = styled('div')`
    padding: var(--spacing-sm);
`;

/**
 *
 */
const Root = styled('div')`
   padding: var(--spacing-sm);
   
   ${({active}) => active && `
        background: var(--grey);
        border-radius: var(--border-radius);
        outline: none;     
    `}
`;

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 24.06.2020
 * Time: 20:56
 */
export default Root;