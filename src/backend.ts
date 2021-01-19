import * as neutralino from './adapters/neutralino';
import * as micro from './adapters/micro';

declare var window: any;

export const isNeutralino = (!!window.NL_MODE);

export const backend = (isNeutralino)
    ? neutralino
    : micro
;