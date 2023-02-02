import React from 'react';
import Page from '#/components/Page';
import Content from './components/Content';
import {Changelog} from './contexts';

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 16.11.2019
 * Time: 15:34
 */
export default () => (
    <Changelog>
        <Page>
            <Content/>
        </Page>
    </Changelog>
)
