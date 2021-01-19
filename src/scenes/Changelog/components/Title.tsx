import React from 'react';
import Markdown from '~/components/Markdown';
import Editor from '~/components/Editor';
import {Action} from '~/scenes/Changelog/reducers/changelog';
import useChangelog from '~/scenes/Changelog/hooks/useChangelog';
import Root, {Text} from './Title.style';

/**
 *
 * @param children
 * @returns {*}
 * @constructor
 */
const Title = ({children}) => {
    const {dispatch} = useChangelog();

    /**
     *
     * @param value
     */
    const handleChange = (value) => {
        dispatch({action: Action.EDIT_TITLE, value});
    };

    return (
        <Root>
            <Text>
                <Editor
                    wrapper={Markdown}
                    onSubmit={handleChange}
                >
                    {children}
                </Editor>
            </Text>
        </Root>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 23.09.2019
 * Time: 22:40
 */
export default Title;