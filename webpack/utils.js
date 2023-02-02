const {resolve, extname, basename} = require('path');
const {readdirSync, statSync} = require('fs');

/**
 *
 * @param path
 * @returns {T}
 */
const getAliases = (path) => {
    /**
     *
     * @param acc
     * @param entry
     * @returns {*}
     */
    const reduce = (acc, entry) => {
        const cursor = resolve(path, entry);
        if (!statSync(cursor).isDirectory() && extname(entry) === '.ts') {
            entry = basename(entry, '.ts');
        }
        if (entry !== 'index') {
            acc['#/' + entry] = cursor;
        }

        return acc;
    };

    return readdirSync(path)
        .reduce(reduce, {})
    ;
};

module.exports = {
    getAliases,
};
