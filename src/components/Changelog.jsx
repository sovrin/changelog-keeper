import React, {useState, createContext, useReducer} from 'react';
import {parser} from 'keep-a-changelog';
import Release from './Release';
import Title from './Title';
import Description from './Description';
import reducer from '../reducers/changelog';
export const Context = createContext(false);

const {Provider} = Context;

/**
 *
 * @param source
 * @returns {*}
 * @constructor
 */
const Changelog = ({source}) => {
    const [changelog, dispatch] = useReducer(reducer, parser(source));
    const {description, title, releases} = changelog;

    const context = {
        dispatch,
        changelog,
    };

    return (
        <Provider value={context}>
            <div className="changelog">
                <Title>{title}</Title>
                <Description>{description}</Description>
                {releases.map(Release)}
            </div>
        </Provider>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 23.09.2019
 * Time: 22:26
 */
export default Changelog;