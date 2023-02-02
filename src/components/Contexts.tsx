import {createElement, memo} from 'react';

/**
 *
 * @param children
 * @param contexts
 * @constructor
 */
const Contexts = ({children, contexts}) => (
    contexts.reduceRight((acc, [context, props]) => (
        createElement(context, props, acc)
    ), children)
);

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 28.06.2022
 * Time: 18:19
 */
export default memo(Contexts);
