const {resolve} = require('path');
const nodemon = require('nodemon');
const {src} = require('./config');

const options = `-w ${src} `;
const path = resolve(__dirname, 'start.js');
const args = process.argv
    .slice(2)
    .join(' ')
;
const command = `${options}${path} ${args}`;

/**
 *
 */
const onQuit = () => {
    process.exit();
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 23.09.2019
 * Time: 20:38
 */
nodemon(command)
    .on('quit', onQuit)
;