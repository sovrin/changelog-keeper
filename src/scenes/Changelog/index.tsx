import React from 'react';
import Page from '~/components/Page';
import Content from './components/Content';
import Provider from './contexts/Changelog';

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 16.11.2019
 * Time: 15:34
 */
export default () => (
    <Provider>
        <Page>
            <Content/>
        </Page>
    </Provider>
)