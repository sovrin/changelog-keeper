import React, {Children} from 'react';
import styled from 'styled-components';
import OffCanvas from '@thomann/spectre-react-components/OffCanvas';
import {useClassName} from '@thomann/spectre-react-components/hooks';
import Header from '../templates/Header';
import Sidebar from '../templates/Sidebar';
import Overlay from '../templates/Overlay';
import Content from '../templates/Content';
import Provider from '../../contexts/Page';
import useTheme from '../../hooks/useTheme';

const Element = styled(OffCanvas)`
    min-height: 100vh;
    
    
   
`;

/**
 *
 * @returns {*}
 * @constructor
 */
const Page = ({children}) => {
    useTheme();

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
            <Element
                className={className}
                {...data}
                sidebar
            >
                {(header) && (
                    <Header>
                        {header}
                    </Header>
                )}

                {(sidebar) && (
                    <Sidebar>
                        {sidebar}
                    </Sidebar>
                )}

                <Overlay/>

                {(content) && (
                    <Content>
                        {content}
                    </Content>
                )}
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