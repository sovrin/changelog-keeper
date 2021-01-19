import React from 'react';
import Title from '~/components/atoms/Title';
import Description from '~/components/atoms/Description';
import Releases from '~/components/molecules/Releases';
import useChangelog from '~/hooks/useChangelog';

/**
 *
 * @returns {null|*}
 * @constructor
 */
const Changelog = () => {
    const {changelog} = useChangelog();
    const {title, description, releases} = changelog;

    return (
        <div className="changelog">
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Releases releases={releases}/>
        </div>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 23.09.2019
 * Time: 22:26
 */
export default Changelog;