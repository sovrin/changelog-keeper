import React from 'react';
import Markdown from './Markdown';
import {Action} from 'reducers/changelog';
import useChangelog from 'hooks/useChangelog';
import Root, {Text} from 'styles/atoms/Title.style';
import Editor from 'components/molecules/Editor';

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