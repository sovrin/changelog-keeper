import React from 'react';
import {Button, Icon} from '@thomann/spectre-react-components';
import {useClassName} from '@thomann/spectre-react-components/hooks';
import useEditable from '../Editable/useEditable';
import Eval from '../Eval';
import style from './module.less';

/**
 *
 * @param children
 * @constructor
 */
const Wrapper = ({children}) => (
    <span>{children}</span>
);

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

    const className = useClassName(style.editor, {
        [style.active]: isEditing
    })

    return (
        <div className={className}>
            <Editable>
                {children}
            </Editable>

            <Eval test={!permanent}>
                <Button
                    className={style.toggle}
                    onClick={toggleEditable}
                    size={Button.Size.SMALL}
                    action
                    link
                >
                    <Icon
                        type={icon}
                        onClick={toggleEditable}
                    />
                </Button>
            </Eval>
        </div>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 24.06.2020
 * Time: 20:05
 */
export default Editor;
