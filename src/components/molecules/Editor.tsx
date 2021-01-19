import React from 'react';
import {Button, Icon} from '@thomann/spectre-react-components';
import useEditable from '~/hooks/useEditable';
import Root, {Toggle, Wrapper} from '~/styles/molecules/Editor.style';
import Eval from '../atoms/Eval';

/**
 *
 * @returns {*}
 * @constructor
 */
const Editor = ({children, wrapper = Wrapper, onSubmit = null, permanent = false}) => {
    const [Editable, toggleEditable, isEditing] = useEditable(wrapper, onSubmit, permanent);

    const icon = (isEditing)
        ? Icon.Type.CROSS
        : Icon.Type.EDIT
    ;

    return (
        <Root active={isEditing}>
            <Editable>
                {children}
            </Editable>

            <Eval test={!permanent}>
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
            </Eval>
        </Root>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 24.06.2020
 * Time: 20:05
 */
export default Editor;