import React, {createContext, useEffect, useState} from 'react';

export const Context = createContext(null);
const {Provider} = Context;

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 06.06.2020
 * Time: 12:57
 */
export default ({routes}) => {
    const [stack, setStack] = useState([]);
    const [next, setNext] = useState(null);

    /**
     *
     * @param route
     * @returns {[*]}
     */
    const prepare = (route) => {
        const entry = [
            new RegExp(
                `${route.substr(0, 1) === '*' ? '' : '^'}${route
                .replace(/:[a-zA-Z]+/g, '([^/]+)')
                .replace(/\*/g, '')}${route.substr(-1) === '*' ? '' : '$'}`,
            ),
        ];

        const props = route.match(/:[a-zA-Z]+/g);

        const result = props
            ? props.map(name => name.substr(1))
            : []
        ;

        entry.push(result);

        return entry;
    };

    /**
     *
     */
    const transform = () => {
        const entry = [];

        for (const [route, target] of Object.entries(routes)) {
            entry.push({
                route: prepare(route),
                target,
            });
        }

        setStack(entry);
    };

    /**
     *
     */
    const evaluate = () => {
        const current = window.location.pathname || '/';

        for (const {route, target} of stack) {
            const [reg, group] = route;
            const result = current.match(reg);
            const props = {};

            if (!result) {
                continue;
            }

            if (next && next.target === target) {
                break;
            }

            if (group.length) {
                group.forEach((item, i) => (
                    props[item] = result[i + 1]
                ));
            }

            setNext({
                target,
                props,
            });
        }
    };

    /**
     *
     * @param url
     */
    const push = (url) => {
        window.history.pushState(null, null, url);

        evaluate();
    };

    /**
     *
     */
    const render = () => {
        evaluate();

        if (!next) {
            return null;
        }

        const {target, props} = next;

        return (typeof target === 'string')
            ? push(target)
            : target(props)
        ;
    };

    useEffect(() => {
        transform();

        window.addEventListener('popstate', evaluate);

        return () => {
            window.removeEventListener('popstate', evaluate);
        };
    }, [routes]);

    const context = {
        push,
    };

    return (
        <Provider value={context}>
            {render()}
        </Provider>
    );
}