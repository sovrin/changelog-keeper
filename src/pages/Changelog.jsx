import React from 'react';
import Page from '../components/Page';
import Provider from '../contexts/Changelog';
import Content from '../components/Page/Content';
import Changelog from '../components/Changelog';

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 16.11.2019
 * Time: 15:34
 */
export default () => {
    return (
        <Provider>
            <Page>
                <Content>
                    <Changelog/>
                </Content>
            </Page>
        </Provider>
    );
}