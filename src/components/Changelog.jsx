import React, {useState, createContext} from 'react';
import {parser} from 'keep-a-changelog';
import Release from './Release';
import Title from './Title';
import Description from './Description';

export const Context = createContext(false);

const {Provider} = Context;

/**
 *
 * @param obj
 * @param setter
 * @returns {{set: *}}
 */
const updater = (obj, setter) => {
    return (path) => {
        const update = (value) => {
            if (path === 'title') {
                obj.title = value;
            }

            if (path === 'description') {
                obj.description = value;
            }

            setter(parser(obj.toString()));
        };

        return {
            update,
        };
    };
};

/**
 *
 * @param source
 * @returns {*}
 * @constructor
 */
const Changelog = ({source}) => {
    const [changelog, setChangelog] = useState(parser(source));
    const {description, title, releases} = changelog;

    const context = {
        changelog,
        updater: updater(changelog, setChangelog),
        stringify: () => console.info(changelog.toString())
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