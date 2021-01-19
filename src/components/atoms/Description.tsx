import React from 'react';
import {Action} from '~/reducers/changelog';
import useChangelog from '~/hooks/useChangelog';
import Markdown from './Markdown';
import Root from '~/styles/atoms/Description.style';
import Editor from '../molecules/Editor';

/**
 *
 * @param children
 * @returns {*}
 * @constructor
 */
const Description = ({children}) => {
    const {dispatch} = useChangelog();

    /**
     *
     */
    const handleChange = (value) => {
        dispatch({action: Action.EDIT_DESCRIPTION, value});
    };

    return (
        <Root>
            <Editor
                wrapper={Markdown}
                onSubmit={handleChange}
            >
                {children}
            </Editor>
        </Root>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 23.09.2019
 * Time: 22:34
 */
export default Description;