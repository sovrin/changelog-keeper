import React from 'react';
import Release from './Release';
import Title from './Title';
import Description from './Description';
import useChangelog from '../hooks/useChangelog';

/**
 *
 * @returns {null|*}
 * @constructor
 */
const Changelog = () => {
    const {changelog} = useChangelog();

    if (!changelog) {
        return null;
    }

    const {title, description, releases} = changelog;

    return (
        <div className="changelog">
            <Title>{title}</Title>
            <Description>{description}</Description>
            {releases.map(Release)}
        </div>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 23.09.2019
 * Time: 22:26
 */
export default Changelog;