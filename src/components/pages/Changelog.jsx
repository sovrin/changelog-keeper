import React from 'react';
import Page from '../atoms/Page';
import Provider from '../../contexts/Changelog';
import Changelog from '../organisms/Changelog';
import Content from '../templates/Content';

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