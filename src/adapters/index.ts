import * as server from './server';
import * as electron from './electron';

export const isElectron = (window && !!window.runtime);

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 03.07.2021
 * Time: 15:27
 */
export default (isElectron)
    ? electron
    : server
;
