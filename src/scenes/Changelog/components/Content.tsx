import React from 'react';
import Element from 'components/Page/Content';
import {Releases, Description, Title} from './';
import {useChangelog} from '../hooks';

/**
 *
 * @constructor
 */
const Content = () => {
    const {changelog} = useChangelog();
    const {title, description, releases} = changelog;

    return (
        <Element>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Releases releases={releases}/>
        </Element>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 19.01.2021
 * Time: 22:01
 */
export default Content;
