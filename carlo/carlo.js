const {resolve} = require('path');
const os = require('os');
const carlo = require('carlo');
const {rpc} = require('carlo/rpc');

const URL = '/index.html';
const BACKEND = {};
const APP_NAME = 'app';
const ICON = null;

const CHANNEL = ['canary', 'stable'];

/**
 *
 * @param url
 * @param backend
 * @param appName
 * @param icon
 * @returns {Promise<void>}
 */
const factory = async ({url = URL, backend = BACKEND, appName = APP_NAME, icon = ICON}) => {
    const isDevelopmentEnv = url !== '/index.html';

    let app;
    let args = [];

    if (isDevelopmentEnv) {
        const reactChromeExtension = require('@npm-chrome-extensions/react-devtools');

        args.push(
            `--load-extensions:${reactChromeExtension}`,
            `--disable-extensions-except=${reactChromeExtension}`,
        );
    }
    const appDir = resolve(os.homedir(), `.${appName}`);

    try {
        app = await carlo.launch({
            title: appName,
            icon,
            localDataDir: appDir,
            channel: CHANNEL,
            args,
        });
    } catch (e) {
        console.error(e);
        return;
    }

    if (!isDevelopmentEnv) {
        app.serveFolder('build');
    }

    app.on('exit', () => process.exit());
    app.on('window', window => window.load(url, rpc.handle(backend)));

    await app.load(url, rpc.handle(backend));
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 23.09.2019
 * Time: 20:24
 */
module.exports = factory;