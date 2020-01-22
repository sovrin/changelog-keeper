import React from 'react';
import 'spectre.css';
import 'spectre.css/dist/spectre-icons.min.css';
import 'spectre.css/dist/spectre-exp.min.css';
import useRoutes from '../hooks/useRoutes';
import routes from '../routes';

/**
 *
 * @returns {*}
 * @constructor
 */
const App = () => useRoutes(routes);

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 23.09.2019
 * Time: 21:47
 */
export default App;