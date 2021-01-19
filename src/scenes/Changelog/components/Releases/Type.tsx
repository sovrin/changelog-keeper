import React from 'react';
import {Icon} from '@thomann/spectre-react-components';
import {hooks} from '@thomann/spectre-react-components';
import {bool} from 'prop-types';
import Eval from '~/components/Eval';
import useI18n from '~/hooks/useI18n';
import Root, {Count} from './Type.style';

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

    return (
        <Root
            className={className}
            use={[tooltip]}
            primary
        >
            <Eval test={!compact}>
                <span>{children}</span>
            </Eval>

            <Count>{count}</Count>
            <Icon type={icon}/>
        </Root>
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