import React from 'react';
import {Page as Provider} from 'contexts';
import {OffCanvas} from '@thomann/spectre-react-components';
import {useChildSelector} from 'hooks';
import Header from './Header';
import Content from './Content';
import Overlay from './Overlay';
import Sidebar from './Sidebar';

/**
 *
 * @returns {*}
 * @constructor
 */
const Page = ({children}) => {
    const header = useChildSelector(Header, children);
    const sidebar = useChildSelector(Sidebar, children);
    const overlay = useChildSelector(Overlay, children);
    const content = useChildSelector(Content, children);

    return (
        <Provider>
            <OffCanvas sidebar>
                {header}
                {sidebar}
                {overlay}
                {content}
            </OffCanvas>
        </Provider>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 15.11.2019
 * Time: 22:06
 */
export default Page;
export {
    Header,
    Content,
    Overlay,
    Sidebar,
};
