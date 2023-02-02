import React from 'react';
import {Button, Icon} from '@thomann/spectre-react-components';
import useEditable from '../Editable/useEditable';
import Eval from '../Eval';
import style from './module.less';
import {useStyle} from "#/hooks";

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
    const styled = useStyle(style);
    const [Editable, toggleEditable, active] = useEditable(wrapper, onSubmit, permanent);

    const icon = (active)
        ? Icon.Type.CROSS
        : Icon.Type.EDIT
    ;

    return (
        <div className={styled('editor', {active})}>
            <Editable>
                {children}
            </Editable>

            <Eval test={!permanent}>
                <Button
                    className={styled('toggle')}
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
