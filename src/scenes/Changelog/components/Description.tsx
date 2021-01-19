import React from 'react';
import Markdown from '~/components/Markdown';
import Editor from '~/components/Editor';
import {Action} from '../reducers/changelog';
import useChangelog from '../hooks/useChangelog';
import Root from './Description.style';

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