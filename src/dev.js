const {send} = require('micro');
const router = require('micro-r');
const {readFileSync} = require('fs');
const {resolve} = require('path');

const {on, route} = router((req, res) => {
    send(res, 404);
});

on('get', '/api/changelog', async (req, res) => {
    const dir = __dirname;
    const path = resolve(dir, '..', 'CHANGELOG.md');
    const blob = readFileSync(path);

    send(res, 200, blob);
});

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 21.06.2020
 * Time: 14:09
 */
module.exports = route;