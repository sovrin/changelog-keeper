import React, {Children} from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import OffCanvas from '@thomann/spectre-react-components/OffCanvas';
import {useClassName} from '@thomann/spectre-react-components/hooks';
import Header from './Page/Header';
import Sidebar from './Page/Sidebar';
import Overlay from './Page/Overlay';
import Content from './Page/Content';
import Provider from '../contexts/Page';

const Global = createGlobalStyle`
    body {
    }
`;

const Element = styled(OffCanvas)`
    min-height: 100vh
`;

/**
 *
 * @returns {*}
 * @constructor
 */
const Page = ({children}) => {
    const className = useClassName('page');
    const data = {};

    Children.forEach(children, (child) => {
        const {type: {name}} = child;
        const key = name.toLowerCase();

        data[key] = child;
    });

    const {header, sidebar, content} = data;

    return (
        <Provider>
            <Global/>
            <Element
                className={className}
                sidebar
            >
                <Header>
                    {header}
                </Header>

                <Sidebar>
                    {sidebar}
                </Sidebar>

                <Overlay/>

                <Content>
                    {content}
                </Content>
            </Element>
        </Provider>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 15.11.2019
 * Time: 22:06
 */
export default Page;