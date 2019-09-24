import React, {useContext, useEffect, useState} from 'react';
import {Button, Container, Dropdown} from 'spectre-react-components';
import 'spectre.css';
import 'spectre.css/dist/spectre-icons.min.css';
import {Context} from './Backend';
import Changelog from './Changelog';
import switched from './utilities/switched';

const {Switch, Case} = switched();

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
        <Container size={Container.Size.MEDIUM}>
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
        </Container>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 23.09.2019
 * Time: 21:47
 */
export default App;