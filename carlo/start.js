const {resolve} = require('path');
const carlo = require('./carlo');
const {index} = require('./config');

let backend;
const path = resolve(process.cwd(), index);

try {
    backend = require(path);
} catch (e) {
    //
}

const [url] = process.argv.slice(2);

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 23.09.2019
 * Time: 21:51
 */
carlo({url, backend});
