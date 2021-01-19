import React from 'react';
import styled from 'styled-components';
import {Button, Menu} from '@thomann/spectre-react-components';
import VersionBase from '~/components/atoms/Version';
import TimestampBase from '~/components/atoms/Timestamp';
import Summary from '~/styles/molecules/Summary.style';

/**
 *
 */
export const Version = styled(VersionBase)`
`;

/**
 *
 */
export const Timestamp = styled(TimestampBase)`
`;

/**
 *
 */
export const Header = styled('div')`
    display: flex;
    align-content: center;
    font-size: x-large;
    cursor:pointer;    

    > ${Version} {
        margin-right: var(--spacing);
        
        + span {
            margin-right: var(--spacing);
        }
    }
    
    > ${Timestamp} {
        margin-right: var(--spacing);
    }
    
    > ${Summary} {
    }
`;

/**
 *
 */
export const Delete = styled(Button)`
    float: right;
    opacity: 0;
    transition: opacity .2s;
`;

/**
 *
 */
const Root = styled(Menu)`
    margin-bottom: var(--spacing);

    &:hover {
        ${Delete} {
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