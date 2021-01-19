import React from 'react';
import Root, {Count} from 'styles/atoms/Type.style';
import {Icon} from '@thomann/spectre-react-components';
import {hooks} from '@thomann/spectre-react-components';
import {bool} from 'prop-types';
import Eval from './Eval';
import useI18n from '~/hooks/useI18n';

const {useTooltip} = hooks;

export const Type = {
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
const ChangeType = ({children, compact, count, className = null}) => {

    const {[children]: icon} = {
        [Type.ADDED]: Icon.Type.PLUS,
        [Type.CHANGED]: Icon.Type.EDIT,
        [Type.DEPRECATED]: Icon.Type.STOP,
        [Type.REMOVED]: Icon.Type.MINUS,
        [Type.FIXED]: Icon.Type.FLAG,
        [Type.SECURITY]: Icon.Type.SEARCH,
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

ChangeType.propTypes = {
    compact: bool,
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 25.06.2020
 * Time: 22:11
 */
export default ChangeType;