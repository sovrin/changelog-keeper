import styled from 'styled-components';
import {Overlay} from '@thomann/spectre-react-components/OffCanvas';

/**
 *
 */
const Root = styled(Overlay)`
    backdrop-filter: blur(5px);
    transition: all 5s ease ;
`;

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 21.06.2020
 * Time: 19:49
 */
export default Root;