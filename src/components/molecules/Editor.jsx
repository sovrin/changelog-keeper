import React from 'react';
import {Button, Icon} from '@thomann/spectre-react-components';
import useEditable from 'hooks/useEditable';
import Root, {Toggle} from 'styles/molecules/Editor.style';

/**
 *
 * @returns {*}
 * @constructor
 */
const Editor = ({children, wrapper, onSubmit}) => {
    const [Editable, toggleEditable, isEditing] = useEditable(wrapper, onSubmit);

    const icon = (isEditing)
        ? Icon.Type.CROSS
        : Icon.Type.EDIT
    ;

    return (
        <Root active={isEditing}>
            <Editable>
                {children}
            </Editable>

            <Toggle
                onClick={toggleEditable}
                size={Button.Size.SMALL}
                action
                link
            >
                <Icon
                    type={icon}
                    onClick={toggleEditable}
                />
            </Toggle>
        </Root>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 24.06.2020
 * Time: 20:05
 */
export default Editor;