import React from 'react';
import {Button, Icon} from '@thomann/spectre-react-components';
import {Action} from 'reducers/changelog';
import useChangelog from 'hooks/useChangelog';
import useEditable from 'hooks/useEditable';
import styled from 'styled-components';
import Markdown from './Markdown';

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
    const [Editable, toggle] = useEditable(children, Markdown);

    const handleChange = () => {
        dispatch({type: Action.EDIT_DESCRIPTION, value: 'NEW DESCRIPTION'});
    };

    return (
        <Element className="description">
            <Editable />

            <Button
                onClick={toggle}
                size={Button.Size.SMALL}
                action
            >
                <Icon
                    type={Icon.Type.EDIT}
                />
            </Button>
        </Element>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 23.09.2019
 * Time: 22:34
 */
export default Description;