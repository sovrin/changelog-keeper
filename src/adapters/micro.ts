/**
 *
 * @param path
 */
export const read = async (path) => (
    fetch('/api/changelog')
        .then((response) => response.text())
);

/**
 *
 */
export const initialize = () => {
    console.info('init');
};

