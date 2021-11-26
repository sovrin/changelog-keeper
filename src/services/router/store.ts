const VARIABLE = ':';
const PATH = '/';
const WILDCARD = '*';

export const FN = Symbol.for('fn');

/**
 *
 */
const factory = () => {
    const routes = {};

    /**
     *
     * @param path
     */
    const tokenize = (path: string): Array<string> => (
        ['$', path].join(PATH)
            .split(PATH)
            .filter(Boolean)
    );

    /**
     *
     * @param routes
     */
    const keys = (routes) => (
        Object.keys(routes)
    );

    /**
     *
     * @param tokens
     * @param func
     * @param routes
     */
    const up = (tokens, func, routes) => {
        const token = tokens.shift();

        if (!token) {
            return true;
        }

        if (!routes[token]) {
            routes[token] = {};
        }

        if (tokens.length === 0) {
            routes[token][FN] = func;
        }

        return up(tokens, func, routes[token]);
    };

    /**
     *
     * @param tokens
     * @param routes
     */
    const down = (tokens, routes) => {
        let token = tokens.shift();

        if (!token) {
            return routes[FN];
        } else if (routes[WILDCARD]) {
            if (routes[WILDCARD][FN]) {
                return routes[WILDCARD][FN];
            }

            return down(tokens, routes[WILDCARD]);
        } else if (!routes[token]) {
            token = keys(routes)
                .find((route) => route[0] === VARIABLE)
            ;

            if (!token) {
                return null;
            }
        }

        return down(tokens, routes[token]);
    };

    /**
     *
     * @param path
     * @param func
     */
    const set = (path: string, func: any) => {
        const tokens = tokenize(path);

        up(tokens, func, routes);
    };

    /**
     *
     * @param path
     */
    const get = (path) => {
        const token = tokenize(path);

        return down(token, routes);
    };

    /**
     *
     * @param path
     */
    const resolve = (path: string) => {
        const tokens = tokenize(path);
        const context = {};
        let level = 0;
        let cursor = routes;

        while (cursor && level < tokens.length) {
            const current = tokens[level];
            const route = keys(cursor)
                .find((item) => item === current || item[0] === VARIABLE)
            ;

            if (route && route[0] === VARIABLE) {
                const key = route.slice(1)
                    .toLowerCase()
                ;

                context[key] = tokens[level];
            }

            cursor = cursor[route];
            level++;
        }

        return context;
    };

    return {
        set,
        resolve,
        get,
        routes,
    };
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 20.12.2020
 * Time: 23:15
 */
export default factory;
