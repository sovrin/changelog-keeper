import styled from 'styled-components';
import {Content} from '@thomann/spectre-react-components/OffCanvas';
import {Breakpoint} from '~/hooks/useTheme';

/**
 *
 */
const Root = styled(Content)`
    flex: 1 1 auto;
    padding: 0 !important;
    
    @media (max-width: ${Breakpoint.MD}) {
        width: 100%;
    }
`;

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 21.06.2020
 * Time: 19:47
 */
export default Root;