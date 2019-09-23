const {resolve} = require('path');
const pkgFile = resolve(process.cwd(), 'package.json');
const {carlo} = require(pkgFile);

const deflt = {
    src: 'carlo',
    index: 'carlo/index.js',
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 23.09.2019
 * Time: 20:30
 */
module.exports = {...deflt, ...carlo};