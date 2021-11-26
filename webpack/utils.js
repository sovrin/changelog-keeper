const {resolve} = require('path');
const {readdirSync, statSync} = require('fs');

/**
 *
 * @param path
 * @param prefix
 * @returns {T}
 */
const getAliases = (path, prefix = '') => {
    /**
     *
     * @param entry
     * @returns {boolean}
     */
    const filter = (entry) => {
        const cursor = resolve(path, entry);

        return statSync(cursor).isDirectory();
    };

    /**
     *
     * @param acc
     * @param entry
     * @returns {*}
     */
    const reduce = (acc, entry) => {
        const alias = `${prefix}${entry}`;
        acc[alias] = resolve(path, entry);

        return acc;
    };

    return readdirSync(path)
        .filter(filter)
        .reduce(reduce, {})
    ;
};

module.exports = {
    getAliases,
};
