import React from 'react';
import {Markdown, Editor} from '#/components';
import {useChangelog} from '../../hooks';
import style from './module.less';

/**
 *
 * @param children
 * @returns {*}
 * @constructor
 */
const Description = ({children}) => {
    const {dispatch, Action} = useChangelog();

    /**
     *
     */
    const handleChange = (value) => {
        dispatch({action: Action.EDIT_DESCRIPTION, value});
    };

    return (
        <div className={style.description}>
            <Editor
                wrapper={Markdown}
                onSubmit={handleChange}
            >
                {children}
            </Editor>
        </div>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 23.09.2019
 * Time: 22:34
 */
export default Description;
