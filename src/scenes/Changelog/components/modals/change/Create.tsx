import React, {useState} from 'react';
import {Prompt, Snippet, Editor} from '#/components';
import {useI18n} from '#/hooks';
import Hint from '#/scenes/Changelog/components/modals/Hint';
import ChangeTypes from '#/scenes/Changelog/components/modals/ChangeTypes';

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
const Create = (props) => {
    const {onCreate} = props;
    const [current, setCurrent] = useState('fixed');

    const {title, label} = useI18n({
        title: 'modal.change.title',
        label: 'label.common.create',
    });

    /**
     *
     * @returns {*}
     */
    const onSubmit = () => {
        return onCreate(current);
    }

    return (
        <Prompt
            {...props}
            title={title}
            label={label}
            onConfirm={onSubmit}
        >
            <Editor permanent>
                description
            </Editor>

            <Hint>
                <Snippet cursor={`description.change.${current}`}/>
            </Hint>

            <ChangeTypes
                current={current}
                onClick={setCurrent}
            />
        </Prompt>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 28.01.2020
 * Time: 23:29
 */
export default Create;
