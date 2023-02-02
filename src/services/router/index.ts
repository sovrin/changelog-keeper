import store from './store';

/**
 *
 */
const factory = () => {
    const routesStorage = store();

    /**
     *
     * @param routes
     */
    const register = (routes): void => {
        for (const [path, component] of Object.entries(routes)) {
            routesStorage.set(path, component);
        }
    };

    /**
     *
     * @param route
     */
    const fetch = (route: string) => {
        let target = routesStorage.get(route);

        while (typeof target === 'string') {
            target = routesStorage.get(target);
        }

        return target || null;
    };

    return {
        register,
        fetch,
    };
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 30.06.2021
 * Time: 22:21
 */
export default factory;
