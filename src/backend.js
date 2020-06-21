import * as neutralino from './adapters/neutralino';
import * as micro from './adapters/micro';

const backend = (window.NL_MODE)
    ? neutralino
    : micro
;

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 18.06.2020
 * Time: 21:06
 */
export default backend;