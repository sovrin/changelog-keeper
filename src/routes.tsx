import React from 'react';
import {Changelog, Settings} from '#/scenes';

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 16.11.2019
 * Time: 15:57
 */
export default {
    '/main_window': '/main_window/changelog',
    '/main_window/changelog': Changelog,
    '/main_window/settings': Settings,
};
