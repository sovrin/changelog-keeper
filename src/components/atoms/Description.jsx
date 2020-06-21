import React from 'react';
import {Button, Icon} from '@thomann/spectre-react-components';
import {Action} from 'reducers/changelog';
import useChangelog from 'hooks/useChangelog';
import useEditable from 'hooks/useEditable';
import Markdown from './Markdown';
import Root from 'styles/atoms/Description.style';

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
        dispatch({action: Action.EDIT_DESCRIPTION, value: 'NEW DESCRIPTION'});
    };

    return (
        <Root>
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
        </Root>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 23.09.2019
 * Time: 22:34
 */
export default Description;