import styled from 'styled-components';
import Type from 'styles/atoms/Type.style';

/**
 *
 */
const Root = styled('div')`
    display: flex;
    align-items: center;
    font-size: x-small;
    
    > ${Type} {
        margin-right: var(--spacing-sm);
    }
`;

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 25.06.2020
 * Time: 22:42
 */
export default Root;