import React from 'react';
import {Button} from '@thomann/spectre-react-components';
import styled from 'styled-components';
import Icon from '@thomann/spectre-react-components/Icon';
import {Action} from '../reducers/changelog';
import useChangelog from '../hooks/useChangelog';

const H1 = styled.h1`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

/**
 *
 * @param children
 * @returns {*}
 * @constructor
 */
const Title = ({children}) => {
    const {dispatch} = useChangelog();

    /**
     *
     */
    const handleChange = () => {
        dispatch({type: Action.EDIT_TITLE, value: 'NEW TITLE'});
    };

    return (
        <H1 className="title">
            {children}
            <Button
                onClick={handleChange}
                link
                action
            >
                <Icon type={Icon.Type.EDIT}/>
            </Button>
        </H1>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 23.09.2019
 * Time: 22:40
 */
export default Title;