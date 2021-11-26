import {Children, cloneElement, useMemo} from 'react';

/**
 *
 * @param Component
 * @param children
 * @param props
 */
const useChildSelector = (Component, children, props = {}) => {

    /**
     *
     * @param child
     * @param key
     */
    const map = (child, key) => {
        if (!child) {
            return undefined;
        } else if (Component.name !== child.type.displayName && Component !== child.type) {
            return undefined;
        }

        return cloneElement(child, {
            key,
            ...props,
        });
    };

    return useMemo(() => {
        return Children.toArray(children)
            .map(map)
            .filter(Boolean)
        ;
    }, [Component, props, children]);
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 24.06.2021
 * Time: 21:00
 */
export default useChildSelector;
