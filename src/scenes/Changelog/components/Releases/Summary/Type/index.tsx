import React from 'react';
import {bool} from 'prop-types';
import {useClassName} from '@thomann/spectre-react-components/hooks';
import {Icon, Label, hooks} from '@thomann/spectre-react-components';
import {Eval} from 'components';
import {useI18n} from 'hooks';
import style from './module.less';

const {useTooltip} = hooks;

export const Action = {
    ADDED: 'added',
    CHANGED: 'changed',
    DEPRECATED: 'deprecated',
    REMOVED: 'removed',
    FIXED: 'fixed',
    SECURITY: 'security',
};

/**
 *
 * @param children
 * @param compact
 * @param count
 * @param className
 * @returns {*}
 * @constructor
 */
const Type = ({children, compact, count, className = null}) => {
    const {[children]: icon} = {
        [Action.ADDED]: Icon.Type.PLUS,
        [Action.CHANGED]: Icon.Type.EDIT,
        [Action.DEPRECATED]: Icon.Type.STOP,
        [Action.REMOVED]: Icon.Type.MINUS,
        [Action.FIXED]: Icon.Type.FLAG,
        [Action.SECURITY]: Icon.Type.SEARCH,
    };

    const buildLabel = useI18n((type) => `label.${type}`);
    const label = `${count} ` + buildLabel(children);
    const tooltip = useTooltip.default(label);

    className = useClassName(style.type, className);

    return (
        <Label
            className={className}
            use={[tooltip]}
            primary
        >
            <Eval test={!compact}>
                <span>{children}</span>
            </Eval>

            <span className={style.count}>{count}</span>
            <Icon type={icon}/>
        </Label>
    );
};

Type.propTypes = {
    compact: bool,
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 25.06.2020
 * Time: 22:11
 */
export default Type;
