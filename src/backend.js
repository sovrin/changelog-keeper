const {readFileSync} = require('fs');
const {resolve} = require('path');

/**
 *
 * @returns {undefined|*}
 */
const readLog = () => {
    const file = resolve(process.cwd(), 'CHANGELOG.md');

    return readFileSync(file, 'UTF-8');
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 23.09.2019
 * Time: 21:01
 */
module.exports = {
    readLog,
};