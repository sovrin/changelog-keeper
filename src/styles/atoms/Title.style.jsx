import styled from 'styled-components';
import {Button, Menu} from '@thomann/spectre-react-components';

/**
 *
 */
export const Text = styled('h1')`
    margin: 0;
`;

/**
 *
 * @param onClick
 * @returns {*}
 * @constructor
 */
export const Edit = styled(Button)`
    float: right;
    opacity: 0;
    transition: opacity .2s;
`;

/**
 *
 */
const Root = styled(Menu)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: var(--spacing-lg) auto;
    
     &:hover {
        ${Edit} {
            opacity: 1;
        }
    };
`;

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 21.06.2020
 * Time: 18:58
 */
export default Root;