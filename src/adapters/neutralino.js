/**
 *
 * @param path
 * @returns {Promise<unknown>}
 */
export const read = (path) => (
    new Promise((resolve, reject) => {
        Neutralino.filesystem.readFile(path, resolve, reject);
    })
);

/**
 *
 */
export const initialize = () => {
    Neutralino.init({
        load: () => {
        },
        pingSuccessCallback: () => {
        },
        pingFailCallback: () => {
        },
    });
};