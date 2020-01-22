import React, {useState, useEffect} from 'react';
import {eid} from '../utils';

const stack = {};
const prepared = {};

/**
 *
 * @param route
 * @returns {[*]|*}
 */
const prepare = (route) => {
    if (prepared[route]) {
        return prepared[route];
    }

    const prepare = [
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

    prepare.push(result);
    prepared[route] = prepare;

    return prepare;
};

/**
 *
 * @param id
 */
const process = (id) => {
    const {routes, setter} = stack[id];
    const current = window.location.pathname || '/';

    let path = null;
    let component = null;
    let props = null;

    for (let i = 0; i < routes.length; i++) {
        [path, component] = routes[i];

        const [reg, group] = (prepared[path])
            ? prepared[path]
            : prepare(path)
        ;

        const result = current.match(reg);

        if (!result) {
            component = null;

            continue;
        }

        if (group.length) {
            props = {};
            group.forEach((item, i) => (
                props[item] = result[i + 1]
            ));
        }

        break;
    }

    Object.assign(stack[id], {
        path,
        component,
        props,
    });

    setter(Date.now());
};

/**
 *
 */
const run = () => (
    Object.keys(stack).forEach(process)
);

/**
 *
 * @param routes
 * @returns {*}
 */
export default (routes) => {
    const [id] = useState(eid());
    const setter = useState(0)[1];

    let entry = stack[id];

    if (!entry) {
        entry = {
            routes: Object.entries(routes),
            setter,
        };

        stack[id] = entry;
        process(id);
    }

    const {component, props} = entry;

    if (!component) {
        return null;
    }

    return (typeof component === 'string')
        ? push(component)
        : component(props)
    ;
}

/**
 *
 * @param url
 */
export function push (url) {
    window.history.pushState(null, null, url);

    run();
}

/**
 *
 * @param onClick
 * @param children
 * @param _rest
 * @returns {*}
 * @constructor
 */
export const Link = ({onClick, children, ..._rest}) => {

    /**
     *
     * @param e
     */
    const handleClick = (e) => {
        e.preventDefault();
        push(e.target.href);

        onClick && onClick(e);
    };

    return (
        <a
            onClick={handleClick}
            {..._rest}
        >
            {children}
        </a>
    );
};

window.addEventListener('popstate', run);