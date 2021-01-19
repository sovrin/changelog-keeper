import React, {Children} from 'react';
import Provider from '~/contexts/Page';
import useTheme from '~/hooks/useTheme';
import Root from './Page.style';

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

    const {header, sidebar, content, overlay} = data as any;

    useTheme();

    return (
        <Provider>
            <Root sidebar>
                {header}
                {sidebar}
                {overlay}
                {content}
            </Root>
        </Provider>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 15.11.2019
 * Time: 22:06
 */
export default Page;