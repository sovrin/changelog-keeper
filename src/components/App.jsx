import React, {useContext, useEffect, useState} from 'react';
import {Context} from './Backend';
import {Button} from 'spectre-react-components';
import 'spectre.css';
import Changelog from './Changelog';
import Switch, {Case} from './utilities/Switch';

/**
 *
 * @returns {*}
 * @constructor
 */
const App = () => {
    const backend = useContext(Context);
    const [changelog, setChangelog] = useState(null);

    useEffect(() => {
        backend.readLog()
            .then(setChangelog);
    }, []);

    return (
        <div>
            <Switch conditions={{
                changelog,
            }}>
                <Case test={({changelog}) => changelog}>
                    <Changelog source={changelog}/>
                </Case>
            </Switch>

            <Button
                primary
            >
                save
            </Button>
        </div>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 23.09.2019
 * Time: 21:47
 */
export default App;