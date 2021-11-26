import React from 'react';
import {Prompt, Snippet} from 'components';
import {useI18n} from 'hooks';
import Hint from '../Hint';
import ReleaseTypes from '../ReleaseTypes';
import SemVer from '../../SemVer';
import {useSemVer} from '../../../hooks';
import style from './module.less';

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
const Create = (props) => {
    const {version, onCreate} = props;
    const {bump, type, view} = useSemVer(version);

    const {title, label} = useI18n({
        title: 'modal.release.title',
        label: 'label.common.create',
    });

    /**
     *
     * @returns {*}
     */
    const onSubmit = () => {
        return onCreate(view.next);
    }

    return (
        <Prompt
            {...props}
            title={title}
            label={label}
            onConfirm={onSubmit}
        >
            <SemVer
                current={view.current}
                next={view.next}
                type={type}
            />

            <div className={style.create}>
                <Hint>
                    <Snippet cursor={`description.release.${type}`}/>
                </Hint>

                <ReleaseTypes
                    current={type}
                    onClick={bump}
                />
            </div>
        </Prompt>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 29.06.2020
 * Time: 17:13
 */
export default Create;
