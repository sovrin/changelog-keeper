import React from 'react';
import Prompt from '../Prompt';
import Hint from '~/components/atoms/Hint';
import Snippet from '~/components/atoms/Snippet';
import ReleaseTypes from '~/components/molecules/ReleaseTypes';
import SemVer from '~/components/molecules/SemVer';
import useSemVer from '~/hooks/useSemVer';
import useI18n from '~/hooks/useI18n';
import Root from '~/styles/organisms/modals/release/Create.style';

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

            <Root>
                <Hint>
                    <Snippet cursor={`description.release.${type}`}/>
                </Hint>

                <ReleaseTypes
                    current={type}
                    onClick={bump}
                />
            </Root>
        </Prompt>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 29.06.2020
 * Time: 17:13
 */
export default Create;