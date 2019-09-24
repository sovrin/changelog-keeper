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
const Description = ({children}) => {
    const {dispatch, stringify} = useContext(Context);

    const handleChange = () => {
        dispatch({type: Action.EDIT_DESCRIPTION, value: 'NEW DESCRIPTION'});
    };

    return (
        <p className="description">
            <Button onClick={handleChange}>update</Button>
            <Button onClick={stringify}>string</Button>
            {children}
        </p>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 23.09.2019
 * Time: 22:34
 */
export default Description;