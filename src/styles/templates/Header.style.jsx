import styled from 'styled-components';
import {Breakpoint} from 'hooks/useTheme';

/**
 *
 */
const Root = styled('div')`
    height: calc(var(--unit-9) + 2rem);
    position: fixed;
    right: 0;
    top: 0;
    z-index: 100;
    
    @media (max-width: ${Breakpoint.MD}) {
        backdrop-filter: blur(5px);
        background: rgba(246, 247, 248, 0.65);
        left: 0
    }
`;

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 21.06.2020
 * Time: 19:48
 */
export default Root;