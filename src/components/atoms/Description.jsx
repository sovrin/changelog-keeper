import React from 'react';
import {Action} from '../../reducers/changelog';
import useChangelog from '../../hooks/useChangelog';
import styled from 'styled-components';
import Editable from './Editable';

const Element = styled('div')`
    display: flex;
`;

/**
 *
 * @param children
 * @returns {*}
 * @constructor
 */
const Description = ({children}) => {
    const {dispatch} = useChangelog();

    const handleChange = () => {
        dispatch({type: Action.EDIT_DESCRIPTION, value: 'NEW DESCRIPTION'});
    };

    return (
        <Element className="description">
            <Editable>
                {children}
            </Editable>
        </Element>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 23.09.2019
 * Time: 22:34
 */
export default Description;