import React from 'react';
import Page from 'components/atoms/Page';
import Changelog from 'components/organisms/Changelog';
import Content from 'components/templates/Content';
import Provider from 'contexts/Changelog';

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 16.11.2019
 * Time: 15:34
 */
export default () => (
    <Provider>
        <Page>
            <Content>
                <Changelog/>
            </Content>
        </Page>
    </Provider>
)