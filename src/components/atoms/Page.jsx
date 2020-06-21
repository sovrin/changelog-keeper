import React, {Children} from 'react';
import styled from 'styled-components';
import OffCanvas from '@thomann/spectre-react-components/OffCanvas';
import Provider from 'contexts/Page';
import useTheme from 'hooks/useTheme';

const Element = styled(OffCanvas)`
    min-height: 100vh;
    background: var(--white);
`;

/**
 *
 * @returns {*}
 * @constructor
 */
const Page = ({children}) => {
    const data = {};

    Children.forEach(children, (child) => {
        const {type: {name, displayName}} = child;
        let key = displayName || name;
        key = key.toLowerCase();

        data[key] = child;
    });

    const {header, sidebar, content, overlay} = data;

    useTheme();

    return (
        <Provider>
            <Element sidebar>
                {header}
                {sidebar}
                {overlay}
                {content}
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