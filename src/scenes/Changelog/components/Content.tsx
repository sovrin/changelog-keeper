import React from 'react';
import Base from "~/components/layouts/Content";
import Releases from './Releases';
import Description from './Description';
import Title from './Title';
import useChangelog from '../hooks/useChangelog';

/**
 *
 * @constructor
 */
const Content = () => {
    const {changelog} = useChangelog();
    const {title, description, releases} = changelog;

    return (
        <Base>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Releases releases={releases}/>
        </Base>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 19.01.2021
 * Time: 22:01
 */
export default Content;