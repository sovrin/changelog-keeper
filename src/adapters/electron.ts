import runtime from '../runtime';

/**
 *
 * @param path
 */
export const read = (path: string) => {
    return new Promise((resolve) => {
        const unsubscribe = runtime.subscribe('read_received', (data) => {
            resolve(data);
            unsubscribe();
        });

        path = 'C:/dev/projects/tcl/' + path;

        runtime.send('read', path);
    });
};

/**
 *
 */
export const close = () => {
    return new Promise((resolve) => {
        runtime.send('window.close');

        return resolve(true);
    });
};


/**
 *
 */
export const minimize = () => {
    return new Promise((resolve) => {
        runtime.send('window.minimize');

        return resolve(true);
    });
};

/**
 *
 */
export const maximize = () => {
    return new Promise((resolve) => {
        runtime.send('window.maximize');

        return resolve(true);
    });
};

/**
 *
 */
export const develop = () => {
    return new Promise((resolve) => {
        runtime.send('window.devTools');

        return resolve(true);
    })
}
