import React from 'react';
import Root, {Count} from 'styles/atoms/Type.style';
import {Icon} from '@thomann/spectre-react-components';
import {hooks} from '@thomann/spectre-react-components';
import {bool} from 'prop-types';
import Eval from './Eval';
import useI18n from '../../hooks/useI18n';

const {useTooltip} = hooks;

const Map = {
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
const Type = ({children, compact, count, className}) => {

    const {[children]: icon} = {
        [Map.ADDED]: Icon.Type.PLUS,
        [Map.CHANGED]: Icon.Type.EDIT,
        [Map.DEPRECATED]: Icon.Type.STOP,
        [Map.REMOVED]: Icon.Type.MINUS,
        [Map.FIXED]: Icon.Type.FLAG,
        [Map.SECURITY]: Icon.Type.SEARCH,
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