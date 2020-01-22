import React from 'react';
import Changelog from './pages/Changelog';

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 16.11.2019
 * Time: 15:57
 */
export default {
    '/': 'changelog',
    '/changelog': () => <Changelog/>,
};