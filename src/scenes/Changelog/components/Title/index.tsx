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
const Title = ({children}) => {
    const {dispatch, Action} = useChangelog();

    /**
     *
     * @param value
     */
    const handleChange = (value) => {
        dispatch({action: Action.EDIT_TITLE, value});
    };

    return (
        <div className={style.title}>
            <div className={style.text}>
                <Editor
                    wrapper={Markdown}
                    onSubmit={handleChange}
                >
                    {children}
                </Editor>
            </div>
        </div>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 23.09.2019
 * Time: 22:40
 */
export default Title;
