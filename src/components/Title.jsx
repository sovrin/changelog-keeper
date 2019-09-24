import React, {useContext} from 'react';
import {Button} from 'spectre-react-components';
import {Action} from '../reducers/changelog';
import {Context} from './Changelog';

/**
 *
 * @param children
 * @returns {*}
 * @constructor
 */
const Title = ({children}) => {
    const {dispatch} = useContext(Context);

    const handleChange = () => {
        dispatch({type: Action.EDIT_TITLE, value: 'NEW TITLE'});
    };

    return (
        <h1 className="title">
            <Button onClick={handleChange}>update</Button>
            {children}
        </h1>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 23.09.2019
 * Time: 22:40
 */
export default Title;